"use client";

import { createContext, useContext } from "react";
import { DARK_PALETTE, ScenePalette } from "./colors";

const ScenePaletteContext = createContext<ScenePalette>(DARK_PALETTE);

export function ScenePaletteProvider({ palette, children }: { palette: ScenePalette; children: React.ReactNode }) {
  return <ScenePaletteContext.Provider value={palette}>{children}</ScenePaletteContext.Provider>;
}

export function useScenePalette(): ScenePalette {
  return useContext(ScenePaletteContext);
}
