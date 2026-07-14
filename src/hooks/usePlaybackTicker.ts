"use client";

import { useEffect } from "react";
import { useKernelVizStore } from "@/state/store";

/** Drives auto-advance while playing: one store.tick() per (1000 / speed) ms. */
export function usePlaybackTicker() {
  const isPlaying = useKernelVizStore((s) => s.isPlaying);
  const speed = useKernelVizStore((s) => s.speed);

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = Math.max(1000 / speed, 16);
    const id = setInterval(() => {
      useKernelVizStore.getState().tick();
    }, intervalMs);
    return () => clearInterval(id);
  }, [isPlaying, speed]);
}
