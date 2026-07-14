"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { useKernelVizStore } from "@/state/store";
import { useCellPositions, cellKey } from "./CellPositionsContext";
import { getOperandReadsForWrite } from "@/lib/operandLookup";
import { useScenePalette } from "./ScenePaletteContext";
import type { Color as ThreeColor } from "three";

const TRAVEL_MS = 450;

function Particle({ from, to, resetKey, color }: { from: Vector3; to: Vector3; resetKey: number; color: ThreeColor }) {
  const meshRef = useRef<Mesh>(null);
  const startedAtRef = useRef(0);

  useEffect(() => {
    startedAtRef.current = performance.now();
  }, [resetKey]);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = Math.min((performance.now() - startedAtRef.current) / TRAVEL_MS, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    mesh.position.lerpVectors(from, to, eased);
    mesh.visible = t < 1;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.12, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
    </mesh>
  );
}

export function OperationBeams() {
  const palette = useScenePalette();
  const steps = useKernelVizStore((s) => s.steps);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);
  const positions = useCellPositions();

  const beams = useMemo(() => {
    const step = steps[currentStepIndex];
    if (!step || step.kind !== "mem-write") return [];
    const operands = getOperandReadsForWrite(steps, currentStepIndex);
    const toPos = positions.get(cellKey(step.buffer, step.index));
    if (!toPos) return [];
    return operands
      .map((op) => {
        const fromPos = positions.get(cellKey(op.buffer, op.index));
        if (!fromPos) return null;
        return { from: new Vector3(...fromPos), to: new Vector3(...toPos) };
      })
      .filter((b): b is { from: Vector3; to: Vector3 } => b !== null);
  }, [steps, currentStepIndex, positions]);

  if (beams.length === 0) return null;

  return (
    <group>
      {beams.map((b, i) => (
        <group key={i}>
          <Line points={[b.from, b.to]} color={palette.write.getStyle()} opacity={0.35} transparent lineWidth={1.5} />
          <Particle from={b.from} to={b.to} resetKey={currentStepIndex} color={palette.write} />
        </group>
      ))}
    </group>
  );
}
