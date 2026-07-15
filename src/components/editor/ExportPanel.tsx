"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getTabDisplayTitle, getTabSource, useKernelVizStore } from "@/state/store";

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function ExportPanel() {
  const [open, setOpen] = useState(false);
  const tabs = useKernelVizStore((s) => s.tabs);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function onOpenChange(next: boolean) {
    if (next) setSelected(new Set(tabs.map((t) => t.id)));
    setOpen(next);
  }

  function toggle(id: string, checked: boolean) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  const allSelected = selected.size === tabs.length;

  function handleExport() {
    const state = useKernelVizStore.getState();
    tabs.forEach((tab, i) => {
      if (!selected.has(tab.id)) return;
      const title = getTabDisplayTitle(state, tab.id, i);
      const source = getTabSource(state, tab.id);
      downloadFile(title, source);
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger
        render={
          <Button variant="outline" size="sm">
            <Download data-icon="inline-start" className="size-3.5" />
            Export
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export files</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 border-b border-border pb-2 text-sm font-medium">
            <Checkbox
              checked={allSelected}
              onCheckedChange={(checked) => setSelected(checked ? new Set(tabs.map((t) => t.id)) : new Set())}
            />
            Select all
          </label>
          {tabs.map((tab, i) => {
            const title = getTabDisplayTitle(useKernelVizStore.getState(), tab.id, i);
            return (
              <label key={tab.id} className="flex items-center gap-2 text-sm">
                <Checkbox checked={selected.has(tab.id)} onCheckedChange={(checked) => toggle(tab.id, checked)} />
                <span className="truncate font-mono">{title}</span>
              </label>
            );
          })}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={selected.size === 0}>
            Export {selected.size > 0 ? `(${selected.size})` : ""}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
