import { describe, expect, it } from "vitest";
import { parseSource } from "../parser";
import { resolveProgram } from "../resolve";
import { run, validateConfig } from "../interpreter";
import type { RunConfig } from "../types";
import {
  BIAS_BACKWARDS,
  MATMUL_AT_B,
  MATMUL_A_BT_BUGGY,
  RELU_BACKWARD,
  biasBackwardsReference,
  intendedABtReference,
  matmulAtBReference,
  reluBackwardReference,
} from "./fixtures";

function parseOk(source: string) {
  const { program, errors } = parseSource(source);
  expect(errors).toEqual([]);
  expect(program).not.toBeNull();
  const resolveResult = resolveProgram(program!);
  expect(resolveResult.errors).toEqual([]);
  return program!;
}

function seq(n: number, start = 1): number[] {
  return Array.from({ length: n }, (_, i) => start + i);
}

describe("matmul_at_b (golden)", () => {
  const m = 2;
  const n = 3;
  const k = 2;
  const A = seq(m * n); // 1..6
  const B = seq(m * k, 0.5); // 0.5..3.5

  const config: RunConfig = {
    functionName: "matmul_at_b",
    buffers: [
      { name: "A", type: "float*", length: m * n, values: A },
      { name: "B", type: "float*", length: m * k, values: B },
      { name: "C", type: "float*", length: n * k, values: new Array(n * k).fill(0) },
    ],
    scalars: [
      { name: "m", type: "int", value: m },
      { name: "n", type: "int", value: n },
      { name: "k", type: "int", value: k },
    ],
  };

  it("matches an independent reference implementation", () => {
    const program = parseOk(MATMUL_AT_B);
    expect(validateConfig(program, config)).toEqual([]);
    const result = run(program, config);
    expect(result.errors).toEqual([]);
    expect(result.truncated).toBe(false);
    const expected = matmulAtBReference(A, B, m, n, k);
    result.finalMemory.C.forEach((v, i) => expect(v).toBeCloseTo(expected[i], 5));
  });

  it("emits the expected number of writes to C", () => {
    const program = parseOk(MATMUL_AT_B);
    const result = run(program, config);
    const writesToC = result.steps.filter((s) => s.kind === "mem-write" && s.buffer === "C");
    // one init write ("C[i*k+j] = 0") + m accumulate writes, per (i,j) pair
    expect(writesToC.length).toBe(n * k * (m + 1));
  });
});

describe("matmul_a_bt (intentional bug)", () => {
  // Non-square so the "literal buggy" and "intended transpose-B" formulas provably diverge.
  const m = 2;
  const n = 3;
  const k = 4;
  const A = seq(m * n);
  const B = seq(m * k, 0.25);

  const config: RunConfig = {
    functionName: "matmul_a_bt",
    buffers: [
      { name: "A", type: "float*", length: m * n, values: A },
      { name: "B", type: "float*", length: m * k, values: B },
      { name: "C", type: "float*", length: n * k, values: new Array(n * k).fill(0) },
    ],
    scalars: [
      { name: "m", type: "int", value: m },
      { name: "n", type: "int", value: n },
      { name: "k", type: "int", value: k },
    ],
  };

  it("runs to completion without crashing", () => {
    const program = parseOk(MATMUL_A_BT_BUGGY);
    const result = run(program, config);
    expect(result.errors.filter((e) => e.fatal)).toEqual([]);
    expect(result.truncated).toBe(false);
  });

  it("produces output that differs from a correct A @ B^T implementation", () => {
    const program = parseOk(MATMUL_A_BT_BUGGY);
    const result = run(program, config);
    const intended = intendedABtReference(A, B, n, k, m);
    const matches = result.finalMemory.C.every((v, i) => Math.abs(v - intended[i]) < 1e-5);
    expect(matches).toBe(false);
  });

  it("produces output matching the literal (buggy) formula the code actually computes", () => {
    const program = parseOk(MATMUL_A_BT_BUGGY);
    const result = run(program, config);
    // The body is byte-identical to matmul_at_b, so it must compute exactly that, bug and all.
    const literalBuggyResult = matmulAtBReference(A, B, m, n, k);
    result.finalMemory.C.forEach((v, i) => expect(v).toBeCloseTo(literalBuggyResult[i], 5));
  });
});

describe("relu_backward (golden)", () => {
  it("zeroes gradients where x <= 0, leaves others untouched", () => {
    const program = parseOk(RELU_BACKWARD);
    const grad = [1, 2, 3, 4, 5];
    const x = [-1, 0, 1, -2, 2];
    const config: RunConfig = {
      functionName: "relu_backward",
      buffers: [
        { name: "grad", type: "float*", length: grad.length, values: grad },
        { name: "x", type: "float*", length: x.length, values: x },
      ],
      scalars: [{ name: "size", type: "int", value: grad.length }],
    };
    const result = run(program, config);
    expect(result.errors).toEqual([]);
    expect(result.finalMemory.grad).toEqual(reluBackwardReference(grad, x));
  });
});

describe("bias_backwards (golden)", () => {
  it("sums gradients across the batch dimension", () => {
    const program = parseOk(BIAS_BACKWARDS);
    const batchSize = 3;
    const size = 4;
    const grad = seq(batchSize * size);
    const config: RunConfig = {
      functionName: "bias_backwards",
      buffers: [
        { name: "grad_bias", type: "float*", length: size, values: new Array(size).fill(0) },
        { name: "grad", type: "float*", length: grad.length, values: grad },
      ],
      scalars: [
        { name: "batch_size", type: "int", value: batchSize },
        { name: "size", type: "int", value: size },
      ],
    };
    const result = run(program, config);
    expect(result.errors).toEqual([]);
    expect(result.finalMemory.grad_bias).toEqual(biasBackwardsReference(grad, batchSize, size));
  });
});

describe("out-of-bounds access", () => {
  const OFF_BY_ONE = `
    void off_by_one(float *buf, int size) {
      for (int i = 0; i <= size; i++) {
        buf[i] = 1.0f;
      }
    }
  `;

  it("continues execution, drops the bad write, and records a non-fatal error", () => {
    const program = parseOk(OFF_BY_ONE);
    const size = 4;
    const config: RunConfig = {
      functionName: "off_by_one",
      buffers: [{ name: "buf", type: "float*", length: size, values: new Array(size).fill(0) }],
      scalars: [{ name: "size", type: "int", value: size }],
    };
    const result = run(program, config);
    expect(result.truncated).toBe(false);
    expect(result.finalMemory.buf).toEqual([1, 1, 1, 1]); // in-bounds writes still applied
    const oob = result.errors.filter((e) => e.tier === "runtime" && e.kind === "out-of-bounds");
    expect(oob.length).toBe(1);
    expect(oob[0].fatal).toBe(false);
  });
});

describe("division by zero", () => {
  const DIV_ZERO = `
    void div_zero(float *out, int a, int b) {
      out[0] = a / b;
    }
  `;

  it("is fatal for integer division and preserves steps up to the crash", () => {
    const program = parseOk(DIV_ZERO);
    const config: RunConfig = {
      functionName: "div_zero",
      buffers: [{ name: "out", type: "float*", length: 1, values: [0] }],
      scalars: [
        { name: "a", type: "int", value: 10 },
        { name: "b", type: "int", value: 0 },
      ],
    };
    const result = run(program, config);
    const fatal = result.errors.find((e) => e.tier === "runtime" && e.kind === "div-by-zero");
    expect(fatal).toBeDefined();
    expect(fatal!.fatal).toBe(true);
    expect(result.steps.length).toBeGreaterThan(0);
  });
});

describe("infinite loop guard", () => {
  const INFINITE = `
    void spin(int limit) {
      int i = 0;
      while (1) {
        i = i + 1;
      }
    }
  `;

  it("truncates after the configured max step count within a bounded budget", () => {
    const program = parseOk(INFINITE);
    const config: RunConfig = {
      functionName: "spin",
      buffers: [],
      scalars: [{ name: "limit", type: "int", value: 10 }],
      maxSteps: 2000,
    };
    const start = Date.now();
    const result = run(program, config);
    expect(Date.now() - start).toBeLessThan(5000);
    expect(result.truncated).toBe(true);
    expect(result.errors.some((e) => e.tier === "runtime" && e.kind === "max-steps-exceeded")).toBe(true);
  });
});

describe("config validation", () => {
  it("reports a missing buffer before any run happens", () => {
    const program = parseOk(RELU_BACKWARD);
    const config: RunConfig = {
      functionName: "relu_backward",
      buffers: [{ name: "grad", type: "float*", length: 4, values: [0, 0, 0, 0] }], // missing 'x'
      scalars: [{ name: "size", type: "int", value: 4 }],
    };
    const errors = validateConfig(program, config);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors.some((e) => e.paramName === "x")).toBe(true);
  });
});

describe("determinism", () => {
  it("produces an identical trace across repeated runs of the same (program, config)", () => {
    const program = parseOk(RELU_BACKWARD);
    const config: RunConfig = {
      functionName: "relu_backward",
      buffers: [
        { name: "grad", type: "float*", length: 4, values: [1, 2, 3, 4] },
        { name: "x", type: "float*", length: 4, values: [-1, 1, -1, 1] },
      ],
      scalars: [{ name: "size", type: "int", value: 4 }],
    };
    const first = run(program, config);
    const second = run(program, config);
    expect(JSON.stringify(first.steps)).toEqual(JSON.stringify(second.steps));
  });
});
