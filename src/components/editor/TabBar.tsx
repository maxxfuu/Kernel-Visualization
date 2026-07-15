"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTabDisplayTitle, useKernelVizStore } from "@/state/store";
import { CLangIcon } from "@/components/icons/c-lang";
import { CudaIcon } from "@/components/icons/cuda";

/** Only .c / .cu file names get a language logo -anything else (or no extension) gets none. */
function TabIcon({ title }: { title: string }) {
  const lower = title.toLowerCase();
  if (lower.endsWith(".cu")) return <CudaIcon className="h-3.5 w-auto shrink-0" />;
  if (lower.endsWith(".c")) return <CLangIcon className="size-3.5 shrink-0" />;
  return null;
}

export function TabBar() {
  const tabs = useKernelVizStore((s) => s.tabs);
  const activeTabId = useKernelVizStore((s) => s.activeTabId);
  const switchTab = useKernelVizStore((s) => s.switchTab);
  const closeTab = useKernelVizStore((s) => s.closeTab);
  const createTab = useKernelVizStore((s) => s.createTab);
  const renameTab = useKernelVizStore((s) => s.renameTab);
  // Subscribing to functionSignatures ensures tab titles refresh as soon as the active tab's
  // source parses to a (differently named) function.
  useKernelVizStore((s) => s.functionSignatures);

  const [editingTabId, setEditingTabId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!editingTabId) return;
    inputRef.current?.focus();
    inputRef.current?.select();
  }, [editingTabId]);

  function startEditing(tabId: string, currentTitle: string) {
    setEditingTabId(tabId);
    setDraft(currentTitle);
  }

  function commitEdit() {
    const tabId = editingTabId;
    setEditingTabId(null);
    if (!tabId) return;
    const trimmed = draft.trim();
    // Only accept names ending in .c or .cu -anything else is discarded (tab keeps its old name).
    if (/\.(c|cu)$/i.test(trimmed)) {
      renameTab(tabId, trimmed);
    }
  }

  return (
    <div className="flex items-center gap-1 overflow-x-auto border-b border-border px-1.5 py-1.5">
      {tabs.map((tab, i) => {
        const active = tab.id === activeTabId;
        const title = getTabDisplayTitle(useKernelVizStore.getState(), tab.id, i);
        const isEditing = editingTabId === tab.id;
        return (
          <div
            key={tab.id}
            className={cn(
              "group flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-xs",
              active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50",
            )}
          >
            {isEditing ? (
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    commitEdit();
                  } else if (e.key === "Escape") {
                    e.preventDefault();
                    setEditingTabId(null);
                  }
                }}
                className="w-28 rounded-sm bg-transparent font-mono outline-none"
              />
            ) : (
              <>
                <TabIcon title={title} />
                <button
                  type="button"
                  onClick={() => switchTab(tab.id)}
                  onDoubleClick={() => startEditing(tab.id, title)}
                  className="max-w-32 truncate font-mono"
                  title={title}
                >
                  {title}
                </button>
              </>
            )}
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
