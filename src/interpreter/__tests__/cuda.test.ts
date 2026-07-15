import { describe, expect, it } from "vitest";
import { parseSource } from "../parser";
import { resolveProgram } from "../resolve";
import { run, validateConfig } from "../interpreter";
import type { RunConfig } from "../types";
import { REVERSE_BLOCK, VECTOR_ADD } from "./fixtures";

function parseOk(source: string) {
  const { program, errors } = parseSource(source);
  expect(errors).toEqual([]);
  expect(program).not.toBeNull();
  const resolveResult = resolveProgram(program!);
  expect(resolveResult.errors).toEqual([]);
  return program!;
}

describe("vector_add (kernel launch across multiple blocks)", () => {
  const n = 8;
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const b = [10, 20, 30, 40, 50, 60, 70, 80];

  const config: RunConfig = {
    functionName: "vector_add",
    buffers: [
      { name: "a", type: "float*", length: n, values: a },
      { name: "b", type: "float*", length: n, values: b },
      { name: "c", type: "float*", length: n, values: new Array(n).fill(0) },
    ],
    scalars: [{ name: "n", type: "int", value: n }],
    launch: { gridDimX: 2, blockDimX: 4 },
  };

  it("parses __global__/threadIdx/blockIdx/blockDim without error", () => {
    parseOk(VECTOR_ADD);
  });

  it("computes elementwise sums correctly across every block/thread", () => {
    const program = parseOk(VECTOR_ADD);
    expect(validateConfig(program, config)).toEqual([]);
    const result = run(program, config);
    expect(result.errors).toEqual([]);
    expect(result.finalMemory.c).toEqual(a.map((v, i) => v + b[i]));
  });

  it("tags emitted events with the real threadId/blockId that produced them", () => {
    const program = parseOk(VECTOR_ADD);
    const result = run(program, config);
    const writes = result.steps.filter((s) => s.kind === "mem-write" && s.buffer === "c");
    expect(writes.length).toBe(n);
    // Every (blockId, threadId) pair in {0,1} x {0,1,2,3} should appear exactly once.
    const seen = new Set(writes.map((w) => `${w.blockId}:${w.threadId}`));
    expect(seen.size).toBe(n);
    for (let blockId = 0; blockId < 2; blockId++) {
      for (let threadId = 0; threadId < 4; threadId++) {
        expect(seen.has(`${blockId}:${threadId}`)).toBe(true);
      }
    }
  });

  it("requires a launch config to validate a kernel", () => {
    const program = parseOk(VECTOR_ADD);
    const badConfig: RunConfig = { ...config, launch: undefined };
    const errors = validateConfig(program, badConfig);
    expect(errors.length).toBeGreaterThan(0);
  });
});

describe("__shared__ memory + __syncthreads() barrier correctness", () => {
  const blockDimX = 8;
  const data = [10, 20, 30, 40, 50, 60, 70, 80];

  const config: RunConfig = {
    functionName: "reverse_block",
    buffers: [{ name: "data", type: "float*", length: blockDimX, values: data }],
    scalars: [],
    launch: { gridDimX: 1, blockDimX },
  };

  it("every thread reads back its mirrored neighbor's staged value, not stale/garbage data", () => {
    const program = parseOk(REVERSE_BLOCK);
    expect(validateConfig(program, config)).toEqual([]);
    const result = run(program, config);
    expect(result.errors).toEqual([]);
    expect(result.finalMemory.data).toEqual([...data].reverse());
  });

  it("emits a barrier event once per thread at the __syncthreads() call site", () => {
    const program = parseOk(REVERSE_BLOCK);
    const result = run(program, config);
    const barriers = result.steps.filter((s) => s.kind === "barrier");
    expect(barriers.length).toBe(blockDimX);
  });

  it("is deterministic across repeated runs", () => {
    const program = parseOk(REVERSE_BLOCK);
    const first = run(program, config);
    const second = run(program, config);
    expect(JSON.stringify(first.steps)).toEqual(JSON.stringify(second.steps));
  });
});
