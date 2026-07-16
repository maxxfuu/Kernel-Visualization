---
name: verify
description: How to build, launch, and drive Kernel-Visualization to verify changes end-to-end.
---

# Verifying Kernel-Visualization

## Launch

```bash
npm run dev -- --port 3457   # dev server; app workspace lives at /workspace (not /)
```

`/` is a landing page; the actual tool is at `http://localhost:3457/workspace`.

## Drive (headless)

No Playwright in the repo. Install it in the session scratchpad (`npm init -y && npm i playwright`);
Chromium revisions are usually already cached in `~/Library/Caches/ms-playwright`. Launch with
`chromium.launch({ args: ["--use-angle=swiftshader"] })` — the three.js canvas renders fine headless.

Useful selectors:
- Shape controls: `input[title="rows"]` / `input[title="cols"]`, nth(0..2) = buffers A, B, C.
- Scalars: `label:text-is("m") + input` (same for n, k, gridDim.x, blockDim.x).
- Run button: `getByRole("button", { name: "Run", exact: true })`.
- Cell value labels (drei Html overlays, countable in DOM): `div[class*="text-[11px]"]` — count is
  total cells across all buffers **plus one** unrelated match.
- Toasts: `[data-sonner-toast]`.
- Tabs: `getByText("matmul_at_b.c")` / `getByText("vector_add.cu")`.

Give the scene ~2s after `waitForSelector("canvas")` for overlays to mount, and ~1s after each
input edit before asserting. `fill()` on the number inputs fires React onChange once.

## Flows worth driving

- Matmul tab (default): edit A/B/C rows/cols ↔ m/n/k two-way sync; inconsistent dims → red
  gradient + red panel borders + toast + disabled Run.
- Run → auto-plays; step counter appears bottom-right ("step N / M"), variables panel bottom-left.
- vector_add tab: non-matmul path — free-form reshape, scalars independent.

## Gotchas

- Screenshots are the only way to check the 3D cell colors; the heatmap is canvas-rendered.
- Lint has two pre-existing errors in `src/components/aicanvas/dot-grid.tsx` (react-hooks/refs).
