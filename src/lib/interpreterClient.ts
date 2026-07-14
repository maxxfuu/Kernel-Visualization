// Single import boundary between the UI and the interpreter package — everything else in the
// app should import from here (or from the re-exported types), not from "@/interpreter" directly.
export {
  parseSource,
  extractSignatures,
  validateConfig,
  run,
  buildBufferStateAtStep,
} from "@/interpreter";
export type {
  BufferConfig,
  ConfigError,
  FillStrategy,
  FunctionSignature,
  InterpError,
  LoopFrame,
  ParamSignature,
  ParseError,
  Program,
  RunConfig,
  RunResult,
  RuntimeError,
  RuntimeErrorKind,
  ScalarConfig,
  StepEvent,
  StepEventKind,
} from "@/interpreter";
