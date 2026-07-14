import type { StepEvent } from "./interpreterClient";

export function formatCellValue(value: number): string {
  if (Number.isNaN(value)) return "—";
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(2);
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
