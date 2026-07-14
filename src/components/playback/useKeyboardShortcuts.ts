"use client";

import { useEffect } from "react";
import { useKernelVizStore } from "@/state/store";

function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable || el.closest(".cm-editor") !== null;
}

export function useKeyboardShortcuts() {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (isTypingTarget(e.target)) return;
      const store = useKernelVizStore.getState();
      if (store.steps.length === 0) return;

      switch (e.key) {
        case " ":
          e.preventDefault();
          store.togglePlay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (e.shiftKey) store.jumpToPrevIteration();
          else store.stepBackward();
          break;
        case "ArrowRight":
          e.preventDefault();
          if (e.shiftKey) store.jumpToNextIteration();
          else store.stepForward();
          break;
        case "Home":
          e.preventDefault();
          store.jumpToStart();
          break;
        case "End":
          e.preventDefault();
          store.jumpToEnd();
          break;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
