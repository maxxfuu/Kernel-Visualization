import { describe, expect, it } from "vitest";
import { parseSource } from "../parser";
import { MATMUL_AT_B, RELU_BACKWARD } from "./fixtures";

describe("parser", () => {
  it("parses nested for-loops, compound assignment, and index expressions", () => {
    const { program, errors } = parseSource(MATMUL_AT_B);
    expect(errors).toEqual([]);
    expect(program).not.toBeNull();
    const fn = program!.functions[0];
    expect(fn.name).toBe("matmul_at_b");
    expect(fn.params.map((p) => p.paramType)).toEqual(["float*", "float*", "float*", "int", "int", "int"]);
    const outerFor = fn.body.body[0];
    expect(outerFor.type).toBe("ForStmt");
  });

  it("parses if/else and comparison operators", () => {
    const { program, errors } = parseSource(RELU_BACKWARD);
    expect(errors).toEqual([]);
    expect(program).not.toBeNull();
  });

  it("respects operator precedence (a + b * c)", () => {
    const { program, errors } = parseSource("void f(int a, int b, int c) { int x = a + b * c; }");
    expect(errors).toEqual([]);
    const stmt = program!.functions[0].body.body[0] as import("../ast").VarDeclStmt;
    const init = stmt.init as import("../ast").BinaryExpr;
    expect(init.op).toBe("+");
    expect(init.right.type).toBe("BinaryExpr");
    expect((init.right as import("../ast").BinaryExpr).op).toBe("*");
  });

  it("reports a parse error with location for invalid syntax", () => {
    const { program, errors } = parseSource("void f(int a) { int x = ; }");
    expect(program).toBeNull();
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].line).toBeGreaterThan(0);
  });

  it("rejects assignment to a non-lvalue", () => {
    const { errors } = parseSource("void f(int a) { 1 + 1 = a; }");
    expect(errors.length).toBeGreaterThan(0);
  });
});
