import type { Extension } from "@codemirror/state";
import {
  dracula,
  githubDark,
  githubLight,
  materialDark,
  monokai,
  nord,
  solarizedDark,
  solarizedLight,
  vscodeDark,
  vscodeLight,
} from "@uiw/codemirror-themes-all";
import type { EditorThemeName } from "@/state/editorSettingsStore";

/** `null` means "auto" -no override, falls back to the app-adaptive theme already set up in CodeEditor. */
export function resolveEditorTheme(name: EditorThemeName): Extension | null {
  switch (name) {
    case "githubLight":
      return githubLight;
    case "githubDark":
      return githubDark;
    case "vscodeLight":
      return vscodeLight;
    case "vscodeDark":
      return vscodeDark;
    case "dracula":
      return dracula;
    case "monokai":
      return monokai;
    case "nord":
      return nord;
    case "solarizedLight":
      return solarizedLight;
    case "solarizedDark":
      return solarizedDark;
    case "materialDark":
      return materialDark;
    case "auto":
    default:
      return null;
  }
}
