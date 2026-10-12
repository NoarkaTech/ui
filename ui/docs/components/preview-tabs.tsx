"use client";

import * as React from "react";
import { Tabs, TabsList, TabsPanel, TabsTab, Card } from "@noarka/ui";
import { CodeContent } from "./code-block";

type TabValue = "preview" | "code";

export function PreviewTabs({
  preview,
  code,
}: {
  preview: React.ReactNode;
  code: string;
}) {
  const [tab, setTab] = React.useState<TabValue>("preview");

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => setTab(v as TabValue)}
    >
      <Card className="gap-0 overflow-hidden p-0">
        <div className="border-b p-2">
          <TabsList>
            <TabsTab value="preview">Preview</TabsTab>
            <TabsTab value="code">Code</TabsTab>
          </TabsList>
        </div>
        <TabsPanel value="preview">
          <div className="flex min-h-[320px] items-center justify-center p-8">
            {/* items-center centers narrow demos; full-width ones fill as before. */}
            <div className="flex w-full max-w-md flex-col items-center">{preview}</div>
          </div>
        </TabsPanel>
        <TabsPanel value="code">
          <div className="p-4">
            <CodeContent code={code} lang="tsx" />
          </div>
        </TabsPanel>
      </Card>
    </Tabs>
  );
}
