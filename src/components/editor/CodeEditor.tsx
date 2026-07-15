"use client";

import { useEffect, useRef } from "react";
import { Compartment, EditorState, Extension } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { indentUnit } from "@codemirror/language";
import { indentWithTab } from "@codemirror/commands";
import { basicSetup } from "codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { vim } from "@replit/codemirror-vim";
import { useKernelVizStore } from "@/state/store";
import { EditorThemeName, useEditorSettingsStore } from "@/state/editorSettingsStore";
import { currentLineField, errorLinesField, setCurrentLine, setErrorLines, stepHighlightTheme } from "./stepHighlightField";
import { resolveEditorTheme } from "./themes";

const readOnlyCompartment = new Compartment();
const vimCompartment = new Compartment();
const indentCompartment = new Compartment();
const lineNumberCompartment = new Compartment();
// Mutually exclusive: exactly one of these two is active at a time. Both declare rules for the
// same selectors (background, gutters, cursor, selection) at equal CSS specificity, so letting
// both be active simultaneously turns into an unpredictable cascade tie -instead "auto" swaps
// the adaptive theme in and any concrete theme (Dracula, Nord, ...) swaps it out.
const adaptiveColorCompartment = new Compartment();
const userThemeCompartment = new Compartment();

function indentExtensions(tabSize: number) {
  return [indentUnit.of(" ".repeat(tabSize)), EditorState.tabSize.of(tabSize)];
}

// Structural chrome (sizing, font, focus outline) -applies regardless of which color theme
// is active, since no theme package redeclares these.
const structuralTheme = EditorView.theme({
  "&": { height: "100%", fontSize: "13px" },
  "&.cm-focused": { outline: "none" },
  ".cm-scroller": { overflow: "auto", fontFamily: "var(--font-mono), ui-monospace, monospace" },
});

// The app-adaptive "auto" theme, tied to our own CSS variables so it follows the light/dark toggle.
const adaptiveColorTheme = EditorView.theme({
  "&": { backgroundColor: "transparent", color: "var(--color-foreground)" },
  ".cm-gutters": {
    backgroundColor: "transparent",
    color: "var(--color-muted-foreground)",
    border: "none",
    borderRight: "1px solid var(--color-border)",
  },
  ".cm-activeLineGutter": { backgroundColor: "var(--color-muted)" },
  ".cm-activeLine": { backgroundColor: "color-mix(in oklch, var(--color-muted) 50%, transparent)" },
  ".cm-cursor": { borderLeftColor: "var(--color-foreground)" },
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
    backgroundColor: "color-mix(in oklch, var(--color-primary) 25%, transparent)",
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "var(--color-muted)",
    border: "1px solid var(--color-border)",
    color: "var(--color-muted-foreground)",
  },
});

function colorExtensionsFor(themeName: EditorThemeName) {
  const picked = resolveEditorTheme(themeName);
  return {
    adaptive: picked ? [] : [adaptiveColorTheme],
    picked: picked ?? [],
  };
}

// Vim-style relative numbers: the cursor's own line stays absolute, every other line shows its
// distance from it. Layered as a *second* `lineNumbers()` alongside basicSetup's default one --
// CodeMirror merges `formatNumber` across all `lineNumbers()` extensions into a single gutter
// rather than drawing a duplicate column, as long as only one of them sets it.
function lineNumberExtensionsFor(relative: boolean): Extension[] {
  if (!relative) return [];
  return [
    lineNumbers({
      formatNumber: (lineNo, state) => {
        const current = state.doc.lineAt(state.selection.main.head).number;
        return lineNo === current ? String(lineNo) : String(Math.abs(lineNo - current));
      },
    }),
  ];
}

interface EditorSettingsSnapshot {
  vimMode: boolean;
  tabSize: number;
  themeName: EditorThemeName;
  relativeLineNumbers: boolean;
}

/** Full extension set for a fresh EditorState -used both at mount and when swapping tabs. */
function buildExtensions(settings: EditorSettingsSnapshot, onDocChange: (doc: string) => void): Extension[] {
  const colors = colorExtensionsFor(settings.themeName);
  return [
    vimCompartment.of(settings.vimMode ? [vim()] : []),
    basicSetup,
    cpp(),
    keymap.of([indentWithTab]),
    indentCompartment.of(indentExtensions(settings.tabSize)),
    lineNumberCompartment.of(lineNumberExtensionsFor(settings.relativeLineNumbers)),
    currentLineField,
    errorLinesField,
    stepHighlightTheme,
    readOnlyCompartment.of(EditorView.editable.of(true)),
    structuralTheme,
    adaptiveColorCompartment.of(colors.adaptive),
    userThemeCompartment.of(colors.picked),
    EditorView.updateListener.of((update) => {
      if (update.docChanged) onDocChange(update.state.doc.toString());
    }),
  ];
}

export function CodeEditor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const mountedTabRef = useRef<string | null>(null);

  const source = useKernelVizStore((s) => s.source);
  const setSource = useKernelVizStore((s) => s.setSource);
  const parseErrors = useKernelVizStore((s) => s.parseErrors);
  const steps = useKernelVizStore((s) => s.steps);
  const currentStepIndex = useKernelVizStore((s) => s.currentStepIndex);
  const activeTabId = useKernelVizStore((s) => s.activeTabId);

  const themeName = useEditorSettingsStore((s) => s.themeName);
  const tabSize = useEditorSettingsStore((s) => s.tabSize);
  const vimMode = useEditorSettingsStore((s) => s.vimMode);
  const relativeLineNumbers = useEditorSettingsStore((s) => s.relativeLineNumbers);

  // Mount once.
  useEffect(() => {
    if (!containerRef.current) return;
    mountedTabRef.current = useKernelVizStore.getState().activeTabId;
    const view = new EditorView({
      state: EditorState.create({
        doc: source,
        extensions: buildExtensions(useEditorSettingsStore.getState(), setSource),
      }),
      parent: containerRef.current,
    });
    viewRef.current = view;
    return () => view.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Switching tabs swaps in a different document entirely -rebuild the EditorState (rather
  // than dispatching a content-replace transaction) so undo history doesn't bleed between tabs.
  useEffect(() => {
    const view = viewRef.current;
    if (!view || mountedTabRef.current === activeTabId) return;
    mountedTabRef.current = activeTabId;
    view.setState(
      EditorState.create({
        doc: useKernelVizStore.getState().source,
        extensions: buildExtensions(useEditorSettingsStore.getState(), setSource),
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabId]);

  // Toggle read-only once a run exists.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ effects: readOnlyCompartment.reconfigure(EditorView.editable.of(steps.length === 0)) });
  }, [steps.length]);

  // Current-line highlight follows playback.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const line = steps[currentStepIndex]?.line ?? null;
    view.dispatch({ effects: setCurrentLine.of(line) });
    if (line !== null) {
      const linePos = view.state.doc.line(Math.min(line, view.state.doc.lines)).from;
      view.dispatch({ effects: EditorView.scrollIntoView(linePos, { y: "center" }) });
    }
  }, [steps, currentStepIndex]);

  // Parse-error squiggles.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ effects: setErrorLines.of(parseErrors.map((e) => e.line)) });
  }, [parseErrors]);

  // Editor settings: theme, tab size, vim keybindings.
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const colors = colorExtensionsFor(themeName);
    view.dispatch({
      effects: [adaptiveColorCompartment.reconfigure(colors.adaptive), userThemeCompartment.reconfigure(colors.picked)],
    });
  }, [themeName]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ effects: indentCompartment.reconfigure(indentExtensions(tabSize)) });
  }, [tabSize]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ effects: vimCompartment.reconfigure(vimMode ? [vim()] : []) });
  }, [vimMode]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ effects: lineNumberCompartment.reconfigure(lineNumberExtensionsFor(relativeLineNumbers)) });
  }, [relativeLineNumbers]);

  return <div ref={containerRef} className="h-full min-h-0 overflow-hidden rounded-lg border border-border" />;
}
