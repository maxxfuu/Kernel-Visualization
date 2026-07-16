"use client";

import { useMemo } from "react";
import { resolveFillValues, useKernelVizStore } from "@/state/store";
import { bufferStateAt } from "@/lib/keyframe";

export interface MemoryAccessHighlight {
  index: number;
  kind: "read" | "write";
  age: number; // 0 = happened on the exact current step
}

export interface MemoryVisualState {
  values: number[];
  activeAccesses: MemoryAccessHighlight[];
  recentAccesses: MemoryAccessHighlight[];
  errorIndex: number | null;
}

const TRAIL_LENGTH = 6;
const TRAIL_LOOKBACK_WINDOW = 200;

export function useMemoryVisualState(bufferName: string): MemoryVisualState {
  const steps = useKernelVizStore((s) => s.steps);
  const keyframes = useKernelVizStore((s) => s.keyframes);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);
  const initialBufferValues = useKernelVizStore((s) => s.initialBufferValues);
  const bufferConfig = useKernelVizStore((s) => s.bufferConfigs[bufferName]);

  const values = useMemo(() => {
    if (steps.length === 0) {
      // No (current) run: the grid still shows something -a preview of the values the next Run
      // would start from, at the currently-configured size. Keeps the matrices "always
      // initialized", including on first page load and right after a config edit resizes them.
      if (bufferConfig) return resolveFillValues(bufferConfig);
      return initialBufferValues[bufferName]?.slice() ?? [];
    }
    return bufferStateAt(steps, keyframes, currentStepIndex)[bufferName] ?? [];
  }, [steps, keyframes, currentStepIndex, bufferName, initialBufferValues, bufferConfig]);

  const currentStep = steps[currentStepIndex];
  const activeAccesses: MemoryAccessHighlight[] = [];
  let errorIndex: number | null = null;
  if (currentStep && (currentStep.kind === "mem-read" || currentStep.kind === "mem-write") && currentStep.buffer === bufferName) {
    activeAccesses.push({ index: currentStep.index, kind: currentStep.kind === "mem-read" ? "read" : "write", age: 0 });
    if (!currentStep.inBounds) errorIndex = currentStep.index;
  }

  const recentAccesses = useMemo(() => {
    const trail: MemoryAccessHighlight[] = [];
    const floor = Math.max(0, currentStepIndex - TRAIL_LOOKBACK_WINDOW);
    for (let i = currentStepIndex - 1; i >= floor && trail.length < TRAIL_LENGTH; i--) {
      const step = steps[i];
      if ((step.kind === "mem-read" || step.kind === "mem-write") && step.buffer === bufferName) {
        trail.push({ index: step.index, kind: step.kind === "mem-read" ? "read" : "write", age: currentStepIndex - i });
      }
    }
    return trail;
  }, [steps, currentStepIndex, bufferName]);

  return { values, activeAccesses, recentAccesses, errorIndex };
}
