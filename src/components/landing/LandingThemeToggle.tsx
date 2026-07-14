"use client";

import { useSyncExternalStore } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const STORAGE_KEY = "kernel-viz-theme";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export function LandingThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <AnimatedThemeToggler
      theme={isDark ? "dark" : "light"}
      onThemeChange={(next) => localStorage.setItem(STORAGE_KEY, next)}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50 [&_svg]:size-4"
    />
  );
}
