import { Shape } from "./shape";

/** Scoped heuristic: only apply matmul shape validation to functions that look like a matmul kernel. */
export function isMatmulLikeFunction(name: string | null): boolean {
  return !!name && /matmul/i.test(name);
}

export interface MatmulDims {
  m: number;
  n: number;
  k: number;
}

type Dims = Pick<Shape, "rows" | "cols">;

/**
 * Derives the m/n/k scalars implied by the operand/output buffer shapes, or null when the
 * shapes are inconsistent (the matmul is impossible).
 *
 * Convention (matching the default matmul_at_b kernel's indexing -A[l*n+i], B[l*k+j],
 * C[i*k+j] with l<m, i<n, j<k): A is physically m×n, B is m×k, C is n×k. So the shapes are
 * consistent exactly when A/B share their row count (m), A's cols match C's rows (n), and
 * B's cols match C's cols (k). Physical dims only -the transpose flag is a pure display
 * relabeling and never changes what the kernel computes.
 */
export function matmulDimsFromShapes(a: Dims, b: Dims, c: Dims | null): MatmulDims | null {
  if (a.rows !== b.rows) return null;
  if (c && (a.cols !== c.rows || b.cols !== c.cols)) return null;
  return { m: a.rows, n: a.cols, k: b.cols };
}
