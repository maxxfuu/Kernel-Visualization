"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";

const STORAGE_KEY = "kernel-viz-theme";

export function ThemeToggle() {
  const isDark = useIsDarkMode();

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  }

  return (
    <Button variant="outline" size="icon" onClick={toggle} title={isDark ? "Switch to light theme" : "Switch to dark theme"}>
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
