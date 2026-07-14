import { StateEffect, StateField } from "@codemirror/state";
import { Decoration, DecorationSet, EditorView } from "@codemirror/view";

export const setCurrentLine = StateEffect.define<number | null>();

const currentLineMark = Decoration.line({ class: "cm-current-step-line" });

export const currentLineField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },
  update(decorations, tr) {
    for (const effect of tr.effects) {
      if (effect.is(setCurrentLine)) {
        if (effect.value === null || effect.value > tr.state.doc.lines) return Decoration.none;
        const line = tr.state.doc.line(effect.value);
        return Decoration.set([currentLineMark.range(line.from)]);
      }
    }
    return decorations.map(tr.changes);
  },
  provide: (field) => EditorView.decorations.from(field),
});

export const setErrorLines = StateEffect.define<number[]>();

const errorLineMark = Decoration.line({ class: "cm-error-line" });

export const errorLinesField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },
  update(decorations, tr) {
    for (const effect of tr.effects) {
      if (effect.is(setErrorLines)) {
        const marks = effect.value
          .filter((l) => l >= 1 && l <= tr.state.doc.lines)
          .map((l) => errorLineMark.range(tr.state.doc.line(l).from));
        return Decoration.set(marks, true);
      }
    }
    return decorations.map(tr.changes);
  },
  provide: (field) => EditorView.decorations.from(field),
});

export const stepHighlightTheme = EditorView.baseTheme({
  ".cm-current-step-line": {
    backgroundColor: "color-mix(in oklch, var(--color-blue-500) 16%, transparent)",
    outline: "1px solid color-mix(in oklch, var(--color-blue-500) 45%, transparent)",
  },
  ".cm-error-line": {
    backgroundColor: "color-mix(in oklch, var(--color-red-500) 14%, transparent)",
    textDecoration: "underline wavy color-mix(in oklch, var(--color-red-500) 70%, transparent)",
  },
});
