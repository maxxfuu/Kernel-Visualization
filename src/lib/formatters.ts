import type { StepEvent } from "./interpreterClient";

export function formatCellValue(value: number): string {
  if (Number.isNaN(value)) return "—";
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(2);
}

// int and float are both 4 bytes in this interpreter's value model (no 8/16/64-bit types), so
// every in-bounds mem-read/mem-write moves exactly one 4-byte element.
const BYTES_PER_ELEMENT = 4;

/** Total bytes moved (read + write) across a slice of the step trace. Out-of-bounds accesses
 * never touch real memory, so they don't count. */
export function computeBytesMoved(steps: StepEvent[]): number {
  let bytes = 0;
  for (const step of steps) {
    if ((step.kind === "mem-read" || step.kind === "mem-write") && step.inBounds) {
      bytes += BYTES_PER_ELEMENT;
    }
  }
  return bytes;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function describeStep(step: StepEvent | undefined): string {
  if (!step) return "";
  switch (step.kind) {
    case "mem-read":
      return `line ${step.line} · read ${step.buffer}[${step.index}]${step.inBounds ? "" : " (out of bounds)"}`;
    case "mem-write":
      return `line ${step.line} · write ${step.buffer}[${step.index}] = ${formatCellValue(step.newValue)}${
        step.inBounds ? "" : " (out of bounds, dropped)"
      }`;
    case "var-write":
      return `line ${step.line} · ${step.name} = ${formatCellValue(step.newValue)}`;
    case "var-decl":
      return `line ${step.line} · declare ${step.name} = ${formatCellValue(step.value)}`;
    case "loop-iter":
      return `line ${step.line} · loop iteration`;
    case "loop-test":
      return `line ${step.line} · loop condition ${step.result ? "true" : "false"}`;
    case "enter-function":
      return "function entry";
    case "exit-function":
      return "function exit";
    default:
      return `line ${step.line}`;
  }
}
