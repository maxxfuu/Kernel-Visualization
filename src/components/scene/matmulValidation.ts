import { displayDims, Shape } from "./shape";

/** Scoped heuristic: only apply matmul shape validation to functions that look like a matmul kernel. */
export function isMatmulLikeFunction(name: string | null): boolean {
  return !!name && /matmul/i.test(name);
}

export function canMatmul(left: Shape, right: Shape): boolean {
  const leftDims = displayDims(left);
  const rightDims = displayDims(right);
  return leftDims.cols === rightDims.rows;
}

export interface MatmulStatus {
  applicable: boolean; // this is a matmul-like kernel with (at least) two operand buffers
  valid: boolean; // current (A, B) shapes, given their transpose flags, are matmul-compatible
  leftTransposeEnabled: boolean; // flipping A's transpose alone would change validity in a useful way
  rightTransposeEnabled: boolean; // flipping B's transpose alone would change validity in a useful way
}

/**
 * Checks whether the first two operand buffers (by convention, A and B) can be matrix-multiplied
 * given their current display shapes, and whether transposing either one (alone) would fix an
 * otherwise-invalid combination. Only meaningful for matmul-like kernels — see isMatmulLikeFunction.
 */
export function computeMatmulStatus(functionName: string | null, left: Shape | null, right: Shape | null): MatmulStatus {
  if (!isMatmulLikeFunction(functionName) || !left || !right) {
    return { applicable: false, valid: true, leftTransposeEnabled: false, rightTransposeEnabled: false };
  }
  const valid = canMatmul(left, right);
  const leftFlipped = { ...left, transposed: !left.transposed };
  const rightFlipped = { ...right, transposed: !right.transposed };
  return {
    applicable: true,
    valid,
    leftTransposeEnabled: canMatmul(leftFlipped, right),
    rightTransposeEnabled: canMatmul(left, rightFlipped),
  };
}
