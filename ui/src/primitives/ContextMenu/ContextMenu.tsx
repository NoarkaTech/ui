"use client";

import * as React from "react";
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "../../utils/cn";
import { AltArrowRightIcon } from "@solar-icons/react/linear";

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

export type ContextMenuContentProps = Omit<
  MenuPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.Popup.Props["render"];
  side?: MenuPrimitive.Positioner.Props["side"];
  sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
  align?: MenuPrimitive.Positioner.Props["align"];
  alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"];
};

function ContextMenuContent({
  className,
  align = "start",
  side,
  sideOffset = 4,
  alignOffset,
  ...props
}: ContextMenuContentProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <MenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative border bg-surface text-popover-foreground min-w-48 rounded-xl p-1 text-muted-foreground font-medium border border-border/60 duration-200 z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto data-closed:overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export type ContextMenuItemProps = Omit<
  MenuPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.Item.Props["render"];
  inset?: boolean;
  variant?: "default" | "destructive";
  /**
   * Back-compat alias for `onClick` (previous Radix-based API exposed `onSelect`).
   * The menu still closes on select unless `closeOnClick={false}`.
   */
  onSelect?: MenuPrimitive.Item.Props["onClick"];
};

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  onSelect,
  onClick,
  ...props
}: ContextMenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-lg px-2 py-1 text-xs leading-snug [&_svg:not([class*='size-'])]:size-3.5 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      onClick={onSelect ?? onClick}
      {...props}
    />
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
}) {
  // GroupLabel requires a Group ancestor, so the label brings its own.
  // Nesting inside an explicit group is harmless: the inner group simply
  // takes over label association.
  return (
    <MenuPrimitive.Group data-slot="context-menu-group">
      <MenuPrimitive.GroupLabel
        data-slot="context-menu-label"
        data-inset={inset}
        className={cn(
          "text-muted-foreground px-2 py-1.5 text-xs data-[inset]:pl-8",
          className
        )}
        {...props}
      />
    </MenuPrimitive.Group>
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-slot="context-menu-separator"
      className={cn("bg-border/50 -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-[0.625rem] tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: Omit<MenuPrimitive.SubmenuTrigger.Props, "className"> & {
  className?: string;
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-md px-2 py-1 text-xs [&_svg:not([class*='size-'])]:size-3.5 flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <AltArrowRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: Omit<MenuPrimitive.Popup.Props, "className" | "render"> & {
  className?: string;
  render?: MenuPrimitive.Popup.Props["render"];
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner>
        <MenuPrimitive.Popup
          data-slot="context-menu-sub-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative border bg-surface text-popover-foreground min-w-32 rounded-xl p-1 duration-100 z-50 origin-(--transform-origin) overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
};
