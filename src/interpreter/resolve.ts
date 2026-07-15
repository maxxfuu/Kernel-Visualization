import type { BlockStmt, Expr, FunctionDecl, Program, Stmt } from "./ast";
import type { ParseError } from "./errors";

const CUDA_BUILTINS = ["threadIdx", "blockIdx", "blockDim", "gridDim"];
const KNOWN_CALLEES = ["__syncthreads"];

class ResolveScope {
  private names = new Set<string>();
  constructor(private readonly parent: ResolveScope | null) {}
  declare(name: string) {
    this.names.add(name);
  }
  has(name: string): boolean {
    return this.names.has(name) || (this.parent?.has(name) ?? false);
  }
}

/** Static pass: confirms every identifier reference resolves to a declared param/local/loop-var. */
export function resolveProgram(program: Program): { errors: ParseError[] } {
  const errors: ParseError[] = [];
  for (const fn of program.functions) {
    resolveFunction(fn, errors);
  }
  return { errors };
}

function resolveFunction(fn: FunctionDecl, errors: ParseError[]) {
  const fnScope = new ResolveScope(null);
  for (const param of fn.params) fnScope.declare(param.name);
  if (fn.qualifier === "global" || fn.qualifier === "device") {
    for (const name of CUDA_BUILTINS) fnScope.declare(name);
  }
  resolveBlock(fn.body, fnScope, errors);
}

function resolveBlock(block: BlockStmt, parent: ResolveScope, errors: ParseError[]) {
  const scope = new ResolveScope(parent);
  for (const stmt of block.body) resolveStmt(stmt, scope, errors);
}

function resolveStmtOrBlock(stmt: Stmt, parent: ResolveScope, errors: ParseError[]) {
  if (stmt.type === "BlockStmt") {
    resolveBlock(stmt, parent, errors);
  } else {
    resolveStmt(stmt, parent, errors);
  }
}

function resolveStmt(stmt: Stmt, scope: ResolveScope, errors: ParseError[]) {
  switch (stmt.type) {
    case "BlockStmt":
      resolveBlock(stmt, scope, errors);
      return;
    case "VarDeclStmt":
      if (stmt.init) resolveExpr(stmt.init, scope, errors);
      scope.declare(stmt.name);
      return;
    case "ExprStmt":
      resolveExpr(stmt.expr, scope, errors);
      return;
    case "IfStmt":
      resolveExpr(stmt.test, scope, errors);
      resolveStmtOrBlock(stmt.consequent, scope, errors);
      if (stmt.alternate) resolveStmtOrBlock(stmt.alternate, scope, errors);
      return;
    case "ForStmt": {
      const forScope = new ResolveScope(scope);
      if (stmt.init) resolveStmt(stmt.init, forScope, errors);
      if (stmt.test) resolveExpr(stmt.test, forScope, errors);
      if (stmt.update) resolveExpr(stmt.update, forScope, errors);
      resolveStmtOrBlock(stmt.body, forScope, errors);
      return;
    }
    case "WhileStmt":
      resolveExpr(stmt.test, scope, errors);
      resolveStmtOrBlock(stmt.body, scope, errors);
      return;
    case "ReturnStmt":
      if (stmt.argument) resolveExpr(stmt.argument, scope, errors);
      return;
    case "BreakStmt":
    case "ContinueStmt":
      return;
  }
}

function resolveExpr(expr: Expr, scope: ResolveScope, errors: ParseError[]) {
  switch (expr.type) {
    case "Identifier":
      if (!scope.has(expr.name)) {
        errors.push({
          tier: "parse",
          message: `'${expr.name}' is not declared`,
          line: expr.loc.startLine,
          col: expr.loc.startCol,
        });
      }
      return;
    case "Literal":
      return;
    case "BinaryExpr":
    case "LogicalExpr":
      resolveExpr(expr.left, scope, errors);
      resolveExpr(expr.right, scope, errors);
      return;
    case "UnaryExpr":
      resolveExpr(expr.argument, scope, errors);
      return;
    case "UpdateExpr":
      resolveExpr(expr.argument, scope, errors);
      return;
    case "AssignExpr":
      resolveExpr(expr.left, scope, errors);
      resolveExpr(expr.right, scope, errors);
      return;
    case "IndexExpr":
      resolveExpr(expr.object, scope, errors);
      resolveExpr(expr.index, scope, errors);
      return;
    case "MemberExpr":
      resolveExpr(expr.object, scope, errors);
      if (!CUDA_BUILTINS.includes(expr.object.name)) {
        errors.push({
          tier: "parse",
          message: `'${expr.object.name}.${expr.property}' isn't supported -member access only works on threadIdx/blockIdx/blockDim/gridDim`,
          line: expr.loc.startLine,
          col: expr.loc.startCol,
        });
      }
      return;
    case "CallExpr":
      if (!KNOWN_CALLEES.includes(expr.callee)) {
        errors.push({
          tier: "parse",
          message: `Unknown function '${expr.callee}' -only __syncthreads() is supported, and calling user-defined functions isn't`,
          line: expr.loc.startLine,
          col: expr.loc.startCol,
        });
      }
      for (const arg of expr.args) resolveExpr(arg, scope, errors);
      return;
  }
}
