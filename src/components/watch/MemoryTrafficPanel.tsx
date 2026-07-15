"use client";

import { useKernelVizStore } from "@/state/store";
import { computeBytesMoved, formatBytes } from "@/lib/formatters";
import { cn } from "@/lib/utils";

export function MemoryTrafficPanel() {
  const steps = useKernelVizStore((s) => s.steps);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);

  const soFar = computeBytesMoved(steps.slice(0, currentStepIndex + 1));
  const total = computeBytesMoved(steps);
  const atEnd = steps.length > 0 && currentStepIndex >= steps.length - 1;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Memory traffic</h3>
      <div className="rounded-md bg-muted/40 px-3 py-2">
        <div className="text-xs text-muted-foreground">Bytes moved so far</div>
        <div className="font-mono text-lg tabular-nums">{formatBytes(soFar)}</div>
      </div>
      <div className={cn("rounded-md px-3 py-2 transition-colors", atEnd ? "bg-primary/10" : "bg-muted/40")}>
        <div className="text-xs text-muted-foreground">Total across {steps.length} steps</div>
        <div className="font-mono text-lg tabular-nums">{formatBytes(total)}</div>
      </div>
    </div>
  );
}
