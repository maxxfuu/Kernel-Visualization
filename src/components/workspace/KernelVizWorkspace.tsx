"use client";

import dynamic from "next/dynamic";
import { Group, Panel, Separator } from "react-resizable-panels";
import { Header } from "./Header";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { TabBar } from "@/components/editor/TabBar";
import { VariableWatchPanel } from "@/components/watch/VariableWatchPanel";
import { PlaybackControls } from "@/components/playback/PlaybackControls";
import { ParseErrorBanner } from "@/components/errors/ParseErrorBanner";
import { RuntimeErrorCallout } from "@/components/errors/RuntimeErrorCallout";

const KernelScene = dynamic(() => import("@/components/scene/KernelScene").then((m) => m.KernelScene), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center bg-background text-sm text-muted-foreground">Loading scene…</div>,
});

export function KernelVizWorkspace() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <ParseErrorBanner />
      <RuntimeErrorCallout />
      <div className="min-h-0 flex-1">
        <Group orientation="horizontal" className="h-full">
          <Panel id="code" defaultSize="34%" minSize="20%" className="flex min-h-0 flex-col">
            <TabBar />
            <div className="min-h-0 flex-1 p-3">
              <CodeEditor />
            </div>
          </Panel>
          <Separator className="w-1.5 bg-border/50 transition-colors hover:bg-border" />
          <Panel id="right" minSize="35%" className="min-h-0">
            <Group orientation="vertical" className="h-full">
              <Panel id="buffers" defaultSize="78%" minSize="30%" className="min-h-0">
                <KernelScene />
              </Panel>
              <Separator className="h-1.5 bg-border/50 transition-colors hover:bg-border" />
              <Panel id="watch" minSize="15%" className="min-h-0">
                <VariableWatchPanel />
              </Panel>
            </Group>
          </Panel>
        </Group>
      </div>
      <PlaybackControls />
    </div>
  );
}
