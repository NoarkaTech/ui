"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

export type CollapsibleProps = CollapsiblePrimitive.Root.Props;

export type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props;

export type CollapsibleContentProps = Omit<
  CollapsiblePrimitive.Panel.Props,
  "className"
> & {
  className?: string;
};

function Collapsible({ ...props }: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className="w-full"
      {...props}
    />
  );
}

function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.Trigger
     data-slot="collapsible-trigger" {...props} />
  );
}

function CollapsibleContent({ ...props }: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
