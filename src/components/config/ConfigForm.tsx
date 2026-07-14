"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useKernelVizStore } from "@/state/store";
import { BufferConfigRow } from "./BufferConfigRow";

export function ConfigForm() {
  const functionSignatures = useKernelVizStore((s) => s.functionSignatures);
  const selectedFunctionName = useKernelVizStore((s) => s.selectedFunctionName);
  const selectFunction = useKernelVizStore((s) => s.selectFunction);

  const sig = functionSignatures.find((s) => s.name === selectedFunctionName);

  if (functionSignatures.length === 0) {
    return <p className="text-sm text-muted-foreground">Fix parse errors to configure inputs.</p>;
  }

  const bufferParams = sig?.params.filter((p) => p.type === "int*" || p.type === "float*") ?? [];

  return (
    <div className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto">
      {functionSignatures.length > 1 && (
        <div className="flex items-center gap-2">
          <Label className="text-xs text-muted-foreground">Function</Label>
          <Select value={selectedFunctionName ?? undefined} onValueChange={(v) => v && selectFunction(v)}>
            <SelectTrigger className="h-8 flex-1 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {functionSignatures.map((s) => (
                <SelectItem key={s.name} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {bufferParams.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Buffer sizes</h3>
          {bufferParams.map((p) => (
            <BufferConfigRow key={p.name} param={p} />
          ))}
        </div>
      )}
    </div>
  );
}
