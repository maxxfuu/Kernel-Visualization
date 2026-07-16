"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useKernelVizStore } from "@/state/store";
import { isMatmulLikeFunction } from "./matmulValidation";

const CONFIG_ERROR_TOAST_ID = "config-error";

export function ScalarPanel({ matmulInvalid = false }: { matmulInvalid?: boolean }) {
  const functionSignatures = useKernelVizStore((s) => s.functionSignatures);
  const selectedFunctionName = useKernelVizStore((s) => s.selectedFunctionName);
  const scalarConfigs = useKernelVizStore((s) => s.scalarConfigs);
  const launchConfig = useKernelVizStore((s) => s.launchConfig);
  const updateScalarConfig = useKernelVizStore((s) => s.updateScalarConfig);
  const setMatmulDims = useKernelVizStore((s) => s.setMatmulDims);
  const updateLaunchConfig = useKernelVizStore((s) => s.updateLaunchConfig);
  const startRun = useKernelVizStore((s) => s.startRun);
  const play = useKernelVizStore((s) => s.play);
  const status = useKernelVizStore((s) => s.status);

  const sig = functionSignatures.find((s) => s.name === selectedFunctionName);
  const scalarParams = sig?.params.filter((p) => p.type === "int" || p.type === "float") ?? [];
  if (scalarParams.length === 0 && !sig?.isKernel) return null;

  const isMatmul = isMatmulLikeFunction(selectedFunctionName);
  // While the matrix shapes are inconsistent, running would execute against the last valid
  // m/n/k -not what's on screen- so Run is held until the red state is resolved.
  const canRun = status !== "parse-error" && status !== "no-source" && !matmulInvalid;

  function handleScalarChange(name: string, value: number) {
    // The matmul dims flow through setMatmulDims so the A/B/C shapes AND buffer sizes follow
    // the scalars (two-way binding with the shape controls). Other scalars stay free-form.
    if (isMatmul && (name === "m" || name === "n" || name === "k")) {
      setMatmulDims({ [name]: value });
    } else {
      updateScalarConfig(name, value);
    }
  }

  function handleRun() {
    startRun();
    const freshErrors = useKernelVizStore.getState().configErrors;
    if (freshErrors.length > 0) {
      toast.error("Can't run with these values", {
        id: CONFIG_ERROR_TOAST_ID,
        description: freshErrors.map((e) => e.message).join(" "),
      });
      return;
    }
    toast.dismiss(CONFIG_ERROR_TOAST_ID);
    play();
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
              onChange={(e) => handleScalarChange(p.name, Number(e.target.value))}
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
        <Button
          size="sm"
          disabled={!canRun}
          onClick={handleRun}
          title={matmulInvalid ? "Fix the matrix shapes first -they can't be matrix-multiplied." : undefined}
        >
          Run
        </Button>
      </div>
    </div>
  );
}
