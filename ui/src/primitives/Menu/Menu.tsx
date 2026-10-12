"use client";

import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "../../utils/cn";
import { AltArrowRightIcon } from "@solar-icons/react/linear";

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
  );
}

export type DropdownMenuContentProps = Omit<
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

function DropdownMenuContent({
  className,
  align = "start",
  side,
  sideOffset = 4,
  alignOffset,
  ...props
}: DropdownMenuContentProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border bg-surface text-popover-foreground min-w-33 rounded-xl p-1 text-muted-foreground font-medium border border-border/60 duration-200 z-50 max-h-(--available-height) w-[calc(var(--anchor-width)_+_1px)] origin-(--transform-origin) overflow-x-hidden overflow-y-auto data-closed:overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

export type DropdownMenuItemProps = Omit<
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

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  onSelect,
  onClick,
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-lg px-2 py-1 text-xs leading-snug [&_svg:not([class*='size-'])]:size-3.5 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      onClick={onSelect ?? onClick}
      {...props}
    />
  );
}

export type DropdownMenuCheckboxItemProps = Omit<
  MenuPrimitive.CheckboxItem.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.CheckboxItem.Props["render"];
};

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground min-h-7 gap-2 rounded-md py-1.5 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-3.5 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
  );
}

export type DropdownMenuRadioItemProps = Omit<
  MenuPrimitive.RadioItem.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.RadioItem.Props["render"];
};

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground min-h-7 gap-2 rounded-md py-1.5 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-3.5 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
}) {
  // GroupLabel requires a Group ancestor, so the label brings its own.
  // Nesting inside an explicit DropdownMenuGroup is harmless: the inner
  // group simply takes over label association.
  return (
    <MenuPrimitive.Group data-slot="dropdown-menu-group">
      <MenuPrimitive.GroupLabel
        data-slot="dropdown-menu-label"
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

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-slot="dropdown-menu-separator"
      className={cn("bg-border/50 -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-[0.625rem] tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
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
      data-slot="dropdown-menu-sub-trigger"
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

function DropdownMenuSubContent({
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
          data-slot="dropdown-menu-sub-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border bg-surface text-popover-foreground min-w-32 rounded-xl p-1 shadow-md duration-100 z-50 origin-(--transform-origin) overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
