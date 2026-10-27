import * as React from "react";

import { cn } from "../../utils/cn";

export type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-muted rounded-md relative overflow-hidden before:absolute before:inset-0 before:animate-[skeleton-shimmer_2s_linear_infinite] before:bg-linear-to-r before:from-transparent before:via-white before:to-transparent dark:before:via-white/10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
