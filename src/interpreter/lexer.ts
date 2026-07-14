import { KEYWORDS, Token, TokenType } from "./tokens";
import type { ParseError } from "./errors";

const MULTI_CHAR_OPERATORS: [string, TokenType][] = [
  ["<<", TokenType.Shl],
  [">>", TokenType.Shr],
  ["==", TokenType.EqEq],
  ["!=", TokenType.NotEq],
  ["<=", TokenType.LtEq],
  [">=", TokenType.GtEq],
  ["&&", TokenType.AndAnd],
  ["||", TokenType.OrOr],
  ["++", TokenType.PlusPlus],
  ["--", TokenType.MinusMinus],
  ["+=", TokenType.PlusEq],
  ["-=", TokenType.MinusEq],
  ["*=", TokenType.StarEq],
  ["/=", TokenType.SlashEq],
  ["%=", TokenType.PercentEq],
];

const SINGLE_CHAR_OPERATORS: Record<string, TokenType> = {
  "+": TokenType.Plus,
  "-": TokenType.Minus,
  "*": TokenType.Star,
  "/": TokenType.Slash,
  "%": TokenType.Percent,
  "=": TokenType.Assign,
  "<": TokenType.Lt,
  ">": TokenType.Gt,
  "!": TokenType.Not,
  "&": TokenType.Amp,
  "|": TokenType.Pipe,
  "^": TokenType.Caret,
  "~": TokenType.Tilde,
  "(": TokenType.LParen,
  ")": TokenType.RParen,
  "{": TokenType.LBrace,
  "}": TokenType.RBrace,
  "[": TokenType.LBracket,
  "]": TokenType.RBracket,
  ";": TokenType.Semi,
  ",": TokenType.Comma,
};

function isDigit(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}

function isIdentStart(ch: string): boolean {
  return /[A-Za-z_]/.test(ch);
}

function isIdentPart(ch: string): boolean {
  return /[A-Za-z0-9_]/.test(ch);
}

export function tokenize(source: string): { tokens: Token[]; errors: ParseError[] } {
  const tokens: Token[] = [];
  const errors: ParseError[] = [];
  let i = 0;
  let line = 1;
  let col = 1;

  function advance(n = 1) {
    for (let k = 0; k < n; k++) {
      if (source[i] === "\n") {
        line++;
        col = 1;
      } else {
        col++;
      }
      i++;
    }
  }

  while (i < source.length) {
    const ch = source[i];

    if (ch === " " || ch === "\t" || ch === "\r" || ch === "\n") {
      advance();
      continue;
    }

    if (ch === "/" && source[i + 1] === "/") {
      while (i < source.length && source[i] !== "\n") advance();
      continue;
    }
    if (ch === "/" && source[i + 1] === "*") {
      advance(2);
      while (i < source.length && !(source[i] === "*" && source[i + 1] === "/")) advance();
      if (i < source.length) advance(2);
      continue;
    }

    const startLine = line;
    const startCol = col;
    const startOffset = i;

    if (isDigit(ch) || (ch === "." && isDigit(source[i + 1] ?? ""))) {
      let text = "";
      let isFloat = false;
      while (i < source.length && isDigit(source[i])) {
        text += source[i];
        advance();
      }
      if (source[i] === ".") {
        isFloat = true;
        text += source[i];
        advance();
        while (i < source.length && isDigit(source[i])) {
          text += source[i];
          advance();
        }
      }
      if (source[i] === "e" || source[i] === "E") {
        isFloat = true;
        text += source[i];
        advance();
        if (source[i] === "+" || source[i] === "-") {
          text += source[i];
          advance();
        }
        while (i < source.length && isDigit(source[i])) {
          text += source[i];
          advance();
        }
      }
      if (source[i] === "f" || source[i] === "F") {
        isFloat = true;
        advance();
      }
      tokens.push({
        type: isFloat ? TokenType.FloatLiteral : TokenType.IntLiteral,
        value: text,
        line: startLine,
        col: startCol,
        startOffset,
        endOffset: i,
      });
      continue;
    }

    if (isIdentStart(ch)) {
      let text = "";
      while (i < source.length && isIdentPart(source[i])) {
        text += source[i];
        advance();
      }
      const type = KEYWORDS[text] ?? TokenType.Identifier;
      tokens.push({ type, value: text, line: startLine, col: startCol, startOffset, endOffset: i });
      continue;
    }

    const twoChar = source.slice(i, i + 2);
    const multiMatch = MULTI_CHAR_OPERATORS.find(([op]) => op === twoChar);
    if (multiMatch) {
      advance(2);
      tokens.push({
        type: multiMatch[1],
        value: twoChar,
        line: startLine,
        col: startCol,
        startOffset,
        endOffset: i,
      });
      continue;
    }

    const single = SINGLE_CHAR_OPERATORS[ch];
    if (single) {
      advance();
      tokens.push({ type: single, value: ch, line: startLine, col: startCol, startOffset, endOffset: i });
      continue;
    }

    errors.push({ tier: "parse", message: `Unexpected character '${ch}'`, line: startLine, col: startCol });
    advance();
  }

  tokens.push({ type: TokenType.EOF, value: "", line, col, startOffset: i, endOffset: i });
  return { tokens, errors };
}
