"use client";

import { createContext, useContext, useState } from "react";
import type { Vector3Tuple } from "three";

type PositionMap = Map<string, Vector3Tuple>;

const CellPositionsContext = createContext<PositionMap | null>(null);

export function cellKey(buffer: string, index: number): string {
  return `${buffer}:${index}`;
}

export function CellPositionsProvider({ children }: { children: React.ReactNode }) {
  // A stable, mutated-in-place Map — writes happen imperatively (see Bar3D's effect), never via setState.
  const [map] = useState<PositionMap>(() => new Map());
  return <CellPositionsContext.Provider value={map}>{children}</CellPositionsContext.Provider>;
}

export function useCellPositions(): PositionMap {
  const ctx = useContext(CellPositionsContext);
  if (!ctx) throw new Error("useCellPositions must be used within a CellPositionsProvider");
  return ctx;
}
