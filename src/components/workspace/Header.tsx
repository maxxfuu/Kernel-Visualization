"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ConfigPanel } from "@/components/config/ConfigPanel";
import { ThemeToggle } from "./ThemeToggle";
import { useKernelVizStore } from "@/state/store";

export function Header() {
  const parseErrors = useKernelVizStore((s) => s.parseErrors);
  const truncated = useKernelVizStore((s) => s.truncated);

  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-2.5">
      <div className="flex items-center gap-2">
        <h1 className="text-sm font-semibold">
          <Link href="/" className="transition-opacity hover:opacity-70">
            Kernel Visualization
          </Link>
        </h1>
        {parseErrors.length > 0 && <Badge variant="destructive">{parseErrors.length} parse error(s)</Badge>}
        {truncated && <Badge variant="secondary">truncated — possible infinite loop</Badge>}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ConfigPanel />
      </div>
    </header>
  );
}
