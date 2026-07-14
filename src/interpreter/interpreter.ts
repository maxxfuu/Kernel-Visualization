import type {
  AssignExpr,
  BinaryExpr,
  Expr,
  ForStmt,
  Identifier,
  IndexExpr,
  LogicalExpr,
  Program,
  Stmt,
  UnaryExpr,
  UpdateExpr,
  WhileStmt,
} from "./ast";
import { BufferValue, Scope, ScalarValue, makeBuffer } from "./environment";
import { FatalRuntimeError, RuntimeError } from "./errors";
import type { ConfigError } from "./errors";
import type { LoopFrame, NumValue, RunConfig, RunResult, StepEvent, StepEventKind } from "./types";

const DEFAULT_MAX_STEPS = 1_000_000;
const WALL_CLOCK_BUDGET_MS = 2000;
const WALL_CLOCK_CHECK_INTERVAL = 10_000;
const MAX_RECORDED_ERRORS = 50;

class BreakSignal {}
class ContinueSignal {}
class ReturnSignal {
  constructor(public readonly value: NumValue | null) {}
}

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
  return errors;
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

  const fnScope = new Scope(null);
  for (const param of fn.params) {
    if (param.paramType === "int*" || param.paramType === "float*") {
      const buf = buffers.get(param.name);
      if (buf) fnScope.declare(param.name, buf);
    } else {
      const scalarCfg = config.scalars.find((s) => s.name === param.name);
      fnScope.declare(param.name, { kind: "scalar", type: param.paramType, value: scalarCfg?.value ?? 0 });
    }
  }

  let truncated = false;
  try {
    ctx.emit(fn.id, fn.loc.startLine, fn.loc.startCol, fnScope, "enter-function");
    try {
      executeBlock(fn.body, fnScope, ctx);
    } catch (e) {
      if (!(e instanceof ReturnSignal)) throw e;
    }
    ctx.emit(fn.id, fn.loc.endLine, fn.loc.endCol, fnScope, "exit-function");
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

  return { steps: ctx.steps, finalMemory, finalScalars: fnScope.snapshotScalars(), errors, truncated };
}

class ExecContext {
  readonly steps: StepEvent[] = [];
  private seq = 0;
  private stepsSinceClockCheck = 0;
  private readonly startTime = Date.now();
  readonly loopStack: LoopFrame[] = [];
  depth = 0;

  constructor(private readonly errors: RuntimeError[], private readonly maxSteps: number) {}

  private checkGuards(nodeId: number, line: number, col: number) {
    if (this.seq >= this.maxSteps) {
      throw new FatalRuntimeError({
        tier: "runtime",
        kind: "max-steps-exceeded",
        message: `Execution stopped after ${this.maxSteps.toLocaleString()} steps — this may be an infinite loop. Check your loop bounds.`,
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
          message: "Execution stopped — exceeded time budget. Check your loop bounds.",
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
    kind: Exclude<StepEventKind, "var-decl" | "var-write" | "mem-read" | "mem-write" | "loop-test">,
  ): StepEvent {
    this.checkGuards(nodeId, line, col);
    const event: StepEvent = {
      seq: this.seq++,
      kind,
      nodeId,
      line,
      col,
      depth: this.depth,
      loopStack: this.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: 0,
      blockId: 0,
    };
    this.steps.push(event);
    return event;
  }

  emitVarDecl(nodeId: number, line: number, col: number, scope: Scope, name: string, value: number) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "var-decl",
      nodeId,
      line,
      col,
      depth: this.depth,
      loopStack: this.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: 0,
      blockId: 0,
      name,
      value,
    });
  }

  emitVarWrite(nodeId: number, line: number, col: number, scope: Scope, name: string, oldValue: number, newValue: number) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "var-write",
      nodeId,
      line,
      col,
      depth: this.depth,
      loopStack: this.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: 0,
      blockId: 0,
      name,
      oldValue,
      newValue,
    });
  }

  emitMemRead(nodeId: number, line: number, col: number, scope: Scope, buffer: string, index: number, value: number, inBounds: boolean) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "mem-read",
      nodeId,
      line,
      col,
      depth: this.depth,
      loopStack: this.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: 0,
      blockId: 0,
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
      depth: this.depth,
      loopStack: this.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: 0,
      blockId: 0,
      buffer,
      index,
      oldValue,
      newValue,
      inBounds,
    });
  }

  emitLoopTest(nodeId: number, line: number, col: number, scope: Scope, result: boolean) {
    this.checkGuards(nodeId, line, col);
    this.steps.push({
      seq: this.seq++,
      kind: "loop-test",
      nodeId,
      line,
      col,
      depth: this.depth,
      loopStack: this.loopStack.map((f) => ({ ...f })),
      scopeSnapshot: scope.snapshotScalars(),
      threadId: 0,
      blockId: 0,
      result,
    });
  }

  recordOutOfBounds(nodeId: number, line: number, col: number, message: string) {
    if (this.errors.length < MAX_RECORDED_ERRORS) {
      this.errors.push({ tier: "runtime", kind: "out-of-bounds", message, nodeId, line, col, seq: this.seq, fatal: false });
    }
  }
}

function executeBlock(block: import("./ast").BlockStmt, parentScope: Scope, ctx: ExecContext) {
  const scope = new Scope(parentScope);
  ctx.emit(block.id, block.loc.startLine, block.loc.startCol, scope, "scope-enter");
  for (const stmt of block.body) {
    executeStmt(stmt, scope, ctx);
  }
  ctx.emit(block.id, block.loc.endLine, block.loc.endCol, scope, "scope-exit");
}

function executeStmtOrBlock(stmt: Stmt, scope: Scope, ctx: ExecContext) {
  if (stmt.type === "BlockStmt") {
    executeBlock(stmt, scope, ctx);
  } else {
    executeStmt(stmt, scope, ctx);
  }
}

function executeStmt(stmt: Stmt, scope: Scope, ctx: ExecContext) {
  switch (stmt.type) {
    case "BlockStmt":
      executeBlock(stmt, scope, ctx);
      return;
    case "VarDeclStmt": {
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
      const initVal = stmt.init ? evaluateExpr(stmt.init, scope, ctx) : { n: 0, t: stmt.varType };
      const value = coerce(initVal, stmt.varType);
      scope.declare(stmt.name, { kind: "scalar", type: stmt.varType, value });
      ctx.emitVarDecl(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, stmt.name, value);
      return;
    }
    case "ExprStmt":
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
      evaluateExpr(stmt.expr, scope, ctx);
      return;
    case "IfStmt": {
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
      const testVal = evaluateExpr(stmt.test, scope, ctx);
      if (testVal.n !== 0) {
        executeStmtOrBlock(stmt.consequent, scope, ctx);
      } else if (stmt.alternate) {
        executeStmtOrBlock(stmt.alternate, scope, ctx);
      }
      return;
    }
    case "ForStmt":
      executeForStmt(stmt, scope, ctx);
      return;
    case "WhileStmt":
      executeWhileStmt(stmt, scope, ctx);
      return;
    case "ReturnStmt": {
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
      const value = stmt.argument ? evaluateExpr(stmt.argument, scope, ctx) : null;
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "return");
      throw new ReturnSignal(value);
    }
    case "BreakStmt":
      throw new BreakSignal();
    case "ContinueStmt":
      throw new ContinueSignal();
  }
}

function executeForStmt(stmt: ForStmt, parentScope: Scope, ctx: ExecContext) {
  const forScope = new Scope(parentScope);
  ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, "loop-enter");

  let varName: string | null = null;
  if (stmt.init) {
    if (stmt.init.type === "VarDeclStmt") {
      varName = stmt.init.name;
      executeStmt(stmt.init, forScope, ctx);
    } else {
      executeStmt(stmt.init, forScope, ctx);
    }
  }

  const frame: LoopFrame = { nodeId: stmt.id, varName, value: varName ? (forScope.lookup(varName) as ScalarValue).value : null };
  ctx.loopStack.push(frame);
  ctx.depth++;
  try {
    for (;;) {
      const testResult = stmt.test ? evaluateExpr(stmt.test, forScope, ctx) : { n: 1, t: "int" as const };
      ctx.emitLoopTest(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, testResult.n !== 0);
      if (testResult.n === 0) break;
      if (varName) frame.value = (forScope.lookup(varName) as ScalarValue).value;
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, "loop-iter");
      try {
        executeStmtOrBlock(stmt.body, forScope, ctx);
      } catch (e) {
        if (!(e instanceof ContinueSignal)) throw e;
      }
      if (stmt.update) evaluateExpr(stmt.update, forScope, ctx);
      if (varName) frame.value = (forScope.lookup(varName) as ScalarValue).value;
    }
  } catch (e) {
    if (!(e instanceof BreakSignal)) throw e;
  } finally {
    ctx.depth--;
    ctx.loopStack.pop();
  }
  ctx.emit(stmt.id, stmt.loc.endLine, stmt.loc.endCol, forScope, "loop-exit");
}

function executeWhileStmt(stmt: WhileStmt, parentScope: Scope, ctx: ExecContext) {
  ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, "loop-enter");
  const frame: LoopFrame = { nodeId: stmt.id, varName: null, value: null };
  ctx.loopStack.push(frame);
  ctx.depth++;
  try {
    for (;;) {
      const testResult = evaluateExpr(stmt.test, parentScope, ctx);
      ctx.emitLoopTest(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, testResult.n !== 0);
      if (testResult.n === 0) break;
      ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, "loop-iter");
      try {
        executeStmtOrBlock(stmt.body, parentScope, ctx);
      } catch (e) {
        if (!(e instanceof ContinueSignal)) throw e;
      }
    }
  } catch (e) {
    if (!(e instanceof BreakSignal)) throw e;
  } finally {
    ctx.depth--;
    ctx.loopStack.pop();
  }
  ctx.emit(stmt.id, stmt.loc.endLine, stmt.loc.endCol, parentScope, "loop-exit");
}

function coerce(value: NumValue, type: "int" | "float"): number {
  return type === "int" ? Math.trunc(value.n) : value.n;
}

function resolveBuffer(ident: Identifier, scope: Scope): BufferValue | null {
  const value = scope.lookup(ident.name);
  if (value && value.kind === "buffer") return value;
  return null;
}

function readIndex(node: IndexExpr, scope: Scope, ctx: ExecContext): NumValue {
  const buf = resolveBuffer(node.object, scope);
  const indexVal = evaluateExpr(node.index, scope, ctx);
  const index = Math.trunc(indexVal.n);
  if (!buf) {
    // Caught by the static resolve pass in normal use; treat defensively as OOB rather than crashing.
    return { n: NaN, t: "float" };
  }
  const inBounds = index >= 0 && index < buf.data.length;
  const value = inBounds ? buf.data[index] : NaN;
  ctx.emitMemRead(node.id, node.loc.startLine, node.loc.startCol, scope, buf.name, index, value, inBounds);
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

function writeIndex(node: IndexExpr, scope: Scope, ctx: ExecContext, newValue: NumValue): number {
  const buf = resolveBuffer(node.object, scope);
  const indexVal = evaluateExpr(node.index, scope, ctx);
  const index = Math.trunc(indexVal.n);
  if (!buf) return newValue.n;
  const inBounds = index >= 0 && index < buf.data.length;
  const stored = coerce(newValue, buf.elementType);
  const oldValue = inBounds ? buf.data[index] : null;
  if (inBounds) buf.data[index] = stored;
  ctx.emitMemWrite(node.id, node.loc.startLine, node.loc.startCol, scope, buf.name, index, oldValue, stored, inBounds);
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

function evaluateExpr(expr: Expr, scope: Scope, ctx: ExecContext): NumValue {
  switch (expr.type) {
    case "Literal":
      return { n: expr.value, t: expr.litType };
    case "Identifier": {
      const value = scope.lookup(expr.name);
      if (!value || value.kind !== "scalar") return { n: NaN, t: "float" };
      return { n: value.value, t: value.type };
    }
    case "IndexExpr":
      return readIndex(expr, scope, ctx);
    case "UnaryExpr":
      return evaluateUnary(expr, scope, ctx);
    case "BinaryExpr":
      return evaluateBinary(expr, scope, ctx);
    case "LogicalExpr":
      return evaluateLogical(expr, scope, ctx);
    case "UpdateExpr":
      return evaluateUpdate(expr, scope, ctx);
    case "AssignExpr":
      return evaluateAssign(expr, scope, ctx);
  }
}

function evaluateUnary(expr: UnaryExpr, scope: Scope, ctx: ExecContext): NumValue {
  const arg = evaluateExpr(expr.argument, scope, ctx);
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

function evaluateBinary(expr: BinaryExpr, scope: Scope, ctx: ExecContext): NumValue {
  const left = evaluateExpr(expr.left, scope, ctx);
  const right = evaluateExpr(expr.right, scope, ctx);
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

function evaluateLogical(expr: LogicalExpr, scope: Scope, ctx: ExecContext): NumValue {
  const left = evaluateExpr(expr.left, scope, ctx);
  if (expr.op === "&&") {
    if (left.n === 0) return { n: 0, t: "int" };
    const right = evaluateExpr(expr.right, scope, ctx);
    return { n: right.n !== 0 ? 1 : 0, t: "int" };
  }
  if (left.n !== 0) return { n: 1, t: "int" };
  const right = evaluateExpr(expr.right, scope, ctx);
  return { n: right.n !== 0 ? 1 : 0, t: "int" };
}

function evaluateUpdate(expr: UpdateExpr, scope: Scope, ctx: ExecContext): NumValue {
  const delta = expr.op === "++" ? 1 : -1;
  if (expr.argument.type === "Identifier") {
    const current = evaluateExpr(expr.argument, scope, ctx);
    const updated = current.n + delta;
    scope.setScalar(expr.argument.name, current.t === "int" ? Math.trunc(updated) : updated);
    ctx.emitVarWrite(expr.id, expr.loc.startLine, expr.loc.startCol, scope, expr.argument.name, current.n, current.t === "int" ? Math.trunc(updated) : updated);
    return { n: expr.prefix ? updated : current.n, t: current.t };
  }
  const current = readIndex(expr.argument, scope, ctx);
  const updated = current.n + delta;
  writeIndex(expr.argument, scope, ctx, { n: updated, t: current.t });
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

function evaluateAssign(expr: AssignExpr, scope: Scope, ctx: ExecContext): NumValue {
  const rhs = evaluateExpr(expr.right, scope, ctx);

  if (expr.left.type === "Identifier") {
    const targetName = expr.left.name;
    const existing = scope.lookup(targetName);
    const declaredType: "int" | "float" = existing && existing.kind === "scalar" ? existing.type : "float";
    let newValue: NumValue;
    if (expr.op === "=") {
      newValue = rhs;
    } else {
      const current = evaluateExpr(expr.left, scope, ctx);
      newValue = applyCompound(expr.op, current, rhs, expr);
    }
    const oldValue = existing && existing.kind === "scalar" ? existing.value : 0;
    const stored = coerce(newValue, declaredType);
    scope.setScalar(targetName, stored);
    ctx.emitVarWrite(expr.id, expr.loc.startLine, expr.loc.startCol, scope, targetName, oldValue, stored);
    return { n: stored, t: declaredType };
  }

  // IndexExpr target
  if (expr.op === "=") {
    const stored = writeIndex(expr.left, scope, ctx, rhs);
    return { n: stored, t: rhs.t };
  }
  const current = readIndex(expr.left, scope, ctx);
  const newValue = applyCompound(expr.op, current, rhs, expr);
  const stored = writeIndex(expr.left, scope, ctx, newValue);
  return { n: stored, t: newValue.t };
}
