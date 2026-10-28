"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-[color,background-color,border-color,outline-color,box-shadow,filter] duration-200 hover:bg-muted focus-visible:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50 disabled:pointer-events-none disabled:opacity-50 data-pressed:bg-accent data-pressed:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;

export type ToggleProps = Omit<
  TogglePrimitive.Props,
  "className" | "render"
> &
  VariantProps<typeof toggleVariants> & {
    className?: string;
    render?: TogglePrimitive.Props["render"];
  };

function inferNativeButton(
  render: ToggleProps["render"]
): boolean | undefined {
  if (render && typeof render !== "function" && React.isValidElement(render)) {
    return render.type === "button";
  }
  return undefined;
}

function Toggle({
  className,
  variant = "default",
  size = "default",
  render,
  nativeButton,
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      data-variant={variant ?? undefined}
      data-size={size ?? undefined}
      className={cn(toggleVariants({ variant, size, className }))}
      render={render}
      nativeButton={nativeButton ?? inferNativeButton(render) ?? true}
      {...props}
    />
  );
}

export { Toggle };
