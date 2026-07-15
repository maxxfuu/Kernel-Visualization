"use client";

import { Html } from "@react-three/drei";
import { useMemoryVisualState } from "./useMemoryVisualState";
import { useCellPositions, cellKey } from "./CellPositionsContext";
import { Cell3D, CellState } from "./Cell3D";
import { CELL_SPACING, LAYER_SPACING } from "./colors";
import { displayDims, type Shape } from "./shape";
import { useScenePalette } from "./ScenePaletteContext";

export interface BufferMatrix3DProps {
  name: string;
  xOffset: number;
  shape: Shape;
}

const BASE_Y = 0.06;

export function BufferMatrix3D({ name, xOffset, shape }: BufferMatrix3DProps) {
  const palette = useScenePalette();
  const { values, activeAccesses, recentAccesses, errorIndex } = useMemoryVisualState(name);
  const positions = useCellPositions();
  const { layers, rows, cols, transposed } = shape;
  const { rows: displayRows, cols: displayCols } = displayDims(shape);

  function accessFor(index: number): { state: CellState; intensity: number } {
    const active = activeAccesses.find((a) => a.index === index);
    if (active) return { state: errorIndex === index ? "error" : active.kind, intensity: 1 };
    const trail = recentAccesses.find((a) => a.index === index);
    if (trail) return { state: trail.kind, intensity: Math.max(0, 1 - trail.age / 6) };
    return { state: "idle", intensity: 0 };
  }

  const peakMagnitude = Math.max(1e-6, ...values.map((v) => Math.abs(v)));
  const renderCount = Math.min(values.length, layers * rows * cols);
  const labelZ = -((displayRows - 1) / 2) * CELL_SPACING - 1;
  const labelY = BASE_Y + (layers > 1 ? layers * LAYER_SPACING : 1.1);

  const cells = [];
  for (let index = 0; index < renderCount; index++) {
    const perLayer = rows * cols;
    const layer = Math.floor(index / perLayer);
    const rem = index % perLayer;
    // Physical position within the buffer's own natural (untransposed) row-major layout.
    const physicalRow = Math.floor(rem / cols);
    const physicalCol = rem % cols;
    // Transposing swaps which physical axis maps to the display row vs. column -a pure
    // relabeling of position, never a rewrite of the underlying flat buffer.
    const displayRow = transposed ? physicalCol : physicalRow;
    const displayCol = transposed ? physicalRow : physicalCol;
    const x = xOffset + (displayCol - (displayCols - 1) / 2) * CELL_SPACING;
    const z = (displayRow - (displayRows - 1) / 2) * CELL_SPACING;
    const y = BASE_Y + layer * LAYER_SPACING;
    const value = values[index];
    const { state, intensity } = accessFor(index);
    cells.push(
      <Cell3D
        key={index}
        x={x}
        y={y}
        z={z}
        value={value}
        magnitudeFraction={Math.abs(value) / peakMagnitude}
        state={state}
        intensity={intensity}
        label={`${name}[${index}]`}
        onRegisterPosition={(pos) => positions.set(cellKey(name, index), pos)}
      />,
    );
  }

  return (
    <group>
      <Html position={[xOffset, labelY, labelZ]} center distanceFactor={12} zIndexRange={[1, 0]} style={{ pointerEvents: "none" }}>
        <div className="whitespace-nowrap text-center text-xs font-medium" style={{ color: palette.labelText }}>
          <span className="font-mono">{name}</span>
          <span className="ml-1.5" style={{ color: palette.labelSubtext }}>
            {layers > 1 ? `${layers}×${displayRows}×${displayCols}` : `${displayRows}×${displayCols}`}
          </span>
          {transposed && (
            <span className="ml-1.5" style={{ color: palette.write.getStyle() }}>
              Tᵀ
            </span>
          )}
        </div>
      </Html>
      {cells}
    </group>
  );
}
