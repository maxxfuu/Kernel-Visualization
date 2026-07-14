"use client";

import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useKernelVizStore } from "@/state/store";

export function RuntimeErrorCallout() {
  const runErrors = useKernelVizStore((s) => s.runErrors);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);

  const errorHere = runErrors.find((e) => e.seq === currentStepIndex);
  if (!errorHere) return null;

  return (
    <Alert variant={errorHere.fatal ? "destructive" : "default"} className="mx-3 mt-3">
      <AlertTriangle className="size-4" />
      <AlertTitle>{errorHere.fatal ? "Execution stopped" : "Out-of-bounds access"}</AlertTitle>
      <AlertDescription>
        {errorHere.message} (line {errorHere.line}, step {errorHere.seq + 1})
      </AlertDescription>
    </Alert>
  );
}
