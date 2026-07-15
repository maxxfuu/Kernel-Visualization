// Shared data shapes for the interpreter's public surface. See index.ts for the entry points
// that produce/consume these.

export type ScalarType = "int" | "float";
export type PointerType = "int*" | "float*";
export type ParamType = ScalarType | PointerType;

export interface ParamSignature {
  name: string;
  type: ParamType;
}

export interface SharedArraySignature {
  name: string;
  elementType: ScalarType;
  size: number;
}

export interface FunctionSignature {
  name: string;
  returnType: "void" | ScalarType;
  params: ParamSignature[];
  /** True for `__global__` functions -these launch with a thread/block grid instead of running once. */
  isKernel: boolean;
  /** `__shared__` arrays declared in the body -block-scoped memory the UI can visualize alongside device buffers. */
  sharedArrays: SharedArraySignature[];
}

// --- Run configuration (how the UI supplies concrete buffer sizes/values + scalar params) ---

export type FillStrategy = "zero" | "random" | "sequential" | "manual";

export interface BufferConfig {
  name: string;
  type: PointerType;
  length: number;
  values: number[]; // length must equal `length`; UI resolves fillStrategy down to this before calling run()
}

export interface ScalarConfig {
  name: string;
  type: ScalarType;
  value: number;
}

/** Grid/block launch dimensions -v1 only models the .x axis (blockDim.y/z, gridDim.y/z are 1). */
export interface LaunchConfig {
  gridDimX: number;
  blockDimX: number;
}

export interface RunConfig {
  functionName: string;
  buffers: BufferConfig[];
  scalars: ScalarConfig[];
  maxSteps?: number; // default 1_000_000
  /** Required (and only meaningful) when the target function is a `__global__` kernel. */
  launch?: LaunchConfig;
}

// --- Step trace ---

export interface LoopFrame {
  nodeId: number;
  varName: string | null;
  value: number | null;
}

export type StepEventKind =
  | "enter-function"
  | "scope-enter"
  | "scope-exit"
  | "stmt-enter"
  | "loop-enter"
  | "loop-test"
  | "loop-iter"
  | "loop-exit"
  | "var-decl"
  | "var-write"
  | "mem-read"
  | "mem-write"
  | "return"
  | "exit-function"
  | "barrier";

export interface StepEventBase {
  seq: number;
  kind: StepEventKind;
  nodeId: number;
  line: number;
  col: number;
  depth: number;
  loopStack: LoopFrame[];
  scopeSnapshot: Record<string, number>;
  threadId?: number;
  blockId?: number;
}

export interface VarDeclEvent extends StepEventBase {
  kind: "var-decl";
  name: string;
  value: number;
}

export interface VarWriteEvent extends StepEventBase {
  kind: "var-write";
  name: string;
  oldValue: number;
  newValue: number;
}

export interface MemReadEvent extends StepEventBase {
  kind: "mem-read";
  buffer: string;
  index: number;
  value: number;
  inBounds: boolean;
}

export interface MemWriteEvent extends StepEventBase {
  kind: "mem-write";
  buffer: string;
  index: number;
  oldValue: number | null;
  newValue: number;
  inBounds: boolean;
}

export interface LoopTestEvent extends StepEventBase {
  kind: "loop-test";
  result: boolean;
}

export interface GenericEvent extends StepEventBase {
  kind:
    | "enter-function"
    | "scope-enter"
    | "scope-exit"
    | "stmt-enter"
    | "loop-enter"
    | "loop-iter"
    | "loop-exit"
    | "return"
    | "exit-function"
    | "barrier";
}

export type StepEvent =
  | VarDeclEvent
  | VarWriteEvent
  | MemReadEvent
  | MemWriteEvent
  | LoopTestEvent
  | GenericEvent;

export interface RunResult {
  steps: StepEvent[];
  finalMemory: Record<string, number[]>;
  finalScalars: Record<string, number>;
  errors: import("./errors").RuntimeError[];
  truncated: boolean;
}

// --- Internal runtime value representation (not part of the public API) ---

export interface NumValue {
  n: number;
  t: ScalarType;
}
