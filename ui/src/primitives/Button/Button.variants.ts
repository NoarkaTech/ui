import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "cursor-default [&>*]:opacity-80 focus-visible:border-ring cursor-default focus-visible:ring-ring/20 rounded-full border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-2 focus-visible:border-none aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default:
          "[&>*]:opacity-80 bg-primary text-primary-foreground dark:bg-primary/80 border-none transition-[filter] duration-200 hover:bg-primary/90 dark:hover:bg-primary/70 inset-shadow-sm inset-shadow-white/15 transition-all duration-200",
        outline:
          "border-border text-muted-foreground bg-background hover:bg-muted dark:bg-secondary aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:brightness-110 transition-all duration-200",
        secondary:
          "[&>*]:opacity-80 bg-secondary text-secondary-foreground hover:bg-secondary/80 ring-1 ring-inset ring-white/2",
        ghost:
          "[&>*]:opacity-80 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "[&>*]:opacity-80 bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-full px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-full px-2.5 text-[13px] leading-[18px] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 rounded-full px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-full",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
