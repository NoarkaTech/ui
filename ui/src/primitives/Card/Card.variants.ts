import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva("group/card flex flex-col", {
  variants: {
    variant: {
      default:
        "w-full border bg-card/80 text-card-foreground overflow-hidden rounded-2xl text-sm has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      border: "w-full rounded-3xl border border-border/60 bg-card/30 p-1",
    },
    size: {
      default: "",
      sm: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      size: "default",
      className: "gap-4 py-4",
    },
    {
      variant: "default",
      size: "sm",
      className: "gap-3 py-3 has-data-[slot=card-footer]:pb-0",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// Inner box for the `border` variant (the second border).
export const cardInnerVariants = cva(
  "border border-border/60 bg-card/80 text-card-foreground shadow-xs overflow-hidden rounded-2xl p-4 text-sm has-data-[slot=card-footer]:pb-0 flex flex-col",
  {
    variants: {
      size: {
        default: "gap-4",
        sm: "gap-3 p-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export type CardVariants = VariantProps<typeof cardVariants>;
