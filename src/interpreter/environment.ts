import type { PointerType, ScalarType } from "./types";

export interface BufferValue {
  kind: "buffer";
  name: string;
  elementType: ScalarType;
  data: Float32Array | Int32Array;
}

export interface ScalarValue {
  kind: "scalar";
  type: ScalarType;
  value: number;
}

export type Value = BufferValue | ScalarValue;

export function makeBuffer(name: string, type: PointerType, values: number[]): BufferValue {
  const elementType: ScalarType = type === "float*" ? "float" : "int";
  const data = elementType === "float" ? new Float32Array(values) : new Int32Array(values);
  return { kind: "buffer", name, elementType, data };
}

/** Scope-chained environment. A fresh Scope is pushed per function frame, block, and loop iteration. */
export class Scope {
  private readonly vars = new Map<string, Value>();
  constructor(private readonly parent: Scope | null) {}

  declare(name: string, value: Value) {
    this.vars.set(name, value);
  }

  lookup(name: string): Value | undefined {
    return this.vars.get(name) ?? this.parent?.lookup(name);
  }

  /** Mutates the scalar in whichever scope in the chain owns `name`. Returns false if not found. */
  setScalar(name: string, value: number): boolean {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let scope: Scope | null = this;
    while (scope) {
      const existing = scope.vars.get(name);
      if (existing && existing.kind === "scalar") {
        scope.vars.set(name, { kind: "scalar", type: existing.type, value });
        return true;
      }
      scope = scope.parent;
    }
    return false;
  }

  /** Flattened snapshot of every scalar visible in this scope chain, for StepEvent.scopeSnapshot. */
  snapshotScalars(): Record<string, number> {
    const result: Record<string, number> = {};
    const chain: Scope[] = [];
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let scope: Scope | null = this;
    while (scope) {
      chain.push(scope);
      scope = scope.parent;
    }
    // Walk outermost-to-innermost so inner shadowing wins.
    for (let i = chain.length - 1; i >= 0; i--) {
      for (const [name, value] of chain[i].vars) {
        if (value.kind === "scalar") result[name] = value.value;
      }
    }
    return result;
  }
}
