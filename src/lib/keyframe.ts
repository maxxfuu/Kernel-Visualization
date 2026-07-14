import type { StepEvent } from "./interpreterClient";

export interface Keyframe {
  stepSeq: number;
  buffers: Record<string, number[]>;
}

const KEYFRAME_INTERVAL = 300;

/** Snapshots every buffer's contents every KEYFRAME_INTERVAL steps, for O(K) worst-case scrub replay. */
export function buildKeyframes(steps: StepEvent[], initialBuffers: Record<string, number[]>): Keyframe[] {
  const keyframes: Keyframe[] = [];
  const current: Record<string, number[]> = {};
  for (const [name, values] of Object.entries(initialBuffers)) current[name] = values.slice();

  keyframes.push({ stepSeq: -1, buffers: cloneBuffers(current) });

  for (const step of steps) {
    if (step.kind === "mem-write" && step.inBounds) {
      current[step.buffer][step.index] = step.newValue;
    }
    if (step.seq > 0 && step.seq % KEYFRAME_INTERVAL === 0) {
      keyframes.push({ stepSeq: step.seq, buffers: cloneBuffers(current) });
    }
  }
  return keyframes;
}

function cloneBuffers(buffers: Record<string, number[]>): Record<string, number[]> {
  const out: Record<string, number[]> = {};
  for (const [name, values] of Object.entries(buffers)) out[name] = values.slice();
  return out;
}

function lastKeyframeAtOrBefore(keyframes: Keyframe[], seq: number): Keyframe {
  // Binary search for the last keyframe with stepSeq <= seq.
  let lo = 0;
  let hi = keyframes.length - 1;
  let best = keyframes[0];
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (keyframes[mid].stepSeq <= seq) {
      best = keyframes[mid];
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best;
}

/** Reconstructs every buffer's contents at `seq` by replaying writes from the nearest keyframe. */
export function bufferStateAt(
  steps: StepEvent[],
  keyframes: Keyframe[],
  seq: number,
): Record<string, number[]> {
  const kf = lastKeyframeAtOrBefore(keyframes, seq);
  const buffers = cloneBuffers(kf.buffers);
  for (let i = kf.stepSeq + 1; i <= seq; i++) {
    const step = steps[i];
    if (!step) break;
    if (step.kind === "mem-write" && step.inBounds) {
      buffers[step.buffer][step.index] = step.newValue;
    }
  }
  return buffers;
}
