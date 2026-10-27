"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "../../utils/cn";

export type SwitchProps = Omit<
  SwitchPrimitive.Root.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SwitchPrimitive.Root.Props["render"];
};

function Switch({ className, render, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-5 w-7 shrink-0 cursor-default items-center rounded-full border border-transparent p-0.5 shadow-xs focus-visible:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50 transition-[color,background-color,border-color,outline-color,box-shadow,filter] duration-200 disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-primary data-unchecked:bg-muted-foreground/20",
        className
      )}
      render={render}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-3 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-checked:translate-x-2.5 data-unchecked:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
