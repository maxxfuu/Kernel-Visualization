"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { computeConfigSignature, useKernelVizStore } from "@/state/store";

const CONFIG_ERROR_TOAST_ID = "config-error";

export function ScalarPanel() {
  const functionSignatures = useKernelVizStore((s) => s.functionSignatures);
  const selectedFunctionName = useKernelVizStore((s) => s.selectedFunctionName);
  const scalarConfigs = useKernelVizStore((s) => s.scalarConfigs);
  const bufferConfigs = useKernelVizStore((s) => s.bufferConfigs);
  const launchConfig = useKernelVizStore((s) => s.launchConfig);
  const updateScalarConfig = useKernelVizStore((s) => s.updateScalarConfig);
  const updateLaunchConfig = useKernelVizStore((s) => s.updateLaunchConfig);
  const startRun = useKernelVizStore((s) => s.startRun);
  const play = useKernelVizStore((s) => s.play);
  const steps = useKernelVizStore((s) => s.steps);
  const status = useKernelVizStore((s) => s.status);
  const lastRunSignature = useKernelVizStore((s) => s.lastRunSignature);

  const sig = functionSignatures.find((s) => s.name === selectedFunctionName);
  const scalarParams = sig?.params.filter((p) => p.type === "int" || p.type === "float") ?? [];
  if (scalarParams.length === 0 && !sig?.isKernel) return null;

  const canProceed = status !== "parse-error" && status !== "no-source";
  const currentSignature = computeConfigSignature(bufferConfigs, scalarConfigs, launchConfig);
  const isInitialized = steps.length > 0 && currentSignature === lastRunSignature;

  function handleClick() {
    if (isInitialized) {
      play();
      return;
    }
    startRun();
    const freshErrors = useKernelVizStore.getState().configErrors;
    if (freshErrors.length > 0) {
      toast.error("Can't initialize with these values", {
        id: CONFIG_ERROR_TOAST_ID,
        description: freshErrors.map((e) => e.message).join(" "),
      });
    } else {
      toast.dismiss(CONFIG_ERROR_TOAST_ID);
    }
  }

  return (
    <div className="pointer-events-auto flex w-full flex-col gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-md backdrop-blur-sm">
      <span className="font-mono font-semibold">Scalars</span>
      <div className="flex flex-wrap items-center gap-2.5">
        {scalarParams.map((p) => (
          <div key={p.name} className="flex items-center gap-1.5">
            <Label className="font-mono text-xs text-muted-foreground">{p.name}</Label>
            <Input
              type="number"
              value={scalarConfigs[p.name] ?? 0}
              onChange={(e) => updateScalarConfig(p.name, Number(e.target.value))}
              className="h-8 w-14"
            />
          </div>
        ))}
        {sig?.isKernel && (
          <>
            <div className="flex items-center gap-1.5">
              <Label className="font-mono text-xs text-muted-foreground">gridDim.x</Label>
              <Input
                type="number"
                min={1}
                value={launchConfig.gridDimX}
                onChange={(e) => updateLaunchConfig({ gridDimX: Math.max(1, Number(e.target.value)) })}
                className="h-8 w-14"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <Label className="font-mono text-xs text-muted-foreground">blockDim.x</Label>
              <Input
                type="number"
                min={1}
                value={launchConfig.blockDimX}
                onChange={(e) => updateLaunchConfig({ blockDimX: Math.max(1, Number(e.target.value)) })}
                className="h-8 w-14"
              />
            </div>
          </>
        )}
        <Button size="sm" disabled={!canProceed} onClick={handleClick}>
          {isInitialized ? "Run" : "Initialize"}
        </Button>
      </div>
    </div>
  );
}
