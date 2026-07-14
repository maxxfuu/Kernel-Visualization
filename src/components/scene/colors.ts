import { Color } from "three";

export interface ScenePalette {
  background: string;
  fog: string;
  gridMajor: string;
  gridMinor: string;
  // Idle cells are colored on a cold->hot gradient by their own buffer's magnitude, so the grid
  // itself reads as a heatmap of the matrix, independent of the read/write highlight overlay.
  idleLow: Color;
  idleHigh: Color;
  read: Color;
  write: Color;
  error: Color;
  labelText: string;
  labelSubtext: string;
  labelShadow: string;
}

export const DARK_PALETTE: ScenePalette = {
  background: "#000000",
  fog: "#000000",
  gridMajor: "#2a2a2a",
  gridMinor: "#161616",
  idleLow: new Color("#252b3a"),
  idleHigh: new Color("#5b7ab8"),
  read: new Color("#3b82f6"),
  write: new Color("#f59e0b"),
  error: new Color("#ef4444"),
  labelText: "rgba(255,255,255,0.9)",
  labelSubtext: "rgba(255,255,255,0.4)",
  labelShadow: "0 1px 2px rgba(0,0,0,0.8)",
};

export const LIGHT_PALETTE: ScenePalette = {
  background: "#f4f4f5",
  fog: "#f4f4f5",
  gridMajor: "#d4d4d8",
  gridMinor: "#e4e4e7",
  idleLow: new Color("#e2e8f0"),
  idleHigh: new Color("#2563eb"),
  read: new Color("#2563eb"),
  write: new Color("#d97706"),
  error: new Color("#dc2626"),
  labelText: "rgba(0,0,0,0.85)",
  labelSubtext: "rgba(0,0,0,0.45)",
  labelShadow: "0 1px 2px rgba(255,255,255,0.8)",
};

export const CELL_SIZE = 0.85;
export const CELL_SPACING = 1.05;
export const LAYER_SPACING = 1.6; // vertical gap between stacked 2D planes in 3D mode
export const SLOT_WIDTH = 9;
export const SLOT_DEPTH = 9;
