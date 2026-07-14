// Verbatim source strings for the kernels this tool targets, including the intentional
// copy-paste bug in `matmul_a_bt` (named as if it transposes B, but its body is byte-identical
// to `matmul_at_b` and never does).

export const MATMUL_AT_B = `
void matmul_at_b(float *A, float *B, float *C, int m, int n, int k) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < k; j++) {
      C[i * k + j] = 0.0f;
      for (int l = 0; l < m; l++) {
        C[i * k + j] += A[l * n + i] * B[l * k + j];
      }
    }
  }
}
`;

export const MATMUL_A_BT_BUGGY = `
void matmul_a_bt(float *A, float *B, float *C, int m, int n, int k) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < k; j++) {
      C[i * k + j] = 0.0f;
      for (int l = 0; l < m; l++) {
        C[i * k + j] += A[l * n + i] * B[l * k + j];
      }
    }
  }
}
`;

export const RELU_BACKWARD = `
void relu_backward(float *grad, float *x, int size) {
  for (int i = 0; i < size; i++) {
    grad[i] *= (x[i] > 0);
  }
}
`;

export const BIAS_BACKWARDS = `
void bias_backwards(float *grad_bias, float *grad, int batch_size, int size) {
  for (int i = 0; i < size; i++) {
    grad_bias[i] = 0.0f;
    for (int b = 0; b < batch_size; b++) {
      grad_bias[i] += grad[b * size + i];
    }
  }
}
`;

// Independent (non-interpreter) reference implementations used to check interpreter output.

export function matmulAtBReference(A: number[], B: number[], m: number, n: number, k: number): number[] {
  const C = new Array(n * k).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < k; j++) {
      let sum = 0;
      for (let l = 0; l < m; l++) sum += A[l * n + i] * B[l * k + j];
      C[i * k + j] = sum;
    }
  }
  return C;
}

/** What a correctly-implemented A @ B^T kernel (distinct index math from A^T @ B) would compute. */
export function intendedABtReference(A: number[], B: number[], n: number, k: number, m: number): number[] {
  const C = new Array(n * k).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < k; j++) {
      let sum = 0;
      for (let l = 0; l < m; l++) sum += A[i * m + l] * B[j * m + l];
      C[i * k + j] = sum;
    }
  }
  return C;
}

export function reluBackwardReference(grad: number[], x: number[]): number[] {
  return grad.map((g, i) => (x[i] > 0 ? g : 0));
}

export function biasBackwardsReference(grad: number[], batchSize: number, size: number): number[] {
  const out = new Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    let sum = 0;
    for (let b = 0; b < batchSize; b++) sum += grad[b * size + i];
    out[i] = sum;
  }
  return out;
}
