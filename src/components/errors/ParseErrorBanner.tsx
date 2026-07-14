"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useKernelVizStore } from "@/state/store";

export function ParseErrorBanner() {
  const parseErrors = useKernelVizStore((s) => s.parseErrors);
  if (parseErrors.length === 0) return null;

  return (
    <Alert variant="destructive" className="mx-3 mt-3">
      <AlertCircle className="size-4" />
      <AlertTitle>
        {parseErrors.length} parse error{parseErrors.length > 1 ? "s" : ""}
      </AlertTitle>
      <AlertDescription>
        <ul className="list-inside list-disc">
          {parseErrors.slice(0, 5).map((e, i) => (
            <li key={i}>
              line {e.line}: {e.message}
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
