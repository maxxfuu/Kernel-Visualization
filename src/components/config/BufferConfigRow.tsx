"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useKernelVizStore } from "@/state/store";
import type { ParamSignature } from "@/lib/interpreterClient";

export function BufferConfigRow({ param }: { param: ParamSignature }) {
  const config = useKernelVizStore((s) => s.bufferConfigs[param.name]);
  const updateBufferConfig = useKernelVizStore((s) => s.updateBufferConfig);

  if (!config) return null;

  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-border p-2">
      <Label className="font-mono text-sm">
        {param.name} <span className="text-xs text-muted-foreground">({param.type})</span>
      </Label>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">size</span>
        <Input
          type="number"
          min={1}
          value={config.size}
          onChange={(e) => updateBufferConfig(param.name, { size: Math.max(1, Number(e.target.value) || 1) })}
          className="h-8 w-20"
        />
      </div>
    </div>
  );
}
