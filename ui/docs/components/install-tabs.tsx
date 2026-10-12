"use client";

import * as React from "react";
import { Button, Card, Tabs, TabsList, TabsPanel, TabsTab } from "@noarka/ui";
import { CheckCircleLinearIcon, CopyLinearIcon } from "@solar-icons/react";
import { CodeContent } from "./code-block";

export type InstallCommand = {
  id: string;
  label: string;
  code: string;
};

export function commandForPackages(packages: string[]): InstallCommand[] {
  const list = packages.join(" ");
  return [
    { id: "npm", label: "npm", code: `npm install ${list}` },
    { id: "pnpm", label: "pnpm", code: `pnpm add ${list}` },
    { id: "yarn", label: "Yarn", code: `yarn add ${list}` },
    { id: "bun", label: "Bun", code: `bun add ${list}` },
  ];
}

export function commandForCli(base: string): InstallCommand[] {
  return [
    { id: "npm", label: "npm", code: `npx ${base}` },
    { id: "pnpm", label: "pnpm", code: `pnpm dlx ${base}` },
    { id: "yarn", label: "Yarn", code: `yarn dlx ${base}` },
    { id: "bun", label: "Bun", code: `bunx ${base}` },
  ];
}

export function InstallTabs({ commands }: { commands: InstallCommand[] }) {
  const [active, setActive] = React.useState(commands[0]?.id ?? "");
  const [copied, setCopied] = React.useState(false);
  const current = commands.find((c) => c.id === active) ?? commands[0];

  async function copy() {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Tabs value={active} onValueChange={(v) => { setActive(String(v)); setCopied(false); }}>
      <Card className="gap-0 overflow-hidden p-0">
        <div className="flex items-center justify-between border-b py-2 pr-4 pl-2">
          <TabsList>
            {commands.map((c) => (
              <TabsTab key={c.id} value={c.id}>
                {c.label}
              </TabsTab>
            ))}
          </TabsList>
          <Button variant="ghost" size="icon-xs" onClick={copy} aria-label="Copy command">
            {copied ? (
              <CheckCircleLinearIcon size={16} className="text-success" />
            ) : (
              <CopyLinearIcon size={16} />
            )}
          </Button>
        </div>
        {commands.map((c) => (
          <TabsPanel key={c.id} value={c.id}>
            <CodeContent code={c.code} lang="bash" plain />
          </TabsPanel>
        ))}
      </Card>
    </Tabs>
  );
}
