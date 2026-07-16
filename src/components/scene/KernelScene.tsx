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
import { isMatmulLikeFunction, matmulDimsFromShapes } from "./matmulValidation";
import { ScalarPanel } from "./ScalarPanel";
import { ThreadLanesPanel } from "./ThreadLanesPanel";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";

const MATMUL_TOAST_ID = "matmul-shape-invalid";

function ShapeControl({
  name,
  shape,
  lengthLocked,
  invalid,
  onChange,
}: {
  name: string;
  shape: Shape;
  /** 1D view of a matmul buffer: its length IS m·n (etc.), so it can't be edited directly. */
  lengthLocked: boolean;
  invalid: boolean;
  onChange: (next: Shape) => void;
}) {
  return (
    <div
      className={`pointer-events-auto flex w-full flex-col gap-2 rounded-lg border bg-card px-3 py-2 text-sm text-foreground shadow-md backdrop-blur-sm ${
        invalid ? "border-destructive" : "border-border"
      }`}
    >
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
        >
          <ToggleGroupItem value="1d">1D</ToggleGroupItem>
          <ToggleGroupItem value="2d">2D</ToggleGroupItem>
          <ToggleGroupItem value="3d">3D</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        {shape.mode === "3d" && (
          <>
            <Input
              type="number"
              min={1}
              value={shape.layers}
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
          disabled={lengthLocked}
          onChange={(e) => onChange({ ...shape, cols: Math.max(1, Number(e.target.value) || 1) })}
          className="h-8 w-14"
          title={lengthLocked ? "length is derived from the matrix dims (set via 2D mode or m/n/k)" : shape.mode === "1d" ? "length" : "cols"}
        />
        {shape.mode !== "1d" && (
          <Toggle
            size="sm"
            variant="outline"
            pressed={shape.transposed}
            onPressedChange={(transposed) => onChange({ ...shape, transposed })}
            title="Transpose this matrix (display only -never rewrites the buffer)"
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
  const setMatmulDims = useKernelVizStore((s) => s.setMatmulDims);
  const resetRun = useKernelVizStore((s) => s.resetRun);

  const sig = functionSignatures.find((s) => s.name === selectedFunctionName);
  const bufferParams = useMemo(() => sig?.params.filter((p) => p.type === "int*" || p.type === "float*") ?? [], [sig]);
  // __shared__ arrays aren't function params, so they render as extra panels alongside the
  // device buffers -same cell-level visualization, but with no matmul/transpose controls
  // (block-scoped shared memory doesn't participate in that concept).
  const sharedArrays = useMemo(() => sig?.sharedArrays ?? [], [sig]);

  // Free-form shape overrides for non-matmul buffers; matmul buffer shapes never live here -
  // they always derive from the m/n/k scalars (see derivedMatmulShape below).
  const [shapeOverrides, setShapeOverrides] = useState<Record<string, Shape>>({});

  // By convention (matching matmul_at_b), the first three pointer params are the matmul's
  // A (m×n), B (m×k), and C (n×k), and its scalar dims are named m, n, k -see
  // matmulValidation.ts. Scoped to matmul-like function names so this never fires for
  // unrelated kernels like relu_backward.
  const m = scalarConfigs.m;
  const n = scalarConfigs.n;
  const k = scalarConfigs.k;
  const matmulApplicable =
    isMatmulLikeFunction(selectedFunctionName) &&
    bufferParams.length >= 2 &&
    m !== undefined &&
    n !== undefined &&
    k !== undefined;

  // Matmul shapes are two-way bound to m/n/k: a rows/cols edit that stays consistent is
  // immediately folded back into the scalars (and buffer sizes), while an INCONSISTENT edit is
  // held here as a draft -displayed (in red) but never written to the scalars- until either a
  // follow-up edit or an m/n/k change resolves it.
  const [dimDrafts, setDimDrafts] = useState<Record<string, { rows: number; cols: number }>>({});
  // Display-only transpose flags (never affect validity or what the kernel computes).
  const [transposeFlags, setTransposeFlags] = useState<Record<string, boolean>>({});
  // Display-only re-folds of the same flat buffer: "2d" is the kernel's own m/n/k fold (the
  // one that's synced and validated), "1d" unrolls it into physical memory order, and "3d" is
  // a free fold whose dims live in foldOverrides. None of these touch the data or the scalars.
  const [displayModes, setDisplayModes] = useState<Record<string, ShapeMode>>({});
  const [foldOverrides, setFoldOverrides] = useState<Record<string, { layers: number; rows: number; cols: number }>>({});

  // Whenever the scalars move (panel edit, or a valid shape edit landing), any pending drafts
  // are stale: the freshly derived shapes are the truth again. Reset-during-render (rather
  // than an effect) so the stale drafts never paint.
  const scalarKey = `${selectedFunctionName}:${m}:${n}:${k}`;
  const [prevScalarKey, setPrevScalarKey] = useState(scalarKey);
  if (scalarKey !== prevScalarKey) {
    setPrevScalarKey(scalarKey);
    setDimDrafts({});
    // Custom 3D folds were sized for the old cell count -fall back to the auto fold.
    setFoldOverrides({});
  }

  function derivedMatmulShape(index: number, name: string): Shape {
    // Only called when matmulApplicable, i.e. m/n/k are all defined -the ?? 1 just narrows the type.
    const [mm, nn, kk] = [m ?? 1, n ?? 1, k ?? 1];
    const dims = index === 0 ? { rows: mm, cols: nn } : index === 1 ? { rows: mm, cols: kk } : { rows: nn, cols: kk };
    const draft = dimDrafts[name];
    // A is shown transposed by default so it reads as A^T -the operand the kernel actually
    // multiplies with (matmul_at_b indexes A[l*n+i])- rather than its raw physical storage.
    const transposed = transposeFlags[name] ?? index === 0;
    return { mode: "2d", layers: 1, rows: draft?.rows ?? dims.rows, cols: draft?.cols ?? dims.cols, transposed };
  }

  /** The canonical 2D shape re-folded for display, per the buffer's chosen view mode. */
  function displayedMatmulShape(index: number, name: string): Shape {
    const canonical = derivedMatmulShape(index, name);
    const mode = displayModes[name] ?? "2d";
    if (mode === "2d") return canonical;
    const cellCount = canonical.rows * canonical.cols;
    if (mode === "1d") return { mode: "1d", layers: 1, rows: 1, cols: cellCount, transposed: false };
    const fold = foldOverrides[name] ?? autoShape(cellCount, "3d");
    return { mode: "3d", layers: fold.layers, rows: fold.rows, cols: fold.cols, transposed: canonical.transposed };
  }

  const matmulBufferCount = matmulApplicable ? Math.min(bufferParams.length, 3) : 0;
  // Validity (and the m/n/k sync) always works on the canonical 2D dims, no matter how a
  // buffer is currently folded for display.
  const matmulShapes = bufferParams.slice(0, matmulBufferCount).map((p, i) => derivedMatmulShape(i, p.name));
  const matmulDims =
    matmulBufferCount >= 2 ? matmulDimsFromShapes(matmulShapes[0], matmulShapes[1], matmulShapes[2] ?? null) : null;
  const matmulInvalid = matmulBufferCount >= 2 && matmulDims === null;

  function handleMatmulShapeChange(index: number, name: string, next: Shape) {
    const current = displayedMatmulShape(index, name);
    // Mode switch = pure re-fold of the same flat buffer. 2D snaps back to the kernel's own
    // m/n/k fold; 3D starts from the auto fold the toggle just produced.
    if (next.mode !== current.mode) {
      setDisplayModes((prev) => ({ ...prev, [name]: next.mode }));
      if (next.mode === "3d") {
        setFoldOverrides((prev) => ({ ...prev, [name]: { layers: next.layers, rows: next.rows, cols: next.cols } }));
      }
      return;
    }
    if (next.transposed !== current.transposed) {
      setTransposeFlags((prev) => ({ ...prev, [name]: next.transposed }));
    }
    if (current.mode === "3d") {
      // Free re-fold, display-only -never touches m/n/k, sizes, or validity.
      setFoldOverrides((prev) => ({ ...prev, [name]: { layers: next.layers, rows: next.rows, cols: next.cols } }));
      return;
    }
    if (current.mode !== "2d") return; // 1D length is derived -nothing else to edit
    if (next.rows === current.rows && next.cols === current.cols) return;

    // Candidate shape set = this edit applied on top of what's currently displayed (which
    // includes any other buffer's pending draft).
    const candidate = matmulShapes.map((shape, i) => (i === index ? { rows: next.rows, cols: next.cols } : shape));
    const dims = matmulDimsFromShapes(candidate[0], candidate[1], candidate[2] ?? null);
    if (dims) {
      setDimDrafts({});
      setMatmulDims(dims); // scalars + buffer sizes follow the shapes
    } else {
      setDimDrafts((prev) => ({ ...prev, [name]: { rows: next.rows, cols: next.cols } }));
      // Same rule as a valid edit (where setMatmulDims discards the stale run): ANY dims edit
      // invalidates the recording. Otherwise the old run would keep animating over the draft
      // fold, drawing real accesses at positions the recording was never made for.
      resetRun();
    }
  }

  // Dependency key covers everything the toast message reads, so it stays in sync even while
  // `matmulInvalid` itself doesn't change (e.g. editing B from 4x5 to 2x5 while still invalid).
  const shapesKey = matmulShapes.map((s) => `${s.rows}x${s.cols}`).join("|");

  useEffect(() => {
    if (matmulInvalid) {
      const parts = bufferParams
        .slice(0, matmulBufferCount)
        .map((p, i) => `${p.name}(${matmulShapes[i].rows}×${matmulShapes[i].cols})`)
        .join(", ");
      toast.error("Shapes can't be matrix-multiplied", {
        id: MATMUL_TOAST_ID,
        description: `${parts} -needs A: m×n, B: m×k, C: n×k. Fix the dims (or m/n/k) to clear the red.`,
      });
    } else {
      toast.dismiss(MATMUL_TOAST_ID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matmulInvalid, shapesKey]);

  if (bufferParams.length === 0) {
    return (
      <div className="flex h-full items-center justify-center bg-background text-sm text-muted-foreground">
        Paste a kernel function to see its buffers here.
      </div>
    );
  }

  function shapeForIndex(index: number, name: string): Shape {
    if (index < matmulBufferCount) return displayedMatmulShape(index, name);
    return shapeOverrides[name] ?? autoShape(bufferConfigs[name]?.size ?? 0);
  }

  // Panels = the device buffers (matmul-aware shape controls) followed by any __shared__
  // arrays (auto-shaped, no transpose/matmul concept) -laid out and rendered as one list.
  const panelNames = [...bufferParams.map((p) => p.name), ...sharedArrays.map((s) => s.name)];
  const panelShapes = [
    ...bufferParams.map((p, i) => shapeForIndex(i, p.name)),
    ...sharedArrays.map((s) => shapeOverrides[s.name] ?? autoShape(s.size)),
  ];
  // When the matmul is impossible, every participating matrix goes red -the error is about
  // the combination, not one buffer.
  const panelInvalid = panelNames.map((_, i) => matmulInvalid && i < matmulBufferCount);

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
            lengthLocked={i < matmulBufferCount && panelShapes[i].mode === "1d"}
            invalid={panelInvalid[i]}
            onChange={(next) => {
              if (i < matmulBufferCount) handleMatmulShapeChange(i, p.name, next);
              else setShapeOverrides((prev) => ({ ...prev, [p.name]: next }));
            }}
          />
        ))}
        <ScalarPanel matmulInvalid={matmulInvalid} />
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
              <BufferMatrix3D key={name} name={name} xOffset={centeredXOffsets[i]} shape={panelShapes[i]} invalid={panelInvalid[i]} />
            ))}
            <OperationBeams />
          </CellPositionsProvider>
        </ScenePaletteProvider>
        <OrbitControls enableDamping dampingFactor={0.08} minDistance={4} maxDistance={40} />
      </Canvas>
    </div>
  );
}
