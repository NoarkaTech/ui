"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { MagnifierIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../Dialog/Dialog";

export type CommandProps = React.ComponentProps<typeof CommandPrimitive>;

function Command({ className, ...props }: CommandProps) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-surface text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-xl",
        className
      )}
      {...props}
    />
  );
}

export type CommandInputProps = React.ComponentProps<
  typeof CommandPrimitive.Input
>;

function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-10 shrink-0 items-center gap-2 border-b border-border/60 bg-accent px-3"
    >
      <MagnifierIcon className="size-4 shrink-0 text-muted-foreground" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground/80 flex h-10 w-full min-w-0 bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

export type CommandListProps = React.ComponentProps<
  typeof CommandPrimitive.List
>;

function CommandList({ className, ...props }: CommandListProps) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-75 scroll-py-1 overflow-x-hidden overflow-y-auto p-1",
        className
      )}
      {...props}
    />
  );
}

export type CommandEmptyProps = React.ComponentProps<
  typeof CommandPrimitive.Empty
>;

function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn(
        "text-muted-foreground px-2 py-6 text-center text-sm",
        className
      )}
      {...props}
    />
  );
}

export type CommandGroupProps = React.ComponentProps<
  typeof CommandPrimitive.Group
>;

function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export type CommandItemProps = React.ComponentProps<
  typeof CommandPrimitive.Item
>;

function CommandItem({ className, ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[selected=true]:**:text-accent-foreground hover:bg-accent hover:text-accent-foreground [&_svg:not([class*='size-'])]:size-3.5 group/command-item relative flex min-h-9 cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm leading-snug outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

export type CommandSeparatorProps = React.ComponentProps<
  typeof CommandPrimitive.Separator
>;

function CommandSeparator({ className, ...props }: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

export type CommandShortcutProps = React.ComponentProps<"span">;

function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground group-data-[selected=true]/command-item:text-accent-foreground ml-auto text-[0.625rem] tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export type CommandDialogProps = Omit<
  React.ComponentProps<typeof Dialog>,
  "children"
> & {
  children?: React.ReactNode;
  /**
   * Element rendered as the open trigger, e.g. `<Button>Search...</Button>`.
   * Omit it and control `open` / `onOpenChange` yourself for hotkey-driven
   * palettes.
   */
  trigger?: React.ReactElement;
  className?: string;
};

/**
 * Floating command menu. Renders the palette in a centered modal with a
 * backdrop; closes on Esc or outside click. Compose the palette
 * (CommandInput, CommandList, groups) as children.
 */
function CommandDialog({
  trigger,
  className,
  children,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      {trigger != null && <DialogTrigger render={trigger} />}
      <DialogContent
        showCloseButton={false}
        className={cn(
          "gap-0 overflow-hidden p-0 sm:max-w-lg",
          className
        )}
      >
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <DialogDescription className="sr-only">
          Search for apps and commands.
        </DialogDescription>
        <Command className="w-full rounded-none">{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
};
