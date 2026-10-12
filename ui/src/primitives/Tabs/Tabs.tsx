"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "../../utils/cn";

export type TabsProps = TabsPrimitive.Root.Props;

export type TabsListProps = Omit<
  TabsPrimitive.List.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TabsPrimitive.List.Props["render"];
};

export type TabsTabProps = Omit<
  TabsPrimitive.Tab.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TabsPrimitive.Tab.Props["render"];
};

export type TabsPanelProps = Omit<
  TabsPrimitive.Panel.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TabsPrimitive.Panel.Props["render"];
};

function Tabs({ ...props }: TabsProps) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />;
}

function TabsList({ className, render, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("inline-flex items-center gap-1", className)}
      render={render}
      {...props}
    />
  );
}

function TabsTab({ className, render, ...props }: TabsTabProps) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors outline-none select-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-active:bg-muted data-active:text-foreground",
        className
      )}
      render={render}
      {...props}
    />
  );
}

function TabsPanel({ className, render, ...props }: TabsPanelProps) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("outline-none", className)}
      render={render}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTab, TabsPanel };
