import type { StepEvent } from "./interpreterClient";

export interface OperandRef {
  buffer: string;
  index: number;
}

/**
 * Finds the mem-reads that fed a given mem-write, by scanning backward from the write to the
 * start of its enclosing statement (the nearest preceding "stmt-enter"). Used to draw a beam
 * from operand cells to the destination cell for the current step.
 */
export function getOperandReadsForWrite(steps: StepEvent[], writeSeq: number): OperandRef[] {
  const write = steps[writeSeq];
  if (!write || write.kind !== "mem-write") return [];

  const operands: OperandRef[] = [];
  for (let i = writeSeq - 1; i >= 0; i--) {
    const step = steps[i];
    if (step.kind === "stmt-enter") break;
    if (step.kind === "mem-read" && !(step.buffer === write.buffer && step.index === write.index)) {
      operands.push({ buffer: step.buffer, index: step.index });
    }
  }
  return operands;
}
