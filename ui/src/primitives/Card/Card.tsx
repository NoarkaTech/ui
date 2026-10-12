import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { cardInnerVariants, cardVariants } from "./Card.variants";

export type CardProps = Omit<React.ComponentProps<"div">, "children"> &
  VariantProps<typeof cardVariants> & {
    children?: React.ReactNode;
  };

function Card({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: CardProps) {
  if (variant === "border") {
    return (
      <div
        data-slot="card"
        data-variant="border"
        data-size={size ?? undefined}
        className={cn(cardVariants({ variant, size, className }))}
        {...props}
      >
        <div
          data-slot="card-inner"
          className={cn(cardInnerVariants({ size }))}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      data-slot="card"
      data-variant={variant ?? undefined}
      data-size={size ?? undefined}
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "bg-muted/50 rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3 flex items-center",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
