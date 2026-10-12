"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cn } from "../../utils/cn";

export type AvatarProps = Omit<
  AvatarPrimitive.Root.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AvatarPrimitive.Root.Props["render"];
};

export type AvatarImageProps = Omit<
  AvatarPrimitive.Image.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AvatarPrimitive.Image.Props["render"];
};

export type AvatarFallbackProps = Omit<
  AvatarPrimitive.Fallback.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AvatarPrimitive.Fallback.Props["render"];
};

function Avatar({ className, render, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      render={render}
      {...props}
    />
  );
}

function AvatarImage({ className, render, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square h-full w-full", className)}
      render={render}
      {...props}
    />
  );
}

function AvatarFallback({ className, render, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex h-full w-full items-center justify-center rounded-full",
        className
      )}
      render={render}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
