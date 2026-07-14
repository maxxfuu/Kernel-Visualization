import { create } from "zustand";
import { persist } from "zustand/middleware";

export type EditorThemeName =
  | "auto"
  | "githubLight"
  | "githubDark"
  | "vscodeDark"
  | "vscodeLight"
  | "dracula"
  | "monokai"
  | "nord"
  | "solarizedLight"
  | "solarizedDark"
  | "materialDark";

export const EDITOR_THEME_OPTIONS: { value: EditorThemeName; label: string }[] = [
  { value: "auto", label: "Auto (follows app theme)" },
  { value: "githubLight", label: "GitHub Light" },
  { value: "githubDark", label: "GitHub Dark" },
  { value: "vscodeLight", label: "VS Code Light" },
  { value: "vscodeDark", label: "VS Code Dark" },
  { value: "dracula", label: "Dracula" },
  { value: "monokai", label: "Monokai" },
  { value: "nord", label: "Nord" },
  { value: "solarizedLight", label: "Solarized Light" },
  { value: "solarizedDark", label: "Solarized Dark" },
  { value: "materialDark", label: "Material Dark" },
];

interface EditorSettingsState {
  themeName: EditorThemeName;
  tabSize: number;
  vimMode: boolean;
  setThemeName: (theme: EditorThemeName) => void;
  setTabSize: (size: number) => void;
  setVimMode: (enabled: boolean) => void;
}

export const useEditorSettingsStore = create<EditorSettingsState>()(
  persist(
    (set) => ({
      themeName: "auto",
      tabSize: 2,
      vimMode: false,
      setThemeName: (themeName) => set({ themeName }),
      setTabSize: (tabSize) => set({ tabSize }),
      setVimMode: (vimMode) => set({ vimMode }),
    }),
    { name: "kernel-viz-editor-settings" },
  ),
);
