"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { AltArrowDownIcon, AltArrowUpIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";

type DerivedSelectItem = { value: unknown; label: React.ReactNode };

function textLabel(children: React.ReactNode): string | undefined {
  let text = "";
  let plain = true;
  React.Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      text += String(child);
    } else if (child !== null && child !== undefined && typeof child !== "boolean") {
      plain = false;
    }
  });
  return plain && text !== "" ? text : undefined;
}

function collectSelectItems(children: React.ReactNode): DerivedSelectItem[] {
  const items: DerivedSelectItem[] = [];
  const seen = new Set<unknown>();
  const walk = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      const childProps = child.props as {
        value?: unknown;
        children?: React.ReactNode;
      };
      // Match by shape (value prop + plain text label) instead of element
      // type: element types don't survive RSC serialization as raw functions,
      // so reference equality can't be relied on here.
      const label = textLabel(childProps.children);
      if (childProps.value !== undefined && label !== undefined) {
        if (!seen.has(childProps.value)) {
          seen.add(childProps.value);
          items.push({ value: childProps.value, label });
        }
        return;
      }
      walk(childProps.children);
    });
  };
  walk(children);
  return items;
}

function Select<Value>({ items, children, ...props }: SelectPrimitive.Root.Props<Value>) {
  const derivedItems = React.useMemo(() => {
    if (items != null) return items;
    const collected = collectSelectItems(children);
    return collected.length > 0 ? collected : undefined;
  }, [items, children]);
  return (
    <SelectPrimitive.Root data-slot="select" items={derivedItems} {...props}>
      {children}
    </SelectPrimitive.Root>
  );
}

function SelectGroup({
  className,
  ...props
}: Omit<SelectPrimitive.Group.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1", className)}
      {...props}
    />
  );
}

function SelectValue({
  className,
  ...props
}: Omit<SelectPrimitive.Value.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left capitalize", className)}
      {...props}
    />
  );
}

export type SelectTriggerProps = Omit<
  SelectPrimitive.Trigger.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SelectPrimitive.Trigger.Props["render"];
  size?: "sm" | "default";
};

function SelectTrigger({
  className,
  size = "default",
  children,
  render,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center border justify-between gap-2 rounded-lg bg-surface px-3 text-[13px] whitespace-nowrap transition-colors outline-none select-none hover:bg-secondary dark:hover:brightness-110 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      render={render}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <AltArrowDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  );
}

export type SelectContentProps = Omit<
  SelectPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SelectPrimitive.Popup.Props["render"];
  side?: SelectPrimitive.Positioner.Props["side"];
  sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"];
  align?: SelectPrimitive.Positioner.Props["align"];
  alignOffset?: SelectPrimitive.Positioner.Props["alignOffset"];
  alignItemWithTrigger?: SelectPrimitive.Positioner.Props["alignItemWithTrigger"];
};

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  render,
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            "relative isolate z-50 max-h-(--available-height) w-[calc(var(--anchor-width)_+_1px)] origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border bg-surface p-1 text-popover-foreground duration-200 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          render={render}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: Omit<SelectPrimitive.GroupLabel.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export type SelectItemProps = Omit<
  SelectPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SelectPrimitive.Item.Props["render"];
};

function SelectItem({ className, children, render, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-foreground/80 min-h-[30px] outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      render={render}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none size-3.5"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
        }
      />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: Omit<SelectPrimitive.Separator.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: Omit<SelectPrimitive.ScrollUpArrow.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-secondary py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <AltArrowUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: Omit<SelectPrimitive.ScrollDownArrow.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-secondary py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <AltArrowDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
