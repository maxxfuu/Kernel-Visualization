"use client";

import { Button } from "@/components/ui/button";
import { LandingThemeToggle } from "@/components/landing/LandingThemeToggle";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <span className="text-sm font-semibold tracking-tight">Kernel Visualization</span>
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm">
            Start Visualizing
          </Button>
          <LandingThemeToggle />
        </div>
      </div>
    </header>
  );
}
