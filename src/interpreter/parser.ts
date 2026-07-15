import { tokenize } from "./lexer";
import { Token, TokenType } from "./tokens";
import type { ParseError } from "./errors";
import {
  AssignOp,
  BinaryOp,
  BlockStmt,
  Expr,
  ForStmt,
  FunctionDecl,
  Identifier,
  IndexExpr,
  KernelQualifier,
  Literal,
  ParamDecl,
  Program,
  SourceRange,
  Stmt,
  UnaryOp,
  VarDeclStmt,
  createNodeIdGenerator,
} from "./ast";

// Binding power table for precedence-climbing binary/logical expression parsing.
// Higher binds tighter. Assignment (handled separately, right-assoc) sits below all of these.
const BINARY_PRECEDENCE: Partial<Record<TokenType, number>> = {
  [TokenType.OrOr]: 1,
  [TokenType.AndAnd]: 2,
  [TokenType.Pipe]: 3,
  [TokenType.Caret]: 4,
  [TokenType.Amp]: 5,
  [TokenType.EqEq]: 6,
  [TokenType.NotEq]: 6,
  [TokenType.Lt]: 7,
  [TokenType.LtEq]: 7,
  [TokenType.Gt]: 7,
  [TokenType.GtEq]: 7,
  [TokenType.Shl]: 8,
  [TokenType.Shr]: 8,
  [TokenType.Plus]: 9,
  [TokenType.Minus]: 9,
  [TokenType.Star]: 10,
  [TokenType.Slash]: 10,
  [TokenType.Percent]: 10,
};

const TOKEN_TO_BINARY_OP: Partial<Record<TokenType, BinaryOp>> = {
  [TokenType.Plus]: "+",
  [TokenType.Minus]: "-",
  [TokenType.Star]: "*",
  [TokenType.Slash]: "/",
  [TokenType.Percent]: "%",
  [TokenType.EqEq]: "==",
  [TokenType.NotEq]: "!=",
  [TokenType.Lt]: "<",
  [TokenType.LtEq]: "<=",
  [TokenType.Gt]: ">",
  [TokenType.GtEq]: ">=",
  [TokenType.Amp]: "&",
  [TokenType.Pipe]: "|",
  [TokenType.Caret]: "^",
  [TokenType.Shl]: "<<",
  [TokenType.Shr]: ">>",
};

const ASSIGN_TOKEN_TO_OP: Partial<Record<TokenType, AssignOp>> = {
  [TokenType.Assign]: "=",
  [TokenType.PlusEq]: "+=",
  [TokenType.MinusEq]: "-=",
  [TokenType.StarEq]: "*=",
  [TokenType.SlashEq]: "/=",
  [TokenType.PercentEq]: "%=",
};

class ParseFailure extends Error {}

class Parser {
  private pos = 0;
  private readonly nextId = createNodeIdGenerator();
  readonly errors: ParseError[] = [];

  constructor(private readonly tokens: Token[]) {}

  private peek(offset = 0): Token {
    return this.tokens[Math.min(this.pos + offset, this.tokens.length - 1)];
  }

  private at(type: TokenType): boolean {
    return this.peek().type === type;
  }

  private advance(): Token {
    const tok = this.tokens[this.pos];
    if (this.pos < this.tokens.length - 1) this.pos++;
    return tok;
  }

  private expect(type: TokenType, what: string): Token {
    if (!this.at(type)) {
      this.fail(`Expected ${what} but found '${this.peek().value || this.peek().type}'`);
    }
    return this.advance();
  }

  private fail(message: string): never {
    const tok = this.peek();
    this.errors.push({ tier: "parse", message, line: tok.line, col: tok.col });
    throw new ParseFailure(message);
  }

  private loc(start: Token, end: Token): SourceRange {
    return { startLine: start.line, startCol: start.col, endLine: end.line, endCol: end.col };
  }

  parseProgram(): Program {
    const start = this.peek();
    const functions: FunctionDecl[] = [];
    while (!this.at(TokenType.EOF)) {
      functions.push(this.parseFunctionDecl());
    }
    const end = this.peek();
    return { type: "Program", id: this.nextId(), loc: this.loc(start, end), functions };
  }

  private parseTypeKeyword(): "void" | "int" | "float" {
    if (this.at(TokenType.Void)) {
      this.advance();
      return "void";
    }
    if (this.at(TokenType.Int)) {
      this.advance();
      return "int";
    }
    if (this.at(TokenType.Float)) {
      this.advance();
      return "float";
    }
    this.fail(`Expected a type ('void', 'int', or 'float') but found '${this.peek().value}'`);
  }

  private parseKernelQualifier(): KernelQualifier {
    if (this.at(TokenType.KernelQualifier)) {
      this.advance();
      return "global";
    }
    if (this.at(TokenType.DeviceQualifier)) {
      this.advance();
      return "device";
    }
    if (this.at(TokenType.HostQualifier)) {
      this.advance();
      return "host";
    }
    return null;
  }

  private parseFunctionDecl(): FunctionDecl {
    const start = this.peek();
    const qualifier = this.parseKernelQualifier();
    const returnType = this.parseTypeKeyword();
    const nameTok = this.expect(TokenType.Identifier, "a function name");
    this.expect(TokenType.LParen, "'(' after function name");
    const params: ParamDecl[] = [];
    if (!this.at(TokenType.RParen)) {
      params.push(this.parseParamDecl());
      while (this.at(TokenType.Comma)) {
        this.advance();
        params.push(this.parseParamDecl());
      }
    }
    this.expect(TokenType.RParen, "')' after parameter list");
    const body = this.parseBlockStmt();
    const end = this.peek();
    return {
      type: "FunctionDecl",
      id: this.nextId(),
      loc: this.loc(start, end),
      name: nameTok.value,
      returnType,
      qualifier,
      params,
      body,
    };
  }

  private parseParamDecl(): ParamDecl {
    const start = this.peek();
    const base = this.parseTypeKeyword();
    if (base === "void") this.fail("'void' is not a valid parameter type");
    let isPointer = false;
    if (this.at(TokenType.Star)) {
      this.advance();
      isPointer = true;
    }
    const nameTok = this.expect(TokenType.Identifier, "a parameter name");
    const end = this.peek();
    return {
      type: "ParamDecl",
      id: this.nextId(),
      loc: this.loc(start, end),
      name: nameTok.value,
      paramType: isPointer ? (`${base}*` as const) : (base as "int" | "float"),
    };
  }

  private parseBlockStmt(): BlockStmt {
    const start = this.expect(TokenType.LBrace, "'{'");
    const body: Stmt[] = [];
    while (!this.at(TokenType.RBrace) && !this.at(TokenType.EOF)) {
      body.push(this.parseStmt());
    }
    const end = this.expect(TokenType.RBrace, "'}'");
    return { type: "BlockStmt", id: this.nextId(), loc: this.loc(start, end), body };
  }

  private isTypeKeyword(): boolean {
    return this.at(TokenType.Int) || this.at(TokenType.Float);
  }

  private parseStmt(): Stmt {
    if (this.at(TokenType.LBrace)) return this.parseBlockStmt();
    if (this.isTypeKeyword() || this.at(TokenType.Shared)) return this.parseVarDeclStmt();
    if (this.at(TokenType.If)) return this.parseIfStmt();
    if (this.at(TokenType.For)) return this.parseForStmt();
    if (this.at(TokenType.While)) return this.parseWhileStmt();
    if (this.at(TokenType.Return)) return this.parseReturnStmt();
    if (this.at(TokenType.Break)) {
      const start = this.advance();
      const end = this.expect(TokenType.Semi, "';' after 'break'");
      return { type: "BreakStmt", id: this.nextId(), loc: this.loc(start, end) };
    }
    if (this.at(TokenType.Continue)) {
      const start = this.advance();
      const end = this.expect(TokenType.Semi, "';' after 'continue'");
      return { type: "ContinueStmt", id: this.nextId(), loc: this.loc(start, end) };
    }
    return this.parseExprStmt();
  }

  private parseVarDeclStmt(): VarDeclStmt {
    const start = this.peek();
    let shared = false;
    if (this.at(TokenType.Shared)) {
      this.advance();
      shared = true;
    }
    const varType = this.parseTypeKeyword() as "int" | "float";
    const nameTok = this.expect(TokenType.Identifier, "a variable name");

    let arraySize: number | null = null;
    if (this.at(TokenType.LBracket)) {
      this.advance();
      const sizeTok = this.expect(TokenType.IntLiteral, "an array size (integer literal)");
      arraySize = parseInt(sizeTok.value, 10);
      this.expect(TokenType.RBracket, "']' after array size");
    } else if (shared) {
      this.fail("'__shared__' declarations must be arrays, e.g. '__shared__ float tile[256];'");
    }

    let init: Expr | null = null;
    if (this.at(TokenType.Assign)) {
      if (arraySize !== null) this.fail("array declarations can't have an initializer");
      this.advance();
      init = this.parseExpr();
    }
    const end = this.expect(TokenType.Semi, "';' after variable declaration");
    return { type: "VarDeclStmt", id: this.nextId(), loc: this.loc(start, end), varType, name: nameTok.value, init, arraySize, shared };
  }

  private parseExprStmt(): import("./ast").ExprStmt {
    const start = this.peek();
    const expr = this.parseExpr();
    const end = this.expect(TokenType.Semi, "';' after expression");
    return { type: "ExprStmt", id: this.nextId(), loc: this.loc(start, end), expr };
  }

  private parseIfStmt(): Stmt {
    const start = this.expect(TokenType.If, "'if'");
    this.expect(TokenType.LParen, "'(' after 'if'");
    const test = this.parseExpr();
    this.expect(TokenType.RParen, "')' after if-condition");
    const consequent = this.parseStmt();
    let alternate: Stmt | null = null;
    if (this.at(TokenType.Else)) {
      this.advance();
      alternate = this.parseStmt();
    }
    const end = this.peek();
    return { type: "IfStmt", id: this.nextId(), loc: this.loc(start, end), test, consequent, alternate };
  }

  private parseForStmt(): ForStmt {
    const start = this.expect(TokenType.For, "'for'");
    this.expect(TokenType.LParen, "'(' after 'for'");

    let init: VarDeclStmt | import("./ast").ExprStmt | null = null;
    if (this.at(TokenType.Semi)) {
      this.advance();
    } else if (this.isTypeKeyword()) {
      init = this.parseVarDeclStmt();
    } else {
      init = this.parseExprStmt();
    }

    let test: Expr | null = null;
    if (!this.at(TokenType.Semi)) test = this.parseExpr();
    this.expect(TokenType.Semi, "';' after for-loop condition");

    let update: Expr | null = null;
    if (!this.at(TokenType.RParen)) update = this.parseExpr();
    this.expect(TokenType.RParen, "')' after for-loop clauses");

    const body = this.parseStmt();
    const end = this.peek();
    return { type: "ForStmt", id: this.nextId(), loc: this.loc(start, end), init, test, update, body };
  }

  private parseWhileStmt(): Stmt {
    const start = this.expect(TokenType.While, "'while'");
    this.expect(TokenType.LParen, "'(' after 'while'");
    const test = this.parseExpr();
    this.expect(TokenType.RParen, "')' after while-condition");
    const body = this.parseStmt();
    const end = this.peek();
    return { type: "WhileStmt", id: this.nextId(), loc: this.loc(start, end), test, body };
  }

  private parseReturnStmt(): Stmt {
    const start = this.expect(TokenType.Return, "'return'");
    let argument: Expr | null = null;
    if (!this.at(TokenType.Semi)) argument = this.parseExpr();
    const end = this.expect(TokenType.Semi, "';' after return statement");
    return { type: "ReturnStmt", id: this.nextId(), loc: this.loc(start, end), argument };
  }

  // --- Expressions ---

  parseExpr(): Expr {
    return this.parseAssignment();
  }

  private parseAssignment(): Expr {
    const start = this.peek();
    const left = this.parseBinary(1);
    const assignOp = ASSIGN_TOKEN_TO_OP[this.peek().type];
    if (assignOp) {
      if (left.type !== "Identifier" && left.type !== "IndexExpr") {
        this.fail("Left-hand side of assignment must be a variable or array element");
      }
      this.advance();
      const right = this.parseAssignment();
      const end = this.peek();
      return {
        type: "AssignExpr",
        id: this.nextId(),
        loc: this.loc(start, end),
        op: assignOp,
        left: left as Identifier | IndexExpr,
        right,
      };
    }
    return left;
  }

  private parseBinary(minPrec: number): Expr {
    let left = this.parseUnary();
    for (;;) {
      const tokType = this.peek().type;
      const prec = BINARY_PRECEDENCE[tokType];
      if (prec === undefined || prec < minPrec) break;
      const opTok = this.advance();
      const right = this.parseBinary(prec + 1);
      const end = this.peek();
      const loc = { startLine: left.loc.startLine, startCol: left.loc.startCol, endLine: end.line, endCol: end.col };
      if (tokType === TokenType.AndAnd || tokType === TokenType.OrOr) {
        left = {
          type: "LogicalExpr",
          id: this.nextId(),
          loc,
          op: tokType === TokenType.AndAnd ? "&&" : "||",
          left,
          right,
        };
      } else {
        left = {
          type: "BinaryExpr",
          id: this.nextId(),
          loc,
          op: TOKEN_TO_BINARY_OP[opTok.type]!,
          left,
          right,
        };
      }
    }
    return left;
  }

  private parseUnary(): Expr {
    const start = this.peek();
    const unaryMap: Partial<Record<TokenType, UnaryOp>> = {
      [TokenType.Minus]: "-",
      [TokenType.Not]: "!",
      [TokenType.Tilde]: "~",
    };
    const op = unaryMap[this.peek().type];
    if (op) {
      this.advance();
      const argument = this.parseUnary();
      const end = this.peek();
      return { type: "UnaryExpr", id: this.nextId(), loc: this.loc(start, end), op, argument };
    }
    if (this.at(TokenType.PlusPlus) || this.at(TokenType.MinusMinus)) {
      const opTok = this.advance();
      const argument = this.parseUnary();
      if (argument.type !== "Identifier" && argument.type !== "IndexExpr") {
        this.fail("'++'/'--' can only be applied to a variable or array element");
      }
      const end = this.peek();
      return {
        type: "UpdateExpr",
        id: this.nextId(),
        loc: this.loc(start, end),
        op: opTok.type === TokenType.PlusPlus ? "++" : "--",
        argument: argument as Identifier | IndexExpr,
        prefix: true,
      };
    }
    return this.parsePostfix();
  }

  private parsePostfix(): Expr {
    const start = this.peek();
    let expr = this.parsePrimary();
    for (;;) {
      if (this.at(TokenType.LBracket)) {
        this.advance();
        const index = this.parseExpr();
        const end = this.expect(TokenType.RBracket, "']' after array index");
        if (expr.type !== "Identifier") {
          this.fail("Only a simple array name can be indexed (e.g. 'A[i]')");
        }
        expr = { type: "IndexExpr", id: this.nextId(), loc: this.loc(start, end), object: expr as Identifier, index };
        continue;
      }
      if (this.at(TokenType.Dot)) {
        this.advance();
        const propTok = this.expect(TokenType.Identifier, "'x', 'y', or 'z' after '.'");
        if (propTok.value !== "x" && propTok.value !== "y" && propTok.value !== "z") {
          this.fail(`'.${propTok.value}' isn't supported -only .x, .y, .z (e.g. 'threadIdx.x')`);
        }
        if (expr.type !== "Identifier") {
          this.fail("Member access is only supported on threadIdx/blockIdx/blockDim/gridDim");
        }
        expr = {
          type: "MemberExpr",
          id: this.nextId(),
          loc: this.loc(start, propTok),
          object: expr as Identifier,
          property: propTok.value,
        };
        continue;
      }
      if (this.at(TokenType.PlusPlus) || this.at(TokenType.MinusMinus)) {
        if (expr.type !== "Identifier" && expr.type !== "IndexExpr") {
          this.fail("'++'/'--' can only be applied to a variable or array element");
        }
        const opTok = this.advance();
        const end = this.peek();
        expr = {
          type: "UpdateExpr",
          id: this.nextId(),
          loc: this.loc(start, end),
          op: opTok.type === TokenType.PlusPlus ? "++" : "--",
          argument: expr as Identifier | IndexExpr,
          prefix: false,
        };
        continue;
      }
      break;
    }
    return expr;
  }

  private parsePrimary(): Expr {
    const tok = this.peek();
    if (tok.type === TokenType.IntLiteral) {
      this.advance();
      const lit: Literal = { type: "Literal", id: this.nextId(), loc: this.loc(tok, tok), value: parseInt(tok.value, 10), litType: "int" };
      return lit;
    }
    if (tok.type === TokenType.FloatLiteral) {
      this.advance();
      const lit: Literal = { type: "Literal", id: this.nextId(), loc: this.loc(tok, tok), value: parseFloat(tok.value), litType: "float" };
      return lit;
    }
    if (tok.type === TokenType.Identifier) {
      this.advance();
      if (this.at(TokenType.LParen)) {
        this.advance();
        const args: Expr[] = [];
        if (!this.at(TokenType.RParen)) {
          args.push(this.parseExpr());
          while (this.at(TokenType.Comma)) {
            this.advance();
            args.push(this.parseExpr());
          }
        }
        const end = this.expect(TokenType.RParen, "')' after call arguments");
        return { type: "CallExpr", id: this.nextId(), loc: this.loc(tok, end), callee: tok.value, args };
      }
      const ident: Identifier = { type: "Identifier", id: this.nextId(), loc: this.loc(tok, tok), name: tok.value };
      return ident;
    }
    if (tok.type === TokenType.LParen) {
      this.advance();
      const expr = this.parseExpr();
      this.expect(TokenType.RParen, "')' to close the parenthesized expression");
      return expr;
    }
    this.fail(`Unexpected token '${tok.value || tok.type}'`);
  }
}

export function parseSource(source: string): { program: Program | null; errors: ParseError[] } {
  const { tokens, errors: lexErrors } = tokenize(source);
  if (lexErrors.length > 0) {
    return { program: null, errors: lexErrors };
  }
  const parser = new Parser(tokens);
  try {
    const program = parser.parseProgram();
    return { program, errors: parser.errors };
  } catch (e) {
    if (e instanceof ParseFailure) {
      return { program: null, errors: parser.errors };
    }
    throw e;
  }
}
