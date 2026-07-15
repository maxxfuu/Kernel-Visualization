"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

function Section({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

export function InfoPanel() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" size="icon" title="About this interpreter">
            <Info className="size-4" />
          </Button>
        }
      />
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>How this interpreter works</DialogTitle>
        </DialogHeader>

        <Section title="What this is">
          <p>
            A hand-rolled interpreter for a small C-like kernel language -not a wrapper around a real compiler. Source goes
            through a lexer → parser → AST, then a tree-walking evaluator runs it to completion up front, recording every
            variable write, array read/write, loop test, and (for CUDA) barrier as one flat, ordered step trace. Scrubbing or
            playing back just replays that trace -nothing is re-executed live.
          </p>
          <p>
            The guiding rule: the visualization shows exactly what the code does, bugs included. Out-of-bounds
            reads/writes don&apos;t crash the run -they&apos;re recorded as non-fatal errors and execution continues, so a
            buggy kernel still shows its wrong-but-deterministic behavior instead of being silently &quot;fixed&quot; or
            stopped. Integer division-by-zero and runaway loops (capped at a max step count) are the only fatal cases.
          </p>
        </Section>

        <Section
          title={
            <span className="flex items-center gap-2">
              C <Badge variant="secondary">.c</Badge>
            </span>
          }
        >
          <p>
            Supports one function executed at a time: <code className="font-mono text-xs">int</code>/
            <code className="font-mono text-xs">float</code> scalars and pointer params, <code className="font-mono text-xs">for</code>
            /<code className="font-mono text-xs">while</code> loops, <code className="font-mono text-xs">if</code>/
            <code className="font-mono text-xs">else</code>, arrays via pointer + index, and arithmetic/comparison/logical
            operators. Numeric values carry an int/float tag so truncating integer division and modulo (the classic{" "}
            <code className="font-mono text-xs">idx / cols</code> pattern) reproduce real C semantics. No structs,{" "}
            <code className="font-mono text-xs">malloc</code>, multi-level pointers, or calling other user-defined functions.
          </p>
        </Section>

        <Section
          title={
            <span className="flex items-center gap-2">
              CUDA <Badge variant="secondary">.cu</Badge>
            </span>
          }
        >
          <p>
            Everything from the C subset above, plus <code className="font-mono text-xs">__global__</code>/
            <code className="font-mono text-xs">__device__</code>/<code className="font-mono text-xs">__host__</code>{" "}
            qualifiers, <code className="font-mono text-xs">threadIdx</code>/<code className="font-mono text-xs">blockIdx</code>/
            <code className="font-mono text-xs">blockDim</code>/<code className="font-mono text-xs">gridDim</code> (only the{" "}
            <code className="font-mono text-xs">.x</code> axis varies -this is a 1D-grid/1D-block model),{" "}
            <code className="font-mono text-xs">__shared__</code> arrays, and{" "}
            <code className="font-mono text-xs">__syncthreads()</code>.
          </p>
          <p>
            A real scheduler drives this, not a shortcut: blocks run one at a time (they never synchronize with each other
            on real hardware either, so that&apos;s free to simplify), but threads <em>within</em> a block are genuinely
            interleaved -each is its own paused/resumed execution, and a <code className="font-mono text-xs">__syncthreads()</code>{" "}
            barrier only releases every thread in the block once all of them have reached it. That&apos;s why the
            &quot;Block N threads&quot; panel can show some threads waiting (amber) while others are still catching up
            (blue) mid-scrub. <code className="font-mono text-xs">__shared__</code> arrays are fresh, zeroed memory
            allocated once per block and rendered as their own buffer panel, just like a device buffer.
          </p>
        </Section>
      </DialogContent>
    </Dialog>
  );
}
