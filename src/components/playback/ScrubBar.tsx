"use client";

import { Slider } from "@/components/ui/slider";
import { useKernelVizStore } from "@/state/store";
import { describeStep } from "@/lib/formatters";

export function ScrubBar() {
  const steps = useKernelVizStore((s) => s.steps);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);
  const seekTo = useKernelVizStore((s) => s.seekTo);
  const setScrubbing = useKernelVizStore((s) => s.setScrubbing);
  const runErrors = useKernelVizStore((s) => s.runErrors);

  const max = Math.max(steps.length - 1, 1);
  const errorSeqs = runErrors.map((e) => e.seq).filter((seq) => seq >= 0);

  return (
    <div className="flex flex-1 flex-col gap-1">
      <div className="relative">
        <Slider
          value={[currentStepIndex]}
          min={0}
          max={max}
          step={1}
          disabled={steps.length === 0}
          onValueChange={(v) => seekTo(Array.isArray(v) ? v[0] : v)}
          onPointerDown={() => setScrubbing(true)}
          onPointerUp={() => setScrubbing(false)}
          title={describeStep(steps[currentStepIndex])}
        />
        {max > 0 &&
          errorSeqs.map((seq) => (
            <div
              key={seq}
              className="pointer-events-none absolute top-1/2 h-2 w-0.5 -translate-y-1/2 bg-destructive"
              style={{ left: `${(seq / max) * 100}%` }}
            />
          ))}
      </div>
      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>{describeStep(steps[currentStepIndex]) || "no run yet"}</span>
        <span className="tabular-nums">
          step {steps.length === 0 ? 0 : currentStepIndex + 1} / {steps.length}
        </span>
      </div>
    </div>
  );
}
