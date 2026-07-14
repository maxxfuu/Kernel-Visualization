import type { ParamType, ScalarType } from "./types";

export interface SourceRange {
  startLine: number;
  startCol: number;
  endLine: number;
  endCol: number;
}

export interface NodeBase {
  id: number;
  loc: SourceRange;
}

export interface Program extends NodeBase {
  type: "Program";
  functions: FunctionDecl[];
}

export interface ParamDecl extends NodeBase {
  type: "ParamDecl";
  name: string;
  paramType: ParamType;
}

export interface FunctionDecl extends NodeBase {
  type: "FunctionDecl";
  name: string;
  returnType: "void" | ScalarType;
  params: ParamDecl[];
  body: BlockStmt;
}

export interface BlockStmt extends NodeBase {
  type: "BlockStmt";
  body: Stmt[];
}

export interface VarDeclStmt extends NodeBase {
  type: "VarDeclStmt";
  varType: ScalarType;
  name: string;
  init: Expr | null;
}

export interface ExprStmt extends NodeBase {
  type: "ExprStmt";
  expr: Expr;
}

export interface IfStmt extends NodeBase {
  type: "IfStmt";
  test: Expr;
  consequent: Stmt;
  alternate: Stmt | null;
}

export interface ForStmt extends NodeBase {
  type: "ForStmt";
  init: VarDeclStmt | ExprStmt | null;
  test: Expr | null;
  update: Expr | null;
  body: Stmt;
}

export interface WhileStmt extends NodeBase {
  type: "WhileStmt";
  test: Expr;
  body: Stmt;
}

export interface ReturnStmt extends NodeBase {
  type: "ReturnStmt";
  argument: Expr | null;
}

export interface BreakStmt extends NodeBase {
  type: "BreakStmt";
}

export interface ContinueStmt extends NodeBase {
  type: "ContinueStmt";
}

export type Stmt =
  | BlockStmt
  | VarDeclStmt
  | ExprStmt
  | IfStmt
  | ForStmt
  | WhileStmt
  | ReturnStmt
  | BreakStmt
  | ContinueStmt;

export type BinaryOp = "+" | "-" | "*" | "/" | "%" | "==" | "!=" | "<" | "<=" | ">" | ">=" | "&" | "|" | "^" | "<<" | ">>";
export type LogicalOp = "&&" | "||";
export type AssignOp = "=" | "+=" | "-=" | "*=" | "/=" | "%=";
export type UnaryOp = "-" | "!" | "~";
export type UpdateOp = "++" | "--";

export interface BinaryExpr extends NodeBase {
  type: "BinaryExpr";
  op: BinaryOp;
  left: Expr;
  right: Expr;
}

export interface LogicalExpr extends NodeBase {
  type: "LogicalExpr";
  op: LogicalOp;
  left: Expr;
  right: Expr;
}

export interface UnaryExpr extends NodeBase {
  type: "UnaryExpr";
  op: UnaryOp;
  argument: Expr;
}

export interface UpdateExpr extends NodeBase {
  type: "UpdateExpr";
  op: UpdateOp;
  argument: Identifier | IndexExpr;
  prefix: boolean;
}

export interface AssignExpr extends NodeBase {
  type: "AssignExpr";
  op: AssignOp;
  left: Identifier | IndexExpr;
  right: Expr;
}

export interface IndexExpr extends NodeBase {
  type: "IndexExpr";
  object: Identifier;
  index: Expr;
}

export interface Identifier extends NodeBase {
  type: "Identifier";
  name: string;
}

export interface Literal extends NodeBase {
  type: "Literal";
  value: number;
  litType: ScalarType;
}

export type Expr =
  | BinaryExpr
  | LogicalExpr
  | UnaryExpr
  | UpdateExpr
  | AssignExpr
  | IndexExpr
  | Identifier
  | Literal;

export type AstNode = Program | FunctionDecl | ParamDecl | Stmt | Expr;

export function createNodeIdGenerator(): () => number {
  let next = 0;
  return () => next++;
}
