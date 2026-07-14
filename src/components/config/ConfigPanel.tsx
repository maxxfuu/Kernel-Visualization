"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useKernelVizStore } from "@/state/store";
import { ConfigForm } from "./ConfigForm";

export function ConfigPanel() {
  const [open, setOpen] = useState(false);
  const status = useKernelVizStore((s) => s.status);
  const canConfigure = status !== "parse-error" && status !== "no-source";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" size="sm" disabled={!canConfigure}>
            Configure
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Buffer sizes</DialogTitle>
        </DialogHeader>
        <ConfigForm />
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
