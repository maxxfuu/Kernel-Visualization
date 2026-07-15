import { create } from "zustand";
import {
  ConfigError,
  FillStrategy,
  FunctionSignature,
  LaunchConfig,
  ParseError,
  Program,
  RunConfig,
  RuntimeError,
  StepEvent,
  extractSignatures,
  parseSource,
  run as runInterpreter,
  validateConfig,
} from "@/lib/interpreterClient";
import { Keyframe, buildKeyframes } from "@/lib/keyframe";

export interface BufferConfigForm {
  size: number;
  fillStrategy: FillStrategy;
  manualValues: number[];
  randomRange: [number, number];
}

export type RunStatus = "no-source" | "parse-error" | "config-error" | "ready" | "complete";

// Buffers are frequently sized as the product of two scalar dimensions (e.g. an m*n matrix
// flattened into a 1D array), so a flat default bigger than the default scalar value on its
// own avoids spurious out-of-bounds errors on a first, unconfigured Run.
const DEFAULT_BUFFER_SIZE = 16;
const DEFAULT_SCALAR_VALUE = 4;
const DEFAULT_RANDOM_RANGE: [number, number] = [-2, 2];
const DEFAULT_LAUNCH_CONFIG: LaunchConfig = { gridDimX: 1, blockDimX: 8 };

export const DEFAULT_SOURCE = `void matmul_at_b(float *A, float *B, float *C, int m, int n, int k) {
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

export const DEFAULT_CUDA_SOURCE = `__global__ void vector_add(float *a, float *b, float *c, int n) {
  int idx = blockIdx.x * blockDim.x + threadIdx.x;
  if (idx < n) {
    c[idx] = a[idx] + b[idx];
  }
}
`;

function resolveFillValues(cfg: BufferConfigForm): number[] {
  switch (cfg.fillStrategy) {
    case "zero":
      return new Array(cfg.size).fill(0);
    case "sequential":
      return Array.from({ length: cfg.size }, (_, i) => i);
    case "random": {
      const [lo, hi] = cfg.randomRange;
      return Array.from({ length: cfg.size }, () => Math.round((lo + Math.random() * (hi - lo)) * 100) / 100);
    }
    case "manual": {
      const values = cfg.manualValues.slice(0, cfg.size);
      while (values.length < cfg.size) values.push(0);
      return values;
    }
  }
}

function defaultBufferConfigForm(): BufferConfigForm {
  return { size: DEFAULT_BUFFER_SIZE, fillStrategy: "sequential", manualValues: [], randomRange: DEFAULT_RANDOM_RANGE };
}

/** Fingerprint of "what was last initialized" -buffer sizes + scalar values. Comparing this
 * against the current config tells the UI whether an existing run is stale (needs re-Initialize)
 * or still matches (ready to Run). */
export function computeConfigSignature(
  bufferConfigs: Record<string, BufferConfigForm>,
  scalarConfigs: Record<string, number>,
  launchConfig: LaunchConfig,
): string {
  const sizes = Object.fromEntries(Object.entries(bufferConfigs).map(([name, cfg]) => [name, cfg.size]));
  return JSON.stringify({ sizes, scalarConfigs, launchConfig });
}

// --- Multi-tab support ---
// Each tab is an independent (source, parse/run/playback) session. Only the ACTIVE tab's data
// lives in the store's top-level fields (so every existing component keeps reading them
// unchanged); switching tabs snapshots the outgoing tab's fields into `tabSnapshots` and
// restores the incoming tab's snapshot (or a fresh blank session for a brand-new tab).
export interface TabMeta {
  id: string;
  /** Manually-set file name (e.g. "vector_add.cu"). Undefined falls back to the parsed
   * function name (or "Tab N") via `getTabDisplayTitle`. */
  title?: string;
}

type TabSnapshot = Pick<
  KernelVizState,
  | "source"
  | "program"
  | "parseErrors"
  | "functionSignatures"
  | "selectedFunctionName"
  | "bufferConfigs"
  | "scalarConfigs"
  | "launchConfig"
  | "runId"
  | "steps"
  | "runErrors"
  | "configErrors"
  | "truncated"
  | "initialBufferValues"
  | "keyframes"
  | "status"
  | "lastRunSignature"
  | "currentStepIndex"
  | "isPlaying"
  | "speed"
  | "scrubbing"
>;

let nextTabId = 3; // tab-1 and tab-2 are the initial tabs created below

function blankTabSnapshot(): TabSnapshot {
  return {
    source: "",
    program: null,
    parseErrors: [],
    functionSignatures: [],
    selectedFunctionName: null,
    bufferConfigs: {},
    scalarConfigs: {},
    launchConfig: DEFAULT_LAUNCH_CONFIG,
    runId: 0,
    steps: [],
    runErrors: [],
    configErrors: [],
    truncated: false,
    initialBufferValues: {},
    keyframes: [],
    status: "no-source",
    lastRunSignature: null,
    currentStepIndex: 0,
    isPlaying: false,
    speed: 4,
    scrubbing: false,
  };
}

function snapshotOf(state: KernelVizState): TabSnapshot {
  const {
    source,
    program,
    parseErrors,
    functionSignatures,
    selectedFunctionName,
    bufferConfigs,
    scalarConfigs,
    launchConfig,
    runId,
    steps,
    runErrors,
    configErrors,
    truncated,
    initialBufferValues,
    keyframes,
    status,
    lastRunSignature,
    currentStepIndex,
    isPlaying,
    speed,
    scrubbing,
  } = state;
  return {
    source,
    program,
    parseErrors,
    functionSignatures,
    selectedFunctionName,
    bufferConfigs,
    scalarConfigs,
    launchConfig,
    runId,
    steps,
    runErrors,
    configErrors,
    truncated,
    initialBufferValues,
    keyframes,
    status,
    lastRunSignature,
    currentStepIndex,
    isPlaying,
    speed,
    scrubbing,
  };
}

/** Display title for a tab: its manually-set file name, else its parsed function name, else "Tab N". */
export function getTabDisplayTitle(state: KernelVizState, tabId: string, index: number): string {
  const manual = state.tabs.find((t) => t.id === tabId)?.title;
  if (manual) return manual;
  const signatures = tabId === state.activeTabId ? state.functionSignatures : state.tabSnapshots[tabId]?.functionSignatures;
  return signatures?.[0]?.name ?? `Tab ${index + 1}`;
}

/** A tab's source, whether it's the active tab (live top-level field) or not (its snapshot). */
export function getTabSource(state: KernelVizState, tabId: string): string {
  return tabId === state.activeTabId ? state.source : (state.tabSnapshots[tabId]?.source ?? "");
}

/** Full snapshot for a pre-loaded default tab (parses `source` and derives its config forms). */
function buildDefaultTabSnapshot(source: string): TabSnapshot {
  const { program, errors } = parseSource(source);
  const derived = deriveSignaturesAndConfigs(program, null, {}, {});
  return {
    ...blankTabSnapshot(),
    source,
    program,
    parseErrors: errors,
    ...derived,
    status: errors.length > 0 ? "parse-error" : "ready",
  };
}

interface KernelVizState {
  // --- tabs ---
  tabs: TabMeta[];
  activeTabId: string;
  tabSnapshots: Record<string, TabSnapshot>;

  // --- run setup (active tab only) ---
  source: string;
  program: Program | null;
  parseErrors: ParseError[];
  functionSignatures: FunctionSignature[];
  selectedFunctionName: string | null;
  bufferConfigs: Record<string, BufferConfigForm>;
  scalarConfigs: Record<string, number>;
  /** Grid/block launch dimensions -only meaningful (and only shown) for `__global__` kernels. */
  launchConfig: LaunchConfig;

  // --- run result (active tab only) ---
  runId: number;
  steps: StepEvent[];
  runErrors: RuntimeError[];
  configErrors: ConfigError[];
  truncated: boolean;
  initialBufferValues: Record<string, number[]>;
  keyframes: Keyframe[];
  status: RunStatus;
  lastRunSignature: string | null;

  // --- playback (active tab only) ---
  currentStepIndex: number;
  isPlaying: boolean;
  speed: number;
  scrubbing: boolean;

  // --- actions ---
  setSource: (source: string) => void;
  selectFunction: (name: string) => void;
  updateBufferConfig: (name: string, patch: Partial<BufferConfigForm>) => void;
  updateScalarConfig: (name: string, value: number) => void;
  updateLaunchConfig: (patch: Partial<LaunchConfig>) => void;
  startRun: () => void;
  resetRun: () => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  stepForward: () => void;
  stepBackward: () => void;
  seekTo: (index: number) => void;
  setScrubbing: (v: boolean) => void;
  setSpeed: (v: number) => void;
  jumpToStart: () => void;
  jumpToEnd: () => void;
  jumpToNextIteration: () => void;
  jumpToPrevIteration: () => void;
  tick: () => void;
  createTab: () => void;
  closeTab: (id: string) => void;
  switchTab: (id: string) => void;
  renameTab: (id: string, title: string) => void;
  importTab: (source: string) => void;
}

function deriveSignaturesAndConfigs(
  program: Program | null,
  prevSelected: string | null,
  prevBufferConfigs: Record<string, BufferConfigForm>,
  prevScalarConfigs: Record<string, number>,
): Pick<KernelVizState, "functionSignatures" | "selectedFunctionName" | "bufferConfigs" | "scalarConfigs"> {
  const signatures = program ? extractSignatures(program) : [];
  const selected = signatures.find((s) => s.name === prevSelected)?.name ?? signatures[0]?.name ?? null;
  const sig = signatures.find((s) => s.name === selected) ?? null;

  const bufferConfigs: Record<string, BufferConfigForm> = {};
  const scalarConfigs: Record<string, number> = {};
  if (sig) {
    for (const param of sig.params) {
      if (param.type === "int*" || param.type === "float*") {
        bufferConfigs[param.name] = prevBufferConfigs[param.name] ?? defaultBufferConfigForm();
      } else {
        scalarConfigs[param.name] = prevScalarConfigs[param.name] ?? DEFAULT_SCALAR_VALUE;
      }
    }
  }
  return { functionSignatures: signatures, selectedFunctionName: selected, bufferConfigs, scalarConfigs };
}

function initialSetupState() {
  const { program, errors } = parseSource(DEFAULT_SOURCE);
  const derived = deriveSignaturesAndConfigs(program, null, {}, {});
  return { source: DEFAULT_SOURCE, program, parseErrors: errors, ...derived };
}

export const useKernelVizStore = create<KernelVizState>((set, get) => ({
  tabs: [
    { id: "tab-1", title: "matmul_at_b.c" },
    { id: "tab-2", title: "vector_add.cu" },
  ],
  activeTabId: "tab-1",
  tabSnapshots: { "tab-2": buildDefaultTabSnapshot(DEFAULT_CUDA_SOURCE) },

  ...initialSetupState(),

  launchConfig: DEFAULT_LAUNCH_CONFIG,
  runId: 0,
  steps: [],
  runErrors: [],
  configErrors: [],
  truncated: false,
  initialBufferValues: {},
  keyframes: [],
  status: "ready",
  lastRunSignature: null,

  currentStepIndex: 0,
  isPlaying: false,
  speed: 4,
  scrubbing: false,

  setSource: (source) => {
    const { program, errors } = parseSource(source);
    const derived = deriveSignaturesAndConfigs(program, get().selectedFunctionName, get().bufferConfigs, get().scalarConfigs);
    set({
      source,
      program,
      parseErrors: errors,
      ...derived,
      status: source.trim() === "" ? "no-source" : errors.length > 0 ? "parse-error" : "ready",
      steps: [],
      runErrors: [],
      configErrors: [],
      lastRunSignature: null,
      currentStepIndex: 0,
      isPlaying: false,
    });
  },

  selectFunction: (name) => {
    const derived = deriveSignaturesAndConfigs(get().program, name, {}, {});
    set({ ...derived, steps: [], lastRunSignature: null, currentStepIndex: 0, isPlaying: false, status: "ready" });
  },

  updateBufferConfig: (name, patch) => {
    set((s) => ({ bufferConfigs: { ...s.bufferConfigs, [name]: { ...s.bufferConfigs[name], ...patch } } }));
  },

  updateScalarConfig: (name, value) => {
    set((s) => ({ scalarConfigs: { ...s.scalarConfigs, [name]: value } }));
  },

  updateLaunchConfig: (patch) => {
    set((s) => ({ launchConfig: { ...s.launchConfig, ...patch } }));
  },

  startRun: () => {
    const { program, selectedFunctionName, bufferConfigs, scalarConfigs, launchConfig, functionSignatures } = get();
    if (!program || !selectedFunctionName) return;
    const sig = functionSignatures.find((s) => s.name === selectedFunctionName);
    if (!sig) return;

    const initialBufferValues: Record<string, number[]> = {};
    const runConfig: RunConfig = {
      functionName: selectedFunctionName,
      buffers: sig.params
        .filter((p) => p.type === "int*" || p.type === "float*")
        .map((p) => {
          const cfg = bufferConfigs[p.name] ?? defaultBufferConfigForm();
          const values = resolveFillValues(cfg);
          initialBufferValues[p.name] = values;
          return { name: p.name, type: p.type as "int*" | "float*", length: cfg.size, values };
        }),
      scalars: sig.params
        .filter((p) => p.type === "int" || p.type === "float")
        .map((p) => ({ name: p.name, type: p.type as "int" | "float", value: scalarConfigs[p.name] ?? DEFAULT_SCALAR_VALUE })),
      ...(sig.isKernel ? { launch: launchConfig } : {}),
    };

    const configErrors = validateConfig(program, runConfig);
    if (configErrors.length > 0) {
      set({ configErrors, status: "config-error" });
      return;
    }

    // __shared__ arrays aren't device-memory params, so they get no entry above -but the
    // interpreter still reports their (zeroed) starting contents in finalMemory/mem-write
    // replay needs a baseline, so backfill one here for every shared array the UI knows about.
    for (const shared of sig.sharedArrays) {
      if (!(shared.name in initialBufferValues)) {
        initialBufferValues[shared.name] = new Array(shared.size).fill(0);
      }
    }

    const result = runInterpreter(program, runConfig);
    const keyframes = buildKeyframes(result.steps, initialBufferValues);
    set((s) => ({
      runId: s.runId + 1,
      steps: result.steps,
      runErrors: result.errors,
      configErrors: [],
      truncated: result.truncated,
      initialBufferValues,
      keyframes,
      status: "complete",
      lastRunSignature: computeConfigSignature(bufferConfigs, scalarConfigs, launchConfig),
      currentStepIndex: 0,
      isPlaying: false,
    }));
  },

  resetRun: () => {
    set({ steps: [], runErrors: [], configErrors: [], lastRunSignature: null, currentStepIndex: 0, isPlaying: false, status: "ready" });
  },

  play: () => {
    const { steps, currentStepIndex } = get();
    if (steps.length === 0) return;
    if (currentStepIndex >= steps.length - 1) set({ currentStepIndex: 0 });
    set({ isPlaying: true });
  },
  pause: () => set({ isPlaying: false }),
  togglePlay: () => (get().isPlaying ? get().pause() : get().play()),

  stepForward: () => {
    const { steps, currentStepIndex } = get();
    set({ currentStepIndex: Math.min(currentStepIndex + 1, Math.max(steps.length - 1, 0)), isPlaying: false });
  },
  stepBackward: () => {
    set((s) => ({ currentStepIndex: Math.max(s.currentStepIndex - 1, 0), isPlaying: false }));
  },
  seekTo: (index) => {
    const { steps } = get();
    set({ currentStepIndex: Math.max(0, Math.min(index, Math.max(steps.length - 1, 0))) });
  },
  setScrubbing: (v) => set({ scrubbing: v, isPlaying: v ? false : get().isPlaying }),
  setSpeed: (v) => set({ speed: v }),

  jumpToStart: () => set({ currentStepIndex: 0, isPlaying: false }),
  jumpToEnd: () => set((s) => ({ currentStepIndex: Math.max(s.steps.length - 1, 0), isPlaying: false })),

  jumpToNextIteration: () => {
    const { steps, currentStepIndex } = get();
    for (let i = currentStepIndex + 1; i < steps.length; i++) {
      if (steps[i].kind === "loop-iter") {
        set({ currentStepIndex: i, isPlaying: false });
        return;
      }
    }
    set({ currentStepIndex: steps.length - 1, isPlaying: false });
  },
  jumpToPrevIteration: () => {
    const { steps, currentStepIndex } = get();
    for (let i = currentStepIndex - 1; i >= 0; i--) {
      if (steps[i].kind === "loop-iter") {
        set({ currentStepIndex: i, isPlaying: false });
        return;
      }
    }
    set({ currentStepIndex: 0, isPlaying: false });
  },

  tick: () => {
    const { steps, currentStepIndex, isPlaying } = get();
    if (!isPlaying) return;
    if (currentStepIndex >= steps.length - 1) {
      set({ isPlaying: false });
      return;
    }
    const next = currentStepIndex + 1;
    const err = get().runErrors.find((e) => e.seq === next && e.fatal);
    set({ currentStepIndex: next, isPlaying: err ? false : true });
  },

  createTab: () => {
    set((s) => {
      const newId = `tab-${nextTabId++}`;
      return {
        tabs: [...s.tabs, { id: newId }],
        tabSnapshots: { ...s.tabSnapshots, [s.activeTabId]: snapshotOf(s) },
        activeTabId: newId,
        ...blankTabSnapshot(),
      };
    });
  },

  switchTab: (id) => {
    set((s) => {
      if (id === s.activeTabId || !s.tabs.some((t) => t.id === id)) return {};
      const target = s.tabSnapshots[id] ?? blankTabSnapshot();
      return {
        tabSnapshots: { ...s.tabSnapshots, [s.activeTabId]: snapshotOf(s) },
        activeTabId: id,
        ...target,
      };
    });
  },

  closeTab: (id) => {
    set((s) => {
      const closedIndex = s.tabs.findIndex((t) => t.id === id);
      if (closedIndex === -1) return {};
      const remainingTabs = s.tabs.filter((t) => t.id !== id);
      const remainingSnapshots = { ...s.tabSnapshots };
      delete remainingSnapshots[id];

      if (id !== s.activeTabId) {
        return { tabs: remainingTabs, tabSnapshots: remainingSnapshots };
      }
      if (remainingTabs.length === 0) {
        const newId = `tab-${nextTabId++}`;
        return { tabs: [{ id: newId }], tabSnapshots: {}, activeTabId: newId, ...blankTabSnapshot() };
      }
      const nextActive = remainingTabs[Math.min(closedIndex, remainingTabs.length - 1)];
      const target = remainingSnapshots[nextActive.id] ?? blankTabSnapshot();
      return { tabs: remainingTabs, tabSnapshots: remainingSnapshots, activeTabId: nextActive.id, ...target };
    });
  },

  renameTab: (id, title) => {
    set((s) => ({ tabs: s.tabs.map((t) => (t.id === id ? { ...t, title } : t)) }));
  },

  importTab: (source) => {
    set((s) => {
      const newId = `tab-${nextTabId++}`;
      return {
        tabs: [...s.tabs, { id: newId, title: "untitled" }],
        tabSnapshots: { ...s.tabSnapshots, [s.activeTabId]: snapshotOf(s) },
        activeTabId: newId,
        ...buildDefaultTabSnapshot(source),
      };
    });
  },
}));
