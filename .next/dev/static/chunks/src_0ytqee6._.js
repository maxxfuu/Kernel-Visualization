(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/merge-props/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$use$2d$render$2f$useRender$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/use-render/useRender.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", render, ...props }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$use$2d$render$2f$useRender$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])({
        defaultTagName: "span",
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
                variant
            }), className)
        }, props),
        render,
        state: {
            slot: "badge",
            variant
        }
    });
}
_s(Badge, "Yxn2JZFvED13KkqGsiyGOoQOkjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$use$2d$render$2f$useRender$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"]
    ];
});
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/dialog/index.parts.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Backdrop, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Popup, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "dialog-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/dialog.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 112,
                    columnNumber: 40
                }, this),
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-none font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$dialog$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEYWORDS",
    ()=>KEYWORDS,
    "TokenType",
    ()=>TokenType
]);
var TokenType = /*#__PURE__*/ function(TokenType) {
    TokenType["IntLiteral"] = "IntLiteral";
    TokenType["FloatLiteral"] = "FloatLiteral";
    TokenType["Identifier"] = "Identifier";
    TokenType["Int"] = "Int";
    TokenType["Float"] = "Float";
    TokenType["Void"] = "Void";
    TokenType["For"] = "For";
    TokenType["While"] = "While";
    TokenType["If"] = "If";
    TokenType["Else"] = "Else";
    TokenType["Return"] = "Return";
    TokenType["Break"] = "Break";
    TokenType["Continue"] = "Continue";
    TokenType["Plus"] = "Plus";
    TokenType["Minus"] = "Minus";
    TokenType["Star"] = "Star";
    TokenType["Slash"] = "Slash";
    TokenType["Percent"] = "Percent";
    TokenType["Assign"] = "Assign";
    TokenType["PlusEq"] = "PlusEq";
    TokenType["MinusEq"] = "MinusEq";
    TokenType["StarEq"] = "StarEq";
    TokenType["SlashEq"] = "SlashEq";
    TokenType["PercentEq"] = "PercentEq";
    TokenType["EqEq"] = "EqEq";
    TokenType["NotEq"] = "NotEq";
    TokenType["Lt"] = "Lt";
    TokenType["LtEq"] = "LtEq";
    TokenType["Gt"] = "Gt";
    TokenType["GtEq"] = "GtEq";
    TokenType["AndAnd"] = "AndAnd";
    TokenType["OrOr"] = "OrOr";
    TokenType["Not"] = "Not";
    TokenType["Amp"] = "Amp";
    TokenType["Pipe"] = "Pipe";
    TokenType["Caret"] = "Caret";
    TokenType["Tilde"] = "Tilde";
    TokenType["Shl"] = "Shl";
    TokenType["Shr"] = "Shr";
    TokenType["PlusPlus"] = "PlusPlus";
    TokenType["MinusMinus"] = "MinusMinus";
    TokenType["LParen"] = "LParen";
    TokenType["RParen"] = "RParen";
    TokenType["LBrace"] = "LBrace";
    TokenType["RBrace"] = "RBrace";
    TokenType["LBracket"] = "LBracket";
    TokenType["RBracket"] = "RBracket";
    TokenType["Semi"] = "Semi";
    TokenType["Comma"] = "Comma";
    TokenType["EOF"] = "EOF";
    return TokenType;
}({});
const KEYWORDS = {
    int: "Int",
    float: "Float",
    void: "Void",
    for: "For",
    while: "While",
    if: "If",
    else: "Else",
    return: "Return",
    break: "Break",
    continue: "Continue"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/lexer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tokenize",
    ()=>tokenize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/tokens.ts [app-client] (ecmascript)");
;
const MULTI_CHAR_OPERATORS = [
    [
        "<<",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Shl
    ],
    [
        ">>",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Shr
    ],
    [
        "==",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].EqEq
    ],
    [
        "!=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].NotEq
    ],
    [
        "<=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LtEq
    ],
    [
        ">=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].GtEq
    ],
    [
        "&&",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].AndAnd
    ],
    [
        "||",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].OrOr
    ],
    [
        "++",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusPlus
    ],
    [
        "--",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].MinusMinus
    ],
    [
        "+=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusEq
    ],
    [
        "-=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].MinusEq
    ],
    [
        "*=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].StarEq
    ],
    [
        "/=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].SlashEq
    ],
    [
        "%=",
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PercentEq
    ]
];
const SINGLE_CHAR_OPERATORS = {
    "+": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Plus,
    "-": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Minus,
    "*": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Star,
    "/": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Slash,
    "%": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Percent,
    "=": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Assign,
    "<": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Lt,
    ">": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Gt,
    "!": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Not,
    "&": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Amp,
    "|": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Pipe,
    "^": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Caret,
    "~": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Tilde,
    "(": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LParen,
    ")": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen,
    "{": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LBrace,
    "}": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RBrace,
    "[": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LBracket,
    "]": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RBracket,
    ";": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi,
    ",": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Comma
};
function isDigit(ch) {
    return ch >= "0" && ch <= "9";
}
function isIdentStart(ch) {
    return /[A-Za-z_]/.test(ch);
}
function isIdentPart(ch) {
    return /[A-Za-z0-9_]/.test(ch);
}
function tokenize(source) {
    const tokens = [];
    const errors = [];
    let i = 0;
    let line = 1;
    let col = 1;
    function advance(n = 1) {
        for(let k = 0; k < n; k++){
            if (source[i] === "\n") {
                line++;
                col = 1;
            } else {
                col++;
            }
            i++;
        }
    }
    while(i < source.length){
        const ch = source[i];
        if (ch === " " || ch === "\t" || ch === "\r" || ch === "\n") {
            advance();
            continue;
        }
        if (ch === "/" && source[i + 1] === "/") {
            while(i < source.length && source[i] !== "\n")advance();
            continue;
        }
        if (ch === "/" && source[i + 1] === "*") {
            advance(2);
            while(i < source.length && !(source[i] === "*" && source[i + 1] === "/"))advance();
            if (i < source.length) advance(2);
            continue;
        }
        const startLine = line;
        const startCol = col;
        const startOffset = i;
        if (isDigit(ch) || ch === "." && isDigit(source[i + 1] ?? "")) {
            let text = "";
            let isFloat = false;
            while(i < source.length && isDigit(source[i])){
                text += source[i];
                advance();
            }
            if (source[i] === ".") {
                isFloat = true;
                text += source[i];
                advance();
                while(i < source.length && isDigit(source[i])){
                    text += source[i];
                    advance();
                }
            }
            if (source[i] === "e" || source[i] === "E") {
                isFloat = true;
                text += source[i];
                advance();
                if (source[i] === "+" || source[i] === "-") {
                    text += source[i];
                    advance();
                }
                while(i < source.length && isDigit(source[i])){
                    text += source[i];
                    advance();
                }
            }
            if (source[i] === "f" || source[i] === "F") {
                isFloat = true;
                advance();
            }
            tokens.push({
                type: isFloat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].FloatLiteral : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IntLiteral,
                value: text,
                line: startLine,
                col: startCol,
                startOffset,
                endOffset: i
            });
            continue;
        }
        if (isIdentStart(ch)) {
            let text = "";
            while(i < source.length && isIdentPart(source[i])){
                text += source[i];
                advance();
            }
            const type = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYWORDS"][text] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Identifier;
            tokens.push({
                type,
                value: text,
                line: startLine,
                col: startCol,
                startOffset,
                endOffset: i
            });
            continue;
        }
        const twoChar = source.slice(i, i + 2);
        const multiMatch = MULTI_CHAR_OPERATORS.find(([op])=>op === twoChar);
        if (multiMatch) {
            advance(2);
            tokens.push({
                type: multiMatch[1],
                value: twoChar,
                line: startLine,
                col: startCol,
                startOffset,
                endOffset: i
            });
            continue;
        }
        const single = SINGLE_CHAR_OPERATORS[ch];
        if (single) {
            advance();
            tokens.push({
                type: single,
                value: ch,
                line: startLine,
                col: startCol,
                startOffset,
                endOffset: i
            });
            continue;
        }
        errors.push({
            tier: "parse",
            message: `Unexpected character '${ch}'`,
            line: startLine,
            col: startCol
        });
        advance();
    }
    tokens.push({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].EOF,
        value: "",
        line,
        col,
        startOffset: i,
        endOffset: i
    });
    return {
        tokens,
        errors
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/ast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNodeIdGenerator",
    ()=>createNodeIdGenerator
]);
function createNodeIdGenerator() {
    let next = 0;
    return ()=>next++;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/parser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSource",
    ()=>parseSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$lexer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/lexer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$ast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/ast.ts [app-client] (ecmascript)");
;
;
;
// Binding power table for precedence-climbing binary/logical expression parsing.
// Higher binds tighter. Assignment (handled separately, right-assoc) sits below all of these.
const BINARY_PRECEDENCE = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].OrOr]: 1,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].AndAnd]: 2,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Pipe]: 3,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Caret]: 4,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Amp]: 5,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].EqEq]: 6,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].NotEq]: 6,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Lt]: 7,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LtEq]: 7,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Gt]: 7,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].GtEq]: 7,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Shl]: 8,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Shr]: 8,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Plus]: 9,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Minus]: 9,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Star]: 10,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Slash]: 10,
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Percent]: 10
};
const TOKEN_TO_BINARY_OP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Plus]: "+",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Minus]: "-",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Star]: "*",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Slash]: "/",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Percent]: "%",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].EqEq]: "==",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].NotEq]: "!=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Lt]: "<",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LtEq]: "<=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Gt]: ">",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].GtEq]: ">=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Amp]: "&",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Pipe]: "|",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Caret]: "^",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Shl]: "<<",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Shr]: ">>"
};
const ASSIGN_TOKEN_TO_OP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Assign]: "=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusEq]: "+=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].MinusEq]: "-=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].StarEq]: "*=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].SlashEq]: "/=",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PercentEq]: "%="
};
class ParseFailure extends Error {
}
class Parser {
    tokens;
    pos;
    nextId;
    errors;
    constructor(tokens){
        this.tokens = tokens;
        this.pos = 0;
        this.nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$ast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeIdGenerator"])();
        this.errors = [];
    }
    peek(offset = 0) {
        return this.tokens[Math.min(this.pos + offset, this.tokens.length - 1)];
    }
    at(type) {
        return this.peek().type === type;
    }
    advance() {
        const tok = this.tokens[this.pos];
        if (this.pos < this.tokens.length - 1) this.pos++;
        return tok;
    }
    expect(type, what) {
        if (!this.at(type)) {
            this.fail(`Expected ${what} but found '${this.peek().value || this.peek().type}'`);
        }
        return this.advance();
    }
    fail(message) {
        const tok = this.peek();
        this.errors.push({
            tier: "parse",
            message,
            line: tok.line,
            col: tok.col
        });
        throw new ParseFailure(message);
    }
    loc(start, end) {
        return {
            startLine: start.line,
            startCol: start.col,
            endLine: end.line,
            endCol: end.col
        };
    }
    parseProgram() {
        const start = this.peek();
        const functions = [];
        while(!this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].EOF)){
            functions.push(this.parseFunctionDecl());
        }
        const end = this.peek();
        return {
            type: "Program",
            id: this.nextId(),
            loc: this.loc(start, end),
            functions
        };
    }
    parseTypeKeyword() {
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Void)) {
            this.advance();
            return "void";
        }
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Int)) {
            this.advance();
            return "int";
        }
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Float)) {
            this.advance();
            return "float";
        }
        this.fail(`Expected a type ('void', 'int', or 'float') but found '${this.peek().value}'`);
    }
    parseFunctionDecl() {
        const start = this.peek();
        const returnType = this.parseTypeKeyword();
        const nameTok = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Identifier, "a function name");
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LParen, "'(' after function name");
        const params = [];
        if (!this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen)) {
            params.push(this.parseParamDecl());
            while(this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Comma)){
                this.advance();
                params.push(this.parseParamDecl());
            }
        }
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen, "')' after parameter list");
        const body = this.parseBlockStmt();
        const end = this.peek();
        return {
            type: "FunctionDecl",
            id: this.nextId(),
            loc: this.loc(start, end),
            name: nameTok.value,
            returnType,
            params,
            body
        };
    }
    parseParamDecl() {
        const start = this.peek();
        const base = this.parseTypeKeyword();
        if (base === "void") this.fail("'void' is not a valid parameter type");
        let isPointer = false;
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Star)) {
            this.advance();
            isPointer = true;
        }
        const nameTok = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Identifier, "a parameter name");
        const end = this.peek();
        return {
            type: "ParamDecl",
            id: this.nextId(),
            loc: this.loc(start, end),
            name: nameTok.value,
            paramType: isPointer ? `${base}*` : base
        };
    }
    parseBlockStmt() {
        const start = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LBrace, "'{'");
        const body = [];
        while(!this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RBrace) && !this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].EOF)){
            body.push(this.parseStmt());
        }
        const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RBrace, "'}'");
        return {
            type: "BlockStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            body
        };
    }
    isTypeKeyword() {
        return this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Int) || this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Float);
    }
    parseStmt() {
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LBrace)) return this.parseBlockStmt();
        if (this.isTypeKeyword()) return this.parseVarDeclStmt();
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].If)) return this.parseIfStmt();
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].For)) return this.parseForStmt();
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].While)) return this.parseWhileStmt();
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Return)) return this.parseReturnStmt();
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Break)) {
            const start = this.advance();
            const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi, "';' after 'break'");
            return {
                type: "BreakStmt",
                id: this.nextId(),
                loc: this.loc(start, end)
            };
        }
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Continue)) {
            const start = this.advance();
            const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi, "';' after 'continue'");
            return {
                type: "ContinueStmt",
                id: this.nextId(),
                loc: this.loc(start, end)
            };
        }
        return this.parseExprStmt();
    }
    parseVarDeclStmt() {
        const start = this.peek();
        const varType = this.parseTypeKeyword();
        const nameTok = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Identifier, "a variable name");
        let init = null;
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Assign)) {
            this.advance();
            init = this.parseExpr();
        }
        const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi, "';' after variable declaration");
        return {
            type: "VarDeclStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            varType,
            name: nameTok.value,
            init
        };
    }
    parseExprStmt() {
        const start = this.peek();
        const expr = this.parseExpr();
        const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi, "';' after expression");
        return {
            type: "ExprStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            expr
        };
    }
    parseIfStmt() {
        const start = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].If, "'if'");
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LParen, "'(' after 'if'");
        const test = this.parseExpr();
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen, "')' after if-condition");
        const consequent = this.parseStmt();
        let alternate = null;
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Else)) {
            this.advance();
            alternate = this.parseStmt();
        }
        const end = this.peek();
        return {
            type: "IfStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            test,
            consequent,
            alternate
        };
    }
    parseForStmt() {
        const start = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].For, "'for'");
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LParen, "'(' after 'for'");
        let init = null;
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi)) {
            this.advance();
        } else if (this.isTypeKeyword()) {
            init = this.parseVarDeclStmt();
        } else {
            init = this.parseExprStmt();
        }
        let test = null;
        if (!this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi)) test = this.parseExpr();
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi, "';' after for-loop condition");
        let update = null;
        if (!this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen)) update = this.parseExpr();
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen, "')' after for-loop clauses");
        const body = this.parseStmt();
        const end = this.peek();
        return {
            type: "ForStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            init,
            test,
            update,
            body
        };
    }
    parseWhileStmt() {
        const start = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].While, "'while'");
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LParen, "'(' after 'while'");
        const test = this.parseExpr();
        this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen, "')' after while-condition");
        const body = this.parseStmt();
        const end = this.peek();
        return {
            type: "WhileStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            test,
            body
        };
    }
    parseReturnStmt() {
        const start = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Return, "'return'");
        let argument = null;
        if (!this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi)) argument = this.parseExpr();
        const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Semi, "';' after return statement");
        return {
            type: "ReturnStmt",
            id: this.nextId(),
            loc: this.loc(start, end),
            argument
        };
    }
    // --- Expressions ---
    parseExpr() {
        return this.parseAssignment();
    }
    parseAssignment() {
        const start = this.peek();
        const left = this.parseBinary(1);
        const assignOp = ASSIGN_TOKEN_TO_OP[this.peek().type];
        if (assignOp) {
            if (left.type !== "Identifier" && left.type !== "IndexExpr") {
                this.fail("Left-hand side of assignment must be a variable or array element");
            }
            this.advance();
            const right = this.parseAssignment();
            const end = this.peek();
            return {
                type: "AssignExpr",
                id: this.nextId(),
                loc: this.loc(start, end),
                op: assignOp,
                left: left,
                right
            };
        }
        return left;
    }
    parseBinary(minPrec) {
        let left = this.parseUnary();
        for(;;){
            const tokType = this.peek().type;
            const prec = BINARY_PRECEDENCE[tokType];
            if (prec === undefined || prec < minPrec) break;
            const opTok = this.advance();
            const right = this.parseBinary(prec + 1);
            const end = this.peek();
            const loc = {
                startLine: left.loc.startLine,
                startCol: left.loc.startCol,
                endLine: end.line,
                endCol: end.col
            };
            if (tokType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].AndAnd || tokType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].OrOr) {
                left = {
                    type: "LogicalExpr",
                    id: this.nextId(),
                    loc,
                    op: tokType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].AndAnd ? "&&" : "||",
                    left,
                    right
                };
            } else {
                left = {
                    type: "BinaryExpr",
                    id: this.nextId(),
                    loc,
                    op: TOKEN_TO_BINARY_OP[opTok.type],
                    left,
                    right
                };
            }
        }
        return left;
    }
    parseUnary() {
        const start = this.peek();
        const unaryMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Minus]: "-",
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Not]: "!",
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Tilde]: "~"
        };
        const op = unaryMap[this.peek().type];
        if (op) {
            this.advance();
            const argument = this.parseUnary();
            const end = this.peek();
            return {
                type: "UnaryExpr",
                id: this.nextId(),
                loc: this.loc(start, end),
                op,
                argument
            };
        }
        if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusPlus) || this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].MinusMinus)) {
            const opTok = this.advance();
            const argument = this.parseUnary();
            if (argument.type !== "Identifier" && argument.type !== "IndexExpr") {
                this.fail("'++'/'--' can only be applied to a variable or array element");
            }
            const end = this.peek();
            return {
                type: "UpdateExpr",
                id: this.nextId(),
                loc: this.loc(start, end),
                op: opTok.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusPlus ? "++" : "--",
                argument: argument,
                prefix: true
            };
        }
        return this.parsePostfix();
    }
    parsePostfix() {
        const start = this.peek();
        let expr = this.parsePrimary();
        for(;;){
            if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LBracket)) {
                this.advance();
                const index = this.parseExpr();
                const end = this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RBracket, "']' after array index");
                if (expr.type !== "Identifier") {
                    this.fail("Only a simple array name can be indexed (e.g. 'A[i]')");
                }
                expr = {
                    type: "IndexExpr",
                    id: this.nextId(),
                    loc: this.loc(start, end),
                    object: expr,
                    index
                };
                continue;
            }
            if (this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusPlus) || this.at(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].MinusMinus)) {
                if (expr.type !== "Identifier" && expr.type !== "IndexExpr") {
                    this.fail("'++'/'--' can only be applied to a variable or array element");
                }
                const opTok = this.advance();
                const end = this.peek();
                expr = {
                    type: "UpdateExpr",
                    id: this.nextId(),
                    loc: this.loc(start, end),
                    op: opTok.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PlusPlus ? "++" : "--",
                    argument: expr,
                    prefix: false
                };
                continue;
            }
            break;
        }
        return expr;
    }
    parsePrimary() {
        const tok = this.peek();
        if (tok.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IntLiteral) {
            this.advance();
            const lit = {
                type: "Literal",
                id: this.nextId(),
                loc: this.loc(tok, tok),
                value: parseInt(tok.value, 10),
                litType: "int"
            };
            return lit;
        }
        if (tok.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].FloatLiteral) {
            this.advance();
            const lit = {
                type: "Literal",
                id: this.nextId(),
                loc: this.loc(tok, tok),
                value: parseFloat(tok.value),
                litType: "float"
            };
            return lit;
        }
        if (tok.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].Identifier) {
            this.advance();
            const ident = {
                type: "Identifier",
                id: this.nextId(),
                loc: this.loc(tok, tok),
                name: tok.value
            };
            return ident;
        }
        if (tok.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].LParen) {
            this.advance();
            const expr = this.parseExpr();
            this.expect(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].RParen, "')' to close the parenthesized expression");
            return expr;
        }
        this.fail(`Unexpected token '${tok.value || tok.type}'`);
    }
}
function parseSource(source) {
    const { tokens, errors: lexErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$lexer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenize"])(source);
    if (lexErrors.length > 0) {
        return {
            program: null,
            errors: lexErrors
        };
    }
    const parser = new Parser(tokens);
    try {
        const program = parser.parseProgram();
        return {
            program,
            errors: parser.errors
        };
    } catch (e) {
        if (e instanceof ParseFailure) {
            return {
                program: null,
                errors: parser.errors
            };
        }
        throw e;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/resolve.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveProgram",
    ()=>resolveProgram
]);
class ResolveScope {
    parent;
    names;
    constructor(parent){
        this.parent = parent;
        this.names = new Set();
    }
    declare(name) {
        this.names.add(name);
    }
    has(name) {
        return this.names.has(name) || (this.parent?.has(name) ?? false);
    }
}
function resolveProgram(program) {
    const errors = [];
    for (const fn of program.functions){
        resolveFunction(fn, errors);
    }
    return {
        errors
    };
}
function resolveFunction(fn, errors) {
    const fnScope = new ResolveScope(null);
    for (const param of fn.params)fnScope.declare(param.name);
    resolveBlock(fn.body, fnScope, errors);
}
function resolveBlock(block, parent, errors) {
    const scope = new ResolveScope(parent);
    for (const stmt of block.body)resolveStmt(stmt, scope, errors);
}
function resolveStmtOrBlock(stmt, parent, errors) {
    if (stmt.type === "BlockStmt") {
        resolveBlock(stmt, parent, errors);
    } else {
        resolveStmt(stmt, parent, errors);
    }
}
function resolveStmt(stmt, scope, errors) {
    switch(stmt.type){
        case "BlockStmt":
            resolveBlock(stmt, scope, errors);
            return;
        case "VarDeclStmt":
            if (stmt.init) resolveExpr(stmt.init, scope, errors);
            scope.declare(stmt.name);
            return;
        case "ExprStmt":
            resolveExpr(stmt.expr, scope, errors);
            return;
        case "IfStmt":
            resolveExpr(stmt.test, scope, errors);
            resolveStmtOrBlock(stmt.consequent, scope, errors);
            if (stmt.alternate) resolveStmtOrBlock(stmt.alternate, scope, errors);
            return;
        case "ForStmt":
            {
                const forScope = new ResolveScope(scope);
                if (stmt.init) resolveStmt(stmt.init, forScope, errors);
                if (stmt.test) resolveExpr(stmt.test, forScope, errors);
                if (stmt.update) resolveExpr(stmt.update, forScope, errors);
                resolveStmtOrBlock(stmt.body, forScope, errors);
                return;
            }
        case "WhileStmt":
            resolveExpr(stmt.test, scope, errors);
            resolveStmtOrBlock(stmt.body, scope, errors);
            return;
        case "ReturnStmt":
            if (stmt.argument) resolveExpr(stmt.argument, scope, errors);
            return;
        case "BreakStmt":
        case "ContinueStmt":
            return;
    }
}
function resolveExpr(expr, scope, errors) {
    switch(expr.type){
        case "Identifier":
            if (!scope.has(expr.name)) {
                errors.push({
                    tier: "parse",
                    message: `'${expr.name}' is not declared`,
                    line: expr.loc.startLine,
                    col: expr.loc.startCol
                });
            }
            return;
        case "Literal":
            return;
        case "BinaryExpr":
        case "LogicalExpr":
            resolveExpr(expr.left, scope, errors);
            resolveExpr(expr.right, scope, errors);
            return;
        case "UnaryExpr":
            resolveExpr(expr.argument, scope, errors);
            return;
        case "UpdateExpr":
            resolveExpr(expr.argument, scope, errors);
            return;
        case "AssignExpr":
            resolveExpr(expr.left, scope, errors);
            resolveExpr(expr.right, scope, errors);
            return;
        case "IndexExpr":
            resolveExpr(expr.object, scope, errors);
            resolveExpr(expr.index, scope, errors);
            return;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/environment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scope",
    ()=>Scope,
    "makeBuffer",
    ()=>makeBuffer
]);
function makeBuffer(name, type, values) {
    const elementType = type === "float*" ? "float" : "int";
    const data = elementType === "float" ? new Float32Array(values) : new Int32Array(values);
    return {
        kind: "buffer",
        name,
        elementType,
        data
    };
}
class Scope {
    parent;
    vars;
    constructor(parent){
        this.parent = parent;
        this.vars = new Map();
    }
    declare(name, value) {
        this.vars.set(name, value);
    }
    lookup(name) {
        return this.vars.get(name) ?? this.parent?.lookup(name);
    }
    /** Mutates the scalar in whichever scope in the chain owns `name`. Returns false if not found. */ setScalar(name, value) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let scope = this;
        while(scope){
            const existing = scope.vars.get(name);
            if (existing && existing.kind === "scalar") {
                scope.vars.set(name, {
                    kind: "scalar",
                    type: existing.type,
                    value
                });
                return true;
            }
            scope = scope.parent;
        }
        return false;
    }
    /** Flattened snapshot of every scalar visible in this scope chain, for StepEvent.scopeSnapshot. */ snapshotScalars() {
        const result = {};
        const chain = [];
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let scope = this;
        while(scope){
            chain.push(scope);
            scope = scope.parent;
        }
        // Walk outermost-to-innermost so inner shadowing wins.
        for(let i = chain.length - 1; i >= 0; i--){
            for (const [name, value] of chain[i].vars){
                if (value.kind === "scalar") result[name] = value.value;
            }
        }
        return result;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/errors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FatalRuntimeError",
    ()=>FatalRuntimeError
]);
class FatalRuntimeError extends Error {
    err;
    constructor(err){
        super(err.message), this.err = err;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/interpreter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "run",
    ()=>run,
    "validateConfig",
    ()=>validateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/errors.ts [app-client] (ecmascript)");
;
;
const DEFAULT_MAX_STEPS = 1_000_000;
const WALL_CLOCK_BUDGET_MS = 2000;
const WALL_CLOCK_CHECK_INTERVAL = 10_000;
const MAX_RECORDED_ERRORS = 50;
class BreakSignal {
}
class ContinueSignal {
}
class ReturnSignal {
    value;
    constructor(value){
        this.value = value;
    }
}
function validateConfig(program, config) {
    const errors = [];
    const fn = program.functions.find((f)=>f.name === config.functionName);
    if (!fn) {
        errors.push({
            tier: "config",
            message: `Function '${config.functionName}' not found in source`
        });
        return errors;
    }
    for (const param of fn.params){
        if (param.paramType === "int*" || param.paramType === "float*") {
            const bufCfg = config.buffers.find((b)=>b.name === param.name);
            if (!bufCfg) {
                errors.push({
                    tier: "config",
                    message: `Missing buffer configuration for '${param.name}'`,
                    paramName: param.name
                });
            } else if (bufCfg.type !== param.paramType) {
                errors.push({
                    tier: "config",
                    message: `Buffer '${param.name}' expected type ${param.paramType}, got ${bufCfg.type}`,
                    paramName: param.name
                });
            } else if (bufCfg.values.length !== bufCfg.length) {
                errors.push({
                    tier: "config",
                    message: `Buffer '${param.name}' declares length ${bufCfg.length} but supplied ${bufCfg.values.length} values`,
                    paramName: param.name
                });
            }
        } else {
            const scalarCfg = config.scalars.find((s)=>s.name === param.name);
            if (!scalarCfg) {
                errors.push({
                    tier: "config",
                    message: `Missing scalar configuration for '${param.name}'`,
                    paramName: param.name
                });
            } else if (scalarCfg.type !== param.paramType) {
                errors.push({
                    tier: "config",
                    message: `Scalar '${param.name}' expected type ${param.paramType}, got ${scalarCfg.type}`,
                    paramName: param.name
                });
            }
        }
    }
    return errors;
}
function run(program, config) {
    const fn = program.functions.find((f)=>f.name === config.functionName);
    const errors = [];
    if (!fn) {
        return {
            steps: [],
            finalMemory: {},
            finalScalars: {},
            errors,
            truncated: false
        };
    }
    const maxSteps = config.maxSteps ?? DEFAULT_MAX_STEPS;
    const buffers = new Map();
    for (const bufCfg of config.buffers){
        buffers.set(bufCfg.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeBuffer"])(bufCfg.name, bufCfg.type, bufCfg.values));
    }
    const ctx = new ExecContext(errors, maxSteps);
    const fnScope = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](null);
    for (const param of fn.params){
        if (param.paramType === "int*" || param.paramType === "float*") {
            const buf = buffers.get(param.name);
            if (buf) fnScope.declare(param.name, buf);
        } else {
            const scalarCfg = config.scalars.find((s)=>s.name === param.name);
            fnScope.declare(param.name, {
                kind: "scalar",
                type: param.paramType,
                value: scalarCfg?.value ?? 0
            });
        }
    }
    let truncated = false;
    try {
        ctx.emit(fn.id, fn.loc.startLine, fn.loc.startCol, fnScope, "enter-function");
        try {
            executeBlock(fn.body, fnScope, ctx);
        } catch (e) {
            if (!(e instanceof ReturnSignal)) throw e;
        }
        ctx.emit(fn.id, fn.loc.endLine, fn.loc.endCol, fnScope, "exit-function");
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FatalRuntimeError"]) {
            errors.push(e.err);
            truncated = e.err.kind === "max-steps-exceeded";
        } else {
            throw e;
        }
    }
    const finalMemory = {};
    for (const [name, buf] of buffers)finalMemory[name] = Array.from(buf.data);
    return {
        steps: ctx.steps,
        finalMemory,
        finalScalars: fnScope.snapshotScalars(),
        errors,
        truncated
    };
}
class ExecContext {
    errors;
    maxSteps;
    steps;
    seq;
    stepsSinceClockCheck;
    startTime;
    loopStack;
    depth;
    constructor(errors, maxSteps){
        this.errors = errors;
        this.maxSteps = maxSteps;
        this.steps = [];
        this.seq = 0;
        this.stepsSinceClockCheck = 0;
        this.startTime = Date.now();
        this.loopStack = [];
        this.depth = 0;
    }
    checkGuards(nodeId, line, col) {
        if (this.seq >= this.maxSteps) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FatalRuntimeError"]({
                tier: "runtime",
                kind: "max-steps-exceeded",
                message: `Execution stopped after ${this.maxSteps.toLocaleString()} steps — this may be an infinite loop. Check your loop bounds.`,
                nodeId,
                line,
                col,
                seq: this.seq,
                fatal: true
            });
        }
        this.stepsSinceClockCheck++;
        if (this.stepsSinceClockCheck >= WALL_CLOCK_CHECK_INTERVAL) {
            this.stepsSinceClockCheck = 0;
            if (Date.now() - this.startTime > WALL_CLOCK_BUDGET_MS) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FatalRuntimeError"]({
                    tier: "runtime",
                    kind: "max-steps-exceeded",
                    message: "Execution stopped — exceeded time budget. Check your loop bounds.",
                    nodeId,
                    line,
                    col,
                    seq: this.seq,
                    fatal: true
                });
            }
        }
    }
    emit(nodeId, line, col, scope, kind) {
        this.checkGuards(nodeId, line, col);
        const event = {
            seq: this.seq++,
            kind,
            nodeId,
            line,
            col,
            depth: this.depth,
            loopStack: this.loopStack.map((f)=>({
                    ...f
                })),
            scopeSnapshot: scope.snapshotScalars(),
            threadId: 0,
            blockId: 0
        };
        this.steps.push(event);
        return event;
    }
    emitVarDecl(nodeId, line, col, scope, name, value) {
        this.checkGuards(nodeId, line, col);
        this.steps.push({
            seq: this.seq++,
            kind: "var-decl",
            nodeId,
            line,
            col,
            depth: this.depth,
            loopStack: this.loopStack.map((f)=>({
                    ...f
                })),
            scopeSnapshot: scope.snapshotScalars(),
            threadId: 0,
            blockId: 0,
            name,
            value
        });
    }
    emitVarWrite(nodeId, line, col, scope, name, oldValue, newValue) {
        this.checkGuards(nodeId, line, col);
        this.steps.push({
            seq: this.seq++,
            kind: "var-write",
            nodeId,
            line,
            col,
            depth: this.depth,
            loopStack: this.loopStack.map((f)=>({
                    ...f
                })),
            scopeSnapshot: scope.snapshotScalars(),
            threadId: 0,
            blockId: 0,
            name,
            oldValue,
            newValue
        });
    }
    emitMemRead(nodeId, line, col, scope, buffer, index, value, inBounds) {
        this.checkGuards(nodeId, line, col);
        this.steps.push({
            seq: this.seq++,
            kind: "mem-read",
            nodeId,
            line,
            col,
            depth: this.depth,
            loopStack: this.loopStack.map((f)=>({
                    ...f
                })),
            scopeSnapshot: scope.snapshotScalars(),
            threadId: 0,
            blockId: 0,
            buffer,
            index,
            value,
            inBounds
        });
    }
    emitMemWrite(nodeId, line, col, scope, buffer, index, oldValue, newValue, inBounds) {
        this.checkGuards(nodeId, line, col);
        this.steps.push({
            seq: this.seq++,
            kind: "mem-write",
            nodeId,
            line,
            col,
            depth: this.depth,
            loopStack: this.loopStack.map((f)=>({
                    ...f
                })),
            scopeSnapshot: scope.snapshotScalars(),
            threadId: 0,
            blockId: 0,
            buffer,
            index,
            oldValue,
            newValue,
            inBounds
        });
    }
    emitLoopTest(nodeId, line, col, scope, result) {
        this.checkGuards(nodeId, line, col);
        this.steps.push({
            seq: this.seq++,
            kind: "loop-test",
            nodeId,
            line,
            col,
            depth: this.depth,
            loopStack: this.loopStack.map((f)=>({
                    ...f
                })),
            scopeSnapshot: scope.snapshotScalars(),
            threadId: 0,
            blockId: 0,
            result
        });
    }
    recordOutOfBounds(nodeId, line, col, message) {
        if (this.errors.length < MAX_RECORDED_ERRORS) {
            this.errors.push({
                tier: "runtime",
                kind: "out-of-bounds",
                message,
                nodeId,
                line,
                col,
                seq: this.seq,
                fatal: false
            });
        }
    }
}
function executeBlock(block, parentScope, ctx) {
    const scope = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](parentScope);
    ctx.emit(block.id, block.loc.startLine, block.loc.startCol, scope, "scope-enter");
    for (const stmt of block.body){
        executeStmt(stmt, scope, ctx);
    }
    ctx.emit(block.id, block.loc.endLine, block.loc.endCol, scope, "scope-exit");
}
function executeStmtOrBlock(stmt, scope, ctx) {
    if (stmt.type === "BlockStmt") {
        executeBlock(stmt, scope, ctx);
    } else {
        executeStmt(stmt, scope, ctx);
    }
}
function executeStmt(stmt, scope, ctx) {
    switch(stmt.type){
        case "BlockStmt":
            executeBlock(stmt, scope, ctx);
            return;
        case "VarDeclStmt":
            {
                ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
                const initVal = stmt.init ? evaluateExpr(stmt.init, scope, ctx) : {
                    n: 0,
                    t: stmt.varType
                };
                const value = coerce(initVal, stmt.varType);
                scope.declare(stmt.name, {
                    kind: "scalar",
                    type: stmt.varType,
                    value
                });
                ctx.emitVarDecl(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, stmt.name, value);
                return;
            }
        case "ExprStmt":
            ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
            evaluateExpr(stmt.expr, scope, ctx);
            return;
        case "IfStmt":
            {
                ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
                const testVal = evaluateExpr(stmt.test, scope, ctx);
                if (testVal.n !== 0) {
                    executeStmtOrBlock(stmt.consequent, scope, ctx);
                } else if (stmt.alternate) {
                    executeStmtOrBlock(stmt.alternate, scope, ctx);
                }
                return;
            }
        case "ForStmt":
            executeForStmt(stmt, scope, ctx);
            return;
        case "WhileStmt":
            executeWhileStmt(stmt, scope, ctx);
            return;
        case "ReturnStmt":
            {
                ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "stmt-enter");
                const value = stmt.argument ? evaluateExpr(stmt.argument, scope, ctx) : null;
                ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, scope, "return");
                throw new ReturnSignal(value);
            }
        case "BreakStmt":
            throw new BreakSignal();
        case "ContinueStmt":
            throw new ContinueSignal();
    }
}
function executeForStmt(stmt, parentScope, ctx) {
    const forScope = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](parentScope);
    ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, "loop-enter");
    let varName = null;
    if (stmt.init) {
        if (stmt.init.type === "VarDeclStmt") {
            varName = stmt.init.name;
            executeStmt(stmt.init, forScope, ctx);
        } else {
            executeStmt(stmt.init, forScope, ctx);
        }
    }
    const frame = {
        nodeId: stmt.id,
        varName,
        value: varName ? forScope.lookup(varName).value : null
    };
    ctx.loopStack.push(frame);
    ctx.depth++;
    try {
        for(;;){
            const testResult = stmt.test ? evaluateExpr(stmt.test, forScope, ctx) : {
                n: 1,
                t: "int"
            };
            ctx.emitLoopTest(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, testResult.n !== 0);
            if (testResult.n === 0) break;
            if (varName) frame.value = forScope.lookup(varName).value;
            ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, forScope, "loop-iter");
            try {
                executeStmtOrBlock(stmt.body, forScope, ctx);
            } catch (e) {
                if (!(e instanceof ContinueSignal)) throw e;
            }
            if (stmt.update) evaluateExpr(stmt.update, forScope, ctx);
            if (varName) frame.value = forScope.lookup(varName).value;
        }
    } catch (e) {
        if (!(e instanceof BreakSignal)) throw e;
    } finally{
        ctx.depth--;
        ctx.loopStack.pop();
    }
    ctx.emit(stmt.id, stmt.loc.endLine, stmt.loc.endCol, forScope, "loop-exit");
}
function executeWhileStmt(stmt, parentScope, ctx) {
    ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, "loop-enter");
    const frame = {
        nodeId: stmt.id,
        varName: null,
        value: null
    };
    ctx.loopStack.push(frame);
    ctx.depth++;
    try {
        for(;;){
            const testResult = evaluateExpr(stmt.test, parentScope, ctx);
            ctx.emitLoopTest(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, testResult.n !== 0);
            if (testResult.n === 0) break;
            ctx.emit(stmt.id, stmt.loc.startLine, stmt.loc.startCol, parentScope, "loop-iter");
            try {
                executeStmtOrBlock(stmt.body, parentScope, ctx);
            } catch (e) {
                if (!(e instanceof ContinueSignal)) throw e;
            }
        }
    } catch (e) {
        if (!(e instanceof BreakSignal)) throw e;
    } finally{
        ctx.depth--;
        ctx.loopStack.pop();
    }
    ctx.emit(stmt.id, stmt.loc.endLine, stmt.loc.endCol, parentScope, "loop-exit");
}
function coerce(value, type) {
    return type === "int" ? Math.trunc(value.n) : value.n;
}
function resolveBuffer(ident, scope) {
    const value = scope.lookup(ident.name);
    if (value && value.kind === "buffer") return value;
    return null;
}
function readIndex(node, scope, ctx) {
    const buf = resolveBuffer(node.object, scope);
    const indexVal = evaluateExpr(node.index, scope, ctx);
    const index = Math.trunc(indexVal.n);
    if (!buf) {
        // Caught by the static resolve pass in normal use; treat defensively as OOB rather than crashing.
        return {
            n: NaN,
            t: "float"
        };
    }
    const inBounds = index >= 0 && index < buf.data.length;
    const value = inBounds ? buf.data[index] : NaN;
    ctx.emitMemRead(node.id, node.loc.startLine, node.loc.startCol, scope, buf.name, index, value, inBounds);
    if (!inBounds) {
        ctx.recordOutOfBounds(node.id, node.loc.startLine, node.loc.startCol, `Out-of-bounds read: ${buf.name}[${index}] (buffer length ${buf.data.length})`);
    }
    return {
        n: value,
        t: buf.elementType
    };
}
function writeIndex(node, scope, ctx, newValue) {
    const buf = resolveBuffer(node.object, scope);
    const indexVal = evaluateExpr(node.index, scope, ctx);
    const index = Math.trunc(indexVal.n);
    if (!buf) return newValue.n;
    const inBounds = index >= 0 && index < buf.data.length;
    const stored = coerce(newValue, buf.elementType);
    const oldValue = inBounds ? buf.data[index] : null;
    if (inBounds) buf.data[index] = stored;
    ctx.emitMemWrite(node.id, node.loc.startLine, node.loc.startCol, scope, buf.name, index, oldValue, stored, inBounds);
    if (!inBounds) {
        ctx.recordOutOfBounds(node.id, node.loc.startLine, node.loc.startCol, `Out-of-bounds write: ${buf.name}[${index}] (buffer length ${buf.data.length})`);
    }
    return inBounds ? buf.data[index] : stored;
}
function evaluateExpr(expr, scope, ctx) {
    switch(expr.type){
        case "Literal":
            return {
                n: expr.value,
                t: expr.litType
            };
        case "Identifier":
            {
                const value = scope.lookup(expr.name);
                if (!value || value.kind !== "scalar") return {
                    n: NaN,
                    t: "float"
                };
                return {
                    n: value.value,
                    t: value.type
                };
            }
        case "IndexExpr":
            return readIndex(expr, scope, ctx);
        case "UnaryExpr":
            return evaluateUnary(expr, scope, ctx);
        case "BinaryExpr":
            return evaluateBinary(expr, scope, ctx);
        case "LogicalExpr":
            return evaluateLogical(expr, scope, ctx);
        case "UpdateExpr":
            return evaluateUpdate(expr, scope, ctx);
        case "AssignExpr":
            return evaluateAssign(expr, scope, ctx);
    }
}
function evaluateUnary(expr, scope, ctx) {
    const arg = evaluateExpr(expr.argument, scope, ctx);
    switch(expr.op){
        case "-":
            return {
                n: -arg.n,
                t: arg.t
            };
        case "!":
            return {
                n: arg.n === 0 ? 1 : 0,
                t: "int"
            };
        case "~":
            return {
                n: ~Math.trunc(arg.n),
                t: "int"
            };
    }
}
function divide(a, b, node) {
    const resultIsInt = a.t === "int" && b.t === "int";
    if (resultIsInt && b.n === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FatalRuntimeError"]({
            tier: "runtime",
            kind: "div-by-zero",
            message: "Integer division by zero",
            nodeId: node.id,
            line: node.loc.startLine,
            col: node.loc.startCol,
            seq: -1,
            fatal: true
        });
    }
    return resultIsInt ? Math.trunc(a.n / b.n) : a.n / b.n;
}
function modulo(a, b, node) {
    if (b.n === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FatalRuntimeError"]({
            tier: "runtime",
            kind: "div-by-zero",
            message: "Modulo by zero",
            nodeId: node.id,
            line: node.loc.startLine,
            col: node.loc.startCol,
            seq: -1,
            fatal: true
        });
    }
    return a.n % b.n;
}
function evaluateBinary(expr, scope, ctx) {
    const left = evaluateExpr(expr.left, scope, ctx);
    const right = evaluateExpr(expr.right, scope, ctx);
    const bothInt = left.t === "int" && right.t === "int";
    const numericType = bothInt ? "int" : "float";
    switch(expr.op){
        case "+":
            return {
                n: left.n + right.n,
                t: numericType
            };
        case "-":
            return {
                n: left.n - right.n,
                t: numericType
            };
        case "*":
            return {
                n: left.n * right.n,
                t: numericType
            };
        case "/":
            return {
                n: divide(left, right, expr),
                t: numericType
            };
        case "%":
            return {
                n: modulo(left, right, expr),
                t: "int"
            };
        case "==":
            return {
                n: left.n === right.n ? 1 : 0,
                t: "int"
            };
        case "!=":
            return {
                n: left.n !== right.n ? 1 : 0,
                t: "int"
            };
        case "<":
            return {
                n: left.n < right.n ? 1 : 0,
                t: "int"
            };
        case "<=":
            return {
                n: left.n <= right.n ? 1 : 0,
                t: "int"
            };
        case ">":
            return {
                n: left.n > right.n ? 1 : 0,
                t: "int"
            };
        case ">=":
            return {
                n: left.n >= right.n ? 1 : 0,
                t: "int"
            };
        case "&":
            return {
                n: Math.trunc(left.n) & Math.trunc(right.n),
                t: "int"
            };
        case "|":
            return {
                n: Math.trunc(left.n) | Math.trunc(right.n),
                t: "int"
            };
        case "^":
            return {
                n: Math.trunc(left.n) ^ Math.trunc(right.n),
                t: "int"
            };
        case "<<":
            return {
                n: Math.trunc(left.n) << Math.trunc(right.n),
                t: "int"
            };
        case ">>":
            return {
                n: Math.trunc(left.n) >> Math.trunc(right.n),
                t: "int"
            };
    }
}
function evaluateLogical(expr, scope, ctx) {
    const left = evaluateExpr(expr.left, scope, ctx);
    if (expr.op === "&&") {
        if (left.n === 0) return {
            n: 0,
            t: "int"
        };
        const right = evaluateExpr(expr.right, scope, ctx);
        return {
            n: right.n !== 0 ? 1 : 0,
            t: "int"
        };
    }
    if (left.n !== 0) return {
        n: 1,
        t: "int"
    };
    const right = evaluateExpr(expr.right, scope, ctx);
    return {
        n: right.n !== 0 ? 1 : 0,
        t: "int"
    };
}
function evaluateUpdate(expr, scope, ctx) {
    const delta = expr.op === "++" ? 1 : -1;
    if (expr.argument.type === "Identifier") {
        const current = evaluateExpr(expr.argument, scope, ctx);
        const updated = current.n + delta;
        scope.setScalar(expr.argument.name, current.t === "int" ? Math.trunc(updated) : updated);
        ctx.emitVarWrite(expr.id, expr.loc.startLine, expr.loc.startCol, scope, expr.argument.name, current.n, current.t === "int" ? Math.trunc(updated) : updated);
        return {
            n: expr.prefix ? updated : current.n,
            t: current.t
        };
    }
    const current = readIndex(expr.argument, scope, ctx);
    const updated = current.n + delta;
    writeIndex(expr.argument, scope, ctx, {
        n: updated,
        t: current.t
    });
    return {
        n: expr.prefix ? updated : current.n,
        t: current.t
    };
}
function applyCompound(op, current, rhs, node) {
    const bothInt = current.t === "int" && rhs.t === "int";
    switch(op){
        case "+=":
            return {
                n: current.n + rhs.n,
                t: bothInt ? "int" : "float"
            };
        case "-=":
            return {
                n: current.n - rhs.n,
                t: bothInt ? "int" : "float"
            };
        case "*=":
            return {
                n: current.n * rhs.n,
                t: bothInt ? "int" : "float"
            };
        case "/=":
            return {
                n: divide(current, rhs, node),
                t: bothInt ? "int" : "float"
            };
        case "%=":
            return {
                n: modulo(current, rhs, node),
                t: "int"
            };
        default:
            throw new Error(`Unhandled compound operator ${op}`);
    }
}
function evaluateAssign(expr, scope, ctx) {
    const rhs = evaluateExpr(expr.right, scope, ctx);
    if (expr.left.type === "Identifier") {
        const targetName = expr.left.name;
        const existing = scope.lookup(targetName);
        const declaredType = existing && existing.kind === "scalar" ? existing.type : "float";
        let newValue;
        if (expr.op === "=") {
            newValue = rhs;
        } else {
            const current = evaluateExpr(expr.left, scope, ctx);
            newValue = applyCompound(expr.op, current, rhs, expr);
        }
        const oldValue = existing && existing.kind === "scalar" ? existing.value : 0;
        const stored = coerce(newValue, declaredType);
        scope.setScalar(targetName, stored);
        ctx.emitVarWrite(expr.id, expr.loc.startLine, expr.loc.startCol, scope, targetName, oldValue, stored);
        return {
            n: stored,
            t: declaredType
        };
    }
    // IndexExpr target
    if (expr.op === "=") {
        const stored = writeIndex(expr.left, scope, ctx, rhs);
        return {
            n: stored,
            t: rhs.t
        };
    }
    const current = readIndex(expr.left, scope, ctx);
    const newValue = applyCompound(expr.op, current, rhs, expr);
    const stored = writeIndex(expr.left, scope, ctx, newValue);
    return {
        n: stored,
        t: newValue.t
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/interpreter/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBufferStateAtStep",
    ()=>buildBufferStateAtStep,
    "extractSignatures",
    ()=>extractSignatures,
    "parseSource",
    ()=>parseSource,
    "run",
    ()=>run,
    "validateConfig",
    ()=>validateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$resolve$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/resolve.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$interpreter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/interpreter.ts [app-client] (ecmascript)");
;
;
;
function parseSource(source) {
    const { program, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSource"])(source);
    if (!program) return {
        program: null,
        errors
    };
    const { errors: resolveErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$resolve$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProgram"])(program);
    return {
        program,
        errors: [
            ...errors,
            ...resolveErrors
        ]
    };
}
function extractSignatures(program) {
    return program.functions.map((fn)=>({
            name: fn.name,
            returnType: fn.returnType,
            params: fn.params.map((p)=>({
                    name: p.name,
                    type: p.paramType
                }))
        }));
}
function validateConfig(program, config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$interpreter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateConfig"])(program, config);
}
function run(program, config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$interpreter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["run"])(program, config);
}
function buildBufferStateAtStep(steps, bufferName, initialValues, uptoSeq) {
    const state = initialValues.slice();
    for (const step of steps){
        if (step.seq > uptoSeq) break;
        if (step.kind === "mem-write" && step.buffer === bufferName && step.inBounds) {
            state[step.index] = step.newValue;
        }
    }
    return state;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/interpreterClient.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Single import boundary between the UI and the interpreter package — everything else in the
// app should import from here (or from the re-exported types), not from "@/interpreter" directly.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/index.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/keyframe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bufferStateAt",
    ()=>bufferStateAt,
    "buildKeyframes",
    ()=>buildKeyframes
]);
const KEYFRAME_INTERVAL = 300;
function buildKeyframes(steps, initialBuffers) {
    const keyframes = [];
    const current = {};
    for (const [name, values] of Object.entries(initialBuffers))current[name] = values.slice();
    keyframes.push({
        stepSeq: -1,
        buffers: cloneBuffers(current)
    });
    for (const step of steps){
        if (step.kind === "mem-write" && step.inBounds) {
            current[step.buffer][step.index] = step.newValue;
        }
        if (step.seq > 0 && step.seq % KEYFRAME_INTERVAL === 0) {
            keyframes.push({
                stepSeq: step.seq,
                buffers: cloneBuffers(current)
            });
        }
    }
    return keyframes;
}
function cloneBuffers(buffers) {
    const out = {};
    for (const [name, values] of Object.entries(buffers))out[name] = values.slice();
    return out;
}
function lastKeyframeAtOrBefore(keyframes, seq) {
    // Binary search for the last keyframe with stepSeq <= seq.
    let lo = 0;
    let hi = keyframes.length - 1;
    let best = keyframes[0];
    while(lo <= hi){
        const mid = lo + hi >> 1;
        if (keyframes[mid].stepSeq <= seq) {
            best = keyframes[mid];
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return best;
}
function bufferStateAt(steps, keyframes, seq) {
    const kf = lastKeyframeAtOrBefore(keyframes, seq);
    const buffers = cloneBuffers(kf.buffers);
    for(let i = kf.stepSeq + 1; i <= seq; i++){
        const step = steps[i];
        if (!step) break;
        if (step.kind === "mem-write" && step.inBounds) {
            buffers[step.buffer][step.index] = step.newValue;
        }
    }
    return buffers;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/state/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SOURCE",
    ()=>DEFAULT_SOURCE,
    "computeConfigSignature",
    ()=>computeConfigSignature,
    "getTabDisplayTitle",
    ()=>getTabDisplayTitle,
    "useKernelVizStore",
    ()=>useKernelVizStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$interpreterClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/interpreterClient.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interpreter/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$keyframe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/keyframe.ts [app-client] (ecmascript)");
;
;
;
// Buffers are frequently sized as the product of two scalar dimensions (e.g. an m*n matrix
// flattened into a 1D array), so a flat default bigger than the default scalar value on its
// own avoids spurious out-of-bounds errors on a first, unconfigured Run.
const DEFAULT_BUFFER_SIZE = 16;
const DEFAULT_SCALAR_VALUE = 4;
const DEFAULT_RANDOM_RANGE = [
    -2,
    2
];
const DEFAULT_SOURCE = `void matmul_at_b(float *A, float *B, float *C, int m, int n, int k) {
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
function resolveFillValues(cfg) {
    switch(cfg.fillStrategy){
        case "zero":
            return new Array(cfg.size).fill(0);
        case "sequential":
            return Array.from({
                length: cfg.size
            }, (_, i)=>i);
        case "random":
            {
                const [lo, hi] = cfg.randomRange;
                return Array.from({
                    length: cfg.size
                }, ()=>Math.round((lo + Math.random() * (hi - lo)) * 100) / 100);
            }
        case "manual":
            {
                const values = cfg.manualValues.slice(0, cfg.size);
                while(values.length < cfg.size)values.push(0);
                return values;
            }
    }
}
function defaultBufferConfigForm() {
    return {
        size: DEFAULT_BUFFER_SIZE,
        fillStrategy: "sequential",
        manualValues: [],
        randomRange: DEFAULT_RANDOM_RANGE
    };
}
function computeConfigSignature(bufferConfigs, scalarConfigs) {
    const sizes = Object.fromEntries(Object.entries(bufferConfigs).map(([name, cfg])=>[
            name,
            cfg.size
        ]));
    return JSON.stringify({
        sizes,
        scalarConfigs
    });
}
let nextTabId = 2; // tab-1 is the initial tab created below
function blankTabSnapshot() {
    return {
        source: "",
        program: null,
        parseErrors: [],
        functionSignatures: [],
        selectedFunctionName: null,
        bufferConfigs: {},
        scalarConfigs: {},
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
        scrubbing: false
    };
}
function snapshotOf(state) {
    const { source, program, parseErrors, functionSignatures, selectedFunctionName, bufferConfigs, scalarConfigs, runId, steps, runErrors, configErrors, truncated, initialBufferValues, keyframes, status, lastRunSignature, currentStepIndex, isPlaying, speed, scrubbing } = state;
    return {
        source,
        program,
        parseErrors,
        functionSignatures,
        selectedFunctionName,
        bufferConfigs,
        scalarConfigs,
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
        scrubbing
    };
}
function getTabDisplayTitle(state, tabId, index) {
    const signatures = tabId === state.activeTabId ? state.functionSignatures : state.tabSnapshots[tabId]?.functionSignatures;
    return signatures?.[0]?.name ?? `Tab ${index + 1}`;
}
function deriveSignaturesAndConfigs(program, prevSelected, prevBufferConfigs, prevScalarConfigs) {
    const signatures = program ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSignatures"])(program) : [];
    const selected = signatures.find((s)=>s.name === prevSelected)?.name ?? signatures[0]?.name ?? null;
    const sig = signatures.find((s)=>s.name === selected) ?? null;
    const bufferConfigs = {};
    const scalarConfigs = {};
    if (sig) {
        for (const param of sig.params){
            if (param.type === "int*" || param.type === "float*") {
                bufferConfigs[param.name] = prevBufferConfigs[param.name] ?? defaultBufferConfigForm();
            } else {
                scalarConfigs[param.name] = prevScalarConfigs[param.name] ?? DEFAULT_SCALAR_VALUE;
            }
        }
    }
    return {
        functionSignatures: signatures,
        selectedFunctionName: selected,
        bufferConfigs,
        scalarConfigs
    };
}
function initialSetupState() {
    const { program, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSource"])(DEFAULT_SOURCE);
    const derived = deriveSignaturesAndConfigs(program, null, {}, {});
    return {
        source: DEFAULT_SOURCE,
        program,
        parseErrors: errors,
        ...derived
    };
}
const useKernelVizStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        tabs: [
            {
                id: "tab-1"
            }
        ],
        activeTabId: "tab-1",
        tabSnapshots: {},
        ...initialSetupState(),
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
        setSource: (source)=>{
            const { program, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSource"])(source);
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
                isPlaying: false
            });
        },
        selectFunction: (name)=>{
            const derived = deriveSignaturesAndConfigs(get().program, name, {}, {});
            set({
                ...derived,
                steps: [],
                lastRunSignature: null,
                currentStepIndex: 0,
                isPlaying: false,
                status: "ready"
            });
        },
        updateBufferConfig: (name, patch)=>{
            set((s)=>({
                    bufferConfigs: {
                        ...s.bufferConfigs,
                        [name]: {
                            ...s.bufferConfigs[name],
                            ...patch
                        }
                    }
                }));
        },
        updateScalarConfig: (name, value)=>{
            set((s)=>({
                    scalarConfigs: {
                        ...s.scalarConfigs,
                        [name]: value
                    }
                }));
        },
        startRun: ()=>{
            const { program, selectedFunctionName, bufferConfigs, scalarConfigs, functionSignatures } = get();
            if (!program || !selectedFunctionName) return;
            const sig = functionSignatures.find((s)=>s.name === selectedFunctionName);
            if (!sig) return;
            const initialBufferValues = {};
            const runConfig = {
                functionName: selectedFunctionName,
                buffers: sig.params.filter((p)=>p.type === "int*" || p.type === "float*").map((p)=>{
                    const cfg = bufferConfigs[p.name] ?? defaultBufferConfigForm();
                    const values = resolveFillValues(cfg);
                    initialBufferValues[p.name] = values;
                    return {
                        name: p.name,
                        type: p.type,
                        length: cfg.size,
                        values
                    };
                }),
                scalars: sig.params.filter((p)=>p.type === "int" || p.type === "float").map((p)=>({
                        name: p.name,
                        type: p.type,
                        value: scalarConfigs[p.name] ?? DEFAULT_SCALAR_VALUE
                    }))
            };
            const configErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateConfig"])(program, runConfig);
            if (configErrors.length > 0) {
                set({
                    configErrors,
                    status: "config-error"
                });
                return;
            }
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interpreter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["run"])(program, runConfig);
            const keyframes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$keyframe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildKeyframes"])(result.steps, initialBufferValues);
            set((s)=>({
                    runId: s.runId + 1,
                    steps: result.steps,
                    runErrors: result.errors,
                    configErrors: [],
                    truncated: result.truncated,
                    initialBufferValues,
                    keyframes,
                    status: "complete",
                    lastRunSignature: computeConfigSignature(bufferConfigs, scalarConfigs),
                    currentStepIndex: 0,
                    isPlaying: false
                }));
        },
        resetRun: ()=>{
            set({
                steps: [],
                runErrors: [],
                configErrors: [],
                lastRunSignature: null,
                currentStepIndex: 0,
                isPlaying: false,
                status: "ready"
            });
        },
        play: ()=>{
            const { steps, currentStepIndex } = get();
            if (steps.length === 0) return;
            if (currentStepIndex >= steps.length - 1) set({
                currentStepIndex: 0
            });
            set({
                isPlaying: true
            });
        },
        pause: ()=>set({
                isPlaying: false
            }),
        togglePlay: ()=>get().isPlaying ? get().pause() : get().play(),
        stepForward: ()=>{
            const { steps, currentStepIndex } = get();
            set({
                currentStepIndex: Math.min(currentStepIndex + 1, Math.max(steps.length - 1, 0)),
                isPlaying: false
            });
        },
        stepBackward: ()=>{
            set((s)=>({
                    currentStepIndex: Math.max(s.currentStepIndex - 1, 0),
                    isPlaying: false
                }));
        },
        seekTo: (index)=>{
            const { steps } = get();
            set({
                currentStepIndex: Math.max(0, Math.min(index, Math.max(steps.length - 1, 0)))
            });
        },
        setScrubbing: (v)=>set({
                scrubbing: v,
                isPlaying: v ? false : get().isPlaying
            }),
        setSpeed: (v)=>set({
                speed: v
            }),
        jumpToStart: ()=>set({
                currentStepIndex: 0,
                isPlaying: false
            }),
        jumpToEnd: ()=>set((s)=>({
                    currentStepIndex: Math.max(s.steps.length - 1, 0),
                    isPlaying: false
                })),
        jumpToNextIteration: ()=>{
            const { steps, currentStepIndex } = get();
            for(let i = currentStepIndex + 1; i < steps.length; i++){
                if (steps[i].kind === "loop-iter") {
                    set({
                        currentStepIndex: i,
                        isPlaying: false
                    });
                    return;
                }
            }
            set({
                currentStepIndex: steps.length - 1,
                isPlaying: false
            });
        },
        jumpToPrevIteration: ()=>{
            const { steps, currentStepIndex } = get();
            for(let i = currentStepIndex - 1; i >= 0; i--){
                if (steps[i].kind === "loop-iter") {
                    set({
                        currentStepIndex: i,
                        isPlaying: false
                    });
                    return;
                }
            }
            set({
                currentStepIndex: 0,
                isPlaying: false
            });
        },
        tick: ()=>{
            const { steps, currentStepIndex, isPlaying } = get();
            if (!isPlaying) return;
            if (currentStepIndex >= steps.length - 1) {
                set({
                    isPlaying: false
                });
                return;
            }
            const next = currentStepIndex + 1;
            const err = get().runErrors.find((e)=>e.seq === next && e.fatal);
            set({
                currentStepIndex: next,
                isPlaying: err ? false : true
            });
        },
        createTab: ()=>{
            set((s)=>{
                const newId = `tab-${nextTabId++}`;
                return {
                    tabs: [
                        ...s.tabs,
                        {
                            id: newId
                        }
                    ],
                    tabSnapshots: {
                        ...s.tabSnapshots,
                        [s.activeTabId]: snapshotOf(s)
                    },
                    activeTabId: newId,
                    ...blankTabSnapshot()
                };
            });
        },
        switchTab: (id)=>{
            set((s)=>{
                if (id === s.activeTabId || !s.tabs.some((t)=>t.id === id)) return {};
                const target = s.tabSnapshots[id] ?? blankTabSnapshot();
                return {
                    tabSnapshots: {
                        ...s.tabSnapshots,
                        [s.activeTabId]: snapshotOf(s)
                    },
                    activeTabId: id,
                    ...target
                };
            });
        },
        closeTab: (id)=>{
            set((s)=>{
                const closedIndex = s.tabs.findIndex((t)=>t.id === id);
                if (closedIndex === -1) return {};
                const remainingTabs = s.tabs.filter((t)=>t.id !== id);
                const remainingSnapshots = {
                    ...s.tabSnapshots
                };
                delete remainingSnapshots[id];
                if (id !== s.activeTabId) {
                    return {
                        tabs: remainingTabs,
                        tabSnapshots: remainingSnapshots
                    };
                }
                if (remainingTabs.length === 0) {
                    const newId = `tab-${nextTabId++}`;
                    return {
                        tabs: [
                            {
                                id: newId
                            }
                        ],
                        tabSnapshots: {},
                        activeTabId: newId,
                        ...blankTabSnapshot()
                    };
                }
                const nextActive = remainingTabs[Math.min(closedIndex, remainingTabs.length - 1)];
                const target = remainingSnapshots[nextActive.id] ?? blankTabSnapshot();
                return {
                    tabs: remainingTabs,
                    tabSnapshots: remainingSnapshots,
                    activeTabId: nextActive.id,
                    ...target
                };
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/select/index.parts.mjs [app-client] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUpIcon>");
"use client";
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root;
function SelectGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("scroll-my-1 p-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SelectGroup;
function SelectValue({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c1 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "pointer-events-none size-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = SelectTrigger;
function SelectContent({ className, children, side = "bottom", sideOffset = 4, align = "center", alignOffset = 0, alignItemWithTrigger = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Positioner, {
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            alignItemWithTrigger: alignItemWithTrigger,
            className: "isolate z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Popup, {
                "data-slot": "select-content",
                "data-align-trigger": alignItemWithTrigger,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].List, {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c3 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].GroupLabel, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-1.5 py-1 text-xs text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c4 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
                className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                    className: "pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_c5 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none -mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c6 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollUpArrow, {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_c7 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$select$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollDownArrow, {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SelectGroup");
__turbopack_context__.k.register(_c1, "SelectValue");
__turbopack_context__.k.register(_c2, "SelectTrigger");
__turbopack_context__.k.register(_c3, "SelectContent");
__turbopack_context__.k.register(_c4, "SelectLabel");
__turbopack_context__.k.register(_c5, "SelectItem");
__turbopack_context__.k.register(_c6, "SelectSeparator");
__turbopack_context__.k.register(_c7, "SelectScrollUpButton");
__turbopack_context__.k.register(_c8, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/input/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/config/BufferConfigRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferConfigRow",
    ()=>BufferConfigRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BufferConfigRow({ param }) {
    _s();
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "BufferConfigRow.useKernelVizStore[config]": (s)=>s.bufferConfigs[param.name]
    }["BufferConfigRow.useKernelVizStore[config]"]);
    const updateBufferConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "BufferConfigRow.useKernelVizStore[updateBufferConfig]": (s)=>s.updateBufferConfig
    }["BufferConfigRow.useKernelVizStore[updateBufferConfig]"]);
    if (!config) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-3 rounded-md border border-border p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "font-mono text-sm",
                children: [
                    param.name,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            "(",
                            param.type,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/config/BufferConfigRow.tsx",
                        lineNumber: 17,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/BufferConfigRow.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: "size"
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/BufferConfigRow.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        min: 1,
                        value: config.size,
                        onChange: (e)=>updateBufferConfig(param.name, {
                                size: Math.max(1, Number(e.target.value) || 1)
                            }),
                        className: "h-8 w-20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/BufferConfigRow.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/BufferConfigRow.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/config/BufferConfigRow.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(BufferConfigRow, "OhjY2j3m8VPiT1PE9HKIbCAZfXU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = BufferConfigRow;
var _c;
__turbopack_context__.k.register(_c, "BufferConfigRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/config/ConfigForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigForm",
    ()=>ConfigForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$BufferConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/config/BufferConfigRow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConfigForm() {
    _s();
    const functionSignatures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ConfigForm.useKernelVizStore[functionSignatures]": (s)=>s.functionSignatures
    }["ConfigForm.useKernelVizStore[functionSignatures]"]);
    const selectedFunctionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ConfigForm.useKernelVizStore[selectedFunctionName]": (s)=>s.selectedFunctionName
    }["ConfigForm.useKernelVizStore[selectedFunctionName]"]);
    const selectFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ConfigForm.useKernelVizStore[selectFunction]": (s)=>s.selectFunction
    }["ConfigForm.useKernelVizStore[selectFunction]"]);
    const sig = functionSignatures.find((s)=>s.name === selectedFunctionName);
    if (functionSignatures.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-muted-foreground",
            children: "Fix parse errors to configure inputs."
        }, void 0, false, {
            fileName: "[project]/src/components/config/ConfigForm.tsx",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
    const bufferParams = sig?.params.filter((p)=>p.type === "int*" || p.type === "float*") ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex max-h-[70vh] flex-col gap-4 overflow-y-auto",
        children: [
            functionSignatures.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-xs text-muted-foreground",
                        children: "Function"
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigForm.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: selectedFunctionName ?? undefined,
                        onValueChange: (v)=>v && selectFunction(v),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "h-8 flex-1 text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/src/components/config/ConfigForm.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/config/ConfigForm.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: functionSignatures.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: s.name,
                                        children: s.name
                                    }, s.name, false, {
                                        fileName: "[project]/src/components/config/ConfigForm.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/config/ConfigForm.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/config/ConfigForm.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/ConfigForm.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            bufferParams.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                        children: "Buffer sizes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigForm.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    bufferParams.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$BufferConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferConfigRow"], {
                            param: p
                        }, p.name, false, {
                            fileName: "[project]/src/components/config/ConfigForm.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/ConfigForm.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/config/ConfigForm.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ConfigForm, "6C4qIhE038A5MIRYruAR+TI9MDI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = ConfigForm;
var _c;
__turbopack_context__.k.register(_c, "ConfigForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/config/ConfigPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigPanel",
    ()=>ConfigPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/config/ConfigForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ConfigPanel() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ConfigPanel.useKernelVizStore[status]": (s)=>s.status
    }["ConfigPanel.useKernelVizStore[status]"]);
    const canConfigure = status !== "parse-error" && status !== "no-source";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    disabled: !canConfigure,
                    children: "Configure"
                }, void 0, false, {
                    fileName: "[project]/src/components/config/ConfigPanel.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/config/ConfigPanel.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Buffer sizes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/config/ConfigPanel.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigPanel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigForm"], {}, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigPanel.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>setOpen(false),
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/src/components/config/ConfigPanel.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigPanel.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/ConfigPanel.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/config/ConfigPanel.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ConfigPanel, "pRC7woP0W3NhvYGYXJsSQS/96O4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = ConfigPanel;
var _c;
__turbopack_context__.k.register(_c, "ConfigPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useIsDarkMode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsDarkMode",
    ()=>useIsDarkMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function subscribe(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
            "class"
        ]
    });
    return ()=>observer.disconnect();
}
function getSnapshot() {
    return document.documentElement.classList.contains("dark");
}
function getServerSnapshot() {
    return false;
}
function useIsDarkMode() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
}
_s(useIsDarkMode, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/workspace/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsDarkMode.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const STORAGE_KEY = "kernel-viz-theme";
function ThemeToggle() {
    _s();
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDarkMode"])();
    function toggle() {
        const next = !isDark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "outline",
        size: "icon",
        onClick: toggle,
        title: isDark ? "Switch to light theme" : "Switch to dark theme",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/workspace/ThemeToggle.tsx",
            lineNumber: 20,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/workspace/ThemeToggle.tsx",
            lineNumber: 20,
            columnNumber: 46
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/workspace/ThemeToggle.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "127OMXi7od40FtpyLrnpOiuLYgk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsDarkMode"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/workspace/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/config/ConfigPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header() {
    _s();
    const parseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "Header.useKernelVizStore[parseErrors]": (s)=>s.parseErrors
    }["Header.useKernelVizStore[parseErrors]"]);
    const truncated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "Header.useKernelVizStore[truncated]": (s)=>s.truncated
    }["Header.useKernelVizStore[truncated]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between border-b border-border px-4 py-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-sm font-semibold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "transition-opacity hover:opacity-70",
                            children: "Kernel Visualization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/workspace/Header.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    parseErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "destructive",
                        children: [
                            parseErrors.length,
                            " parse error(s)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/workspace/Header.tsx",
                        lineNumber: 21,
                        columnNumber: 36
                    }, this),
                    truncated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        children: "truncated — possible infinite loop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/workspace/Header.tsx",
                        lineNumber: 22,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/workspace/Header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/src/components/workspace/Header.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigPanel"], {}, void 0, false, {
                        fileName: "[project]/src/components/workspace/Header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/workspace/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workspace/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Header, "1ojMMtTSuFn7BIDyOnyiOp7X+yI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/state/editorSettingsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EDITOR_THEME_OPTIONS",
    ()=>EDITOR_THEME_OPTIONS,
    "useEditorSettingsStore",
    ()=>useEditorSettingsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const EDITOR_THEME_OPTIONS = [
    {
        value: "auto",
        label: "Auto (follows app theme)"
    },
    {
        value: "githubLight",
        label: "GitHub Light"
    },
    {
        value: "githubDark",
        label: "GitHub Dark"
    },
    {
        value: "vscodeLight",
        label: "VS Code Light"
    },
    {
        value: "vscodeDark",
        label: "VS Code Dark"
    },
    {
        value: "dracula",
        label: "Dracula"
    },
    {
        value: "monokai",
        label: "Monokai"
    },
    {
        value: "nord",
        label: "Nord"
    },
    {
        value: "solarizedLight",
        label: "Solarized Light"
    },
    {
        value: "solarizedDark",
        label: "Solarized Dark"
    },
    {
        value: "materialDark",
        label: "Material Dark"
    }
];
const useEditorSettingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        themeName: "auto",
        tabSize: 2,
        vimMode: false,
        setThemeName: (themeName)=>set({
                themeName
            }),
        setTabSize: (tabSize)=>set({
                tabSize
            }),
        setVimMode: (vimMode)=>set({
                vimMode
            })
    }), {
    name: "kernel-viz-editor-settings"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/stepHighlightField.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentLineField",
    ()=>currentLineField,
    "errorLinesField",
    ()=>errorLinesField,
    "setCurrentLine",
    ()=>setCurrentLine,
    "setErrorLines",
    ()=>setErrorLines,
    "stepHighlightTheme",
    ()=>stepHighlightTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/view/dist/index.js [app-client] (ecmascript)");
;
;
const setCurrentLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEffect"].define();
const currentLineMark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].line({
    class: "cm-current-step-line"
});
const currentLineField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateField"].define({
    create () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].none;
    },
    update (decorations, tr) {
        for (const effect of tr.effects){
            if (effect.is(setCurrentLine)) {
                if (effect.value === null || effect.value > tr.state.doc.lines) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].none;
                const line = tr.state.doc.line(effect.value);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].set([
                    currentLineMark.range(line.from)
                ]);
            }
        }
        return decorations.map(tr.changes);
    },
    provide: (field)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].decorations.from(field)
});
const setErrorLines = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateEffect"].define();
const errorLineMark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].line({
    class: "cm-error-line"
});
const errorLinesField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateField"].define({
    create () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].none;
    },
    update (decorations, tr) {
        for (const effect of tr.effects){
            if (effect.is(setErrorLines)) {
                const marks = effect.value.filter((l)=>l >= 1 && l <= tr.state.doc.lines).map((l)=>errorLineMark.range(tr.state.doc.line(l).from));
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].set(marks, true);
            }
        }
        return decorations.map(tr.changes);
    },
    provide: (field)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].decorations.from(field)
});
const stepHighlightTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].baseTheme({
    ".cm-current-step-line": {
        backgroundColor: "color-mix(in oklch, var(--color-blue-500) 16%, transparent)",
        outline: "1px solid color-mix(in oklch, var(--color-blue-500) 45%, transparent)"
    },
    ".cm-error-line": {
        backgroundColor: "color-mix(in oklch, var(--color-red-500) 14%, transparent)",
        textDecoration: "underline wavy color-mix(in oklch, var(--color-red-500) 70%, transparent)"
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/themes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveEditorTheme",
    ()=>resolveEditorTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$themes$2d$all$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-themes-all/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$dracula$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-dracula/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$github$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-github/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$material$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-material/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$monokai$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-monokai/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$nord$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-nord/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$solarized$2f$esm$2f$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-solarized/esm/dark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$solarized$2f$esm$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-solarized/esm/light.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$vscode$2f$esm$2f$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-vscode/esm/dark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$vscode$2f$esm$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uiw/codemirror-theme-vscode/esm/light.js [app-client] (ecmascript)");
;
function resolveEditorTheme(name) {
    switch(name){
        case "githubLight":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$github$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["githubLight"];
        case "githubDark":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$github$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["githubDark"];
        case "vscodeLight":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$vscode$2f$esm$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vscodeLight"];
        case "vscodeDark":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$vscode$2f$esm$2f$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vscodeDark"];
        case "dracula":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$dracula$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dracula"];
        case "monokai":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$monokai$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monokai"];
        case "nord":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$nord$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nord"];
        case "solarizedLight":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$solarized$2f$esm$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solarizedLight"];
        case "solarizedDark":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$solarized$2f$esm$2f$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solarizedDark"];
        case "materialDark":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$codemirror$2d$theme$2d$material$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["materialDark"];
        case "auto":
        default:
            return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/CodeEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeEditor",
    ()=>CodeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$language$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/language/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$codemirror$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/codemirror/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$cpp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@codemirror/lang-cpp/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$replit$2f$codemirror$2d$vim$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@replit/codemirror-vim/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/editorSettingsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$stepHighlightField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/stepHighlightField.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/themes.ts [app-client] (ecmascript)");
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
const readOnlyCompartment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Compartment"]();
const vimCompartment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Compartment"]();
const indentCompartment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Compartment"]();
// Mutually exclusive: exactly one of these two is active at a time. Both declare rules for the
// same selectors (background, gutters, cursor, selection) at equal CSS specificity, so letting
// both be active simultaneously turns into an unpredictable cascade tie — instead "auto" swaps
// the adaptive theme in and any concrete theme (Dracula, Nord, ...) swaps it out.
const adaptiveColorCompartment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Compartment"]();
const userThemeCompartment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Compartment"]();
function indentExtensions(tabSize) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$language$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indentUnit"].of(" ".repeat(tabSize)),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].tabSize.of(tabSize)
    ];
}
// Structural chrome (sizing, font, focus outline) — applies regardless of which color theme
// is active, since no theme package redeclares these.
const structuralTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].theme({
    "&": {
        height: "100%",
        fontSize: "13px"
    },
    "&.cm-focused": {
        outline: "none"
    },
    ".cm-scroller": {
        overflow: "auto",
        fontFamily: "var(--font-mono), ui-monospace, monospace"
    }
});
// The app-adaptive "auto" theme, tied to our own CSS variables so it follows the light/dark toggle.
const adaptiveColorTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].theme({
    "&": {
        backgroundColor: "transparent",
        color: "var(--color-foreground)"
    },
    ".cm-gutters": {
        backgroundColor: "transparent",
        color: "var(--color-muted-foreground)",
        border: "none",
        borderRight: "1px solid var(--color-border)"
    },
    ".cm-activeLineGutter": {
        backgroundColor: "var(--color-muted)"
    },
    ".cm-activeLine": {
        backgroundColor: "color-mix(in oklch, var(--color-muted) 50%, transparent)"
    },
    ".cm-cursor": {
        borderLeftColor: "var(--color-foreground)"
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
        backgroundColor: "color-mix(in oklch, var(--color-primary) 25%, transparent)"
    },
    ".cm-foldPlaceholder": {
        backgroundColor: "var(--color-muted)",
        border: "1px solid var(--color-border)",
        color: "var(--color-muted-foreground)"
    }
});
function colorExtensionsFor(themeName) {
    const picked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEditorTheme"])(themeName);
    return {
        adaptive: picked ? [] : [
            adaptiveColorTheme
        ],
        picked: picked ?? []
    };
}
/** Full extension set for a fresh EditorState — used both at mount and when swapping tabs. */ function buildExtensions(settings, onDocChange) {
    const colors = colorExtensionsFor(settings.themeName);
    return [
        vimCompartment.of(settings.vimMode ? [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$replit$2f$codemirror$2d$vim$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vim"])()
        ] : []),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$codemirror$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["basicSetup"],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$lang$2d$cpp$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cpp"])(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"].of([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indentWithTab"]
        ]),
        indentCompartment.of(indentExtensions(settings.tabSize)),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$stepHighlightField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentLineField"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$stepHighlightField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorLinesField"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$stepHighlightField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepHighlightTheme"],
        readOnlyCompartment.of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].editable.of(true)),
        structuralTheme,
        adaptiveColorCompartment.of(colors.adaptive),
        userThemeCompartment.of(colors.picked),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].updateListener.of((update)=>{
            if (update.docChanged) onDocChange(update.state.doc.toString());
        })
    ];
}
function CodeEditor() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mountedTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "CodeEditor.useKernelVizStore[source]": (s)=>s.source
    }["CodeEditor.useKernelVizStore[source]"]);
    const setSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "CodeEditor.useKernelVizStore[setSource]": (s)=>s.setSource
    }["CodeEditor.useKernelVizStore[setSource]"]);
    const parseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "CodeEditor.useKernelVizStore[parseErrors]": (s)=>s.parseErrors
    }["CodeEditor.useKernelVizStore[parseErrors]"]);
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "CodeEditor.useKernelVizStore[steps]": (s)=>s.steps
    }["CodeEditor.useKernelVizStore[steps]"]);
    const currentStepIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "CodeEditor.useKernelVizStore[currentStepIndex]": (s)=>s.currentStepIndex
    }["CodeEditor.useKernelVizStore[currentStepIndex]"]);
    const activeTabId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "CodeEditor.useKernelVizStore[activeTabId]": (s)=>s.activeTabId
    }["CodeEditor.useKernelVizStore[activeTabId]"]);
    const themeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "CodeEditor.useEditorSettingsStore[themeName]": (s)=>s.themeName
    }["CodeEditor.useEditorSettingsStore[themeName]"]);
    const tabSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "CodeEditor.useEditorSettingsStore[tabSize]": (s)=>s.tabSize
    }["CodeEditor.useEditorSettingsStore[tabSize]"]);
    const vimMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "CodeEditor.useEditorSettingsStore[vimMode]": (s)=>s.vimMode
    }["CodeEditor.useEditorSettingsStore[vimMode]"]);
    // Mount once.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            if (!containerRef.current) return;
            mountedTabRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"].getState().activeTabId;
            const view = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"]({
                state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].create({
                    doc: source,
                    extensions: buildExtensions(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"].getState(), setSource)
                }),
                parent: containerRef.current
            });
            viewRef.current = view;
            return ({
                "CodeEditor.useEffect": ()=>view.destroy()
            })["CodeEditor.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CodeEditor.useEffect"], []);
    // Switching tabs swaps in a different document entirely — rebuild the EditorState (rather
    // than dispatching a content-replace transaction) so undo history doesn't bleed between tabs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view || mountedTabRef.current === activeTabId) return;
            mountedTabRef.current = activeTabId;
            view.setState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].create({
                doc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"].getState().source,
                extensions: buildExtensions(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"].getState(), setSource)
            }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CodeEditor.useEffect"], [
        activeTabId
    ]);
    // Toggle read-only once a run exists.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view) return;
            view.dispatch({
                effects: readOnlyCompartment.reconfigure(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].editable.of(steps.length === 0))
            });
        }
    }["CodeEditor.useEffect"], [
        steps.length
    ]);
    // Current-line highlight follows playback.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view) return;
            const line = steps[currentStepIndex]?.line ?? null;
            view.dispatch({
                effects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$stepHighlightField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentLine"].of(line)
            });
            if (line !== null) {
                const linePos = view.state.doc.line(Math.min(line, view.state.doc.lines)).from;
                view.dispatch({
                    effects: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codemirror$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"].scrollIntoView(linePos, {
                        y: "center"
                    })
                });
            }
        }
    }["CodeEditor.useEffect"], [
        steps,
        currentStepIndex
    ]);
    // Parse-error squiggles.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view) return;
            view.dispatch({
                effects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$stepHighlightField$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setErrorLines"].of(parseErrors.map({
                    "CodeEditor.useEffect": (e)=>e.line
                }["CodeEditor.useEffect"]))
            });
        }
    }["CodeEditor.useEffect"], [
        parseErrors
    ]);
    // Editor settings: theme, tab size, vim keybindings.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view) return;
            const colors = colorExtensionsFor(themeName);
            view.dispatch({
                effects: [
                    adaptiveColorCompartment.reconfigure(colors.adaptive),
                    userThemeCompartment.reconfigure(colors.picked)
                ]
            });
        }
    }["CodeEditor.useEffect"], [
        themeName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view) return;
            view.dispatch({
                effects: indentCompartment.reconfigure(indentExtensions(tabSize))
            });
        }
    }["CodeEditor.useEffect"], [
        tabSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditor.useEffect": ()=>{
            const view = viewRef.current;
            if (!view) return;
            view.dispatch({
                effects: vimCompartment.reconfigure(vimMode ? [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$replit$2f$codemirror$2d$vim$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vim"])()
                ] : [])
            });
        }
    }["CodeEditor.useEffect"], [
        vimMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "h-full min-h-0 overflow-hidden rounded-lg border border-border"
    }, void 0, false, {
        fileName: "[project]/src/components/editor/CodeEditor.tsx",
        lineNumber: 191,
        columnNumber: 10
    }, this);
}
_s(CodeEditor, "dM+lMOSnB+KxW1virwfk08IJXoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"]
    ];
});
_c = CodeEditor;
var _c;
__turbopack_context__.k.register(_c, "CodeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/TabBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabBar",
    ()=>TabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TabBar() {
    _s();
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "TabBar.useKernelVizStore[tabs]": (s)=>s.tabs
    }["TabBar.useKernelVizStore[tabs]"]);
    const activeTabId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "TabBar.useKernelVizStore[activeTabId]": (s)=>s.activeTabId
    }["TabBar.useKernelVizStore[activeTabId]"]);
    const switchTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "TabBar.useKernelVizStore[switchTab]": (s)=>s.switchTab
    }["TabBar.useKernelVizStore[switchTab]"]);
    const closeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "TabBar.useKernelVizStore[closeTab]": (s)=>s.closeTab
    }["TabBar.useKernelVizStore[closeTab]"]);
    const createTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "TabBar.useKernelVizStore[createTab]": (s)=>s.createTab
    }["TabBar.useKernelVizStore[createTab]"]);
    // Subscribing to functionSignatures ensures tab titles refresh as soon as the active tab's
    // source parses to a (differently named) function.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "TabBar.useKernelVizStore": (s)=>s.functionSignatures
    }["TabBar.useKernelVizStore"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 overflow-x-auto border-b border-border px-1.5 py-1.5",
        children: [
            tabs.map((tab, i)=>{
                const active = tab.id === activeTabId;
                const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTabDisplayTitle"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"].getState(), tab.id, i);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex shrink-0 items-center gap-1 rounded-md px-2.5 py-1 text-xs", active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>switchTab(tab.id),
                            className: "max-w-32 truncate font-mono",
                            title: title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/TabBar.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>closeTab(tab.id),
                            className: "rounded-sm opacity-0 hover:bg-border group-hover:opacity-100",
                            title: "Close tab",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/TabBar.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/TabBar.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, tab.id, true, {
                    fileName: "[project]/src/components/editor/TabBar.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "size-7 shrink-0",
                onClick: createTab,
                title: "New tab",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "size-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/TabBar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/TabBar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/TabBar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(TabBar, "ciSy9dljElTWSQYqdy1+1drrdk8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = TabBar;
var _c;
__turbopack_context__.k.register(_c, "TabBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/formatters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeStep",
    ()=>describeStep,
    "formatCellValue",
    ()=>formatCellValue
]);
function formatCellValue(value) {
    if (Number.isNaN(value)) return "—";
    if (Number.isInteger(value)) return String(value);
    return value.toFixed(2);
}
function describeStep(step) {
    if (!step) return "";
    switch(step.kind){
        case "mem-read":
            return `line ${step.line} · read ${step.buffer}[${step.index}]${step.inBounds ? "" : " (out of bounds)"}`;
        case "mem-write":
            return `line ${step.line} · write ${step.buffer}[${step.index}] = ${formatCellValue(step.newValue)}${step.inBounds ? "" : " (out of bounds, dropped)"}`;
        case "var-write":
            return `line ${step.line} · ${step.name} = ${formatCellValue(step.newValue)}`;
        case "var-decl":
            return `line ${step.line} · declare ${step.name} = ${formatCellValue(step.value)}`;
        case "loop-iter":
            return `line ${step.line} · loop iteration`;
        case "loop-test":
            return `line ${step.line} · loop condition ${step.result ? "true" : "false"}`;
        case "enter-function":
            return "function entry";
        case "exit-function":
            return "function exit";
        default:
            return `line ${step.line}`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/watch/VariableWatchPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VariableWatchPanel",
    ()=>VariableWatchPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VariableWatchPanel() {
    _s();
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "VariableWatchPanel.useKernelVizStore[steps]": (s)=>s.steps
    }["VariableWatchPanel.useKernelVizStore[steps]"]);
    const currentStepIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "VariableWatchPanel.useKernelVizStore[currentStepIndex]": (s)=>s.currentStepIndex
    }["VariableWatchPanel.useKernelVizStore[currentStepIndex]"]);
    const step = steps[currentStepIndex];
    if (!step) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-sm text-muted-foreground",
            children: "Run the kernel to watch variables update live."
        }, void 0, false, {
            fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    const scalarEntries = Object.entries(step.scopeSnapshot);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 overflow-y-auto p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                        children: "Variables"
                    }, void 0, false, {
                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    scalarEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "none in scope"
                    }, void 0, false, {
                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: scalarEntries.map(([name, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-md bg-muted/40 px-2 py-1 font-mono text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tabular-nums",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCellValue"])(value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, name, true, {
                                fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            step.loopStack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                        children: "Loop nesting"
                    }, void 0, false, {
                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: step.loopStack.map((frame, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "font-mono",
                                children: [
                                    frame.varName ?? `depth ${i}`,
                                    frame.value !== null ? ` = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCellValue"])(frame.value)}` : ""
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/watch/VariableWatchPanel.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(VariableWatchPanel, "d9AnP2Uthe9p2+Ziyz/fnIKrM3Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = VariableWatchPanel;
var _c;
__turbopack_context__.k.register(_c, "VariableWatchPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$slider$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slider$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/slider/index.parts.mjs [app-client] (ecmascript) <export * as Slider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
    const _values = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [
        min,
        max
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$slider$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slider$3e$__["Slider"].Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-horizontal:w-full data-vertical:h-full", className),
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        thumbAlignment: "edge",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$slider$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slider$3e$__["Slider"].Control, {
            className: "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$slider$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slider$3e$__["Slider"].Track, {
                    "data-slot": "slider-track",
                    className: "relative grow overflow-hidden rounded-full bg-muted select-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$slider$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slider$3e$__["Slider"].Indicator, {
                        "data-slot": "slider-range",
                        className: "bg-primary select-none data-horizontal:h-full data-vertical:w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/slider.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/slider.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                Array.from({
                    length: _values.length
                }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$slider$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slider$3e$__["Slider"].Thumb, {
                        "data-slot": "slider-thumb",
                        className: "relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
                    }, index, false, {
                        fileName: "[project]/src/components/ui/slider.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/slider.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/slider.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Slider;
;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/playback/ScrubBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrubBar",
    ()=>ScrubBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScrubBar() {
    _s();
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScrubBar.useKernelVizStore[steps]": (s)=>s.steps
    }["ScrubBar.useKernelVizStore[steps]"]);
    const currentStepIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScrubBar.useKernelVizStore[currentStepIndex]": (s)=>s.currentStepIndex
    }["ScrubBar.useKernelVizStore[currentStepIndex]"]);
    const seekTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScrubBar.useKernelVizStore[seekTo]": (s)=>s.seekTo
    }["ScrubBar.useKernelVizStore[seekTo]"]);
    const setScrubbing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScrubBar.useKernelVizStore[setScrubbing]": (s)=>s.setScrubbing
    }["ScrubBar.useKernelVizStore[setScrubbing]"]);
    const runErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ScrubBar.useKernelVizStore[runErrors]": (s)=>s.runErrors
    }["ScrubBar.useKernelVizStore[runErrors]"]);
    const max = Math.max(steps.length - 1, 1);
    const errorSeqs = runErrors.map((e)=>e.seq).filter((seq)=>seq >= 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        value: [
                            currentStepIndex
                        ],
                        min: 0,
                        max: max,
                        step: 1,
                        disabled: steps.length === 0,
                        onValueChange: (v)=>seekTo(Array.isArray(v) ? v[0] : v),
                        onPointerDown: ()=>setScrubbing(true),
                        onPointerUp: ()=>setScrubbing(false),
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeStep"])(steps[currentStepIndex])
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/ScrubBar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    max > 0 && errorSeqs.map((seq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute top-1/2 h-2 w-0.5 -translate-y-1/2 bg-destructive",
                            style: {
                                left: `${seq / max * 100}%`
                            }
                        }, seq, false, {
                            fileName: "[project]/src/components/playback/ScrubBar.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/playback/ScrubBar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-[11px] text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeStep"])(steps[currentStepIndex]) || "no run yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/ScrubBar.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tabular-nums",
                        children: [
                            "step ",
                            steps.length === 0 ? 0 : currentStepIndex + 1,
                            " / ",
                            steps.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/playback/ScrubBar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/playback/ScrubBar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/playback/ScrubBar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ScrubBar, "MTngLePdbKfCygFfuPnMzUMd8I0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = ScrubBar;
var _c;
__turbopack_context__.k.register(_c, "ScrubBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePlaybackTicker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePlaybackTicker",
    ()=>usePlaybackTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function usePlaybackTicker() {
    _s();
    const isPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "usePlaybackTicker.useKernelVizStore[isPlaying]": (s)=>s.isPlaying
    }["usePlaybackTicker.useKernelVizStore[isPlaying]"]);
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "usePlaybackTicker.useKernelVizStore[speed]": (s)=>s.speed
    }["usePlaybackTicker.useKernelVizStore[speed]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlaybackTicker.useEffect": ()=>{
            if (!isPlaying) return;
            const intervalMs = Math.max(1000 / speed, 16);
            const id = setInterval({
                "usePlaybackTicker.useEffect.id": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"].getState().tick();
                }
            }["usePlaybackTicker.useEffect.id"], intervalMs);
            return ({
                "usePlaybackTicker.useEffect": ()=>clearInterval(id)
            })["usePlaybackTicker.useEffect"];
        }
    }["usePlaybackTicker.useEffect"], [
        isPlaying,
        speed
    ]);
}
_s(usePlaybackTicker, "Krudk/ShgtR9mnDxszLtOlDR0bM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/playback/useKeyboardShortcuts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function isTypingTarget(el) {
    if (!(el instanceof HTMLElement)) return false;
    return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable || el.closest(".cm-editor") !== null;
}
function useKeyboardShortcuts() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyboardShortcuts.useEffect": ()=>{
            function onKeyDown(e) {
                if (isTypingTarget(e.target)) return;
                const store = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"].getState();
                if (store.steps.length === 0) return;
                switch(e.key){
                    case " ":
                        e.preventDefault();
                        store.togglePlay();
                        break;
                    case "ArrowLeft":
                        e.preventDefault();
                        if (e.shiftKey) store.jumpToPrevIteration();
                        else store.stepBackward();
                        break;
                    case "ArrowRight":
                        e.preventDefault();
                        if (e.shiftKey) store.jumpToNextIteration();
                        else store.stepForward();
                        break;
                    case "Home":
                        e.preventDefault();
                        store.jumpToStart();
                        break;
                    case "End":
                        e.preventDefault();
                        store.jumpToEnd();
                        break;
                }
            }
            window.addEventListener("keydown", onKeyDown);
            return ({
                "useKeyboardShortcuts.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["useKeyboardShortcuts.useEffect"];
        }
    }["useKeyboardShortcuts.useEffect"], []);
}
_s(useKeyboardShortcuts, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverDescription",
    ()=>PopoverDescription,
    "PopoverHeader",
    ()=>PopoverHeader,
    "PopoverTitle",
    ()=>PopoverTitle,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/popover/index.parts.mjs [app-client] (ecmascript) <export * as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Root, {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Popover;
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Trigger, {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c1 = PopoverTrigger;
function PopoverContent({ className, align = "center", alignOffset = 0, side = "bottom", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Positioner, {
            align: align,
            alignOffset: alignOffset,
            side: side,
            sideOffset: sideOffset,
            className: "isolate z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Popup, {
                "data-slot": "popover-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 flex w-72 origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/popover.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c2 = PopoverContent;
function PopoverHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "popover-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c3 = PopoverHeader;
function PopoverTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Title, {
        "data-slot": "popover-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c4 = PopoverTitle;
function PopoverDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$popover$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Description, {
        "data-slot": "popover-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c5 = PopoverDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
__turbopack_context__.k.register(_c3, "PopoverHeader");
__turbopack_context__.k.register(_c4, "PopoverTitle");
__turbopack_context__.k.register(_c5, "PopoverDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$switch$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Switch$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/switch/index.parts.mjs [app-client] (ecmascript) <export * as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Switch({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$switch$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Switch$3e$__["Switch"].Root, {
        "data-slot": "switch",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$switch$2f$index$2e$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Switch$3e$__["Switch"].Thumb, {
            "data-slot": "switch-thumb",
            className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/EditorSettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorSettingsPanel",
    ()=>EditorSettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/editorSettingsStore.ts [app-client] (ecmascript)");
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
const TAB_SIZES = [
    2,
    4,
    8
];
function EditorSettingsPanel() {
    _s();
    const themeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "EditorSettingsPanel.useEditorSettingsStore[themeName]": (s)=>s.themeName
    }["EditorSettingsPanel.useEditorSettingsStore[themeName]"]);
    const tabSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "EditorSettingsPanel.useEditorSettingsStore[tabSize]": (s)=>s.tabSize
    }["EditorSettingsPanel.useEditorSettingsStore[tabSize]"]);
    const vimMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "EditorSettingsPanel.useEditorSettingsStore[vimMode]": (s)=>s.vimMode
    }["EditorSettingsPanel.useEditorSettingsStore[vimMode]"]);
    const setThemeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "EditorSettingsPanel.useEditorSettingsStore[setThemeName]": (s)=>s.setThemeName
    }["EditorSettingsPanel.useEditorSettingsStore[setThemeName]"]);
    const setTabSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "EditorSettingsPanel.useEditorSettingsStore[setTabSize]": (s)=>s.setTabSize
    }["EditorSettingsPanel.useEditorSettingsStore[setTabSize]"]);
    const setVimMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"])({
        "EditorSettingsPanel.useEditorSettingsStore[setVimMode]": (s)=>s.setVimMode
    }["EditorSettingsPanel.useEditorSettingsStore[setVimMode]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    title: "Editor settings",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "start",
                className: "w-72",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                                children: "Editor settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm",
                                                children: "Theme"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: themeName,
                                                onValueChange: (v)=>v && setThemeName(v),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-8 w-40 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDITOR_THEME_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: opt.value,
                                                                children: opt.label
                                                            }, opt.value, false, {
                                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm",
                                                children: "Tab size"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: String(tabSize),
                                                onValueChange: (v)=>v && setTabSize(Number(v)),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-8 w-40 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: TAB_SIZES.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: String(size),
                                                                children: [
                                                                    size,
                                                                    " spaces"
                                                                ]
                                                            }, size, true, {
                                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "vim-mode-switch",
                                                className: "text-sm",
                                                children: "Vim keybindings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                id: "vim-mode-switch",
                                                checked: vimMode,
                                                onCheckedChange: setVimMode
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/EditorSettingsPanel.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(EditorSettingsPanel, "5AQQTENI+q3b4ICByz1FRTZj4fY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$editorSettingsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSettingsStore"]
    ];
});
_c = EditorSettingsPanel;
var _c;
__turbopack_context__.k.register(_c, "EditorSettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/playback/PlaybackControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaybackControls",
    ()=>PlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.mjs [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.mjs [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$step$2d$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StepBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/step-back.mjs [app-client] (ecmascript) <export default as StepBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$step$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StepForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/step-forward.mjs [app-client] (ecmascript) <export default as StepForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$ScrubBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/playback/ScrubBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlaybackTicker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlaybackTicker.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/playback/useKeyboardShortcuts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/EditorSettingsPanel.tsx [app-client] (ecmascript)");
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
const SPEEDS = [
    0.5,
    1,
    2,
    4,
    8,
    16
];
function PlaybackControls() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlaybackTicker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackTicker"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])();
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[steps]": (s)=>s.steps
    }["PlaybackControls.useKernelVizStore[steps]"]);
    const isPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[isPlaying]": (s)=>s.isPlaying
    }["PlaybackControls.useKernelVizStore[isPlaying]"]);
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[speed]": (s)=>s.speed
    }["PlaybackControls.useKernelVizStore[speed]"]);
    const togglePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[togglePlay]": (s)=>s.togglePlay
    }["PlaybackControls.useKernelVizStore[togglePlay]"]);
    const stepForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[stepForward]": (s)=>s.stepForward
    }["PlaybackControls.useKernelVizStore[stepForward]"]);
    const stepBackward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[stepBackward]": (s)=>s.stepBackward
    }["PlaybackControls.useKernelVizStore[stepBackward]"]);
    const jumpToPrevIteration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[jumpToPrevIteration]": (s)=>s.jumpToPrevIteration
    }["PlaybackControls.useKernelVizStore[jumpToPrevIteration]"]);
    const jumpToNextIteration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[jumpToNextIteration]": (s)=>s.jumpToNextIteration
    }["PlaybackControls.useKernelVizStore[jumpToNextIteration]"]);
    const setSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "PlaybackControls.useKernelVizStore[setSpeed]": (s)=>s.setSpeed
    }["PlaybackControls.useKernelVizStore[setSpeed]"]);
    const disabled = steps.length === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 border-t border-border bg-background px-4 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorSettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorSettingsPanel"], {}, void 0, false, {
                fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        disabled: disabled,
                        onClick: jumpToPrevIteration,
                        title: "Previous iteration (Shift+←)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        disabled: disabled,
                        onClick: stepBackward,
                        title: "Step back (←)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$step$2d$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StepBack$3e$__["StepBack"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "default",
                        size: "icon",
                        disabled: disabled,
                        onClick: togglePlay,
                        title: "Play/Pause (Space)",
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 42,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 42,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        disabled: disabled,
                        onClick: stepForward,
                        title: "Step forward (→)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$step$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StepForward$3e$__["StepForward"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        disabled: disabled,
                        onClick: jumpToNextIteration,
                        title: "Next iteration (Shift+→)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$ScrubBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrubBar"], {}, void 0, false, {
                fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: String(speed),
                onValueChange: (v)=>setSpeed(Number(v)),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                        className: "h-8 w-20 text-xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                            fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                        children: SPEEDS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: String(s),
                                children: [
                                    s,
                                    "×"
                                ]
                            }, s, true, {
                                fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/playback/PlaybackControls.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/playback/PlaybackControls.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(PlaybackControls, "5hbYmvtu/7NKeTk9qHZeyA5l9gk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlaybackTicker$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackTicker"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"],
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
_c = PlaybackControls;
var _c;
__turbopack_context__.k.register(_c, "PlaybackControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertAction",
    ()=>AlertAction,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
function AlertAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-2 right-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c3 = AlertAction;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
__turbopack_context__.k.register(_c3, "AlertAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/errors/ParseErrorBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseErrorBanner",
    ()=>ParseErrorBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ParseErrorBanner() {
    _s();
    const parseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "ParseErrorBanner.useKernelVizStore[parseErrors]": (s)=>s.parseErrors
    }["ParseErrorBanner.useKernelVizStore[parseErrors]"]);
    if (parseErrors.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        variant: "destructive",
        className: "mx-3 mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/errors/ParseErrorBanner.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                children: [
                    parseErrors.length,
                    " parse error",
                    parseErrors.length > 1 ? "s" : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/errors/ParseErrorBanner.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-inside list-disc",
                    children: parseErrors.slice(0, 5).map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                "line ",
                                e.line,
                                ": ",
                                e.message
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/errors/ParseErrorBanner.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/errors/ParseErrorBanner.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/errors/ParseErrorBanner.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/errors/ParseErrorBanner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ParseErrorBanner, "OtWU2vz0A9rxhfL/Oy8XafS4CnM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = ParseErrorBanner;
var _c;
__turbopack_context__.k.register(_c, "ParseErrorBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/errors/RuntimeErrorCallout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RuntimeErrorCallout",
    ()=>RuntimeErrorCallout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function RuntimeErrorCallout() {
    _s();
    const runErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "RuntimeErrorCallout.useKernelVizStore[runErrors]": (s)=>s.runErrors
    }["RuntimeErrorCallout.useKernelVizStore[runErrors]"]);
    const currentStepIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"])({
        "RuntimeErrorCallout.useKernelVizStore[currentStepIndex]": (s)=>s.currentStepIndex
    }["RuntimeErrorCallout.useKernelVizStore[currentStepIndex]"]);
    const errorHere = runErrors.find((e)=>e.seq === currentStepIndex);
    if (!errorHere) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
        variant: errorHere.fatal ? "destructive" : "default",
        className: "mx-3 mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/errors/RuntimeErrorCallout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                children: errorHere.fatal ? "Execution stopped" : "Out-of-bounds access"
            }, void 0, false, {
                fileName: "[project]/src/components/errors/RuntimeErrorCallout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                children: [
                    errorHere.message,
                    " (line ",
                    errorHere.line,
                    ", step ",
                    errorHere.seq + 1,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/errors/RuntimeErrorCallout.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/errors/RuntimeErrorCallout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(RuntimeErrorCallout, "rQS0cK0gubHPA1MzsgJuurp4QXU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKernelVizStore"]
    ];
});
_c = RuntimeErrorCallout;
var _c;
__turbopack_context__.k.register(_c, "RuntimeErrorCallout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/workspace/KernelVizWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KernelVizWorkspace",
    ()=>KernelVizWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-resizable-panels/dist/react-resizable-panels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/CodeEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$TabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/TabBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$watch$2f$VariableWatchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/watch/VariableWatchPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$PlaybackControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/playback/PlaybackControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$errors$2f$ParseErrorBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/errors/ParseErrorBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$errors$2f$RuntimeErrorCallout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/errors/RuntimeErrorCallout.tsx [app-client] (ecmascript)");
;
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
const KernelScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/scene/KernelScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.KernelScene), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/scene/KernelScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center bg-background text-sm text-muted-foreground",
            children: "Loading scene…"
        }, void 0, false, {
            fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
            lineNumber: 15,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = KernelScene;
function KernelVizWorkspace() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-dvh flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$errors$2f$ParseErrorBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseErrorBanner"], {}, void 0, false, {
                fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$errors$2f$RuntimeErrorCallout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuntimeErrorCallout"], {}, void 0, false, {
                fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    orientation: "horizontal",
                    className: "h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                            id: "code",
                            defaultSize: "34%",
                            minSize: "20%",
                            className: "flex min-h-0 flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$TabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabBar"], {}, void 0, false, {
                                    fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-h-0 flex-1 p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$CodeEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeEditor"], {}, void 0, false, {
                                        fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                            className: "w-1.5 bg-border/50 transition-colors hover:bg-border"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                            id: "right",
                            minSize: "35%",
                            className: "min-h-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                orientation: "vertical",
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                                        id: "buffers",
                                        defaultSize: "78%",
                                        minSize: "30%",
                                        className: "min-h-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KernelScene, {}, void 0, false, {
                                            fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "h-1.5 bg-border/50 transition-colors hover:bg-border"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$resizable$2d$panels$2f$dist$2f$react$2d$resizable$2d$panels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                                        id: "watch",
                                        minSize: "15%",
                                        className: "min-h-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$watch$2f$VariableWatchPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariableWatchPanel"], {}, void 0, false, {
                                            fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$playback$2f$PlaybackControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaybackControls"], {}, void 0, false, {
                fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workspace/KernelVizWorkspace.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = KernelVizWorkspace;
var _c, _c1;
__turbopack_context__.k.register(_c, "KernelScene");
__turbopack_context__.k.register(_c1, "KernelVizWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ytqee6._.js.map