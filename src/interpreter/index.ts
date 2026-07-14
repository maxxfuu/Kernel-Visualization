import { parseSource as parseSourceInternal } from "./parser";
import { resolveProgram } from "./resolve";
import { run as runInternal, validateConfig as validateConfigInternal } from "./interpreter";
import type { Program } from "./ast";
import type { ParseError, ConfigError } from "./errors";
import type { FunctionSignature, RunConfig, RunResult, StepEvent } from "./types";

export function parseSource(source: string): { program: Program | null; errors: ParseError[] } {
  const { program, errors } = parseSourceInternal(source);
  if (!program) return { program: null, errors };
  const { errors: resolveErrors } = resolveProgram(program);
  return { program, errors: [...errors, ...resolveErrors] };
}

export function extractSignatures(program: Program): FunctionSignature[] {
  return program.functions.map((fn) => ({
    name: fn.name,
    returnType: fn.returnType,
    params: fn.params.map((p) => ({ name: p.name, type: p.paramType })),
  }));
}

export function validateConfig(program: Program, config: RunConfig): ConfigError[] {
  return validateConfigInternal(program, config);
}

export function run(program: Program, config: RunConfig): RunResult {
  return runInternal(program, config);
}

/** Reconstructs a buffer's contents at a given step by replaying mem-write deltas onto its initial values. */
export function buildBufferStateAtStep(
  steps: StepEvent[],
  bufferName: string,
  initialValues: number[],
  uptoSeq: number,
): number[] {
  const state = initialValues.slice();
  for (const step of steps) {
    if (step.seq > uptoSeq) break;
    if (step.kind === "mem-write" && step.buffer === bufferName && step.inBounds) {
      state[step.index] = step.newValue;
    }
  }
  return state;
}

export type {
  BufferConfig,
  FillStrategy,
  FunctionSignature,
  LoopFrame,
  ParamSignature,
  RunConfig,
  RunResult,
  ScalarConfig,
  StepEvent,
  StepEventKind,
} from "./types";
export type { ConfigError, InterpError, ParseError, RuntimeError, RuntimeErrorKind } from "./errors";
export type { Program } from "./ast";
