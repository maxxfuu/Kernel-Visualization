export type ShapeMode = "1d" | "2d" | "3d";

export interface Shape {
  mode: ShapeMode;
  layers: number; // stacked 2D planes (3D mode only, otherwise 1)
  rows: number;
  cols: number;
  // Display-only: swaps rows/cols for layout and value lookup, without touching the underlying
  // flat buffer. Only meaningful in 2D/3D mode — see matmulValidation.ts for why this exists.
  transposed: boolean;
}

export function autoShape(length: number, mode: ShapeMode = "2d"): Shape {
  const safeLength = Math.max(1, length);
  if (mode === "1d") {
    return { mode, layers: 1, rows: 1, cols: safeLength, transposed: false };
  }
  if (mode === "3d") {
    const layers = Math.max(1, Math.round(Math.cbrt(safeLength)));
    const remaining = Math.max(1, Math.ceil(safeLength / layers));
    const cols = Math.max(1, Math.ceil(Math.sqrt(remaining)));
    const rows = Math.max(1, Math.ceil(remaining / cols));
    return { mode, layers, rows, cols, transposed: false };
  }
  const cols = Math.max(1, Math.ceil(Math.sqrt(safeLength)));
  const rows = Math.max(1, Math.ceil(safeLength / cols));
  return { mode: "2d", layers: 1, rows, cols, transposed: false };
}

/** The displayed row/col counts, accounting for the transpose flag (rows/cols swap). */
export function displayDims(shape: Pick<Shape, "rows" | "cols" | "transposed">): { rows: number; cols: number } {
  return shape.transposed ? { rows: shape.cols, cols: shape.rows } : { rows: shape.rows, cols: shape.cols };
}
