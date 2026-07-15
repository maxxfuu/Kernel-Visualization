import type {
  AssignExpr,
  BinaryExpr,
  BlockStmt,
  Expr,
  ForStmt,
  FunctionDecl,
  Identifier,
  IndexExpr,
  LogicalExpr,
  Program,
  Stmt,
  UnaryExpr,
  UpdateExpr,
  VarDeclStmt,
  WhileStmt,
} from "./ast";
import { BufferValue, Dim3Value, Scope, ScalarValue, makeBuffer, makeDim3, makeLocalArray } from "./environment";
import { FatalRuntimeError, RuntimeError } from "./errors";
import type { ConfigError } from "./errors";
import type { LoopFrame, NumValue, RunConfig, RunResult, StepEvent, StepEventKind } from "./types";

const DEFAULT_MAX_STEPS = 1_000_000;
const WALL_CLOCK_BUDGET_MS = 2000;
const WALL_CLOCK_CHECK_INTERVAL = 10_000;
const MAX_RECORDED_ERRORS = 50;
const DEFAULT_GRID_DIM_X = 1;
const DEFAULT_BLOCK_DIM_X = 8;

class BreakSignal {}
class ContinueSignal {}
class ReturnSignal {
  constructor(public readonly value: NumValue | null) {}
}

/** Yielded by statement execution exactly at a `__syncthreads()` call -the block scheduler
 * resumes every thread's generator only once all (still-running) threads in the block have
 * yielded this same sentinel, giving genuine barrier semantics. */
const BARRIER = Symbol("barrier");
type Exec = Generator<typeof BARRIER, void, void>;

export function validateConfig(program: Program, config: RunConfig): ConfigError[] {
  const errors: ConfigError[] = [];
  const fn = program.functions.find((f) => f.name === config.functionName);
  if (!fn) {
    errors.push({ tier: "config", message: `Function '${config.functionName}' not found in source` });
    return errors;
  }
  for (const param of fn.params) {
    if (param.paramType === "int*" || param.paramType === "float*") {
      const bufCfg = config.buffers.find((b) => b.name === param.name);
      if (!bufCfg) {
        errors.push({ tier: "config", message: `Missing buffer configuration for '${param.name}'`, paramName: param.name });
      } else if (bufCfg.type !== param.paramType) {
        errors.push({
          tier: "config",
          message: `Buffer '${param.name}' expected type ${param.paramType}, got ${bufCfg.type}`,
          paramName: param.name,
        });
      } else if (bufCfg.values.length !== bufCfg.length) {
        errors.push({
          tier: "config",
          message: `Buffer '${param.name}' declares length ${bufCfg.length} but supplied ${bufCfg.values.length} values`,
          paramName: param.name,
        });
      }
    } else {
      const scalarCfg = config.scalars.find((s) => s.name === param.name);
      if (!scalarCfg) {
        errors.push({ tier: "config", message: `Missing scalar configuration for '${param.name}'`, paramName: param.name });
      } else if (scalarCfg.type !== param.paramType) {
        errors.push({
          tier: "config",
          message: `Scalar '${param.name}' expected type ${param.paramType}, got ${scalarCfg.type}`,
          paramName: param.name,
        });
      }
    }
  }
  if (fn.qualifier === "global") {
    const launch = config.launch;
    if (!launch || launch.gridDimX < 1 || launch.blockDimX < 1) {
      errors.push({ tier: "config", message: "gridDim.x and blockDim.x must both be at least 1 to launch a kernel" });
    }
  }
  return errors;
}

/** Recursively finds every `__shared__` array declaration reachable in a kernel's body -these
 * need to be allocated once per block (not once per thread) before any thread starts running. */
export function findSharedArrayDecls(fn: FunctionDecl): VarDeclStmt[] {
  const out: VarDeclStmt[] = [];
  walk(fn.body);
  return out;

  function walk(stmt: Stmt) {
    switch (stmt.type) {
      case "BlockStmt":
        for (const s of stmt.body) walk(s);
        return;
      case "VarDeclStmt":
        if (stmt.shared) out.push(stmt);
        return;
      case "IfStmt":
        walk(stmt.consequent);
        if (stmt.alternate) walk(stmt.alternate);
        return;
      case "ForStmt":
        walk(stmt.body);
        return;
      case "WhileStmt":
        walk(stmt.body);
        return;
      default:
        return;
    }
  }
}

export function run(program: Program, config: RunConfig): RunResult {
  const fn = program.functions.find((f) => f.name === config.functionName);
  const errors: RuntimeError[] = [];
  if (!fn) {
    return { steps: [], finalMemory: {}, finalScalars: {}, errors, truncated: false };
  }

  const maxSteps = config.maxSteps ?? DEFAULT_MAX_STEPS;
  const buffers = new Map<string, BufferValue>();
  for (const bufCfg of config.buffers) {
    buffers.set(bufCfg.name, makeBuffer(bufCfg.name, bufCfg.type, bufCfg.values));
  }

  const ctx = new ExecContext(errors, maxSteps);

  // Global scope: device memory (buffer params) + plain scalar params -visible to every
  // thread in every block.
  const globalScope = new Scope(null);
  for (const param of fn.params) {
    if (param.paramType === "int*" || param.paramType === "float*") {
      const buf = buffers.get(param.name);
      if (buf) globalScope.declare(param.name, buf);
    } else {
      const scalarCfg = config.scalars.find((s) => s.name === param.name);
      globalScope.declare(param.name, { kind: "scalar", type: param.paramType, value: scalarCfg?.value ?? 0 });
    }
  }

  let truncated = false;
  let finalScalars: Record<string, number> = globalScope.snapshotScalars();

  try {
    if (fn.qualifier === "global") {
      const gridDimX = Math.max(1, config.launch?.gridDimX ?? DEFAULT_GRID_DIM_X);
      const blockDimX = Math.max(1, config.launch?.blockDimX ?? DEFAULT_BLOCK_DIM_X);
      const sharedDecls = findSharedArrayDecls(fn);
      for (const bufCfg of config.buffers) {
        // Also expose shared/local arrays' initial (zeroed) contents so the UI can visualize them
        // the same way as device-memory buffers -see makeLocalArray callers below.
        void bufCfg;
      }
      for (let blockId = 0; blockId < gridDimX; blockId++) {
        runBlock(fn, globalScope, sharedDecls, blockId, blockDimX, gridDimX, ctx);
      }
    } else {
      const state = new ThreadState(0, 0);
      const gen = runFunctionBody(fn, globalScope, state, ctx);
      // Plain (non-kernel) functions have exactly one implicit "thread" -just drain it. A
      // stray `__syncthreads()` outside a kernel has nothing to synchronize with, so a lone
      // thread just sails through every barrier it yields.
      for (;;) {
        const result = gen.next();
        if (result.done) break;
      }
      finalScalars = globalScope.snapshotScalars();
    }
  } catch (e) {
    if (e instanceof FatalRuntimeError) {
      errors.push(e.err);
      truncated = e.err.kind === "max-steps-exceeded";
    } else {
      throw e;
    }
  }

  const finalMemory: Record<string, number[]> = {};
  for (const [name, buf] of buffers) finalMemory[name] = Array.from(buf.data);
  for (const [name, buf] of ctx.sharedBuffersSeen) {
    if (!(name in finalMemory)) finalMemory[name] = Array.from(buf.data);
  }

  return { steps: ctx.steps, finalMemory, finalScalars, errors, truncated };
}

/** Runs every thread in one block, interleaving them round-robin and releasing `__syncthreads()`
 * barriers only once every still-running thread in the block has reached one. */
function runBlock(
  fn: FunctionDecl,
  globalScope: Scope,
  sharedDecls: VarDeclStmt[],
  blockId: number,
  blockDimX: number,
  gridDimX: number,
  ctx: ExecContext,
) {
  const blockScope = new Scope(globalScope);
  for (const decl of sharedDecls) {
    const arr = makeLocalArray(decl.name, decl.varType, decl.arraySize ?? 0);
    blockScope.declare(decl.name, arr);
    ctx.sharedBuffersSeen.set(decl.name, arr);
  }

  const threads = Array.from({ length: blockDimX }, (_, threadId) => {
    const threadScope = new Scope(blockScope);
    threadScope.declare("threadIdx", makeDim3(threadId));
    threadScope.declare("blockIdx", makeDim3(blockId));
    threadScope.declare("blockDim", makeDim3(blockDimX));
    threadScope.declare("gridDim", makeDim3(gridDimX));
    const state = new ThreadState(threadId, blockId);
    return { gen: runFunctionBody(fn, threadScope, state, ctx), state, done: false, atBarrier: false };
  });

  let progressed = true;
  while (progressed && threads.some((t) => !t.done)) {
    progressed = false;
    for (const t of threads) {
      if (t.done || t.atBarrier) continue;
      ctx.activeThreadId = t.state.threadId;
      ctx.activeBlockId = t.state.blockId;
      const result = t.gen.next();
      progressed = true;
      if (result.done) {
        t.done = true;
      } else {
        t.atBarrier = true;
        ctx.emit(fn.id, fn.loc.startLine, fn.loc.startCol, blockScope, t.state, "barrier");
      }
    }
    if (threads.every((t) => t.done || t.atBarrier)) {
      for (const t of threads) t.atBarrier = false;
    }
  }
}

function* runFunctionBody(fn: FunctionDecl, scope: Scope, state: ThreadState, ctx: ExecContext): Exec {
  ctx.emit(fn.id, fn.loc.startLine, fn.loc.startCol, scope, state, "enter-function");
  try {
    yield* executeBlock(fn.body, scope, state, ctx);
  } catch (e) {
    if (!(e instanceof ReturnSignal)) throw e;
  }
  ctx.emit(fn.id, fn.loc.endLine, fn.loc.endCol, scope, state, "exit-function");
}

/** Per-thread execution-local bookkeeping (loop nesting), separate from the shared trace-recording
 * ExecContext since many threads interleave through the same ExecContext. */
class ThreadState {
  depth = 0;
  loopStack: LoopFrame[] = [];
  constructor(
    public readonly threadId: number,
    public readonly blockId: number,
  ) {}
}

class ExecContext {
  readonly steps: StepEvent[] = [];
  private seq = 0;
  private stepsSinceClockCheck = 0;
  private readonly startTime = Date.now();
  /** Which thread is currently executing -set by the scheduler before every generator .next(). */
  activeThreadId = 0;
  activeBlockId = 0;
  /** Every shared/local array ever allocated, so `run()` can expose their contents even though
   * they aren't declared as ordinary buffer params. */
  readonly sharedBuffersSeen = new Map<string, BufferValue>();

  constructor(
    private readonly errors: RuntimeError[],
    private readonly maxSteps: number,
  ) {}

  private checkGuards(nodeId: number, line: number, col: number) {
    if (this.seq >= this.maxSteps) {
      throw new FatalRuntimeError({
        tier: "runtime",
        kind: "max-steps-exceeded",
        message: `Execution stopped after ${this.maxSteps.toLocaleString()} steps -this may be an infinite loop. Check your loop bounds.`,
        nodeId,
        line,
        col,
        seq: this.seq,
        fatal: true,
      });
    }
    this.stepsSinceClockCheck++;
    if (this.stepsSinceClockCheck >= WALL_CLOCK_CHECK_INTERVAL) {
      this.stepsSinceClockCheck = 0;
      if (Date.now() - this.startTime > WALL_CLOCK_BUDGET_MS) {
        throw new FatalRuntimeError({
          tier: "runtime",
          kind: "max-steps-exceeded",
          message: "Execution stopped -exceeded time budget. Check your loop bounds.",
          nodeId,
          line,
          col,
          seq: this.seq,
          fatal: true,
        });
      }
    }
  }

  emit(
    nodeId: number,
    line: number,
    col: number,
    scope: Scope,
    state: ThreadState,
    kind: Exclude<StepEventKind, "var-decl" | "var-write" | "mem-read" | "mem-write" | "loop-test">,
  ): StepEvent {
    this.checkGuards(nodeId, line, col);
    const event: StepEvent = {
      seq: this.seq++,
      kind,
      nodeId,
      line,
      col,
      depth: state.depth,
      loopStack: state.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: state.threadId,
      blockId: state.blockId,
    };
    this.steps.push(event);
    return event;
  }

  emitVarDecl(nodeId: number, line: number, col: number, scope: Scope, state: ThreadState, name: string, value: number) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "var-decl",
      nodeId,
      line,
      col,
      depth: state.depth,
      loopStack: state.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: state.threadId,
      blockId: state.blockId,
      name,
      value,
    });
  }

  emitVarWrite(
    nodeId: number,
    line: number,
    col: number,
    scope: Scope,
    state: ThreadState,
    name: string,
    oldValue: number,
    newValue: number,
  ) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "var-write",
      nodeId,
      line,
      col,
      depth: state.depth,
      loopStack: state.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: state.threadId,
      blockId: state.blockId,
      name,
      oldValue,
      newValue,
    });
  }

  emitMemRead(
    nodeId: number,
    line: number,
    col: number,
    scope: Scope,
    state: ThreadState,
    buffer: string,
    index: number,
    value: number,
    inBounds: boolean,
  ) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "mem-read",
      nodeId,
      line,
      col,
      depth: state.depth,
      loopStack: state.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: state.threadId,
      blockId: state.blockId,
      buffer,
      index,
      value,
      inBounds,
    });
  }

  emitMemWrite(
    nodeId: number,
    line: number,
    col: number,
    scope: Scope,
    state: ThreadState,
    buffer: string,
    index: number,
    oldValue: number | null,
    newValue: number,
    inBounds: boolean,
  ) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "mem-write",
      nodeId,
      line,
      col,
      depth: state.depth,
      loopStack: state.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: state.threadId,
      blockId: state.blockId,
      buffer,
      index,
      oldValue,
      newValue,
      inBounds,
    });
  }

  emitLoopTest(nodeId: number, line: number, col: number, scope: Scope, state: ThreadState, result: boolean) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "loop-test",
      nodeId,
      line,
      col,
      depth: state.depth,
      loopStack: state.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: state.threadId,
      blockId: state.blockId,
      result,
    });
  }

  recordOutOfBounds(nodeId: number, line: number, col: number, message: string) {
    if (this.errors.length < MAX_RECORDED_ERRORS) {
      this.errors.push({ tier: "runtime", kind: "out-of-bounds", message, nodeId, line, col, seq: this.seq, fatal: false });
    }
  }
}

function* executeBlock(block: BlockStmt, parentScope: Scope, state: ThreadState, ctx: ExecContext): Exec {
  const scope = new Scope(parentScope);
  ctx.emit(block.id, block.loc.startLine, block.loc.startCol, scope, state, "scope-enter");
  for (const stmt of block.body) {
    yield* executeStmt(stmt, scope, state, ctx);
  }
  ctx.emit(block.id, block.loc.endLine, block.loc.endCol, scope, state, "scope-exit");
}

function* executeStmtOrBlock(stmt: Stmt, scope: Scope, state: ThreadState, ctx: ExecContext): Exec {
  if (stmt.type === "BlockStmt") {
    yield* executeBlock(stmt, scope, state, ctx);
  } else {
    yield* executeStmt(stmt, scope, state, ctx);
  }
}

function isSyncthreadsCall(expr: Expr): boolean {
  return expr.type === "CallExpr" && expr.callee === "__syncthreads";
}

function* executeStmt(stmt: Stmt, scope: Scope, state: ThreadState, ctx: ExecContext): Exec {
  switch (stmt.type) {
    case "BlockStmt":
      yield* executeBlock(stmt, scope, state, ctx);
      return;
    case "VarDeclStmt": {
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, state, "stmt-enter");
      if (stmt.arraySize !== null) {
        // Shared arrays are pre-allocated once per block (see findSharedArrayDecls / runBlock);
        // a thread-local array is allocated fresh for this thread right here.
        if (!stmt.shared) {
          scope.declare(stmt.name, makeLocalArray(stmt.name, stmt.varType, stmt.arraySize));
        }
        return;
      }
      const initVal = stmt.init ? evaluateExpr(stmt.init, scope, state, ctx) : { n: 0, t: stmt.varType };
      const value = coerce(initVal, stmt.varType);
      scope.declare(stmt.name, { kind: "scalar", type: stmt.varType, value });
      ctx.emitVarDecl(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, state, stmt.name, value);
      return;
    }
    case "ExprStmt":
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, state, "stmt-enter");
      if (isSyncthreadsCall(stmt.expr)) {
        yield BARRIER;
        return;
      }
      evaluateExpr(stmt.expr, scope, state, ctx);
      return;
    case "IfStmt": {
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, state, "stmt-enter");
      const testVal = evaluateExpr(stmt.test, scope, state, ctx);
      if (testVal.n !== 0) {
        yield* executeStmtOrBlock(stmt.consequent, scope, state, ctx);
      } else if (stmt.alternate) {
        yield* executeStmtOrBlock(stmt.alternate, scope, state, ctx);
      }
      return;
    }
    case "ForStmt":
      yield* executeForStmt(stmt, scope, state, ctx);
      return;
    case "WhileStmt":
      yield* executeWhileStmt(stmt, scope, state, ctx);
      return;
    case "ReturnStmt": {
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, state, "stmt-enter");
      const value = stmt.argument ? evaluateExpr(stmt.argument, scope, state, ctx) : null;
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, state, "return");
      throw new ReturnSignal(value);
    }
    case "BreakStmt":
      throw new BreakSignal();
    case "ContinueStmt":
      throw new ContinueSignal();
  }
}

function* executeForStmt(stmt: ForStmt, parentScope: Scope, state: ThreadState, ctx: ExecContext): Exec {
  const forScope = new Scope(parentScope);
  ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, state, "loop-enter");

  let varName: string | null = null;
  if (stmt.init) {
    if (stmt.init.type === "VarDeclStmt") {
      varName = stmt.init.name;
      yield* executeStmt(stmt.init, forScope, state, ctx);
    } else {
      yield* executeStmt(stmt.init, forScope, state, ctx);
    }
  }

  const frame: LoopFrame = { nodeId: stmt.id, varName, value: varName ? (forScope.lookup(varName) as ScalarValue).value : null };
  state.loopStack.push(frame);
  state.depth++;
  try {
    for (;;) {
      const testResult = stmt.test ? evaluateExpr(stmt.test, forScope, state, ctx) : { n: 1, t: "int" as const };
      ctx.emitLoopTest(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, state, testResult.n !== 0);
      if (testResult.n === 0) break;
      if (varName) frame.value = (forScope.lookup(varName) as ScalarValue).value;
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, state, "loop-iter");
      try {
        yield* executeStmtOrBlock(stmt.body, forScope, state, ctx);
      } catch (e) {
        if (!(e instanceof ContinueSignal)) throw e;
      }
      if (stmt.update) evaluateExpr(stmt.update, forScope, state, ctx);
      if (varName) frame.value = (forScope.lookup(varName) as ScalarValue).value;
    }
  } catch (e) {
    if (!(e instanceof BreakSignal)) throw e;
  } finally {
    state.depth--;
    state.loopStack.pop();
  }
  ctx.emit(stmt.id, stmt.loc.endLine, stmt.loc.endCol, forScope, state, "loop-exit");
}

function* executeWhileStmt(stmt: WhileStmt, parentScope: Scope, state: ThreadState, ctx: ExecContext): Exec {
  ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, state, "loop-enter");
  const frame: LoopFrame = { nodeId: stmt.id, varName: null, value: null };
  state.loopStack.push(frame);
  state.depth++;
  try {
    for (;;) {
      const testResult = evaluateExpr(stmt.test, parentScope, state, ctx);
      ctx.emitLoopTest(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, state, testResult.n !== 0);
      if (testResult.n === 0) break;
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, state, "loop-iter");
      try {
        yield* executeStmtOrBlock(stmt.body, parentScope, state, ctx);
      } catch (e) {
        if (!(e instanceof ContinueSignal)) throw e;
      }
    }
  } catch (e) {
    if (!(e instanceof BreakSignal)) throw e;
  } finally {
    state.depth--;
    state.loopStack.pop();
  }
  ctx.emit(stmt.id, stmt.loc.endLine, stmt.loc.endCol, parentScope, state, "loop-exit");
}

function coerce(value: NumValue, type: "int" | "float"): number {
  return type === "int" ? Math.trunc(value.n) : value.n;
}

function resolveBuffer(ident: Identifier, scope: Scope): BufferValue | null {
  const value = scope.lookup(ident.name);
  if (value && value.kind === "buffer") return value;
  return null;
}

function readIndex(node: IndexExpr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  const buf = resolveBuffer(node.object, scope);
  const indexVal = evaluateExpr(node.index, scope, state, ctx);
  const index = Math.trunc(indexVal.n);
  if (!buf) {
    // Caught by the static resolve pass in normal use; treat defensively as OOB rather than crashing.
    return { n: NaN, t: "float" };
  }
  const inBounds = index >= 0 && index < buf.data.length;
  const value = inBounds ? buf.data[index] : NaN;
  ctx.emitMemRead(node.id, node.loc.startLine, node.loc.startCol, scope, state, buf.name, index, value, inBounds);
  if (!inBounds) {
    ctx.recordOutOfBounds(
      node.id,
      node.loc.startLine,
      node.loc.startCol,
      `Out-of-bounds read: ${buf.name}[${index}] (buffer length ${buf.data.length})`,
    );
  }
  return { n: value, t: buf.elementType };
}

function writeIndex(node: IndexExpr, scope: Scope, state: ThreadState, ctx: ExecContext, newValue: NumValue): number {
  const buf = resolveBuffer(node.object, scope);
  const indexVal = evaluateExpr(node.index, scope, state, ctx);
  const index = Math.trunc(indexVal.n);
  if (!buf) return newValue.n;
  const inBounds = index >= 0 && index < buf.data.length;
  const stored = coerce(newValue, buf.elementType);
  const oldValue = inBounds ? buf.data[index] : null;
  if (inBounds) buf.data[index] = stored;
  ctx.emitMemWrite(node.id, node.loc.startLine, node.loc.startCol, scope, state, buf.name, index, oldValue, stored, inBounds);
  if (!inBounds) {
    ctx.recordOutOfBounds(
      node.id,
      node.loc.startLine,
      node.loc.startCol,
      `Out-of-bounds write: ${buf.name}[${index}] (buffer length ${buf.data.length})`,
    );
  }
  return inBounds ? buf.data[index] : stored;
}

function evaluateExpr(expr: Expr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  switch (expr.type) {
    case "Literal":
      return { n: expr.value, t: expr.litType };
    case "Identifier": {
      const value = scope.lookup(expr.name);
      if (!value || value.kind !== "scalar") return { n: NaN, t: "float" };
      return { n: value.value, t: value.type };
    }
    case "MemberExpr": {
      const value = scope.lookup(expr.object.name);
      if (!value || value.kind !== "dim3") return { n: NaN, t: "int" };
      return { n: (value as Dim3Value)[expr.property], t: "int" };
    }
    case "CallExpr":
      // The only real call, __syncthreads(), is handled at the statement level (it yields a
      // barrier there); reaching here means it's being (invalidly) used as a value -harmless no-op.
      return { n: 0, t: "int" };
    case "IndexExpr":
      return readIndex(expr, scope, state, ctx);
    case "UnaryExpr":
      return evaluateUnary(expr, scope, state, ctx);
    case "BinaryExpr":
      return evaluateBinary(expr, scope, state, ctx);
    case "LogicalExpr":
      return evaluateLogical(expr, scope, state, ctx);
    case "UpdateExpr":
      return evaluateUpdate(expr, scope, state, ctx);
    case "AssignExpr":
      return evaluateAssign(expr, scope, state, ctx);
  }
}

function evaluateUnary(expr: UnaryExpr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  const arg = evaluateExpr(expr.argument, scope, state, ctx);
  switch (expr.op) {
    case "-":
      return { n: -arg.n, t: arg.t };
    case "!":
      return { n: arg.n === 0 ? 1 : 0, t: "int" };
    case "~":
      return { n: ~Math.trunc(arg.n), t: "int" };
  }
}

function divide(a: NumValue, b: NumValue, node: { id: number; loc: { startLine: number; startCol: number } }): number {
  const resultIsInt = a.t === "int" && b.t === "int";
  if (resultIsInt && b.n === 0) {
    throw new FatalRuntimeError({
      tier: "runtime",
      kind: "div-by-zero",
      message: "Integer division by zero",
      nodeId: node.id,
      line: node.loc.startLine,
      col: node.loc.startCol,
      seq: -1,
      fatal: true,
    });
  }
  return resultIsInt ? Math.trunc(a.n / b.n) : a.n / b.n;
}

function modulo(a: NumValue, b: NumValue, node: { id: number; loc: { startLine: number; startCol: number } }): number {
  if (b.n === 0) {
    throw new FatalRuntimeError({
      tier: "runtime",
      kind: "div-by-zero",
      message: "Modulo by zero",
      nodeId: node.id,
      line: node.loc.startLine,
      col: node.loc.startCol,
      seq: -1,
      fatal: true,
    });
  }
  return a.n % b.n;
}

function evaluateBinary(expr: BinaryExpr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  const left = evaluateExpr(expr.left, scope, state, ctx);
  const right = evaluateExpr(expr.right, scope, state, ctx);
  const bothInt = left.t === "int" && right.t === "int";
  const numericType: "int" | "float" = bothInt ? "int" : "float";
  switch (expr.op) {
    case "+":
      return { n: left.n + right.n, t: numericType };
    case "-":
      return { n: left.n - right.n, t: numericType };
    case "*":
      return { n: left.n * right.n, t: numericType };
    case "/":
      return { n: divide(left, right, expr), t: numericType };
    case "%":
      return { n: modulo(left, right, expr), t: "int" };
    case "==":
      return { n: left.n === right.n ? 1 : 0, t: "int" };
    case "!=":
      return { n: left.n !== right.n ? 1 : 0, t: "int" };
    case "<":
      return { n: left.n < right.n ? 1 : 0, t: "int" };
    case "<=":
      return { n: left.n <= right.n ? 1 : 0, t: "int" };
    case ">":
      return { n: left.n > right.n ? 1 : 0, t: "int" };
    case ">=":
      return { n: left.n >= right.n ? 1 : 0, t: "int" };
    case "&":
      return { n: Math.trunc(left.n) & Math.trunc(right.n), t: "int" };
    case "|":
      return { n: Math.trunc(left.n) | Math.trunc(right.n), t: "int" };
    case "^":
      return { n: Math.trunc(left.n) ^ Math.trunc(right.n), t: "int" };
    case "<<":
      return { n: Math.trunc(left.n) << Math.trunc(right.n), t: "int" };
    case ">>":
      return { n: Math.trunc(left.n) >> Math.trunc(right.n), t: "int" };
  }
}

function evaluateLogical(expr: LogicalExpr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  const left = evaluateExpr(expr.left, scope, state, ctx);
  if (expr.op === "&&") {
    if (left.n === 0) return { n: 0, t: "int" };
    const right = evaluateExpr(expr.right, scope, state, ctx);
    return { n: right.n !== 0 ? 1 : 0, t: "int" };
  }
  if (left.n !== 0) return { n: 1, t: "int" };
  const right = evaluateExpr(expr.right, scope, state, ctx);
  return { n: right.n !== 0 ? 1 : 0, t: "int" };
}

function evaluateUpdate(expr: UpdateExpr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  const delta = expr.op === "++" ? 1 : -1;
  if (expr.argument.type === "Identifier") {
    const current = evaluateExpr(expr.argument, scope, state, ctx);
    const updated = current.n + delta;
    scope.setScalar(expr.argument.name, current.t === "int" ? Math.trunc(updated) : updated);
    ctx.emitVarWrite(
      expr.id,
      expr.loc.startLine,
      expr.loc.startCol,
      scope,
      state,
      expr.argument.name,
      current.n,
      current.t === "int" ? Math.trunc(updated) : updated,
    );
    return { n: expr.prefix ? updated : current.n, t: current.t };
  }
  const current = readIndex(expr.argument, scope, state, ctx);
  const updated = current.n + delta;
  writeIndex(expr.argument, scope, state, ctx, { n: updated, t: current.t });
  return { n: expr.prefix ? updated : current.n, t: current.t };
}

function applyCompound(op: string, current: NumValue, rhs: NumValue, node: { id: number; loc: { startLine: number; startCol: number } }): NumValue {
  const bothInt = current.t === "int" && rhs.t === "int";
  switch (op) {
    case "+=":
      return { n: current.n + rhs.n, t: bothInt ? "int" : "float" };
    case "-=":
      return { n: current.n - rhs.n, t: bothInt ? "int" : "float" };
    case "*=":
      return { n: current.n * rhs.n, t: bothInt ? "int" : "float" };
    case "/=":
      return { n: divide(current, rhs, node), t: bothInt ? "int" : "float" };
    case "%=":
      return { n: modulo(current, rhs, node), t: "int" };
    default:
      throw new Error(`Unhandled compound operator ${op}`);
  }
}

function evaluateAssign(expr: AssignExpr, scope: Scope, state: ThreadState, ctx: ExecContext): NumValue {
  const rhs = evaluateExpr(expr.right, scope, state, ctx);

  if (expr.left.type === "Identifier") {
    const targetName = expr.left.name;
    const existing = scope.lookup(targetName);
    const declaredType: "int" | "float" = existing && existing.kind === "scalar" ? existing.type : "float";
    let newValue: NumValue;
    if (expr.op === "=") {
      newValue = rhs;
    } else {
      const current = evaluateExpr(expr.left, scope, state, ctx);
      newValue = applyCompound(expr.op, current, rhs, expr);
    }
    const oldValue = existing && existing.kind === "scalar" ? existing.value : 0;
    const stored = coerce(newValue, declaredType);
    scope.setScalar(targetName, stored);
    ctx.emitVarWrite(expr.id, expr.loc.startLine, expr.loc.startCol, scope, state, targetName, oldValue, stored);
    return { n: stored, t: declaredType };
  }

  // IndexExpr target
  if (expr.op === "=") {
    const stored = writeIndex(expr.left, scope, state, ctx, rhs);
    return { n: stored, t: rhs.t };
  }
  const current = readIndex(expr.left, scope, state, ctx);
  const newValue = applyCompound(expr.op, current, rhs, expr);
  const stored = writeIndex(expr.left, scope, state, ctx, newValue);
  return { n: stored, t: newValue.t };
}
