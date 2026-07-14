import { describe, expect, it } from "vitest";
import { tokenize } from "../lexer";
import { TokenType } from "../tokens";

function types(source: string): TokenType[] {
  return tokenize(source).tokens.map((t) => t.type);
}

describe("lexer", () => {
  it("tokenizes multi-char operators greedily", () => {
    expect(types("a += b == c <= d")).toEqual([
      TokenType.Identifier,
      TokenType.PlusEq,
      TokenType.Identifier,
      TokenType.EqEq,
      TokenType.Identifier,
      TokenType.LtEq,
      TokenType.Identifier,
      TokenType.EOF,
    ]);
  });

  it("skips line and block comments", () => {
    expect(types("a; // comment\n/* block */ b;")).toEqual([
      TokenType.Identifier,
      TokenType.Semi,
      TokenType.Identifier,
      TokenType.Semi,
      TokenType.EOF,
    ]);
  });

  it("parses float literal forms including trailing f and exponents", () => {
    const { tokens } = tokenize("0.0f 1e-3 2.5");
    expect(tokens[0]).toMatchObject({ type: TokenType.FloatLiteral, value: "0.0" });
    expect(tokens[1]).toMatchObject({ type: TokenType.FloatLiteral, value: "1e-3" });
    expect(tokens[2]).toMatchObject({ type: TokenType.FloatLiteral, value: "2.5" });
  });

  it("reports an error for an unrecognized character", () => {
    const { errors } = tokenize("int a = 1 $ 2;");
    expect(errors.length).toBe(1);
    expect(errors[0].message).toContain("$");
  });
});
