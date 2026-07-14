export enum TokenType {
  IntLiteral = "IntLiteral",
  FloatLiteral = "FloatLiteral",
  Identifier = "Identifier",

  Int = "Int",
  Float = "Float",
  Void = "Void",
  For = "For",
  While = "While",
  If = "If",
  Else = "Else",
  Return = "Return",
  Break = "Break",
  Continue = "Continue",

  Plus = "Plus",
  Minus = "Minus",
  Star = "Star",
  Slash = "Slash",
  Percent = "Percent",

  Assign = "Assign",
  PlusEq = "PlusEq",
  MinusEq = "MinusEq",
  StarEq = "StarEq",
  SlashEq = "SlashEq",
  PercentEq = "PercentEq",

  EqEq = "EqEq",
  NotEq = "NotEq",
  Lt = "Lt",
  LtEq = "LtEq",
  Gt = "Gt",
  GtEq = "GtEq",

  AndAnd = "AndAnd",
  OrOr = "OrOr",
  Not = "Not",

  Amp = "Amp",
  Pipe = "Pipe",
  Caret = "Caret",
  Tilde = "Tilde",
  Shl = "Shl",
  Shr = "Shr",

  PlusPlus = "PlusPlus",
  MinusMinus = "MinusMinus",

  LParen = "LParen",
  RParen = "RParen",
  LBrace = "LBrace",
  RBrace = "RBrace",
  LBracket = "LBracket",
  RBracket = "RBracket",
  Semi = "Semi",
  Comma = "Comma",

  EOF = "EOF",
}

export const KEYWORDS: Record<string, TokenType> = {
  int: TokenType.Int,
  float: TokenType.Float,
  void: TokenType.Void,
  for: TokenType.For,
  while: TokenType.While,
  if: TokenType.If,
  else: TokenType.Else,
  return: TokenType.Return,
  break: TokenType.Break,
  continue: TokenType.Continue,
};

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  col: number;
  startOffset: number;
  endOffset: number;
}
