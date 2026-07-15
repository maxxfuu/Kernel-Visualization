"use client";

import { useEffect, useRef } from "react";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useKernelVizStore } from "@/state/store";

export function ParseErrorBanner() {
  const parseErrors = useKernelVizStore((s) => s.parseErrors);
  const hadErrors = useRef(false);

  useEffect(() => {
    if (parseErrors.length > 0 && !hadErrors.current) {
      const [first] = parseErrors;
      toast.error(`${parseErrors.length} parse error${parseErrors.length > 1 ? "s" : ""}`, {
        description: `line ${first.line}: ${first.message}`,
        position: "top-left",
      });
    }
    hadErrors.current = parseErrors.length > 0;
  }, [parseErrors]);

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
