"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { toast } from "sonner";
import { useKernelVizStore } from "@/state/store";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";
import { CellPositionsProvider } from "./CellPositionsContext";
import { ScenePaletteProvider } from "./ScenePaletteContext";
import { BufferMatrix3D } from "./BufferMatrix3D";
import { OperationBeams } from "./OperationBeams";
import { CELL_SPACING, DARK_PALETTE, LIGHT_PALETTE } from "./colors";
import { autoShape, displayDims, Shape, ShapeMode } from "./shape";
import { computeMatmulStatus } from "./matmulValidation";
import { ScalarPanel } from "./ScalarPanel";
import { ThreadLanesPanel } from "./ThreadLanesPanel";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";

const MATMUL_TOAST_ID = "matmul-shape-invalid";

function ShapeControl({
  name,
  shape,
  transposeEnabled,
  dimsLocked,
  lockedHint,
  onChange,
}: {
  name: string;
  shape: Shape;
  transposeEnabled: boolean;
  dimsLocked: boolean;
  lockedHint?: string;
  onChange: (next: Shape) => void;
}) {
  return (
    <div className="pointer-events-auto flex w-full flex-col gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-md backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="font-mono font-semibold">{name}</span>
        <ToggleGroup
          size="sm"
          value={[shape.mode]}
          onValueChange={(v) => {
            const mode = v[0] as ShapeMode | undefined;
            if (!mode || mode === shape.mode) return;
            const length = shape.layers * shape.rows * shape.cols;
            onChange(autoShape(length, mode));
          }}
          disabled={dimsLocked}
        >
          <ToggleGroupItem value="1d">1D</ToggleGroupItem>
          <ToggleGroupItem value="2d">2D</ToggleGroupItem>
          <ToggleGroupItem value="3d">3D</ToggleGroupItem>
        </ToggleGroup>
        {dimsLocked && (
          <span className="text-xs text-muted-foreground" title={lockedHint}>
            (derived)
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        {shape.mode === "3d" && (
          <>
            <Input
              type="number"
              min={1}
              value={shape.layers}
              disabled={dimsLocked}
              onChange={(e) => onChange({ ...shape, layers: Math.max(1, Number(e.target.value) || 1) })}
              className="h-8 w-14"
              title="layers"
            />
            <span className="text-muted-foreground">×</span>
          </>
        )}
        {shape.mode !== "1d" && (
          <>
            <Input
              type="number"
              min={1}
              value={shape.rows}
              disabled={dimsLocked}
              onChange={(e) => onChange({ ...shape, rows: Math.max(1, Number(e.target.value) || 1) })}
              className="h-8 w-14"
              title="rows"
            />
            <span className="text-muted-foreground">×</span>
          </>
        )}
        <Input
          type="number"
          min={1}
          value={shape.cols}
          disabled={dimsLocked}
          onChange={(e) => onChange({ ...shape, cols: Math.max(1, Number(e.target.value) || 1) })}
          className="h-8 w-14"
          title={shape.mode === "1d" ? "length" : "cols"}
        />
        {shape.mode !== "1d" && (
          <Toggle
            size="sm"
            variant="outline"
            pressed={shape.transposed}
            disabled={!transposeEnabled}
            onPressedChange={(transposed) => onChange({ ...shape, transposed })}
            title={transposeEnabled ? "Transpose this matrix" : "Transposing this wouldn't make the matmul valid"}
          >
            Transpose
          </Toggle>
        )}
      </div>
    </div>
  );
}

export function KernelScene() {
  const isDark = useIsDarkMode();
  const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;
  const functionSignatures = useKernelVizStore((s) => s.functionSignatures);
  const selectedFunctionName = useKernelVizStore((s) => s.selectedFunctionName);
  const bufferConfigs = useKernelVizStore((s) => s.bufferConfigs);
  const scalarConfigs = useKernelVizStore((s) => s.scalarConfigs);
  const steps = useKernelVizStore((s) => s.steps);

  const sig = functionSignatures.find((s) => s.name === selectedFunctionName);
  const bufferParams = useMemo(() => sig?.params.filter((p) => p.type === "int*" || p.type === "float*") ?? [], [sig]);
  // __shared__ arrays aren't function params, so they render as extra panels alongside the
  // device buffers -same cell-level visualization, but with no matmul/transpose controls
  // (block-scoped shared memory doesn't participate in that concept).
  const sharedArrays = useMemo(() => sig?.sharedArrays ?? [], [sig]);

  // Only explicit user overrides live in state; buffers without one fall back to an
  // auto-computed square-ish 2D shape at render time (see `effectiveShape` below).
  const [shapeOverrides, setShapeOverrides] = useState<Record<string, Shape>>({});

  const leftOperand = bufferParams[0];
  const rightOperand = bufferParams[1];

  // By convention (and per the matmul_at_b / matmul_a_bt examples), the first two pointer
  // params are the matmul operands, and their scalar dimensions are named m, n, k, matching
  // the signature (A, B, C, m, n, k). Scoped to matmul-like function names (see
  // isMatmulLikeFunction) so it never fires for unrelated kernels like relu_backward.
  //
  // Once a run exists, the displayed shape for A/B MUST reflect the real m/n/k actually used
  // by that run -otherwise "stepping through" shows a computation that doesn't match what's
  // on screen. Before a run, shapes are free-form for pedagogical "would this multiply?"
  // exploration (see the toast/transpose-to-fix flow below).
  const hasRunDerivedDims =
    steps.length > 0 &&
    scalarConfigs.m !== undefined &&
    scalarConfigs.n !== undefined &&
    scalarConfigs.k !== undefined;

  function runDerivedShape(kind: "left" | "right", prevTransposed: boolean): Shape {
    const m = scalarConfigs.m;
    const n = scalarConfigs.n;
    const k = scalarConfigs.k;
    // A is physically m rows x n cols (matmul_at_b: A[l*n+i]); shown transposed by default so
    // it reads as "row i of A used in the product" (matching A^T, the operand the kernel
    // actually implements) instead of the raw physical (untransposed) storage.
    if (kind === "left") return { mode: "2d", layers: 1, rows: m, cols: n, transposed: prevTransposed };
    // B is physically m rows x k cols (matmul_at_b: B[l*k+j]), used directly, untransposed.
    return { mode: "2d", layers: 1, rows: m, cols: k, transposed: prevTransposed };
  }

  function effectiveShape(name: string): Shape {
    const prev = shapeOverrides[name];
    if (hasRunDerivedDims && leftOperand && name === leftOperand.name) {
      return runDerivedShape("left", prev?.transposed ?? true);
    }
    if (hasRunDerivedDims && rightOperand && name === rightOperand.name) {
      return runDerivedShape("right", prev?.transposed ?? false);
    }
    return prev ?? autoShape(bufferConfigs[name]?.size ?? 0);
  }

  const leftShape = leftOperand ? effectiveShape(leftOperand.name) : null;
  const rightShape = rightOperand ? effectiveShape(rightOperand.name) : null;
  const matmulStatus = computeMatmulStatus(selectedFunctionName, leftShape, rightShape);

  // The output (and any further) buffer's shape is never independently chosen -it's always
  // C = A @ B's shape: rows from the left operand, cols from the right operand.
  const derivedOutputDims =
    matmulStatus.applicable && leftShape && rightShape
      ? { rows: displayDims(leftShape).rows, cols: displayDims(rightShape).cols }
      : null;

  function outputShape(name: string): Shape {
    if (derivedOutputDims) {
      return { mode: "2d", layers: 1, rows: derivedOutputDims.rows, cols: derivedOutputDims.cols, transposed: false };
    }
    return shapeOverrides[name] ?? autoShape(bufferConfigs[name]?.size ?? 0);
  }

  function shapeForIndex(index: number, name: string): Shape {
    if (matmulStatus.applicable && index >= 2) return outputShape(name);
    return effectiveShape(name);
  }

  // Dependency key covers everything the toast message reads, so it stays in sync even while
  // `valid` itself doesn't change (e.g. editing B from 4x4 to 2x2 while still invalid).
  const leftDims = leftShape ? `${leftShape.rows}x${leftShape.cols}x${leftShape.transposed}` : "";
  const rightDims = rightShape ? `${rightShape.rows}x${rightShape.cols}x${rightShape.transposed}` : "";

  useEffect(() => {
    if (matmulStatus.applicable && !matmulStatus.valid && leftShape && rightShape) {
      toast.error("Shapes can't be matrix-multiplied", {
        id: MATMUL_TOAST_ID,
        description: `${leftOperand?.name}(${leftShape.rows}×${leftShape.cols}) × ${rightOperand?.name}(${rightShape.rows}×${rightShape.cols}) -try transposing one.`,
      });
    } else {
      toast.dismiss(MATMUL_TOAST_ID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matmulStatus.applicable, matmulStatus.valid, leftOperand?.name, rightOperand?.name, leftDims, rightDims]);

  if (bufferParams.length === 0) {
    return (
      <div className="flex h-full items-center justify-center bg-background text-sm text-muted-foreground">
        Paste a kernel function to see its buffers here.
      </div>
    );
  }

  // Panels = the device buffers (matmul-aware shape controls) followed by any __shared__
  // arrays (auto-shaped, no transpose/matmul concept) -laid out and rendered as one list.
  const panelNames = [...bufferParams.map((p) => p.name), ...sharedArrays.map((s) => s.name)];
  const panelShapes = [
    ...bufferParams.map((p, i) => shapeForIndex(i, p.name)),
    ...sharedArrays.map((s) => shapeOverrides[s.name] ?? autoShape(s.size)),
  ];

  // Slot width follows each buffer's actual on-screen footprint (display cols * spacing)
  // rather than a fixed width, so switching a buffer to 1D/3D or transposing it doesn't
  // overlap its neighbors.
  const MARGIN = 2.5;
  const widths = panelShapes.map((shape) => Math.max(displayDims(shape).cols * CELL_SPACING, 3));
  const xOffsets: number[] = [];
  let cursor = 0;
  widths.forEach((w, i) => {
    if (i === 0) {
      cursor = 0;
    } else {
      cursor += widths[i - 1] / 2 + MARGIN + w / 2;
    }
    xOffsets.push(cursor);
  });
  const totalSpan = (xOffsets[xOffsets.length - 1] ?? 0) + widths[widths.length - 1] / 2 - (xOffsets[0] - widths[0] / 2);
  const center = (xOffsets[0] - widths[0] / 2) + totalSpan / 2;
  const centeredXOffsets = xOffsets.map((x) => x - center);

  function transposeEnabledFor(index: number): boolean {
    if (!matmulStatus.applicable) return true; // no matmul concept for this kernel -free display transform
    if (index >= 2) return false; // output shape (and orientation) is fully derived
    if (index === 0) return hasRunDerivedDims ? true : matmulStatus.leftTransposeEnabled;
    return hasRunDerivedDims ? true : matmulStatus.rightTransposeEnabled;
  }

  function dimsLockedFor(index: number): boolean {
    if (!matmulStatus.applicable) return false;
    if (index >= 2) return true; // output dims always derived from A/B
    return hasRunDerivedDims; // operand dims lock once they're driven by a real run's m/n/k
  }

  return (
    // `isolate` pins drei's Html-portaled labels (which get their own dynamically computed
    // z-index for depth-sorting) to this stacking context, so they can never climb above a
    // modal Dialog rendered outside it, no matter how large that computed z-index gets.
    <div className="relative isolate h-full w-full" style={{ backgroundColor: palette.background }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 grid grid-cols-[repeat(auto-fit,minmax(min(15rem,100%),1fr))] items-start gap-3 p-3">
        {bufferParams.map((p, i) => (
          <ShapeControl
            key={p.name}
            name={p.name}
            shape={panelShapes[i]}
            transposeEnabled={transposeEnabledFor(i)}
            dimsLocked={dimsLockedFor(i)}
            lockedHint={
              i >= 2
                ? "Output shape = (left operand rows) × (right operand cols) -not independently settable."
                : "Locked to the m/n/k actually used by your last run."
            }
            onChange={(next) => setShapeOverrides((prev) => ({ ...prev, [p.name]: next }))}
          />
        ))}
        <ScalarPanel />
        <ThreadLanesPanel />
      </div>
      <Canvas camera={{ position: [0, 9, 16], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={[palette.background]} />
        <fog attach="fog" args={[palette.fog, 22, 46]} />
        <ambientLight intensity={isDark ? 0.7 : 0.9} />
        <directionalLight position={[6, 10, 6]} intensity={1.2} />
        <directionalLight position={[-6, 4, -4]} intensity={0.4} />
        <gridHelper args={[60, 60, palette.gridMajor, palette.gridMinor]} position={[0, -0.01, 0]} />
        <ScenePaletteProvider palette={palette}>
          <CellPositionsProvider>
            {panelNames.map((name, i) => (
              <BufferMatrix3D key={name} name={name} xOffset={centeredXOffsets[i]} shape={panelShapes[i]} />
            ))}
            <OperationBeams />
          </CellPositionsProvider>
        </ScenePaletteProvider>
        <OrbitControls enableDamping dampingFactor={0.08} minDistance={4} maxDistance={40} />
      </Canvas>
    </div>
  );
}
