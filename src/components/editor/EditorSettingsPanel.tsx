"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { EDITOR_THEME_OPTIONS, EditorThemeName, useEditorSettingsStore } from "@/state/editorSettingsStore";

const TAB_SIZES = [2, 4, 8];

export function EditorSettingsPanel() {
  const themeName = useEditorSettingsStore((s) => s.themeName);
  const tabSize = useEditorSettingsStore((s) => s.tabSize);
  const vimMode = useEditorSettingsStore((s) => s.vimMode);
  const relativeLineNumbers = useEditorSettingsStore((s) => s.relativeLineNumbers);
  const setThemeName = useEditorSettingsStore((s) => s.setThemeName);
  const setTabSize = useEditorSettingsStore((s) => s.setTabSize);
  const setVimMode = useEditorSettingsStore((s) => s.setVimMode);
  const setRelativeLineNumbers = useEditorSettingsStore((s) => s.setRelativeLineNumbers);

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="ghost" size="icon" title="Editor settings">
            <Settings className="size-4" />
          </Button>
        }
      />
      <PopoverContent align="start" className="w-72">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Editor settings</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <Label className="text-sm">Theme</Label>
                <Select value={themeName} onValueChange={(v) => v && setThemeName(v as EditorThemeName)}>
                  <SelectTrigger className="h-8 w-40 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {EDITOR_THEME_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between gap-3">
                <Label className="text-sm">Tab size</Label>
                <Select value={String(tabSize)} onValueChange={(v) => v && setTabSize(Number(v))}>
                  <SelectTrigger className="h-8 w-40 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TAB_SIZES.map((size) => (
                      <SelectItem key={size} value={String(size)}>
                        {size} spaces
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="vim-mode-switch" className="text-sm">
                  Vim keybindings
                </Label>
                <Switch id="vim-mode-switch" checked={vimMode} onCheckedChange={setVimMode} />
              </div>

              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="relative-line-numbers-switch" className="text-sm">
                  Relative line numbers
                </Label>
                <Switch
                  id="relative-line-numbers-switch"
                  checked={relativeLineNumbers}
                  onCheckedChange={setRelativeLineNumbers}
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
