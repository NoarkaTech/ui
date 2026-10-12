import * as React from "react";

import { cn } from "../../utils/cn";

export type KbdProps = React.ComponentProps<"kbd">;

function Kbd({ className, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-secondary text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded-sm border px-1.5 font-mono text-[10px] leading-[14px] font-medium opacity-100 select-none",
        className
      )}
      {...props}
    />
  );
}

export { Kbd };
