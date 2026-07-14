"use client";

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTabDisplayTitle, useKernelVizStore } from "@/state/store";

export function TabBar() {
  const tabs = useKernelVizStore((s) => s.tabs);
  const activeTabId = useKernelVizStore((s) => s.activeTabId);
  const switchTab = useKernelVizStore((s) => s.switchTab);
  const closeTab = useKernelVizStore((s) => s.closeTab);
  const createTab = useKernelVizStore((s) => s.createTab);
  // Subscribing to functionSignatures ensures tab titles refresh as soon as the active tab's
  // source parses to a (differently named) function.
  useKernelVizStore((s) => s.functionSignatures);

  return (
    <div className="flex items-center gap-1 overflow-x-auto border-b border-border px-1.5 py-1.5">
      {tabs.map((tab, i) => {
        const active = tab.id === activeTabId;
        const title = getTabDisplayTitle(useKernelVizStore.getState(), tab.id, i);
        return (
          <div
            key={tab.id}
            className={cn(
              "group flex shrink-0 items-center gap-1 rounded-md px-2.5 py-1 text-xs",
              active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50",
            )}
          >
            <button type="button" onClick={() => switchTab(tab.id)} className="max-w-32 truncate font-mono" title={title}>
              {title}
            </button>
            <button
              type="button"
              onClick={() => closeTab(tab.id)}
              className="rounded-sm opacity-0 hover:bg-border group-hover:opacity-100"
              title="Close tab"
            >
              <X className="size-3" />
            </button>
          </div>
        );
      })}
      <Button variant="ghost" size="icon" className="size-7 shrink-0" onClick={createTab} title="New tab">
        <Plus className="size-3.5" />
      </Button>
    </div>
  );
}
