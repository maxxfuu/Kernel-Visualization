export interface ParseError {
  tier: "parse";
  message: string;
  line: number;
  col: number;
}

export interface ConfigError {
  tier: "config";
  message: string;
  paramName?: string;
}

export type RuntimeErrorKind = "div-by-zero" | "out-of-bounds" | "max-steps-exceeded";

export interface RuntimeError {
  tier: "runtime";
  kind: RuntimeErrorKind;
  message: string;
  nodeId: number;
  line: number;
  col: number;
  seq: number;
  fatal: boolean;
}

export type InterpError = ParseError | ConfigError | RuntimeError;

/** Thrown internally to unwind execution on a fatal runtime condition; caught at the top of run(). */
export class FatalRuntimeError extends Error {
  constructor(public readonly err: RuntimeError) {
    super(err.message);
  }
}
