"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { toggleVariants } from "./Toggle.variants";

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

export { Toggle, toggleVariants };
