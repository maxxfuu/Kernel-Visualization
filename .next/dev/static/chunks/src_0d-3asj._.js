(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/scene/CellPositionsContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CellPositionsProvider",
    ()=>CellPositionsProvider,
    "cellKey",
    ()=>cellKey,
    "useCellPositions",
    ()=>useCellPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CellPositionsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function cellKey(buffer, index) {
    return `${buffer}:${index}`;
}
function CellPositionsProvider({ children }) {
    _s();
    // A stable, mutated-in-place Map — writes happen imperatively (see Bar3D's effect), never via setState.
    const [map] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CellPositionsProvider.useState": ()=>new Map()
    }["CellPositionsProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CellPositionsContext.Provider, {
        value: map,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/scene/CellPositionsContext.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_s(CellPositionsProvider, "Ln3I8id5Ls6ut6lu2XKHiYnCGVk=");
_c = CellPositionsProvider;
function useCellPositions() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CellPositionsContext);
    if (!ctx) throw new Error("useCellPositions must be used within a CellPositionsProvider");
    return ctx;
}
_s1(useCellPositions, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "CellPositionsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CELL_SIZE",
    ()=>CELL_SIZE,
    "CELL_SPACING",
    ()=>CELL_SPACING,
    "DARK_PALETTE",
    ()=>DARK_PALETTE,
    "LAYER_SPACING",
    ()=>LAYER_SPACING,
    "LIGHT_PALETTE",
    ()=>LIGHT_PALETTE,
    "SLOT_DEPTH",
    ()=>SLOT_DEPTH,
    "SLOT_WIDTH",
    ()=>SLOT_WIDTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const DARK_PALETTE = {
    background: "#000000",
    fog: "#000000",
    gridMajor: "#2a2a2a",
    gridMinor: "#161616",
    idleLow: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#252b3a"),
    idleHigh: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#5b7ab8"),
    read: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#3b82f6"),
    write: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#f59e0b"),
    error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ef4444"),
    labelText: "rgba(255,255,255,0.9)",
    labelSubtext: "rgba(255,255,255,0.4)",
    labelShadow: "0 1px 2px rgba(0,0,0,0.8)"
};
const LIGHT_PALETTE = {
    background: "#f4f4f5",
    fog: "#f4f4f5",
    gridMajor: "#d4d4d8",
    gridMinor: "#e4e4e7",
    idleLow: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#e2e8f0"),
    idleHigh: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#2563eb"),
    read: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#2563eb"),
    write: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#d97706"),
    error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#dc2626"),
    labelText: "rgba(0,0,0,0.85)",
    labelSubtext: "rgba(0,0,0,0.45)",
    labelShadow: "0 1px 2px rgba(255,255,255,0.8)"
};
const CELL_SIZE = 0.85;
const CELL_SPACING = 1.05;
const LAYER_SPACING = 1.6; // vertical gap between stacked 2D planes in 3D mode
const SLOT_WIDTH = 9;
const SLOT_DEPTH = 9;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/ScenePaletteContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScenePaletteProvider",
    ()=>ScenePaletteProvider,
    "useScenePalette",
    ()=>useScenePalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ScenePaletteContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_PALETTE"]);
_c = ScenePaletteContext;
function ScenePaletteProvider({ palette, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScenePaletteContext.Provider, {
        value: palette,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/scene/ScenePaletteContext.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c1 = ScenePaletteProvider;
function useScenePalette() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ScenePaletteContext);
}
_s(useScenePalette, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c, _c1;
__turbopack_context__.k.register(_c, "ScenePaletteContext");
__turbopack_context__.k.register(_c1, "ScenePaletteProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/useMemoryVisualState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMemoryVisualState",
    ()=>useMemoryVisualState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$keyframe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/keyframe.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TRAIL_LENGTH = 6;
const TRAIL_LOOKBACK_WINDOW = 200;
function useMemoryVisualState(bufferName) {
    _s();
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "useMemoryVisualState.useKernelVizStore[steps]": (s)=>s.steps
    }["useMemoryVisualState.useKernelVizStore[steps]"]);
    const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "useMemoryVisualState.useKernelVizStore[keyframes]": (s)=>s.keyframes
    }["useMemoryVisualState.useKernelVizStore[keyframes]"]);
    const currentStepIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "useMemoryVisualState.useKernelVizStore[currentStepIndex]": (s)=>s.currentStepIndex
    }["useMemoryVisualState.useKernelVizStore[currentStepIndex]"]);
    const initialBufferValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "useMemoryVisualState.useKernelVizStore[initialBufferValues]": (s)=>s.initialBufferValues
    }["useMemoryVisualState.useKernelVizStore[initialBufferValues]"]);
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMemoryVisualState.useMemo[values]": ()=>{
            if (steps.length === 0) return initialBufferValues[bufferName]?.slice() ?? [];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$keyframe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bufferStateAt"])(steps, keyframes, currentStepIndex)[bufferName] ?? [];
        }
    }["useMemoryVisualState.useMemo[values]"], [
        steps,
        keyframes,
        currentStepIndex,
        bufferName,
        initialBufferValues
    ]);
    const currentStep = steps[currentStepIndex];
    const activeAccesses = [];
    let errorIndex = null;
    if (currentStep && (currentStep.kind === "mem-read" || currentStep.kind === "mem-write") && currentStep.buffer === bufferName) {
        activeAccesses.push({
            index: currentStep.index,
            kind: currentStep.kind === "mem-read" ? "read" : "write",
            age: 0
        });
        if (!currentStep.inBounds) errorIndex = currentStep.index;
    }
    const recentAccesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMemoryVisualState.useMemo[recentAccesses]": ()=>{
            const trail = [];
            const floor = Math.max(0, currentStepIndex - TRAIL_LOOKBACK_WINDOW);
            for(let i = currentStepIndex - 1; i >= floor && trail.length < TRAIL_LENGTH; i--){
                const step = steps[i];
                if ((step.kind === "mem-read" || step.kind === "mem-write") && step.buffer === bufferName) {
                    trail.push({
                        index: step.index,
                        kind: step.kind === "mem-read" ? "read" : "write",
                        age: currentStepIndex - i
                    });
                }
            }
            return trail;
        }
    }["useMemoryVisualState.useMemo[recentAccesses]"], [
        steps,
        currentStepIndex,
        bufferName
    ]);
    return {
        values,
        activeAccesses,
        recentAccesses,
        errorIndex
    };
}
_s(useMemoryVisualState, "V6jYFqsuIWUDfzkxn6QA6zpVX64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/Cell3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cell3D",
    ()=>Cell3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/ScenePaletteContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Cell3D({ x, y, z, value, magnitudeFraction, state, intensity, label, onRegisterPosition }) {
    _s();
    const palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScenePalette"])();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(palette.idleLow.clone());
    const currentScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cell3D.useEffect": ()=>{
            onRegisterPosition?.([
                x,
                y,
                z
            ]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Cell3D.useEffect"], [
        x,
        y,
        z
    ]);
    const idleColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]().copy(palette.idleLow).lerp(palette.idleHigh, magnitudeFraction);
    const targetHue = state === "error" ? palette.error : state === "read" ? palette.read : state === "write" ? palette.write : idleColor;
    const targetScale = state === "idle" ? 1 : 1 + intensity * 0.22;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Cell3D.useFrame": (_, delta)=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const damp = 1 - Math.pow(0.001, delta);
            const mixStrength = state === "idle" ? 0 : Math.max(intensity, 0.25);
            const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]().copy(idleColor).lerp(targetHue, mixStrength);
            currentColor.current.lerp(target, damp);
            currentScale.current += (targetScale - currentScale.current) * damp;
            mesh.scale.set(currentScale.current, 1, currentScale.current);
            const mat = mesh.material;
            mat.color.copy(currentColor.current);
            mat.emissive.copy(currentColor.current);
            mat.emissiveIntensity = state === "idle" ? 0.15 : 0.3 + intensity * 0.8;
        }
    }["Cell3D.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        position: [
            x,
            y,
            z
        ],
        onPointerOver: (e)=>{
            e.stopPropagation();
            setHovered(true);
        },
        onPointerOut: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SIZE"],
                    0.12,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SIZE"]
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/scene/Cell3D.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: palette.idleLow,
                roughness: 0.5,
                metalness: 0.05
            }, void 0, false, {
                fileName: "[project]/src/components/scene/Cell3D.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                center: true,
                distanceFactor: 11,
                position: [
                    0,
                    0.15,
                    0
                ],
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-nowrap text-center font-mono text-[11px] font-medium",
                    style: {
                        color: palette.labelText,
                        textShadow: palette.labelShadow
                    },
                    children: Number.isInteger(value) ? value : value.toFixed(2)
                }, void 0, false, {
                    fileName: "[project]/src/components/scene/Cell3D.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/scene/Cell3D.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                center: true,
                distanceFactor: 11,
                position: [
                    0,
                    0.55,
                    0
                ],
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-[11px] text-popover-foreground shadow-md",
                    children: [
                        label,
                        " = ",
                        value
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/scene/Cell3D.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/scene/Cell3D.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/Cell3D.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Cell3D, "fvYpuV+BADKvv0rQ4/rlrZi+eiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScenePalette"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Cell3D;
var _c;
__turbopack_context__.k.register(_c, "Cell3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/shape.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoShape",
    ()=>autoShape,
    "displayDims",
    ()=>displayDims
]);
function autoShape(length, mode = "2d") {
    const safeLength = Math.max(1, length);
    if (mode === "1d") {
        return {
            mode,
            layers: 1,
            rows: 1,
            cols: safeLength,
            transposed: false
        };
    }
    if (mode === "3d") {
        const layers = Math.max(1, Math.round(Math.cbrt(safeLength)));
        const remaining = Math.max(1, Math.ceil(safeLength / layers));
        const cols = Math.max(1, Math.ceil(Math.sqrt(remaining)));
        const rows = Math.max(1, Math.ceil(remaining / cols));
        return {
            mode,
            layers,
            rows,
            cols,
            transposed: false
        };
    }
    const cols = Math.max(1, Math.ceil(Math.sqrt(safeLength)));
    const rows = Math.max(1, Math.ceil(safeLength / cols));
    return {
        mode: "2d",
        layers: 1,
        rows,
        cols,
        transposed: false
    };
}
function displayDims(shape) {
    return shape.transposed ? {
        rows: shape.cols,
        cols: shape.rows
    } : {
        rows: shape.rows,
        cols: shape.cols
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/BufferMatrix3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferMatrix3D",
    ()=>BufferMatrix3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$useMemoryVisualState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/useMemoryVisualState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/CellPositionsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$Cell3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/Cell3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/ScenePaletteContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const BASE_Y = 0.06;
function BufferMatrix3D({ name, xOffset, shape }) {
    _s();
    const palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScenePalette"])();
    const { values, activeAccesses, recentAccesses, errorIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$useMemoryVisualState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoryVisualState"])(name);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCellPositions"])();
    const { layers, rows, cols, transposed } = shape;
    const { rows: displayRows, cols: displayCols } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDims"])(shape);
    function accessFor(index) {
        const active = activeAccesses.find((a)=>a.index === index);
        if (active) return {
            state: errorIndex === index ? "error" : active.kind,
            intensity: 1
        };
        const trail = recentAccesses.find((a)=>a.index === index);
        if (trail) return {
            state: trail.kind,
            intensity: Math.max(0, 1 - trail.age / 6)
        };
        return {
            state: "idle",
            intensity: 0
        };
    }
    const peakMagnitude = Math.max(1e-6, ...values.map((v)=>Math.abs(v)));
    const renderCount = Math.min(values.length, layers * rows * cols);
    const labelZ = -((displayRows - 1) / 2) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SPACING"] - 1;
    const labelY = BASE_Y + (layers > 1 ? layers * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER_SPACING"] : 1.1);
    const cells = [];
    for(let index = 0; index < renderCount; index++){
        const perLayer = rows * cols;
        const layer = Math.floor(index / perLayer);
        const rem = index % perLayer;
        // Physical position within the buffer's own natural (untransposed) row-major layout.
        const physicalRow = Math.floor(rem / cols);
        const physicalCol = rem % cols;
        // Transposing swaps which physical axis maps to the display row vs. column — a pure
        // relabeling of position, never a rewrite of the underlying flat buffer.
        const displayRow = transposed ? physicalCol : physicalRow;
        const displayCol = transposed ? physicalRow : physicalCol;
        const x = xOffset + (displayCol - (displayCols - 1) / 2) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SPACING"];
        const z = (displayRow - (displayRows - 1) / 2) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SPACING"];
        const y = BASE_Y + layer * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER_SPACING"];
        const value = values[index];
        const { state, intensity } = accessFor(index);
        cells.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$Cell3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell3D"], {
            x: x,
            y: y,
            z: z,
            value: value,
            magnitudeFraction: Math.abs(value) / peakMagnitude,
            state: state,
            intensity: intensity,
            label: `${name}[${index}]`,
            onRegisterPosition: (pos)=>positions.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellKey"])(name, index), pos)
        }, index, false, {
            fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    xOffset,
                    labelY,
                    labelZ
                ],
                center: true,
                distanceFactor: 12,
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-nowrap text-center text-xs font-medium",
                    style: {
                        color: palette.labelText
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-1.5",
                            style: {
                                color: palette.labelSubtext
                            },
                            children: layers > 1 ? `${layers}×${displayRows}×${displayCols}` : `${displayRows}×${displayCols}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        transposed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-1.5",
                            style: {
                                color: palette.write.getStyle()
                            },
                            children: "Tᵀ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            cells
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/BufferMatrix3D.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(BufferMatrix3D, "JwbzfCkamQArbXK+KHPo38koEsU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScenePalette"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$useMemoryVisualState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoryVisualState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCellPositions"]
    ];
});
_c = BufferMatrix3D;
var _c;
__turbopack_context__.k.register(_c, "BufferMatrix3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/operandLookup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOperandReadsForWrite",
    ()=>getOperandReadsForWrite
]);
function getOperandReadsForWrite(steps, writeSeq) {
    const write = steps[writeSeq];
    if (!write || write.kind !== "mem-write") return [];
    const operands = [];
    for(let i = writeSeq - 1; i >= 0; i--){
        const step = steps[i];
        if (step.kind === "stmt-enter") break;
        if (step.kind === "mem-read" && !(step.buffer === write.buffer && step.index === write.index)) {
            operands.push({
                buffer: step.buffer,
                index: step.index
            });
        }
    }
    return operands;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/OperationBeams.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OperationBeams",
    ()=>OperationBeams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/CellPositionsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$operandLookup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/operandLookup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/ScenePaletteContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TRAVEL_MS = 450;
function Particle({ from, to, resetKey, color }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Particle.useEffect": ()=>{
            startedAtRef.current = performance.now();
        }
    }["Particle.useEffect"], [
        resetKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Particle.useFrame": ()=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const t = Math.min((performance.now() - startedAtRef.current) / TRAVEL_MS, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            mesh.position.lerpVectors(from, to, eased);
            mesh.visible = t < 1;
        }
    }["Particle.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    0.12,
                    12,
                    12
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/scene/OperationBeams.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: color,
                emissive: color,
                emissiveIntensity: 1.2
            }, void 0, false, {
                fileName: "[project]/src/components/scene/OperationBeams.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/OperationBeams.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Particle, "9rMWbanP81rhL+QK7w3XHu/zBv4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Particle;
function OperationBeams() {
    _s1();
    const palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScenePalette"])();
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "OperationBeams.useKernelVizStore[steps]": (s)=>s.steps
    }["OperationBeams.useKernelVizStore[steps]"]);
    const currentStepIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "OperationBeams.useKernelVizStore[currentStepIndex]": (s)=>s.currentStepIndex
    }["OperationBeams.useKernelVizStore[currentStepIndex]"]);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCellPositions"])();
    const beams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OperationBeams.useMemo[beams]": ()=>{
            const step = steps[currentStepIndex];
            if (!step || step.kind !== "mem-write") return [];
            const operands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$operandLookup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOperandReadsForWrite"])(steps, currentStepIndex);
            const toPos = positions.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellKey"])(step.buffer, step.index));
            if (!toPos) return [];
            return operands.map({
                "OperationBeams.useMemo[beams]": (op)=>{
                    const fromPos = positions.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellKey"])(op.buffer, op.index));
                    if (!fromPos) return null;
                    return {
                        from: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...fromPos),
                        to: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...toPos)
                    };
                }
            }["OperationBeams.useMemo[beams]"]).filter({
                "OperationBeams.useMemo[beams]": (b)=>b !== null
            }["OperationBeams.useMemo[beams]"]);
        }
    }["OperationBeams.useMemo[beams]"], [
        steps,
        currentStepIndex,
        positions
    ]);
    if (beams.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: beams.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: [
                            b.from,
                            b.to
                        ],
                        color: palette.write.getStyle(),
                        opacity: 0.35,
                        transparent: true,
                        lineWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/OperationBeams.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Particle, {
                        from: b.from,
                        to: b.to,
                        resetKey: currentStepIndex,
                        color: palette.write
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/OperationBeams.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/scene/OperationBeams.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/scene/OperationBeams.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s1(OperationBeams, "SI2o0aSZYlmvA2v6zVjQPGN9ijg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScenePalette"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCellPositions"]
    ];
});
_c1 = OperationBeams;
var _c, _c1;
__turbopack_context__.k.register(_c, "Particle");
__turbopack_context__.k.register(_c1, "OperationBeams");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/matmulValidation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canMatmul",
    ()=>canMatmul,
    "computeMatmulStatus",
    ()=>computeMatmulStatus,
    "isMatmulLikeFunction",
    ()=>isMatmulLikeFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/shape.ts [app-client] (ecmascript)");
;
function isMatmulLikeFunction(name) {
    return !!name && /matmul/i.test(name);
}
function canMatmul(left, right) {
    const leftDims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDims"])(left);
    const rightDims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDims"])(right);
    return leftDims.cols === rightDims.rows;
}
function computeMatmulStatus(functionName, left, right) {
    if (!isMatmulLikeFunction(functionName) || !left || !right) {
        return {
            applicable: false,
            valid: true,
            leftTransposeEnabled: false,
            rightTransposeEnabled: false
        };
    }
    const valid = canMatmul(left, right);
    const leftFlipped = {
        ...left,
        transposed: !left.transposed
    };
    const rightFlipped = {
        ...right,
        transposed: !right.transposed
    };
    return {
        applicable: true,
        valid,
        leftTransposeEnabled: canMatmul(leftFlipped, right),
        rightTransposeEnabled: canMatmul(left, rightFlipped)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/ScalarPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScalarPanel",
    ()=>ScalarPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CONFIG_ERROR_TOAST_ID = "config-error";
function ScalarPanel() {
    _s();
    const functionSignatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[functionSignatures]": (s)=>s.functionSignatures
    }["ScalarPanel.useKernelVizStore[functionSignatures]"]);
    const selectedFunctionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[selectedFunctionName]": (s)=>s.selectedFunctionName
    }["ScalarPanel.useKernelVizStore[selectedFunctionName]"]);
    const scalarConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[scalarConfigs]": (s)=>s.scalarConfigs
    }["ScalarPanel.useKernelVizStore[scalarConfigs]"]);
    const bufferConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[bufferConfigs]": (s)=>s.bufferConfigs
    }["ScalarPanel.useKernelVizStore[bufferConfigs]"]);
    const updateScalarConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[updateScalarConfig]": (s)=>s.updateScalarConfig
    }["ScalarPanel.useKernelVizStore[updateScalarConfig]"]);
    const startRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[startRun]": (s)=>s.startRun
    }["ScalarPanel.useKernelVizStore[startRun]"]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[play]": (s)=>s.play
    }["ScalarPanel.useKernelVizStore[play]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[steps]": (s)=>s.steps
    }["ScalarPanel.useKernelVizStore[steps]"]);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[status]": (s)=>s.status
    }["ScalarPanel.useKernelVizStore[status]"]);
    const lastRunSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScalarPanel.useKernelVizStore[lastRunSignature]": (s)=>s.lastRunSignature
    }["ScalarPanel.useKernelVizStore[lastRunSignature]"]);
    const sig = functionSignatures.find((s)=>s.name === selectedFunctionName);
    const scalarParams = sig?.params.filter((p)=>p.type === "int" || p.type === "float") ?? [];
    if (scalarParams.length === 0) return null;
    const canProceed = status !== "parse-error" && status !== "no-source";
    const currentSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeConfigSignature"])(bufferConfigs, scalarConfigs);
    const isInitialized = steps.length > 0 && currentSignature === lastRunSignature;
    function handleClick() {
        if (isInitialized) {
            play();
            return;
        }
        startRun();
        const freshErrors = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"].getState().configErrors;
        if (freshErrors.length > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Can't initialize with these values", {
                id: CONFIG_ERROR_TOAST_ID,
                description: freshErrors.map((e)=>e.message).join(" ")
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(CONFIG_ERROR_TOAST_ID);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-auto flex flex-col gap-2 rounded-lg border border-border bg-card/95 px-3 py-2 text-sm text-foreground shadow-md backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono font-semibold",
                children: "Scalars"
            }, void 0, false, {
                fileName: "[project]/src/components/scene/ScalarPanel.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5",
                children: [
                    scalarParams.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "font-mono text-xs text-muted-foreground",
                                    children: p.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/scene/ScalarPanel.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    value: scalarConfigs[p.name] ?? 0,
                                    onChange: (e)=>updateScalarConfig(p.name, Number(e.target.value)),
                                    className: "h-8 w-14"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/scene/ScalarPanel.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, p.name, true, {
                            fileName: "[project]/src/components/scene/ScalarPanel.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        disabled: !canProceed,
                        onClick: handleClick,
                        children: isInitialized ? "Run" : "Initialize"
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/ScalarPanel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/scene/ScalarPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/ScalarPanel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ScalarPanel, "1uWZKWhlhyasY/hihaArz8INOXc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = ScalarPanel;
var _c;
__turbopack_context__.k.register(_c, "ScalarPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$toggle$2f$Toggle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/toggle/Toggle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent hover:bg-muted"
        },
        size: {
            default: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Toggle({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$toggle$2f$Toggle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toggle.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Toggle;
;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toggle-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleGroup",
    ()=>ToggleGroup,
    "ToggleGroupItem",
    ()=>ToggleGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$toggle$2f$Toggle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/toggle/Toggle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$toggle$2d$group$2f$ToggleGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/toggle-group/ToggleGroup.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ToggleGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    size: "default",
    variant: "default",
    spacing: 2,
    orientation: "horizontal"
});
function ToggleGroup({ className, variant, size, spacing = 2, orientation = "horizontal", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$toggle$2d$group$2f$ToggleGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
        "data-slot": "toggle-group",
        "data-variant": variant,
        "data-size": size,
        "data-spacing": spacing,
        "data-orientation": orientation,
        style: {
            "--gap": spacing
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupContext.Provider, {
            value: {
                variant,
                size,
                spacing,
                orientation
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toggle-group.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toggle-group.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = ToggleGroup;
function ToggleGroupItem({ className, children, variant = "default", size = "default", ...props }) {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToggleGroupContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$toggle$2f$Toggle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
        "data-slot": "toggle-group-item",
        "data-variant": context.variant || variant,
        "data-size": context.size || size,
        "data-spacing": context.spacing,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleVariants"])({
            variant: context.variant || variant,
            size: context.size || size
        }), className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toggle-group.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(ToggleGroupItem, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c1 = ToggleGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToggleGroup");
__turbopack_context__.k.register(_c1, "ToggleGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/KernelScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KernelScene",
    ()=>KernelScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsDarkMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/CellPositionsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/ScenePaletteContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$BufferMatrix3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/BufferMatrix3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$OperationBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/OperationBeams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$matmulValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/matmulValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScalarPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/scene/ScalarPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MATMUL_TOAST_ID = "matmul-shape-invalid";
function ShapeControl({ name, shape, transposeEnabled, dimsLocked, lockedHint, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-auto flex flex-col gap-2 rounded-lg border border-border bg-card/95 px-3 py-2 text-sm text-foreground shadow-md backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono font-semibold",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                        size: "sm",
                        value: [
                            shape.mode
                        ],
                        onValueChange: (v)=>{
                            const mode = v[0];
                            if (!mode || mode === shape.mode) return;
                            const length = shape.layers * shape.rows * shape.cols;
                            onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autoShape"])(length, mode));
                        },
                        disabled: dimsLocked,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                value: "1d",
                                children: "1D"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                value: "2d",
                                children: "2D"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                value: "3d",
                                children: "3D"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    dimsLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        title: lockedHint,
                        children: "(derived)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/scene/KernelScene.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5",
                children: [
                    shape.mode === "3d" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: 1,
                                value: shape.layers,
                                disabled: dimsLocked,
                                onChange: (e)=>onChange({
                                        ...shape,
                                        layers: Math.max(1, Number(e.target.value) || 1)
                                    }),
                                className: "h-8 w-14",
                                title: "layers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    shape.mode !== "1d" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: 1,
                                value: shape.rows,
                                disabled: dimsLocked,
                                onChange: (e)=>onChange({
                                        ...shape,
                                        rows: Math.max(1, Number(e.target.value) || 1)
                                    }),
                                className: "h-8 w-14",
                                title: "rows"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/scene/KernelScene.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        min: 1,
                        value: shape.cols,
                        disabled: dimsLocked,
                        onChange: (e)=>onChange({
                                ...shape,
                                cols: Math.max(1, Number(e.target.value) || 1)
                            }),
                        className: "h-8 w-14",
                        title: shape.mode === "1d" ? "length" : "cols"
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    shape.mode !== "1d" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                        size: "sm",
                        variant: "outline",
                        pressed: shape.transposed,
                        disabled: !transposeEnabled,
                        onPressedChange: (transposed)=>onChange({
                                ...shape,
                                transposed
                            }),
                        title: transposeEnabled ? "Transpose this matrix" : "Transposing this wouldn't make the matmul valid",
                        children: "Transpose"
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/scene/KernelScene.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/KernelScene.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ShapeControl;
function KernelScene() {
    _s();
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDarkMode"])();
    const palette = isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_PALETTE"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHT_PALETTE"];
    const functionSignatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "KernelScene.useKernelVizStore[functionSignatures]": (s)=>s.functionSignatures
    }["KernelScene.useKernelVizStore[functionSignatures]"]);
    const selectedFunctionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "KernelScene.useKernelVizStore[selectedFunctionName]": (s)=>s.selectedFunctionName
    }["KernelScene.useKernelVizStore[selectedFunctionName]"]);
    const bufferConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "KernelScene.useKernelVizStore[bufferConfigs]": (s)=>s.bufferConfigs
    }["KernelScene.useKernelVizStore[bufferConfigs]"]);
    const scalarConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "KernelScene.useKernelVizStore[scalarConfigs]": (s)=>s.scalarConfigs
    }["KernelScene.useKernelVizStore[scalarConfigs]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "KernelScene.useKernelVizStore[steps]": (s)=>s.steps
    }["KernelScene.useKernelVizStore[steps]"]);
    const sig = functionSignatures.find((s)=>s.name === selectedFunctionName);
    const bufferParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KernelScene.useMemo[bufferParams]": ()=>sig?.params.filter({
                "KernelScene.useMemo[bufferParams]": (p)=>p.type === "int*" || p.type === "float*"
            }["KernelScene.useMemo[bufferParams]"]) ?? []
    }["KernelScene.useMemo[bufferParams]"], [
        sig
    ]);
    // Only explicit user overrides live in state; buffers without one fall back to an
    // auto-computed square-ish 2D shape at render time (see `effectiveShape` below).
    const [shapeOverrides, setShapeOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const leftOperand = bufferParams[0];
    const rightOperand = bufferParams[1];
    // By convention (and per the matmul_at_b / matmul_a_bt examples), the first two pointer
    // params are the matmul operands, and their scalar dimensions are named m, n, k, matching
    // the signature (A, B, C, m, n, k). Scoped to matmul-like function names (see
    // isMatmulLikeFunction) so it never fires for unrelated kernels like relu_backward.
    //
    // Once a run exists, the displayed shape for A/B MUST reflect the real m/n/k actually used
    // by that run — otherwise "stepping through" shows a computation that doesn't match what's
    // on screen. Before a run, shapes are free-form for pedagogical "would this multiply?"
    // exploration (see the toast/transpose-to-fix flow below).
    const hasRunDerivedDims = steps.length > 0 && scalarConfigs.m !== undefined && scalarConfigs.n !== undefined && scalarConfigs.k !== undefined;
    function runDerivedShape(kind, prevTransposed) {
        const m = scalarConfigs.m;
        const n = scalarConfigs.n;
        const k = scalarConfigs.k;
        // A is physically m rows x n cols (matmul_at_b: A[l*n+i]); shown transposed by default so
        // it reads as "row i of A used in the product" (matching A^T, the operand the kernel
        // actually implements) instead of the raw physical (untransposed) storage.
        if (kind === "left") return {
            mode: "2d",
            layers: 1,
            rows: m,
            cols: n,
            transposed: prevTransposed
        };
        // B is physically m rows x k cols (matmul_at_b: B[l*k+j]), used directly, untransposed.
        return {
            mode: "2d",
            layers: 1,
            rows: m,
            cols: k,
            transposed: prevTransposed
        };
    }
    function effectiveShape(name) {
        const prev = shapeOverrides[name];
        if (hasRunDerivedDims && leftOperand && name === leftOperand.name) {
            return runDerivedShape("left", prev?.transposed ?? true);
        }
        if (hasRunDerivedDims && rightOperand && name === rightOperand.name) {
            return runDerivedShape("right", prev?.transposed ?? false);
        }
        return prev ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autoShape"])(bufferConfigs[name]?.size ?? 0);
    }
    const leftShape = leftOperand ? effectiveShape(leftOperand.name) : null;
    const rightShape = rightOperand ? effectiveShape(rightOperand.name) : null;
    const matmulStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$matmulValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMatmulStatus"])(selectedFunctionName, leftShape, rightShape);
    // The output (and any further) buffer's shape is never independently chosen — it's always
    // C = A @ B's shape: rows from the left operand, cols from the right operand.
    const derivedOutputDims = matmulStatus.applicable && leftShape && rightShape ? {
        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDims"])(leftShape).rows,
        cols: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDims"])(rightShape).cols
    } : null;
    function outputShape(name) {
        if (derivedOutputDims) {
            return {
                mode: "2d",
                layers: 1,
                rows: derivedOutputDims.rows,
                cols: derivedOutputDims.cols,
                transposed: false
            };
        }
        return shapeOverrides[name] ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autoShape"])(bufferConfigs[name]?.size ?? 0);
    }
    function shapeForIndex(index, name) {
        if (matmulStatus.applicable && index >= 2) return outputShape(name);
        return effectiveShape(name);
    }
    // Dependency key covers everything the toast message reads, so it stays in sync even while
    // `valid` itself doesn't change (e.g. editing B from 4x4 to 2x2 while still invalid).
    const leftDims = leftShape ? `${leftShape.rows}x${leftShape.cols}x${leftShape.transposed}` : "";
    const rightDims = rightShape ? `${rightShape.rows}x${rightShape.cols}x${rightShape.transposed}` : "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KernelScene.useEffect": ()=>{
            if (matmulStatus.applicable && !matmulStatus.valid && leftShape && rightShape) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Shapes can't be matrix-multiplied", {
                    id: MATMUL_TOAST_ID,
                    description: `${leftOperand?.name}(${leftShape.rows}×${leftShape.cols}) × ${rightOperand?.name}(${rightShape.rows}×${rightShape.cols}) — try transposing one.`
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(MATMUL_TOAST_ID);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["KernelScene.useEffect"], [
        matmulStatus.applicable,
        matmulStatus.valid,
        leftOperand?.name,
        rightOperand?.name,
        leftDims,
        rightDims
    ]);
    if (bufferParams.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center bg-background text-sm text-muted-foreground",
            children: "Paste a kernel function to see its buffers here."
        }, void 0, false, {
            fileName: "[project]/src/components/scene/KernelScene.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this);
    }
    // Slot width follows each buffer's actual on-screen footprint (display cols * spacing)
    // rather than a fixed width, so switching a buffer to 1D/3D or transposing it doesn't
    // overlap its neighbors.
    const MARGIN = 2.5;
    const widths = bufferParams.map((p, i)=>Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["displayDims"])(shapeForIndex(i, p.name)).cols * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SPACING"], 3));
    const xOffsets = [];
    let cursor = 0;
    widths.forEach((w, i)=>{
        if (i === 0) {
            cursor = 0;
        } else {
            cursor += widths[i - 1] / 2 + MARGIN + w / 2;
        }
        xOffsets.push(cursor);
    });
    const totalSpan = (xOffsets[xOffsets.length - 1] ?? 0) + widths[widths.length - 1] / 2 - (xOffsets[0] - widths[0] / 2);
    const center = xOffsets[0] - widths[0] / 2 + totalSpan / 2;
    const centeredXOffsets = xOffsets.map((x)=>x - center);
    function transposeEnabledFor(index) {
        if (!matmulStatus.applicable) return true; // no matmul concept for this kernel — free display transform
        if (index >= 2) return false; // output shape (and orientation) is fully derived
        if (index === 0) return hasRunDerivedDims ? true : matmulStatus.leftTransposeEnabled;
        return hasRunDerivedDims ? true : matmulStatus.rightTransposeEnabled;
    }
    function dimsLockedFor(index) {
        if (!matmulStatus.applicable) return false;
        if (index >= 2) return true; // output dims always derived from A/B
        return hasRunDerivedDims; // operand dims lock once they're driven by a real run's m/n/k
    }
    return(// `isolate` pins drei's Html-portaled labels (which get their own dynamically computed
    // z-index for depth-sorting) to this stacking context, so they can never climb above a
    // modal Dialog rendered outside it, no matter how large that computed z-index gets.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative isolate h-full w-full",
        style: {
            backgroundColor: palette.background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-wrap gap-3 p-3",
                children: [
                    bufferParams.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShapeControl, {
                            name: p.name,
                            shape: shapeForIndex(i, p.name),
                            transposeEnabled: transposeEnabledFor(i),
                            dimsLocked: dimsLockedFor(i),
                            lockedHint: i >= 2 ? "Output shape = (left operand rows) × (right operand cols) — not independently settable." : "Locked to the m/n/k actually used by your last run.",
                            onChange: (next)=>setShapeOverrides((prev)=>({
                                        ...prev,
                                        [p.name]: next
                                    }))
                        }, p.name, false, {
                            fileName: "[project]/src/components/scene/KernelScene.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScalarPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScalarPanel"], {}, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/scene/KernelScene.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        9,
                        16
                    ],
                    fov: 40
                },
                dpr: [
                    1,
                    2
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                        attach: "background",
                        args: [
                            palette.background
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                        attach: "fog",
                        args: [
                            palette.fog,
                            22,
                            46
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: isDark ? 0.7 : 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            6,
                            10,
                            6
                        ],
                        intensity: 1.2
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            -6,
                            4,
                            -4
                        ],
                        intensity: 0.4
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                        args: [
                            60,
                            60,
                            palette.gridMajor,
                            palette.gridMinor
                        ],
                        position: [
                            0,
                            -0.01,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$ScenePaletteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScenePaletteProvider"], {
                        palette: palette,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$CellPositionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellPositionsProvider"], {
                            children: [
                                bufferParams.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$BufferMatrix3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferMatrix3D"], {
                                        name: p.name,
                                        xOffset: centeredXOffsets[i],
                                        shape: shapeForIndex(i, p.name)
                                    }, p.name, false, {
                                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scene$2f$OperationBeams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationBeams"], {}, void 0, false, {
                                    fileName: "[project]/src/components/scene/KernelScene.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/scene/KernelScene.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        enableDamping: true,
                        dampingFactor: 0.08,
                        minDistance: 4,
                        maxDistance: 40
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/KernelScene.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/scene/KernelScene.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/KernelScene.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this));
}
_s(KernelScene, "kbynSBvhpPl2uXUZ9JAwHN/nCHY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDarkMode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c1 = KernelScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShapeControl");
__turbopack_context__.k.register(_c1, "KernelScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/KernelScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/scene/KernelScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_0d-3asj._.js.map