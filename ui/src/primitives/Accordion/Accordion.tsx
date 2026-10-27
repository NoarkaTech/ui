"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { AltArrowDownIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";

export type AccordionProps = AccordionPrimitive.Root.Props;

export type AccordionItemProps = AccordionPrimitive.Item.Props;

export type AccordionTriggerProps = Omit<
  AccordionPrimitive.Trigger.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AccordionPrimitive.Trigger.Props["render"];
};

export type AccordionContentProps = Omit<
  AccordionPrimitive.Panel.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AccordionPrimitive.Panel.Props["render"];
};

function Accordion({ ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className="w-full overflow-hidden"
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-border last:border-b-0 data-disabled:cursor-not-allowed data-disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, render, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0",
          className
        )}
        render={render}
        {...props}
      />
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, render, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn("overflow-hidden", className)}
      render={render}
      {...props}
    />
  );
}

function AccordionChevron({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="accordion-chevron"
      className={cn(
        "text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-180",
        className
      )}
      {...props}
    >
      <AltArrowDownIcon size={16} />
    </span>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionChevron,
};
