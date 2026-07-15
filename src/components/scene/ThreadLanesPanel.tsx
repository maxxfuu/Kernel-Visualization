"use client";

import { useMemo } from "react";
import { useKernelVizStore } from "@/state/store";
import { cn } from "@/lib/utils";

type ThreadStatus = "pending" | "active" | "waiting" | "done";

const STATUS_STYLE: Record<ThreadStatus, string> = {
  pending: "bg-muted text-muted-foreground",
  active: "bg-blue-500 text-white",
  waiting: "bg-amber-500 text-white",
  done: "bg-emerald-600 text-white",
};

/** Per-thread progress for the block the current step belongs to -derived by scanning the
 * trace up to `currentStepIndex` for each thread's most recent event: still nothing seen
 * ("pending"), last event was `__syncthreads()` ("waiting" -released once every other live
 * thread in the block also reaches it), last event was exit-function ("done"), else "active". */
export function ThreadLanesPanel() {
  const functionSignatures = useKernelVizStore((s) => s.functionSignatures);
  const selectedFunctionName = useKernelVizStore((s) => s.selectedFunctionName);
  const steps = useKernelVizStore((s) => s.steps);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);
  const launchConfig = useKernelVizStore((s) => s.launchConfig);

  const sig = functionSignatures.find((s) => s.name === selectedFunctionName);
  const currentStep = steps[currentStepIndex];
  const blockId = currentStep?.blockId ?? 0;
  const blockDimX = launchConfig.blockDimX;

  const statuses = useMemo(() => {
    const lastByThread = new Map<number, ThreadStatus>();
    for (let i = 0; i <= currentStepIndex && i < steps.length; i++) {
      const s = steps[i];
      if (s.blockId !== blockId || s.threadId === undefined) continue;
      const status: ThreadStatus = s.kind === "exit-function" ? "done" : s.kind === "barrier" ? "waiting" : "active";
      lastByThread.set(s.threadId, status);
    }
    return Array.from({ length: blockDimX }, (_, threadId) => lastByThread.get(threadId) ?? ("pending" as ThreadStatus));
  }, [steps, currentStepIndex, blockId, blockDimX]);

  if (!sig?.isKernel) return null;

  return (
    <div className="pointer-events-auto flex w-full flex-col gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-md backdrop-blur-sm">
      <span className="font-mono font-semibold">Block {blockId} threads</span>
      <div className="flex flex-wrap gap-1">
        {statuses.map((status, threadId) => (
          <div
            key={threadId}
            title={`thread ${threadId}: ${status}`}
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded font-mono text-[10px] leading-none",
              STATUS_STYLE[status],
              currentStep?.blockId === blockId && currentStep?.threadId === threadId && "ring-2 ring-offset-1 ring-foreground",
            )}
          >
            {threadId}
          </div>
        ))}
      </div>
    </div>
  );
}
