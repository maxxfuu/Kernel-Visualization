"use client";

import { Pause, Play, SkipBack, SkipForward, StepBack, StepForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useKernelVizStore } from "@/state/store";
import { ScrubBar } from "./ScrubBar";
import { usePlaybackTicker } from "@/hooks/usePlaybackTicker";
import { useKeyboardShortcuts } from "./useKeyboardShortcuts";
import { EditorSettingsPanel } from "@/components/editor/EditorSettingsPanel";
import { ExportPanel } from "@/components/editor/ExportPanel";
import { ImportPanel } from "@/components/editor/ImportPanel";

const SPEEDS = [0.5, 1, 2, 4, 8, 16];

export function PlaybackControls() {
  usePlaybackTicker();
  useKeyboardShortcuts();

  const steps = useKernelVizStore((s) => s.steps);
  const isPlaying = useKernelVizStore((s) => s.isPlaying);
  const speed = useKernelVizStore((s) => s.speed);
  const togglePlay = useKernelVizStore((s) => s.togglePlay);
  const stepForward = useKernelVizStore((s) => s.stepForward);
  const stepBackward = useKernelVizStore((s) => s.stepBackward);
  const jumpToPrevIteration = useKernelVizStore((s) => s.jumpToPrevIteration);
  const jumpToNextIteration = useKernelVizStore((s) => s.jumpToNextIteration);
  const setSpeed = useKernelVizStore((s) => s.setSpeed);

  const disabled = steps.length === 0;

  return (
    <div className="flex items-center gap-3 border-t border-border bg-background px-4 py-2">
      <EditorSettingsPanel />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" disabled={disabled} onClick={jumpToPrevIteration} title="Previous iteration (Shift+←)">
          <SkipBack className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" disabled={disabled} onClick={stepBackward} title="Step back (←)">
          <StepBack className="size-4" />
        </Button>
        <Button variant="default" size="icon" disabled={disabled} onClick={togglePlay} title="Play/Pause (Space)">
          {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
        </Button>
        <Button variant="ghost" size="icon" disabled={disabled} onClick={stepForward} title="Step forward (→)">
          <StepForward className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" disabled={disabled} onClick={jumpToNextIteration} title="Next iteration (Shift+→)">
          <SkipForward className="size-4" />
        </Button>
      </div>

      <ScrubBar />

      <Select value={String(speed)} onValueChange={(v) => setSpeed(Number(v))}>
        <SelectTrigger className="h-8 w-20 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SPEEDS.map((s) => (
            <SelectItem key={s} value={String(s)}>
              {s}×
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="ml-auto flex items-center gap-2">
        <ImportPanel />
        <ExportPanel />
      </div>
    </div>
  );
}
