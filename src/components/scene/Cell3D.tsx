"use client";

import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Mesh, MeshStandardMaterial } from "three";
import { Html } from "@react-three/drei";
import { CELL_SIZE } from "./colors";
import { useScenePalette } from "./ScenePaletteContext";

export type CellState = "idle" | "read" | "write" | "error";

export interface Cell3DProps {
  x: number;
  y: number;
  z: number;
  value: number;
  magnitudeFraction: number; // 0..1, |value| relative to this buffer's peak -drives idle heatmap color
  state: CellState;
  intensity: number; // 0..1 highlight strength (1 = just happened, fading as the trail ages)
  label: string; // e.g. "A[3]"
  // The whole buffer is in an error state (e.g. its shape makes the matmul impossible), so the
  // idle heatmap renders on the red gradient instead of the blue one.
  invalid?: boolean;
  onRegisterPosition?: (pos: [number, number, number]) => void;
}

export function Cell3D({ x, y, z, value, magnitudeFraction, state, intensity, label, invalid, onRegisterPosition }: Cell3DProps) {
  const palette = useScenePalette();
  const meshRef = useRef<Mesh>(null);
  const currentColor = useRef(palette.idleLow.clone());
  const currentScale = useRef(1);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    onRegisterPosition?.([x, y, z]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, y, z]);

  const idleColor = invalid
    ? new Color().copy(palette.invalidIdleLow).lerp(palette.invalidIdleHigh, magnitudeFraction)
    : new Color().copy(palette.idleLow).lerp(palette.idleHigh, magnitudeFraction);
  const targetHue = state === "error" ? palette.error : state === "read" ? palette.read : state === "write" ? palette.write : idleColor;
  const targetScale = state === "idle" ? 1 : 1 + intensity * 0.22;

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const damp = 1 - Math.pow(0.001, delta);

    const mixStrength = state === "idle" ? 0 : Math.max(intensity, 0.25);
    const target = new Color().copy(idleColor).lerp(targetHue, mixStrength);
    currentColor.current.lerp(target, damp);

    currentScale.current += (targetScale - currentScale.current) * damp;
    mesh.scale.set(currentScale.current, 1, currentScale.current);

    const mat = mesh.material as MeshStandardMaterial;
    mat.color.copy(currentColor.current);
    mat.emissive.copy(currentColor.current);
    mat.emissiveIntensity = state === "idle" ? 0.15 : 0.3 + intensity * 0.8;
  });

  return (
    <mesh
      ref={meshRef}
      position={[x, y, z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[CELL_SIZE, 0.12, CELL_SIZE]} />
      <meshStandardMaterial color={palette.idleLow} roughness={0.5} metalness={0.05} />
      <Html center distanceFactor={11} position={[0, 0.15, 0]} zIndexRange={[1, 0]} style={{ pointerEvents: "none" }}>
        <div
          className="whitespace-nowrap text-center font-mono text-[11px] font-medium"
          style={{ color: palette.labelText, textShadow: palette.labelShadow }}
        >
          {Number.isInteger(value) ? value : value.toFixed(2)}
        </div>
      </Html>
      {hovered && (
        <Html center distanceFactor={11} position={[0, 0.55, 0]} zIndexRange={[1, 0]} style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-[11px] text-popover-foreground shadow-md">
            {label} = {value}
          </div>
        </Html>
      )}
    </mesh>
  );
}
