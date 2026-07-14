"use client";

import { useKernelVizStore } from "@/state/store";
import { formatCellValue } from "@/lib/formatters";
import { Badge } from "@/components/ui/badge";

export function VariableWatchPanel() {
  const steps = useKernelVizStore((s) => s.steps);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);
  const step = steps[currentStepIndex];

  if (!step) {
    return <div className="p-3 text-sm text-muted-foreground">Run the kernel to watch variables update live.</div>;
  }

  const scalarEntries = Object.entries(step.scopeSnapshot);

  return (
    <div className="flex flex-col gap-3 overflow-y-auto p-3">
      <div>
        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Variables</h3>
        {scalarEntries.length === 0 ? (
          <p className="text-sm text-muted-foreground">none in scope</p>
        ) : (
          <div className="flex flex-col gap-1">
            {scalarEntries.map(([name, value]) => (
              <div key={name} className="flex items-center justify-between rounded-md bg-muted/40 px-2 py-1 font-mono text-sm">
                <span>{name}</span>
                <span className="tabular-nums">{formatCellValue(value)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {step.loopStack.length > 0 && (
        <div>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Loop nesting</h3>
          <div className="flex flex-wrap gap-1.5">
            {step.loopStack.map((frame, i) => (
              <Badge key={i} variant="secondary" className="font-mono">
                {frame.varName ?? `depth ${i}`}
                {frame.value !== null ? ` = ${formatCellValue(frame.value)}` : ""}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
