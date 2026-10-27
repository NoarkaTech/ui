import * as React from "react";
import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  Kbd,
  Label,
  Skeleton,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverTitle,
  PopoverTrigger,
  ScrollArea,
  ScrollAreaScrollbar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Switch,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@noarka/ui";
import { AltArrowDownLinearIcon } from "@solar-icons/react";
import { NestedDialogDemo } from "./demos/nested-dialog-demo";

export type ComponentExample = {
  title: string;
  description: string;
  code: string;
  demo: React.ReactNode;
};

export type PropReference = {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
};

export type ApiSection = {
  component: string;
  props: PropReference[];
};

export type ExtraFile = {
  filename: string;
  code: string;
};

export type ComponentDetails = {
  installCli: string;
  installPackages: string[];
  source?: string;
  sourceFilename?: string;
  extraFiles?: ExtraFile[];
  usageImport?: string;
  usage: string;
  examples: ComponentExample[];
  api?: ApiSection[];
};

export type ComponentEntry = {
  slug: string;
  name: string;
  description: string;
  imports: string[];
  demo: React.ReactNode;
  code?: string;
  details?: ComponentDetails;
};

const ACCORDION_SOURCE = `"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { AltArrowDownIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";

export type AccordionProps = AccordionPrimitive.Root.Props;

export type AccordionItemProps = AccordionPrimitive.Item.Props;

export type AccordionTriggerProps = Omit<
  AccordionPrimitive.Trigger.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AccordionPrimitive.Trigger.Props["render"];
};

export type AccordionContentProps = Omit<
  AccordionPrimitive.Panel.Props,
  "className" | "render"
> & {
  className?: string;
  render?: AccordionPrimitive.Panel.Props["render"];
};

function Accordion({ ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className="w-full overflow-hidden"
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-border/60 last:border-b-0 data-disabled:cursor-not-allowed data-disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, render, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:shrink-0",
          className
        )}
        render={render}
        {...props}
      />
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, render, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn("overflow-hidden", className)}
      render={render}
      {...props}
    />
  );
}

function AccordionChevron({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="accordion-chevron"
      className={cn(
        "text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-180",
        className
      )}
      {...props}
    >
      <AltArrowDownIcon size={16} />
    </span>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionChevron,
};`;

const CN_SOURCE = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

const ACCORDION_IMPORT = `import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@noarka/ui";`;

const ACCORDION_PREVIEW_CODE = `import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@noarka/ui";

<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      What is Noarka UI? <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        An open-source React component library built on Base UI primitives.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>
      How do I install it? <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Run the install command, import the tokens, and render primitives directly.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const ACCORDION_USAGE = `<Accordion defaultValue={["shipping"]}>
  <AccordionItem value="shipping">
    <AccordionTrigger>
      How long does shipping take? <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Orders arrive within 3 to 5 business days.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const ACCORDION_SINGLE_CODE = `<Accordion defaultValue={["returns"]}>
  <AccordionItem value="returns">
    <AccordionTrigger>
      Returns <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Free returns within 30 days.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="warranty">
    <AccordionTrigger>
      Warranty <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Two year warranty on all parts.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const ACCORDION_MULTIPLE_CODE = `<Accordion multiple defaultValue={["a"]}>
  <AccordionItem value="a">
    <AccordionTrigger>
      Returns <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Free returns within 30 days.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>
      Warranty <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Two year warranty on all parts.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const ACCORDION_DISABLED_CODE = `<Accordion defaultValue={["a"]}>
  <AccordionItem value="a">
    <AccordionTrigger>
      Returns <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Free returns within 30 days.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="b" disabled>
    <AccordionTrigger>
      Warranty <AccordionChevron />
    </AccordionTrigger>
    <AccordionContent>
      <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
        Two year warranty on all parts.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const ACCORDION_API: ApiSection[] = [
  {
    component: "Accordion",
    props: [
      {
        name: "defaultValue",
        type: "string[]",
        description: "Initially expanded item values (uncontrolled).",
      },
      {
        name: "value",
        type: "string[]",
        description: "Controlled expanded item values. Use with onValueChange.",
      },
      {
        name: "onValueChange",
        type: "(value: string[]) => void",
        description: "Called when an item is expanded or collapsed.",
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Allow more than one item to stay open at a time.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Ignore user interaction across the whole accordion.",
      },
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"vertical"',
        description: "Controls whether roving focus uses left/right or up/down arrow keys.",
      },
      {
        name: "loopFocus",
        type: "boolean",
        default: "true",
        description: "Loop keyboard focus back to the first item at the end of the list.",
      },
      {
        name: "keepMounted",
        type: "boolean",
        default: "false",
        description: "Keep panel content in the DOM while closed.",
      },
      {
        name: "hiddenUntilFound",
        type: "boolean",
        default: "false",
        description: "Hide closed panels with hidden=\"until-found\" so browser find can expand them.",
      },
    ],
  },
  {
    component: "AccordionItem",
    props: [
      {
        name: "value",
        type: "string",
        description:
          "Unique identifier for the item. If omitted, an ID is generated automatically: set it to preselect or control the item via value / defaultValue.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Lock this item closed.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when this item's panel opens or closes.",
      },
    ],
  },
  {
    component: "AccordionTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default button.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default trigger styles.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable this trigger. Inherits the native button disabled behavior.",
      },
    ],
  },
  {
    component: "AccordionContent",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default panel div.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default panel styles.",
      },
      {
        name: "keepMounted",
        type: "boolean",
        default: "false",
        description: "Keep the panel content in the DOM while closed.",
      },
      {
        name: "hiddenUntilFound",
        type: "boolean",
        default: "false",
        description: "Hide the closed panel with hidden=\"until-found\" so browser find can expand it.",
      },
    ],
  },
];

const ALERT_DIALOG_SOURCE = `"use client";

import * as React from "react";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger
      data-slot="alert-dialog-trigger"
      {...props}
    />
  );
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogBackdrop({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-md fixed inset-0 z-50",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return <AlertDialogBackdrop className={className} {...props} />;
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: Omit<AlertDialogPrimitive.Popup.Props, "className" | "render"> & {
  className?: string;
  render?: AlertDialogPrimitive.Popup.Props["render"];
  size?: "default" | "sm";
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-card ring-foreground/10 gap-4 rounded-2xl p-4 border duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-start gap-1.5 text-left has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "bg-surface -mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-2xl border-t p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "bg-muted mb-2 inline-flex size-10 items-center justify-center rounded-md group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "text-base font-medium group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3",
        className
      )}
      {...props}
    />
  );
}

type AlertDialogButtonProps = Omit<
  AlertDialogPrimitive.Close.Props,
  "className" | "render" | "children"
> & {
  className?: string;
  children?: React.ReactNode;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
};

function AlertDialogAction({
  className,
  variant = "destructive",
  size = "default",
  children,
  ...props
}: AlertDialogButtonProps) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-action"
      {...props}
      render={
        <Button variant={variant} size={size} className={cn(className)}>
          {children}
        </Button>
      }
    />
  );
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  children,
  ...props
}: AlertDialogButtonProps) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      {...props}
      render={
        <Button variant={variant} size={size} className={cn(className)}>
          {children}
        </Button>
      }
    />
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogBackdrop,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};`;

const ALERT_DIALOG_IMPORT = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@noarka/ui";`;

const ALERT_DIALOG_USAGE = `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive">Delete account</Button>} />
  <AlertDialogContent size="sm">
    <AlertDialogHeader>
      <AlertDialogTitle>Delete account?</AlertDialogTitle>
      <AlertDialogDescription>
        Your account and all of its data will be permanently removed.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;

const ALERT_DIALOG_DEFAULT_CODE = `<div className="flex justify-center">
  <AlertDialog>
    <AlertDialogTrigger render={<Button variant="outline">Archive project</Button>} />
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Archive this project?</AlertDialogTitle>
        <AlertDialogDescription>
          Archived projects are hidden from your workspace but can be restored at any time.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="default">Archive</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>`;

const ALERT_DIALOG_SMALL_CODE = `<div className="flex justify-center">
  <AlertDialog>
    <AlertDialogTrigger render={<Button variant="destructive">Remove member</Button>} />
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Remove from team?</AlertDialogTitle>
        <AlertDialogDescription>
          Ada will lose access immediately. You can invite them back later.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Remove</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>`;

const ALERT_DIALOG_SINGLE_ACTION_CODE = `<div className="flex justify-center">
  <AlertDialog>
    <AlertDialogTrigger render={<Button variant="outline">Show session notice</Button>} />
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Session expired</AlertDialogTitle>
        <AlertDialogDescription>
          Please sign in again to continue working.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction variant="default">Sign in</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>`;

const ALERT_DIALOG_API: ApiSection[] = [
  {
    component: "AlertDialog",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the dialog opens or closes.",
      },
      {
        name: "onOpenChangeComplete",
        type: "(open: boolean) => void",
        description: "Called after open or close animations finish.",
      },
    ],
  },
  {
    component: "AlertDialogContent",
    props: [
      {
        name: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description:
          "Width preset. Both cap at max-w-xs on small screens; default grows to max-w-sm on sm screens and up.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default popup.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default content styles.",
      },
    ],
  },
  {
    component: "AlertDialogTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button variant=\"destructive\">Delete</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "AlertDialogFooter",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default footer styles.",
      },
    ],
  },
  {
    component: "AlertDialogAction",
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
        default: '"destructive"',
        description: "Confirm button style.",
      },
      {
        name: "size",
        type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
        default: '"default"',
        description: "Confirm button size.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Button label.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the button styles.",
      },
    ],
  },
  {
    component: "AlertDialogCancel",
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
        default: '"outline"',
        description: "Cancel button style.",
      },
      {
        name: "size",
        type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
        default: '"default"',
        description: "Cancel button size.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Button label.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the button styles.",
      },
    ],
  },
];

const AVATAR_SOURCE = `"use client";

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

export { Avatar, AvatarImage, AvatarFallback };`;

const AVATAR_IMPORT = `import { Avatar, AvatarFallback, AvatarImage } from "@noarka/ui";`;

const AVATAR_USAGE = `<Avatar>
  <AvatarImage src="/placeholder-image.png" alt="Ada Lovelace" />
  <AvatarFallback>AL</AvatarFallback>
</Avatar>`;

const AVATAR_SIZES_CODE = `<div className="flex items-center justify-center gap-3">
  <Avatar className="h-8 w-8">
    <AvatarImage src="/placeholder-image.png" alt="Avatar" />
    <AvatarFallback>NK</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/placeholder-image.png" alt="Avatar" />
    <AvatarFallback>NK</AvatarFallback>
  </Avatar>
  <Avatar className="h-12 w-12">
    <AvatarImage src="/placeholder-image.png" alt="Avatar" />
    <AvatarFallback>NK</AvatarFallback>
  </Avatar>
</div>`;

const AVATAR_SQUARE_CODE = `<div className="flex items-center justify-center gap-3">
  <Avatar className="rounded-xl">
    <AvatarImage src="/placeholder-image.png" alt="Avatar" />
    <AvatarFallback className="rounded-xl">NK</AvatarFallback>
  </Avatar>
  <Avatar className="rounded-xl">
    <AvatarFallback className="rounded-xl">AR</AvatarFallback>
  </Avatar>
</div>`;

const AVATAR_STACKED_CODE = `<div className="flex justify-center -space-x-2">
  <Avatar className="ring-2 ring-card">
    <AvatarImage src="/placeholder-image.png" alt="Avatar" />
    <AvatarFallback>NK</AvatarFallback>
  </Avatar>
  <Avatar className="ring-2 ring-card">
    <AvatarFallback>AR</AvatarFallback>
  </Avatar>
  <Avatar className="ring-2 ring-card">
    <AvatarFallback>JM</AvatarFallback>
  </Avatar>
</div>`;

const AVATAR_API: ApiSection[] = [
  {
    component: "Avatar",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default span.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default avatar styles. Use h-*/w-* to resize.",
      },
    ],
  },
  {
    component: "AvatarImage",
    props: [
      {
        name: "src",
        type: "string",
        description: "Image URL rendered in a native img element.",
      },
      {
        name: "alt",
        type: "string",
        description: "Accessible text for the image.",
      },
      {
        name: "onLoadingStatusChange",
        type: "(status: 'idle' | 'loading' | 'loaded' | 'error') => void",
        description: "Called when the image loading status changes.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default img.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default image styles.",
      },
    ],
  },
  {
    component: "AvatarFallback",
    props: [
      {
        name: "delay",
        type: "number",
        description: "Milliseconds to wait before showing the fallback.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default span.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default fallback styles.",
      },
    ],
  },
];

const BADGE_SOURCE = `"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { badgeVariants } from "./Badge.variants";

export type BadgeProps = Omit<React.ComponentProps<"span">, "children"> &
  VariantProps<typeof badgeVariants> & {
    children?: React.ReactNode;
    /**
     * Replace the rendered \`<span>\` with a custom element (e.g. a link).
     * Badge styling and data attributes are merged onto it.
     * Replaces the old Radix \`asChild\` prop.
     */
    render?: React.ReactElement;
  };

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: BadgeProps) {
  const mergedClassName = cn(badgeVariants({ variant }), className);

  if (render && React.isValidElement(render)) {
    const {
      className: renderClassName,
      ...renderProps
    } = render.props as Record<string, unknown> & { className?: string };
    return React.cloneElement(render, {
      "data-slot": "badge",
      "data-variant": variant ?? undefined,
      ...props,
      ...renderProps,
      className: cn(mergedClassName, renderClassName),
    } as React.Attributes & Record<string, unknown>);
  }

  return (
    <span
      data-slot="badge"
      data-variant={variant ?? undefined}
      className={mergedClassName}
      {...props}
    />
  );
}

export { Badge, badgeVariants };`;

const BADGE_VARIANTS_SOURCE = `import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;`;

const BUTTON_SOURCE = `"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { buttonVariants } from "./Button.variants";

export type ButtonProps = Omit<
  BaseButton.Props,
  "className" | "render"
> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    render?: BaseButton.Props["render"];
  };

/**
 * Base UI assumes the rendered element is a native \`<button>\` unless told
 * otherwise. When \`render\` swaps in a different element (e.g. an anchor or
 * Next.js Link), native button semantics don't apply, so infer that
 * automatically so consumers don't hit the \`nativeButton\` warning.
 * An explicit \`nativeButton\` prop always wins.
 */
function inferNativeButton(
  render: ButtonProps["render"]
): boolean | undefined {
  if (render && typeof render !== "function" && React.isValidElement(render)) {
    return render.type === "button";
  }
  return undefined;
}

function Button({
  className,
  variant = "default",
  size = "default",
  render,
  nativeButton,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      data-slot="button"
      data-variant={variant ?? undefined}
      data-size={size ?? undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      render={render}
      nativeButton={nativeButton ?? inferNativeButton(render) ?? true}
      {...props}
    />
  );
}

export { Button, buttonVariants };`;

const BUTTON_VARIANTS_SOURCE = `import { cva, type VariantProps } from "class-variance-authority";

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

export type ButtonVariants = VariantProps<typeof buttonVariants>;`;

const BADGE_IMPORT = `import { Badge } from "@noarka/ui";`;

const BADGE_USAGE = `<Badge variant="secondary">Beta</Badge>`;

const BADGE_DOT_CODE = `<div className="flex justify-center">
  <Badge variant="outline">
    <span className="size-1.5 rounded-full bg-success" />
    Live
  </Badge>
</div>`;

const BADGE_LINK_CODE = `<div className="flex justify-center">
  <Badge variant="secondary" render={<a href="#">View changelog</a>} />
</div>`;

const BADGE_CUSTOM_CODE = `<div className="flex justify-center">
  <Badge className="border-transparent bg-success/15 text-success">Active</Badge>
</div>`;

const BADGE_API: ApiSection[] = [
  {
    component: "Badge",
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
        default: '"default"',
        description: "Visual style.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Label content. Prefix with an icon or dot span for status badges.",
      },
      {
        name: "render",
        type: "ReactElement",
        description:
          "Replace the rendered span with a custom element, e.g. render={<a href=\"#\">Changelog</a>}. Badge styling and data attributes are merged onto it. Replaces the old Radix asChild prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the variant styles.",
      },
    ],
  },
];

const BUTTON_IMPORT = `import { Button } from "@noarka/ui";`;

const BUTTON_USAGE = `<Button>Save changes</Button>`;

const BUTTON_VARIANTS_CODE = `<div className="flex flex-wrap items-center justify-center gap-2">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</div>`;

const BUTTON_SIZES_CODE = `<div className="flex flex-wrap items-center justify-center gap-2">
  <Button size="xs">Extra small</Button>
  <Button size="sm">Small</Button>
  <Button size="lg">Large</Button>
  <Button size="icon" aria-label="Example icon button">★</Button>
</div>`;

const BUTTON_LINK_CODE = `<div className="flex justify-center">
  <Button render={<a href="#">Read the docs</a>} />
</div>`;

const BUTTON_ICON_CODE = `<div className="flex items-center justify-center gap-2">
  <Button size="icon" aria-label="Download">
    <AltArrowDownLinearIcon size={16} />
  </Button>
  <Button size="icon-sm" variant="secondary" aria-label="Download small">
    <AltArrowDownLinearIcon size={14} />
  </Button>
</div>`;

const BUTTON_DISABLED_CODE = `<div className="flex items-center justify-center gap-2">
  <Button disabled>Save changes</Button>
  <Button variant="secondary" disabled>
    Cancel
  </Button>
</div>`;

const BUTTON_API: ApiSection[] = [
  {
    component: "Button",
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
        default: '"default"',
        description: "Visual style.",
      },
      {
        name: "size",
        type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
        default: '"default"',
        description: "Size. Icon sizes render square hit areas for icon-only buttons.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render an anchor or Next.js Link with button styles.",
      },
      {
        name: "nativeButton",
        type: "boolean",
        description:
          "Set explicitly to override the automatic inference. Inferred from the render element unless told otherwise.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable interaction. Renders at half opacity with no pointer events.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the variant styles.",
      },
    ],
  },
];

const CARD_SOURCE = `import * as React from "react";
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
};`;

const CARD_VARIANTS_SOURCE = `import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva("group/card flex flex-col", {
  variants: {
    variant: {
      default:
        "border bg-card/80 text-card-foreground overflow-hidden rounded-2xl text-sm has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      border: "rounded-3xl border border-border/60 bg-card/30 p-1",
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

// Inner box for the \`border\` variant (the second border).
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

export type CardVariants = VariantProps<typeof cardVariants>;`;

const CARD_IMPORT = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@noarka/ui";`;

const CARD_USAGE = `<Card>
  <CardHeader>
    <CardTitle>Project overview</CardTitle>
    <CardDescription>Updated 2 hours ago.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">12 tasks completed this week.</p>
  </CardContent>
</Card>`;

const CARD_SINGLE_CODE = `<Card>
  <CardHeader>
    <CardTitle>Default card</CardTitle>
    <CardDescription>Single border.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Card body.</p>
  </CardContent>
</Card>`;

const CARD_DOUBLE_CODE = `<Card variant="border">
  <p className="text-sm font-medium">Border card</p>
  <p className="text-sm text-muted-foreground">Double border effect.</p>
  <p className="font-serif text-3xl font-medium">$12,408</p>
</Card>`;

const CARD_FOOTER_IMPORT = `import { Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@noarka/ui";`;

const CARD_FOOTER_CODE = `<Card>
  <CardHeader>
    <CardTitle>Invite a teammate</CardTitle>
    <CardDescription>They get access immediately.</CardDescription>
    <CardAction>
      <Button size="sm" variant="outline">Copy link</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Pending invites appear here.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Send invite</Button>
  </CardFooter>
</Card>`;

const CARD_API: ApiSection[] = [
  {
    component: "Card",
    props: [
      {
        name: "variant",
        type: '"default" | "border"',
        default: '"default"',
        description: "Default is a single border. Border wraps content in a second inner frame.",
      },
      {
        name: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description: "Density. sm tightens gaps and padding across header, content and footer.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Card parts or free-form content. Border variant accepts anything.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the variant styles.",
      },
    ],
  },
  {
    component: "CardHeader",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes. Pairs with CardTitle and CardDescription, plus optional CardAction.",
      },
    ],
  },
  {
    component: "CardTitle",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the title styles.",
      },
    ],
  },
  {
    component: "CardDescription",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the muted description styles.",
      },
    ],
  },
  {
    component: "CardAction",
    props: [
      {
        name: "className",
        type: "string",
        description: "Slot in the header corner, e.g. for a button. Header switches to two columns when present.",
      },
    ],
  },
  {
    component: "CardContent",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the content padding.",
      },
    ],
  },
  {
    component: "CardFooter",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes. Always renders the muted band with a top border.",
      },
    ],
  },
];

const CHECKBOX_SOURCE = `"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { cn } from "../../utils/cn";

export type CheckboxProps = Omit<
  CheckboxPrimitive.Root.Props,
  "className" | "render"
> & {
  className?: string;
  render?: CheckboxPrimitive.Root.Props["render"];
};

function Checkbox({ className, render, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer flex size-5 shrink-0 cursor-default items-center justify-center rounded-full border border-input shadow-xs outline-none ring-ring transition-shadow focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary",
        className
      )}
      render={render}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };`;

const CHECKBOX_IMPORT = `import { Checkbox } from "@noarka/ui";`;

const CHECKBOX_USAGE = `<label className="flex cursor-pointer items-center gap-2 text-sm">
  <Checkbox defaultChecked /> Email notifications
</label>`;

const CHECKBOX_FORM_CODE = `<div className="flex justify-center">
  <form className="w-full max-w-sm space-y-3" action="#">
    <label className="flex cursor-pointer items-start gap-2 text-sm">
      <Checkbox name="terms" value="accepted" required className="mt-0.5" />
      <span>
        Accept the terms
        <span className="block text-xs text-muted-foreground">Required to create your account.</span>
      </span>
    </label>
    <Button type="submit" className="w-full">
      Create account
    </Button>
  </form>
</div>`;

const CHECKBOX_DISABLED_CODE = `<div className="flex flex-wrap items-center justify-center gap-4">
  <label className="flex cursor-not-allowed items-center gap-2 text-sm opacity-70">
    <Checkbox defaultChecked disabled /> Checked
  </label>
  <label className="flex cursor-not-allowed items-center gap-2 text-sm opacity-70">
    <Checkbox disabled /> Unchecked
  </label>
</div>`;

const CHECKBOX_DESC_CODE = `<div className="flex justify-center">
  <label className="flex cursor-pointer items-start gap-2 text-sm">
    <Checkbox defaultChecked className="mt-0.5" />
    <span>
      Email notifications
      <span className="block text-xs text-muted-foreground">Get notified about activity.</span>
    </span>
  </label>
</div>`;

const CHECKBOX_API: ApiSection[] = [
  {
    component: "Checkbox",
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state. Use with onCheckedChange.",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Initially checked when uncontrolled.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Called when the checkbox is ticked or unticked.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Ignore user interaction. Renders at half opacity.",
      },
      {
        name: "indeterminate",
        type: "boolean",
        default: "false",
        description: "Mixed state: neither ticked nor unticked. Pair with checked={false}.",
      },
      {
        name: "readOnly",
        type: "boolean",
        default: "false",
        description: "Show state without allowing tick or untick.",
      },
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Require the checkbox to be ticked before form submit.",
      },
      {
        name: "name",
        type: "string",
        description: "Identifies the field when the form is submitted.",
      },
      {
        name: "value",
        type: "string",
        description: "Value submitted with the form when ticked.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default checkbox styles.",
      },
    ],
  },
];

const DIALOG_SOURCE = `"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { CloseIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogBackdrop({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-[open]:animate-in data-[open]:fade-in-0 data-[closed]:animate-out data-[closed]:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

// Back-compat alias: previous Radix-based API exposed DialogOverlay.
function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return <DialogBackdrop className={className} {...props} />;
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-2xl bg-card p-4 text-sm border duration-100 sm:max-w-sm data-[open]:animate-in data-[open]:fade-in-0 data-[open]:zoom-in-95 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-2 right-2"
                size="icon-sm"
              >
                <CloseIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-2xl border-t bg-surface p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          render={<Button variant="outline">Close</Button>}
        />
      )}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-base leading-none font-medium", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogBackdrop,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};`;

const DIALOG_IMPORT = `import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from "@noarka/ui";`;

const DIALOG_USAGE = `<Dialog>
  <DialogTrigger render={<Button>Edit profile</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Changes are saved automatically.</DialogDescription>
    </DialogHeader>
    <div className="space-y-1.5">
      <Label htmlFor="demo-name">Name</Label>
      <Input id="demo-name" placeholder="Ada Lovelace" />
    </div>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

const DIALOG_PREVIEW_CODE = `<div className="flex justify-center">
  <Dialog>
    <DialogTrigger render={<Button variant="secondary">Open dialog</Button>} />
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Invite a teammate</DialogTitle>
        <DialogDescription>They get access immediately.</DialogDescription>
      </DialogHeader>
      <div className="space-y-1.5">
        <Label htmlFor="demo-invite">Email</Label>
        <Input id="demo-invite" placeholder="teammate@company.com" />
      </div>
      <DialogFooter>
        <Button>Send invite</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>`;

const DIALOG_FOOTER_CLOSE_CODE = `<div className="flex justify-center">
  <Dialog>
    <DialogTrigger render={<Button variant="secondary">Open dialog</Button>} />
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Invite a teammate</DialogTitle>
        <DialogDescription>They get access immediately.</DialogDescription>
      </DialogHeader>
      <div className="space-y-1.5">
        <Label htmlFor="demo-invite-footer">Email</Label>
        <Input id="demo-invite-footer" placeholder="teammate@company.com" />
      </div>
      <DialogFooter showCloseButton>
        <Button>Send invite</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>`;

const DIALOG_SCROLL_CODE = `<div className="flex justify-center">
  <Dialog>
    <DialogTrigger render={<Button variant="outline">Read terms</Button>} />
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Terms of service</DialogTitle>
        <DialogDescription>Last updated June 2026.</DialogDescription>
      </DialogHeader>
      <div className="max-h-64 space-y-3 overflow-y-auto pr-1 text-sm text-muted-foreground">
        <p>Welcome to Noarka. By using our services you agree to these terms.</p>
        <p>Your workspace data remains yours. We never sell personal information to third parties.</p>
        <p>Paid plans renew automatically each billing period. Cancel anytime from settings.</p>
        <p>Accounts inactive for 24 months may be archived. Export your data before then.</p>
        <p>Abuse, spam, or unlawful content may result in suspension without notice.</p>
        <p>Questions? Contact support and we will respond within two business days.</p>
      </div>
      <DialogFooter>
        <Button>Accept</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>`;

const DIALOG_NESTED_CODE = `"use client";

import * as React from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@noarka/ui";

export function NestedDialogDemo() {
  const [outerOpen, setOuterOpen] = React.useState(false);
  const [innerOpen, setInnerOpen] = React.useState(false);

  return (
    <div className="flex justify-center">
      <Dialog open={outerOpen} onOpenChange={setOuterOpen}>
        <DialogTrigger render={<Button>Invite a teammate</Button>} />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite a teammate</DialogTitle>
            <DialogDescription>They get access immediately.</DialogDescription>
          </DialogHeader>
          <Button
            variant="outline"
            onClick={() => {
              setOuterOpen(false);
              setInnerOpen(true);
            }}
          >
            Advanced settings
          </Button>
          <DialogFooter>
            <Button>Send invite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={innerOpen}
        onOpenChange={(open) => {
          setInnerOpen(open);
          if (!open) setOuterOpen(true);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Advanced settings</DialogTitle>
            <DialogDescription>These apply to every invite.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Done</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}`;

const DIALOG_API: ApiSection[] = [
  {
    component: "Dialog",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the dialog opens or closes.",
      },
      {
        name: "onOpenChangeComplete",
        type: "(open: boolean) => void",
        description: "Called after open or close animations finish.",
      },
      {
        name: "modal",
        type: "boolean | 'trap-focus'",
        default: "true",
        description: "Limit interaction to the dialog. Trap-focus keeps outside interaction enabled.",
      },
      {
        name: "disablePointerDismissal",
        type: "boolean",
        default: "false",
        description: "Keep the dialog open on outside clicks.",
      },
    ],
  },
  {
    component: "DialogContent",
    props: [
      {
        name: "showCloseButton",
        type: "boolean",
        default: "true",
        description: "Show the corner X close button.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default popup.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default content styles.",
      },
    ],
  },
  {
    component: "DialogTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button>Open</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "DialogClose",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom close control. Must live inside the dialog.",
      },
    ],
  },
  {
    component: "DialogFooter",
    props: [
      {
        name: "showCloseButton",
        type: "boolean",
        default: "false",
        description: "Render an outline Close button beside your actions.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes. Always renders the muted band with a top border.",
      },
    ],
  },
  {
    component: "DialogHeader",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes. Pairs with DialogTitle and DialogDescription.",
      },
    ],
  },
  {
    component: "DialogTitle",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the title styles.",
      },
    ],
  },
  {
    component: "DialogDescription",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the muted description styles.",
      },
    ],
  },
];

const DROPDOWN_MENU_SOURCE = `"use client";

import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "../../utils/cn";
import { AltArrowRightIcon } from "@solar-icons/react/linear";

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
  );
}

export type DropdownMenuContentProps = Omit<
  MenuPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.Popup.Props["render"];
  side?: MenuPrimitive.Positioner.Props["side"];
  sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
  align?: MenuPrimitive.Positioner.Props["align"];
  alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"];
};

function DropdownMenuContent({
  className,
  align = "start",
  side,
  sideOffset = 4,
  alignOffset,
  ...props
}: DropdownMenuContentProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border bg-surface text-popover-foreground min-w-33 rounded-xl p-1 text-muted-foreground font-medium border border-border/60 duration-200 z-50 max-h-(--available-height) w-[calc(var(--anchor-width)_+_1px)] origin-(--transform-origin) overflow-x-hidden overflow-y-auto data-closed:overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

export type DropdownMenuItemProps = Omit<
  MenuPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.Item.Props["render"];
  inset?: boolean;
  variant?: "default" | "destructive";
  /**
   * Back-compat alias for \`onClick\` (previous Radix-based API exposed \`onSelect\`).
   * The menu still closes on select unless \`closeOnClick={false}\`.
   */
  onSelect?: MenuPrimitive.Item.Props["onClick"];
};

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  onSelect,
  onClick,
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-lg px-2 py-1 text-xs leading-snug [&_svg:not([class*='size-'])]:size-3.5 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      onClick={onSelect ?? onClick}
      {...props}
    />
  );
}

export type DropdownMenuCheckboxItemProps = Omit<
  MenuPrimitive.CheckboxItem.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.CheckboxItem.Props["render"];
};

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground min-h-7 gap-2 rounded-md py-1.5 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-3.5 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
  );
}

export type DropdownMenuRadioItemProps = Omit<
  MenuPrimitive.RadioItem.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.RadioItem.Props["render"];
};

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground min-h-7 gap-2 rounded-md py-1.5 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-3.5 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
}) {
  // GroupLabel requires a Group ancestor, so the label brings its own.
  // Nesting inside an explicit DropdownMenuGroup is harmless: the inner
  // group simply takes over label association.
  return (
    <MenuPrimitive.Group data-slot="dropdown-menu-group">
      <MenuPrimitive.GroupLabel
        data-slot="dropdown-menu-label"
        data-inset={inset}
        className={cn(
          "text-muted-foreground px-2 py-1.5 text-xs data-[inset]:pl-8",
          className
        )}
        {...props}
      />
    </MenuPrimitive.Group>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-slot="dropdown-menu-separator"
      className={cn("bg-border/50 -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-[0.625rem] tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: Omit<MenuPrimitive.SubmenuTrigger.Props, "className"> & {
  className?: string;
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-md px-2 py-1 text-xs [&_svg:not([class*='size-'])]:size-3.5 flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <AltArrowRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: Omit<MenuPrimitive.Popup.Props, "className" | "render"> & {
  className?: string;
  render?: MenuPrimitive.Popup.Props["render"];
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner className="isolate z-50">
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-sub-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border bg-surface text-popover-foreground min-w-32 rounded-xl p-1 shadow-md duration-100 z-50 origin-(--transform-origin) overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};`;

const MENU_IMPORT = `import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@noarka/ui";`;

const MENU_USAGE = `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline">Options</Button>} />
  <DropdownMenuContent align="start">
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

const MENU_PREVIEW_CODE = `<div className="flex justify-center">
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
    <DropdownMenuContent align="start" className="w-48">
      <DropdownMenuLabel>ada@example.com</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>`;

const MENU_CHECKBOX_CODE = `import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@noarka/ui";

<div className="flex justify-center">
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline">View options</Button>} />
    <DropdownMenuContent align="start" className="w-48">
      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem defaultChecked>Show toolbar</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Show sidebar</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>`;

const MENU_RADIO_CODE = `import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@noarka/ui";

<div className="flex justify-center">
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline">Sort by</Button>} />
    <DropdownMenuContent align="start" className="w-48">
      <DropdownMenuRadioGroup defaultValue="newest">
        <DropdownMenuRadioItem value="newest">Newest first</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="oldest">Oldest first</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="name">By name</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</div>`;

const MENU_SUB_CODE = `import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@noarka/ui";

<div className="flex justify-center">
  <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
    <DropdownMenuContent align="start" className="w-48">
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Email</DropdownMenuItem>
          <DropdownMenuItem>Copy link</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>`;

const MENU_API: ApiSection[] = [
  {
    component: "DropdownMenu",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the menu opens or closes.",
      },
      {
        name: "onOpenChangeComplete",
        type: "(open: boolean) => void",
        description: "Called after open or close animations finish.",
      },
      {
        name: "modal",
        type: "boolean",
        default: "true",
        description: "Lock page scroll and outside interaction while open.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Ignore user interaction.",
      },
    ],
  },
  {
    component: "DropdownMenuContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        description: "Preferred placement side.",
      },
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        description: "Gap between trigger and content.",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        default: '"start"',
        description: "Alignment against the trigger edge.",
      },
      {
        name: "alignOffset",
        type: "number",
        description: "Offset along the alignment axis.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default popup.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default content styles.",
      },
    ],
  },
  {
    component: "DropdownMenuTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button>Open menu</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "DropdownMenuItem",
    props: [
      {
        name: "variant",
        type: '"default" | "destructive"',
        default: '"default"',
        description: "Destructive tints the item red.",
      },
      {
        name: "inset",
        type: "boolean",
        description: "Offset content to align with labeled groups.",
      },
      {
        name: "onSelect",
        type: "(event) => void",
        description: "Back-compat alias for onClick. The menu still closes on select unless closeOnClick is false.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "DropdownMenuCheckboxItem",
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state. Use with onCheckedChange.",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        description: "Initially checked when uncontrolled.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Called when the checked state changes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "DropdownMenuRadioGroup",
    props: [
      {
        name: "value",
        type: "string",
        description: "Controlled selected value. Use with onValueChange.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initially selected value when uncontrolled.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Called when the selection changes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the whole group.",
      },
    ],
  },
  {
    component: "DropdownMenuRadioItem",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        description: "Value set on the group when selected.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "DropdownMenuLabel",
    props: [
      {
        name: "inset",
        type: "boolean",
        description:
          "Offset content to align with inset items. The label renders its own group, so it works directly inside content.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default label styles.",
      },
    ],
  },
  {
    component: "DropdownMenuSeparator",
    props: [
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        description: "Divider direction.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default separator styles.",
      },
    ],
  },
  {
    component: "DropdownMenuShortcut",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the shortcut hint styles.",
      },
    ],
  },
  {
    component: "DropdownMenuSubTrigger",
    props: [
      {
        name: "inset",
        type: "boolean",
        description: "Offset content to align with inset items.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the submenu trigger.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default trigger styles.",
      },
    ],
  },
];

const INPUT_SOURCE = `"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "../../utils/cn";

export type InputProps = Omit<
  InputPrimitive.Props & React.RefAttributes<HTMLInputElement>,
  "size"
> & {
  size?: "sm" | "default" | "lg" | number;
  unstyled?: boolean;
};

function Input({
  className,
  size = "default",
  unstyled = false,
  ...props
}: InputProps) {
  return (
    <span
      className={
        cn(
          !unstyled &&
            "relative text-foreground/70 inline-flex w-full rounded-lg border bg-clip-padding text-base ring-ring/24 before:absolute transition-shadow cursor-default not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[2px] sm:text-sm dark:bg-input dark:hover:brightness-110 transition-all duration-200 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)]",
          className
        ) || undefined
      }
      data-size={size}
      data-slot="input-control"
    >
      <InputPrimitive
        className={cn(
          "h-9 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] leading-9 outline-none placeholder:text-muted-foreground/72 sm:h-8 sm:leading-8",
          size === "sm" &&
            "h-8 px-[calc(--spacing(2.5)-1px)] leading-8 sm:h-7 sm:leading-7",
          size === "lg" && "h-10 leading-10 sm:h-9 sm:leading-9",
          props.type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          props.type === "file" &&
            "text-muted-foreground file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm"
        )}
        data-slot="input"
        size={typeof size === "number" ? size : undefined}
        {...props}
      />
    </span>
  );
}

export { Input };`;

const INPUT_IMPORT = `import { Input } from "@noarka/ui";`;

const INPUT_USAGE = `<Input type="email" placeholder="you@example.com" />`;

const INPUT_SIZES_CODE = `<div className="space-y-3">
  <Input placeholder="Default input" />
  <Input size="sm" placeholder="Small input" />
  <Input size="lg" placeholder="Large input" />
</div>`;

const INPUT_SEARCH_CODE = `<Input type="search" placeholder="Search..." />`;

const INPUT_FILE_CODE = `<Input type="file" />`;

const INPUT_STATES_CODE = `<div className="space-y-3">
  <Input placeholder="Disabled" disabled />
  <Input placeholder="Invalid email" aria-invalid="true" defaultValue="not-an-email" />
</div>`;

const INPUT_API: ApiSection[] = [
  {
    component: "Input",
    props: [
      {
        name: "size",
        type: '"sm" | "default" | "lg" | number',
        default: '"default"',
        description: "Height preset, or a number passed to the native width attribute.",
      },
      {
        name: "unstyled",
        type: "boolean",
        default: "false",
        description: "Render without the container frame styles.",
      },
      {
        name: "type",
        type: "string",
        description: 'Native input type. "search" and "file" get dedicated styling.',
      },
      {
        name: "placeholder",
        type: "string",
        description: "Hint text shown while empty.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable interaction. Renders dimmed.",
      },
      {
        name: "readOnly",
        type: "boolean",
        default: "false",
        description: "Show value without allowing edits.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initial value when uncontrolled.",
      },
      {
        name: "value",
        type: "string",
        description: "Controlled value. Use with onChange.",
      },
      {
        name: "onChange",
        type: "(event) => void",
        description: "Called when the value changes.",
      },
    ],
  },
];

const LABEL_SOURCE = `"use client";

import * as React from "react";

import { cn } from "../../utils/cn";

export type LabelProps = React.ComponentProps<"label">;

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

export { Label };`;

const LABEL_IMPORT = `import { Input, Label } from "@noarka/ui";`;

const LABEL_USAGE = `<div className="max-w-sm space-y-1.5">
  <Label htmlFor="demo-username">Username</Label>
  <Input id="demo-username" placeholder="johndoe" />
</div>`;

const LABEL_PREVIEW_CODE = `<div className="mx-auto max-w-sm space-y-1.5">
  <Label htmlFor="demo-label">Email</Label>
  <Input id="demo-label" placeholder="you@example.com" />
</div>`;

const LABEL_REQUIRED_CODE = `<div className="mx-auto max-w-sm space-y-1.5">
  <Label htmlFor="demo-name">
    Name <span className="text-destructive">*</span>
  </Label>
  <Input id="demo-name" placeholder="Ada Lovelace" required />
</div>`;

const LABEL_DISABLED_CODE = `<div className="group mx-auto max-w-sm space-y-1.5" data-disabled={true}>
  <Label htmlFor="demo-disabled">Email</Label>
  <Input id="demo-disabled" placeholder="you@example.com" disabled />
</div>`;

const LABEL_HELPER_CODE = `<div className="mx-auto max-w-sm space-y-1.5">
  <Label htmlFor="demo-bio">Bio</Label>
  <Input id="demo-bio" placeholder="Tell us about yourself" />
  <p className="text-xs text-muted-foreground">Visible on your public profile.</p>
</div>`;

const LABEL_API: ApiSection[] = [
  {
    component: "Label",
    props: [
      {
        name: "htmlFor",
        type: "string",
        description: "Id of the control it labels. Clicking the label focuses the control.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Label text. Mark required fields with an asterisk span.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default label styles.",
      },
    ],
  },
];

const SELECT_SOURCE = `"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { AltArrowDownIcon, AltArrowUpIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";

type DerivedSelectItem = { value: unknown; label: React.ReactNode };

function textLabel(children: React.ReactNode): string | undefined {
  let text = "";
  let plain = true;
  React.Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      text += String(child);
    } else if (child !== null && child !== undefined && typeof child !== "boolean") {
      plain = false;
    }
  });
  return plain && text !== "" ? text : undefined;
}

function collectSelectItems(children: React.ReactNode): DerivedSelectItem[] {
  const items: DerivedSelectItem[] = [];
  const seen = new Set<unknown>();
  const walk = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      const childProps = child.props as {
        value?: unknown;
        children?: React.ReactNode;
      };
      // Match by shape (value prop + plain text label) instead of element
      // type: element types don't survive RSC serialization as raw functions,
      // so reference equality can't be relied on here.
      const label = textLabel(childProps.children);
      if (childProps.value !== undefined && label !== undefined) {
        if (!seen.has(childProps.value)) {
          seen.add(childProps.value);
          items.push({ value: childProps.value, label });
        }
        return;
      }
      walk(childProps.children);
    });
  };
  walk(children);
  return items;
}

function Select<Value>({ items, children, ...props }: SelectPrimitive.Root.Props<Value>) {
  const derivedItems = React.useMemo(() => {
    if (items != null) return items;
    const collected = collectSelectItems(children);
    return collected.length > 0 ? collected : undefined;
  }, [items, children]);
  return (
    <SelectPrimitive.Root data-slot="select" items={derivedItems} {...props}>
      {children}
    </SelectPrimitive.Root>
  );
}

function SelectGroup({
  className,
  ...props
}: Omit<SelectPrimitive.Group.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1", className)}
      {...props}
    />
  );
}

function SelectValue({
  className,
  ...props
}: Omit<SelectPrimitive.Value.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left capitalize", className)}
      {...props}
    />
  );
}

export type SelectTriggerProps = Omit<
  SelectPrimitive.Trigger.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SelectPrimitive.Trigger.Props["render"];
  size?: "sm" | "default";
};

function SelectTrigger({
  className,
  size = "default",
  children,
  render,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center border justify-between gap-2 rounded-lg bg-surface px-3 text-[13px] whitespace-nowrap transition-[color,background-color,border-color,outline-color,box-shadow,filter] duration-200 select-none hover:bg-secondary dark:hover:brightness-110 focus-visible:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50 disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      render={render}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <AltArrowDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  );
}

export type SelectContentProps = Omit<
  SelectPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SelectPrimitive.Popup.Props["render"];
  side?: SelectPrimitive.Positioner.Props["side"];
  sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"];
  align?: SelectPrimitive.Positioner.Props["align"];
  alignOffset?: SelectPrimitive.Positioner.Props["alignOffset"];
  alignItemWithTrigger?: SelectPrimitive.Positioner.Props["alignItemWithTrigger"];
};

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  render,
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            "relative isolate z-50 max-h-(--available-height) w-[calc(var(--anchor-width)_+_1px)] origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border bg-surface p-1 text-popover-foreground duration-200 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          render={render}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: Omit<SelectPrimitive.GroupLabel.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export type SelectItemProps = Omit<
  SelectPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: SelectPrimitive.Item.Props["render"];
};

function SelectItem({ className, children, render, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-foreground/80 min-h-[30px] outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      render={render}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none size-3.5"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
        }
      />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: Omit<SelectPrimitive.Separator.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: Omit<SelectPrimitive.ScrollUpArrow.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-secondary py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <AltArrowUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: Omit<SelectPrimitive.ScrollDownArrow.Props, "className"> & {
  className?: string;
}) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-secondary py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <AltArrowDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};`;

const SELECT_IMPORT = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@noarka/ui";`;

const SELECT_USAGE = `<div className="max-w-xs">
  <Select defaultValue="system">
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="system">System</SelectItem>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
    </SelectContent>
  </Select>
</div>`;

const SELECT_PREVIEW_CODE = `<div className="mx-auto max-w-xs">
  <Select defaultValue="pro">
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="free">Free</SelectItem>
      <SelectItem value="pro">Pro</SelectItem>
      <SelectItem value="team">Team</SelectItem>
    </SelectContent>
  </Select>
</div>`;

const SELECT_LABEL_CODE = `import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@noarka/ui";

<div className="mx-auto max-w-xs space-y-1.5">
  <Label htmlFor="demo-plan">Plan</Label>
  <Select defaultValue="pro">
    <SelectTrigger id="demo-plan">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="free">Free</SelectItem>
      <SelectItem value="pro">Pro</SelectItem>
      <SelectItem value="team">Team</SelectItem>
    </SelectContent>
  </Select>
</div>`;

const SELECT_GROUPED_CODE = `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@noarka/ui";

<div className="mx-auto max-w-xs">
  <Select defaultValue="apple">
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="lettuce" disabled>Lettuce</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>`;

const SELECT_DISABLED_CODE = `<div className="mx-auto max-w-xs">
  <Select disabled>
    <SelectTrigger>
      <SelectValue placeholder="Unavailable" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="free">Free</SelectItem>
    </SelectContent>
  </Select>
</div>`;

const SELECT_API: ApiSection[] = [
  {
    component: "Select",
    props: [
      {
        name: "value",
        type: "string",
        description: "Controlled selected value. Use with onValueChange.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initially selected value when uncontrolled.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Called when the selection changes.",
      },
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger and popup.",
      },
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Require a selection before form submit.",
      },
      {
        name: "name",
        type: "string",
        description: "Identifies the field when the form is submitted.",
      },
    ],
  },
  {
    component: "SelectTrigger",
    props: [
      {
        name: "size",
        type: '"sm" | "default"',
        default: '"default"',
        description: "Density. Both sizes currently share the h-8 height.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default trigger styles.",
      },
    ],
  },
  {
    component: "SelectValue",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Placeholder rendered when nothing is selected.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default value styles.",
      },
    ],
  },
  {
    component: "SelectContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        default: '"bottom"',
        description: "Preferred placement side.",
      },
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        description: "Gap between trigger and popup.",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        default: '"center"',
        description: "Alignment against the trigger edge.",
      },
      {
        name: "alignOffset",
        type: "number",
        default: "0",
        description: "Offset along the alignment axis.",
      },
      {
        name: "alignItemWithTrigger",
        type: "boolean",
        default: "true",
        description: "Line up the selected item with the trigger.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default popup.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default popup styles.",
      },
    ],
  },
  {
    component: "SelectItem",
    props: [
      {
        name: "value",
        type: "string",
        description: "Value set on the group when selected.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "SelectGroup",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default group styles.",
      },
    ],
  },
  {
    component: "SelectLabel",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default group label styles.",
      },
    ],
  },
  {
    component: "SelectSeparator",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default separator styles.",
      },
    ],
  },
];

const SEPARATOR_SOURCE = `"use client";

import * as React from "react";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "../../utils/cn";

export type SeparatorProps = React.ComponentProps<
  typeof SeparatorPrimitive
>;

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      )}
      {...props}
    />
  );
}

export { Separator };`;

const SEPARATOR_IMPORT = `import { Separator } from "@noarka/ui";`;

const SEPARATOR_USAGE = `<div className="space-y-2 text-sm">
  <p>Drafts</p>
  <Separator />
  <p>Published</p>
</div>`;

const SEPARATOR_PREVIEW_CODE = `<div className="mx-auto max-w-sm space-y-2 text-sm">
  <p>Above</p>
  <Separator />
  <p>Below</p>
</div>`;

const SEPARATOR_VERTICAL_CODE = `<div className="flex h-5 items-center justify-center gap-2 text-sm">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Blog</span>
</div>`;

const SEPARATOR_LIST_CODE = `<div className="mx-auto max-w-sm space-y-1 text-sm">
  <p className="px-1">Profile</p>
  <Separator />
  <p className="px-1">Billing</p>
  <Separator />
  <p className="px-1">Sign out</p>
</div>`;

const SEPARATOR_CUSTOM_CODE = `<div className="mx-auto max-w-sm space-y-2 text-sm">
  <p>Above</p>
  <Separator className="bg-destructive/50" />
  <p>Below</p>
</div>`;

const SEPARATOR_API: ApiSection[] = [
  {
    component: "Separator",
    props: [
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: "Divider direction. Vertical dividers stretch to the row height.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default divider styles.",
      },
    ],
  },
];

const SHEET_SOURCE = `"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { CloseIcon } from "@solar-icons/react/linear";

import { cn } from "../../utils/cn";
import { Button } from "../Button/Button";

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-md fixed inset-0 z-50",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: Omit<SheetPrimitive.Popup.Props, "className" | "render"> & {
  className?: string;
  render?: SheetPrimitive.Popup.Props["render"];
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "bg-surface data-open:animate-in data-closed:animate-out data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=top]:data-closed:slide-out-to-top-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:fade-out-0 data-open:fade-in-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=bottom]:data-open:slide-in-from-bottom-10 fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=right]:rounded-l-3xl data-[side=left]:rounded-r-3xl data-[side=top]:rounded-b-3xl data-[side=bottom]:rounded-t-3xl data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3"
                size="icon-sm"
              >
                <CloseIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("gap-0.5 p-4 flex flex-col", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("gap-2 p-4 mt-auto flex flex-col", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground text-base font-medium", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};`;

const SHEET_IMPORT = `import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Switch } from "@noarka/ui";`;

const SHEET_USAGE = `<Sheet>
  <SheetTrigger render={<Button>Open menu</Button>} />
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>Navigate the workspace.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`;

const SHEET_PREVIEW_CODE = `<div className="flex justify-center">
  <Sheet>
    <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Settings</SheetTitle>
        <SheetDescription>Slides in from the right.</SheetDescription>
      </SheetHeader>
      <div className="px-4">
        <label className="flex items-center justify-between gap-3 text-sm">
          Compact mode <Switch />
        </label>
      </div>
    </SheetContent>
  </Sheet>
</div>`;

const SHEET_LEFT_CODE = `<div className="flex justify-center">
  <Sheet>
    <SheetTrigger render={<Button variant="outline">Open menu</Button>} />
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Navigate the workspace.</SheetDescription>
      </SheetHeader>
      <div className="px-4">
        <p className="text-sm text-muted-foreground">Dashboard</p>
        <p className="text-sm text-muted-foreground">Projects</p>
        <p className="text-sm text-muted-foreground">Settings</p>
      </div>
    </SheetContent>
  </Sheet>
</div>`;

const SHEET_FOOTER_IMPORT = `import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@noarka/ui";`;

const SHEET_FOOTER_CODE = `<div className="flex justify-center">
  <Sheet>
    <SheetTrigger render={<Button>Edit profile</Button>} />
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>Changes are saved when you confirm.</SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <Button>Save changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</div>`;

const SHEET_NO_CLOSE_CODE = `<div className="flex justify-center">
  <Sheet>
    <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
    <SheetContent side="right" showCloseButton={false}>
      <SheetHeader>
        <SheetTitle>Read only</SheetTitle>
        <SheetDescription>Dismiss with escape or a click outside.</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>`;

const SHEET_API: ApiSection[] = [
  {
    component: "Sheet",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the sheet opens or closes.",
      },
      {
        name: "onOpenChangeComplete",
        type: "(open: boolean) => void",
        description: "Called after open or close animations finish.",
      },
      {
        name: "modal",
        type: "boolean | 'trap-focus'",
        default: "true",
        description: "Limit interaction to the sheet while open.",
      },
      {
        name: "disablePointerDismissal",
        type: "boolean",
        default: "false",
        description: "Keep the sheet open on outside clicks.",
      },
    ],
  },
  {
    component: "SheetContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        default: '"right"',
        description: "Edge the panel slides in from.",
      },
      {
        name: "showCloseButton",
        type: "boolean",
        default: "true",
        description: "Show the corner X close button.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default panel.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default panel styles.",
      },
    ],
  },
  {
    component: "SheetTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button>Open sheet</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "SheetClose",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom close control. Must live inside the sheet.",
      },
    ],
  },
  {
    component: "SheetHeader",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes. Pairs with SheetTitle and SheetDescription.",
      },
    ],
  },
  {
    component: "SheetTitle",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the title styles.",
      },
    ],
  },
  {
    component: "SheetDescription",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the muted description styles.",
      },
    ],
  },
  {
    component: "SheetFooter",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes. Pinned to the panel bottom via mt-auto.",
      },
    ],
  },
];

const SWITCH_SOURCE = `"use client";

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

export { Switch };`;

const SWITCH_IMPORT = `import { Switch } from "@noarka/ui";`;

const SWITCH_USAGE = `<label className="flex cursor-pointer items-center gap-2 text-sm">
  <Switch defaultChecked /> Airplane mode
</label>`;

const SWITCH_PREVIEW_CODE = `<div className="flex justify-center">
  <label className="flex cursor-pointer items-center gap-2 text-sm">
    <Switch defaultChecked /> Enable notifications
  </label>
</div>`;

const SWITCH_STATES_CODE = `<div className="flex flex-wrap items-center justify-center gap-4">
  <label className="flex cursor-pointer items-center gap-2 text-sm">
    <Switch defaultChecked /> On
  </label>
  <label className="flex cursor-pointer items-center gap-2 text-sm">
    <Switch /> Off
  </label>
  <label className="flex cursor-not-allowed items-center gap-2 text-sm opacity-70">
    <Switch disabled /> Disabled
  </label>
</div>`;

const SWITCH_DESC_CODE = `<div className="flex justify-center">
  <label className="flex cursor-pointer items-start gap-2 text-sm">
    <Switch defaultChecked className="mt-0.5" />
    <span>
      Marketing emails
      <span className="block text-xs text-muted-foreground">Occasional product news, no spam.</span>
    </span>
  </label>
</div>`;

const SWITCH_LIST_CODE = `<div className="mx-auto w-full max-w-sm divide-y divide-border rounded-xl border">
  <label className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
    Push notifications
    <Switch defaultChecked />
  </label>
  <label className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
    Email digests
    <Switch />
  </label>
  <label className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
    SMS alerts
    <Switch disabled />
  </label>
</div>`;

const SWITCH_API: ApiSection[] = [
  {
    component: "Switch",
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state. Use with onCheckedChange.",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Initially checked when uncontrolled.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Called when the switch is flipped.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Ignore user interaction. Renders at half opacity.",
      },
      {
        name: "readOnly",
        type: "boolean",
        default: "false",
        description: "Show state without allowing flips.",
      },
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Require the switch to be on before form submit.",
      },
      {
        name: "name",
        type: "string",
        description: "Identifies the field when the form is submitted.",
      },
      {
        name: "value",
        type: "string",
        description: "Value submitted with the form when on.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default switch styles.",
      },
    ],
  },
];

const TABS_SOURCE = `"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "../../utils/cn";

export type TabsProps = TabsPrimitive.Root.Props;

export type TabsListProps = Omit<
  TabsPrimitive.List.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TabsPrimitive.List.Props["render"];
};

export type TabsTabProps = Omit<
  TabsPrimitive.Tab.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TabsPrimitive.Tab.Props["render"];
};

export type TabsPanelProps = Omit<
  TabsPrimitive.Panel.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TabsPrimitive.Panel.Props["render"];
};

function Tabs({ ...props }: TabsProps) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />;
}

function TabsList({ className, render, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("inline-flex items-center gap-1", className)}
      render={render}
      {...props}
    />
  );
}

function TabsTab({ className, render, ...props }: TabsTabProps) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-[color,background-color,border-color,outline-color,box-shadow,filter] duration-200 select-none hover:text-foreground focus-visible:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50 disabled:pointer-events-none disabled:opacity-50 data-active:bg-muted data-active:text-foreground",
        className
      )}
      render={render}
      {...props}
    />
  );
}

function TabsPanel({ className, render, ...props }: TabsPanelProps) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("outline-none", className)}
      render={render}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTab, TabsPanel };`;

const TABS_IMPORT = `import { Tabs, TabsList, TabsPanel, TabsTab } from "@noarka/ui";`;

const TABS_USAGE = `<Tabs defaultValue="account">
  <TabsList>
    <TabsTab value="account">Account</TabsTab>
    <TabsTab value="billing">Billing</TabsTab>
  </TabsList>
  <TabsPanel value="account">
    <p className="pt-3 text-sm text-muted-foreground">Manage your profile details.</p>
  </TabsPanel>
  <TabsPanel value="billing">
    <p className="pt-3 text-sm text-muted-foreground">View invoices and update payment.</p>
  </TabsPanel>
</Tabs>`;

const TABS_DISABLED_CODE = `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTab value="overview">Overview</TabsTab>
    <TabsTab value="activity">Activity</TabsTab>
    <TabsTab value="settings" disabled>Settings</TabsTab>
  </TabsList>
  <TabsPanel value="overview">
    <p className="pt-3 text-sm text-muted-foreground">Project overview.</p>
  </TabsPanel>
  <TabsPanel value="activity">
    <p className="pt-3 text-sm text-muted-foreground">Recent events.</p>
  </TabsPanel>
  <TabsPanel value="settings">
    <p className="pt-3 text-sm text-muted-foreground">Requires admin access.</p>
  </TabsPanel>
</Tabs>`;

const TABS_COUNT_CODE = `<Tabs defaultValue="inbox">
  <TabsList>
    <TabsTab value="inbox">Inbox</TabsTab>
    <TabsTab value="sent">
      Sent
      <span className="ml-1 rounded-full bg-muted px-1.5 text-xs">3</span>
    </TabsTab>
  </TabsList>
  <TabsPanel value="inbox">
    <p className="pt-3 text-sm text-muted-foreground">No unread messages.</p>
  </TabsPanel>
  <TabsPanel value="sent">
    <p className="pt-3 text-sm text-muted-foreground">3 messages sent this week.</p>
  </TabsPanel>
</Tabs>`;

const TABS_VERTICAL_CODE = `<Tabs defaultValue="general" orientation="vertical">
  <div className="flex gap-4">
    <TabsList className="flex-col items-stretch">
      <TabsTab value="general">General</TabsTab>
      <TabsTab value="security">Security</TabsTab>
    </TabsList>
    <div className="flex-1">
      <TabsPanel value="general">
        <p className="pt-1 text-sm text-muted-foreground">General preferences.</p>
      </TabsPanel>
      <TabsPanel value="security">
        <p className="pt-1 text-sm text-muted-foreground">Password and sessions.</p>
      </TabsPanel>
    </div>
  </div>
</Tabs>`;

const TABS_API: ApiSection[] = [
  {
    component: "Tabs",
    props: [
      {
        name: "value",
        type: "string",
        description: "Controlled active tab. Use with onValueChange.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initially active tab when uncontrolled.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Called when the active tab changes.",
      },
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: "Layout direction. Vertical uses up/down arrow keys.",
      },
    ],
  },
  {
    component: "TabsList",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default list styles.",
      },
    ],
  },
  {
    component: "TabsTab",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        description: "Unique tab identifier. Shows the matching panel.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the tab. Skipped by keyboard navigation.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Accepts custom tab content like count badges.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default tab styles.",
      },
    ],
  },
  {
    component: "TabsPanel",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        description: "Renders when the tab with the same value is active.",
      },
      {
        name: "keepMounted",
        type: "boolean",
        default: "false",
        description: "Keep the panel in the DOM while inactive.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default panel styles.",
      },
    ],
  },
];

const TOGGLE_SOURCE = `"use client";

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

export { Toggle, toggleVariants };`;

const TOGGLE_VARIANTS_SOURCE = `import { cva, type VariantProps } from "class-variance-authority";

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

export type ToggleVariants = VariantProps<typeof toggleVariants>;`;

const TOGGLE_IMPORT = `import { Toggle } from "@noarka/ui";`;

const TOGGLE_USAGE = `<Toggle aria-label="Airplane mode">Off</Toggle>`;

const TOGGLE_PREVIEW_CODE = `<div className="flex justify-center">
  <Toggle defaultPressed aria-label="Notifications">
    On
  </Toggle>
</div>`;

const TOGGLE_VARIANTS_CODE = `<div className="flex flex-wrap items-center justify-center gap-2">
  <Toggle defaultPressed aria-label="Default pressed">
    On
  </Toggle>
  <Toggle variant="outline" aria-label="Outline">
    Outline
  </Toggle>
</div>`;

const TOGGLE_SIZES_CODE = `<div className="flex flex-wrap items-center justify-center gap-2">
  <Toggle size="sm" aria-label="Small">
    Small
  </Toggle>
  <Toggle aria-label="Default">
    Default
  </Toggle>
  <Toggle size="lg" aria-label="Large">
    Large
  </Toggle>
</div>`;

const TOGGLE_DISABLED_CODE = `<div className="flex flex-wrap items-center justify-center gap-2">
  <Toggle disabled aria-label="Disabled off">
    Off
  </Toggle>
  <Toggle defaultPressed disabled aria-label="Disabled on">
    On
  </Toggle>
</div>`;

const TOGGLE_API: ApiSection[] = [
  {
    component: "Toggle",
    props: [
      {
        name: "variant",
        type: '"default" | "outline"',
        default: '"default"',
        description: "Visual style.",
      },
      {
        name: "size",
        type: '"default" | "sm" | "lg"',
        default: '"default"',
        description: "Size.",
      },
      {
        name: "pressed",
        type: "boolean",
        description: "Controlled pressed state. Use with onPressedChange.",
      },
      {
        name: "defaultPressed",
        type: "boolean",
        default: "false",
        description: "Initially pressed when uncontrolled.",
      },
      {
        name: "onPressedChange",
        type: "(pressed: boolean) => void",
        description: "Called when the pressed state changes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable interaction. Renders at half opacity.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "nativeButton",
        type: "boolean",
        description:
          "Set explicitly to override the automatic inference. Inferred from the render element unless told otherwise.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the variant styles.",
      },
    ],
  },
];

const TOOLTIP_SOURCE = `"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "../../utils/cn";

function TooltipProvider({
  delay = 500,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export type TooltipContentProps = Omit<
  TooltipPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: TooltipPrimitive.Popup.Props["render"];
  side?: TooltipPrimitive.Positioner.Props["side"];
  sideOffset?: TooltipPrimitive.Positioner.Props["sideOffset"];
  align?: TooltipPrimitive.Positioner.Props["align"];
  alignOffset?: TooltipPrimitive.Positioner.Props["alignOffset"];
};

function TooltipContent({
  className,
  sideOffset = 8,
  side,
  align,
  alignOffset,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-lg px-3 py-1.5 text-xs bg-surface border text-secondary-foreground z-50 w-fit max-w-xs origin-(--transform-origin)",
            className
          )}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };`;

const TOOLTIP_IMPORT = `import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@noarka/ui";`;

const TOOLTIP_USAGE = `<Tooltip>
  <TooltipTrigger render={<Button variant="ghost">Need help?</Button>} />
  <TooltipContent side="top">Our team replies within a day.</TooltipContent>
</Tooltip>`;

const TOOLTIP_PREVIEW_CODE = `<div className="flex justify-center">
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
    <TooltipContent side="top">Useful extra context</TooltipContent>
  </Tooltip>
</div>`;

const TOOLTIP_SIDES_CODE = `<div className="flex flex-wrap items-center justify-center gap-2">
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm">Top</Button>} />
    <TooltipContent side="top">Above the trigger</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm">Right</Button>} />
    <TooltipContent side="right">Right of the trigger</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm">Bottom</Button>} />
    <TooltipContent side="bottom">Below the trigger</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm">Left</Button>} />
    <TooltipContent side="left">Left of the trigger</TooltipContent>
  </Tooltip>
</div>`;

const TOOLTIP_DELAY_IMPORT = `import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@noarka/ui";`;

const TOOLTIP_DELAY_CODE = `<TooltipProvider delay={100}>
  <div className="flex items-center justify-center gap-2">
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="sm">Fast A</Button>} />
      <TooltipContent side="top">Appears quickly</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="sm">Fast B</Button>} />
      <TooltipContent side="top">Shares the same delay</TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`;

const TOOLTIP_LONG_CODE = `<div className="flex justify-center">
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">Hover for details</Button>} />
    <TooltipContent side="top">
      Workspaces include unlimited projects, viewers, and version history on every plan.
    </TooltipContent>
  </Tooltip>
</div>`;

const TOOLTIP_API: ApiSection[] = [
  {
    component: "TooltipProvider",
    props: [
      {
        name: "delay",
        type: "number",
        default: "500",
        description: "Shared open delay in milliseconds for grouped tooltips.",
      },
      {
        name: "closeDelay",
        type: "number",
        description: "Shared close delay in milliseconds.",
      },
    ],
  },
  {
    component: "Tooltip",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the tooltip opens or closes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the tooltip.",
      },
    ],
  },
  {
    component: "TooltipTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button>Hover me</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "TooltipContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        description: "Preferred placement side.",
      },
      {
        name: "sideOffset",
        type: "number",
        default: "8",
        description: "Gap between trigger and popup.",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        description: "Alignment against the trigger edge.",
      },
      {
        name: "alignOffset",
        type: "number",
        description: "Offset along the alignment axis.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default popup.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default popup styles.",
      },
    ],
  },
];

const KBD_SOURCE = `import * as React from "react";

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

export { Kbd };`;

const KBD_IMPORT = `import { Kbd } from "@noarka/ui";`;

const KBD_USAGE = `<p className="text-sm text-muted-foreground">
  Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open search.
</p>`;

const KBD_PREVIEW_CODE = `<div className="flex items-center justify-center gap-1">
  <Kbd>Ctrl</Kbd>
  <span className="text-xs text-muted-foreground">+</span>
  <Kbd>K</Kbd>
</div>`;

const KBD_COMBO_CODE = `<div className="flex items-center justify-center gap-4">
  <span className="flex items-center gap-1">
    <Kbd>Ctrl</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>K</Kbd>
  </span>
  <span className="flex items-center gap-1">
    <Kbd>Shift</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>Ctrl</Kbd>
    <span className="text-xs text-muted-foreground">+</span>
    <Kbd>S</Kbd>
  </span>
</div>`;

const KBD_SINGLE_CODE = `<div className="flex items-center justify-center gap-2">
  <Kbd>Esc</Kbd>
  <Kbd>Enter</Kbd>
  <Kbd>Tab</Kbd>
  <Kbd>⌫</Kbd>
</div>`;

const KBD_INLINE_CODE = `<div className="mx-auto max-w-sm">
  <p className="text-sm text-muted-foreground">
    Select all with <Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>, then copy with <Kbd>Ctrl</Kbd> +{" "}
    <Kbd>C</Kbd>.
  </p>
</div>`;

const KBD_API: ApiSection[] = [
  {
    component: "Kbd",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "The key cap label, e.g. Ctrl, Esc, or an arrow glyph.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default key cap styles.",
      },
    ],
  },
];

const SKELETON_SOURCE = `import * as React from "react";

import { cn } from "../../utils/cn";

export type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-muted rounded-md relative overflow-hidden before:absolute before:inset-0 before:animate-[skeleton-shimmer_2s_linear_infinite] before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };`;

const SKELETON_IMPORT = `import { Skeleton } from "@noarka/ui";`;

const SKELETON_USAGE = `<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="flex-1 space-y-2">
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-4 w-full" />
  </div>
</div>`;

const SKELETON_PREVIEW_CODE = `<div className="mx-auto w-full max-w-sm space-y-3">
  <Skeleton className="h-32 w-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`;

const SKELETON_PROFILE_CODE = `<div className="mx-auto flex w-full max-w-sm items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="flex-1 space-y-2">
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-4 w-full" />
  </div>
</div>`;

const SKELETON_TABLE_CODE = `<div className="mx-auto w-full max-w-sm space-y-2">
  <Skeleton className="h-8 w-full" />
  <Skeleton className="h-8 w-full" />
  <Skeleton className="h-8 w-full" />
</div>`;

const SKELETON_ARTICLE_CODE = `<div className="mx-auto w-full max-w-sm space-y-2">
  <Skeleton className="h-6 w-2/3" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-1/3" />
</div>`;

const SKELETON_API: ApiSection[] = [
  {
    component: "Skeleton",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Rarely used. Skeletons are empty shimmer blocks sized by className.",
      },
      {
        name: "className",
        type: "string",
        description: "Sets the shape. Combine width, height, and radius utilities.",
      },
    ],
  },
];

const BREADCRUMB_SOURCE = `import * as React from "react";

import { cn } from "../../utils/cn";
import { AltArrowRightIcon } from "@solar-icons/react/linear";

export type BreadcrumbProps = React.ComponentProps<"nav">;

function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <nav
      data-slot="breadcrumb"
      aria-label="breadcrumb"
      className={cn(className)}
      {...props}
    />
  );
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      aria-disabled="true"
      role="link"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <AltArrowRightIcon />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-5 items-center justify-center", className)}
      {...props}
    >
      &#8230;
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};`;

const BREADCRUMB_IMPORT = `import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@noarka/ui";`;

const BREADCRUMB_USAGE = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Button</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`;

const BREADCRUMB_PREVIEW_CODE = `<div className="flex justify-center">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`;

const BREADCRUMB_ELLIPSIS_CODE = `<div className="flex justify-center">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`;

const BREADCRUMB_SLASH_CODE = `<div className="flex justify-center">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`;

const BREADCRUMB_OVERFLOW_IMPORT = `import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@noarka/ui";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@noarka/ui";`;

const BREADCRUMB_OVERFLOW_CODE = `<div className="flex justify-center">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                aria-label="More pages"
                className="flex size-5 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
              >
                &#8230;
              </button>
            }
          />
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Components</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Button</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`;

const BREADCRUMB_API: ApiSection[] = [
  {
    component: "Breadcrumb",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Usually a single BreadcrumbList.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged on the nav element.",
      },
    ],
  },
  {
    component: "BreadcrumbList",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "BreadcrumbItem and BreadcrumbSeparator elements.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default list styles.",
      },
    ],
  },
  {
    component: "BreadcrumbItem",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "One link, page, or collapsed control.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "BreadcrumbLink",
    props: [
      {
        name: "href",
        type: "string",
        description: "Link target. Renders a native anchor.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default link styles.",
      },
    ],
  },
  {
    component: "BreadcrumbPage",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Current page label. Announced via aria-current.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default page styles.",
      },
    ],
  },
  {
    component: "BreadcrumbSeparator",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Custom glyph. Defaults to a right arrow icon.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default separator styles.",
      },
    ],
  },
  {
    component: "BreadcrumbEllipsis",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default ellipsis styles.",
      },
    ],
  },
];

const PAGINATION_SOURCE = `"use client";

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { buttonVariants } from "../Button/Button.variants";
import { AltArrowLeftIcon, AltArrowRightIcon } from "@solar-icons/react/linear";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="pagination-item"
      className={cn(className)}
      {...props}
    />
  );
}

export type PaginationLinkProps = Omit<
  React.ComponentProps<"a">,
  "children"
> &
  VariantProps<typeof buttonVariants> & {
    children?: React.ReactNode;
    isActive?: boolean;
  };

function PaginationLink({
  className,
  isActive,
  variant = "ghost",
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      data-active={isActive || undefined}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({ variant: isActive ? "outline" : variant, size, className })
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  children = "Previous",
  ...props
}: React.ComponentProps<"a">) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <AltArrowLeftIcon />
      <span className="hidden sm:block">{children}</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  children = "Next",
  ...props
}: React.ComponentProps<"a">) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{children}</span>
      <AltArrowRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      &#8230;
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};`;

const PAGINATION_IMPORT = `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@noarka/ui";`;

const PAGINATION_USAGE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const PAGINATION_PREVIEW_CODE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const PAGINATION_MANY_CODE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const PAGINATION_SMALL_CODE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="#" size="sm" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" size="sm">
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" size="sm">
        3
      </PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const PAGINATION_COMPACT_CODE = `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#">Back</PaginationPrevious>
    </PaginationItem>
    <PaginationItem>
      <span className="px-2 text-sm text-muted-foreground">Page 2 of 10</span>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#">Continue</PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

const PAGINATION_API: ApiSection[] = [
  {
    component: "Pagination",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Usually a single PaginationContent.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged on the nav element.",
      },
    ],
  },
  {
    component: "PaginationContent",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "PaginationItem elements.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default row styles.",
      },
    ],
  },
  {
    component: "PaginationItem",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "One link, control, or ellipsis.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged on the list item.",
      },
    ],
  },
  {
    component: "PaginationLink",
    props: [
      {
        name: "href",
        type: "string",
        description: "Link target. Renders a native anchor.",
      },
      {
        name: "isActive",
        type: "boolean",
        default: "false",
        description: "Highlight as the current page with aria-current.",
      },
      {
        name: "variant",
        type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
        default: '"ghost"',
        description: "Button style. Active links render outline regardless.",
      },
      {
        name: "size",
        type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
        default: '"icon"',
        description: "Button size.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the button styles.",
      },
    ],
  },
  {
    component: "PaginationPrevious",
    props: [
      {
        name: "href",
        type: "string",
        description: "Link target. Renders a native anchor.",
      },
      {
        name: "children",
        type: "ReactNode",
        default: '"Previous"',
        description: "Label beside the arrow. Hidden below the sm breakpoint.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default styles.",
      },
    ],
  },
  {
    component: "PaginationNext",
    props: [
      {
        name: "href",
        type: "string",
        description: "Link target. Renders a native anchor.",
      },
      {
        name: "children",
        type: "ReactNode",
        default: '"Next"',
        description: "Label beside the arrow. Hidden below the sm breakpoint.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default styles.",
      },
    ],
  },
  {
    component: "PaginationEllipsis",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default ellipsis styles.",
      },
    ],
  },
];

const POPOVER_SOURCE = `"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "../../utils/cn";

function Popover({ ...props }: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverClose({ ...props }: PopoverPrimitive.Close.Props) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

export type PopoverContentProps = Omit<
  PopoverPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: PopoverPrimitive.Popup.Props["render"];
  side?: PopoverPrimitive.Positioner.Props["side"];
  sideOffset?: PopoverPrimitive.Positioner.Props["sideOffset"];
  align?: PopoverPrimitive.Positioner.Props["align"];
  alignOffset?: PopoverPrimitive.Positioner.Props["alignOffset"];
};

function PopoverContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  render,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "bg-surface text-popover-foreground z-50 w-72 rounded-xl border p-4 text-sm duration-200 origin-(--transform-origin) data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          render={render}
          {...props}
        >
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

function PopoverTitle({
  className,
  ...props
}: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  );
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function PopoverFooter({
  className,
  footer = false,
  ...props
}: React.ComponentProps<"div"> & {
  footer?: boolean;
}) {
  return (
    <div
      data-slot="popover-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        footer && "-mx-4 -mb-4 rounded-b-xl border-t bg-muted/80 p-4",
        className
      )}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverFooter,
};`;

const POPOVER_IMPORT = `import { Button, Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "@noarka/ui";`;

const POPOVER_USAGE = `<Popover>
  <PopoverTrigger render={<Button variant="outline">Dimensions</Button>} />
  <PopoverContent>
    <PopoverTitle>Size guide</PopoverTitle>
    <PopoverDescription>Runs small. Order one size up.</PopoverDescription>
  </PopoverContent>
</Popover>`;

const POPOVER_PREVIEW_CODE = `<div className="flex justify-center">
  <Popover>
    <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
    <PopoverContent>
      <div className="space-y-1">
        <PopoverTitle>About this workspace</PopoverTitle>
        <PopoverDescription>Shared with 4 teammates. Created June 2026.</PopoverDescription>
      </div>
    </PopoverContent>
  </Popover>
</div>`;

const POPOVER_FORM_CODE = `<div className="flex justify-center">
  <Popover>
    <PopoverTrigger render={<Button>Add note</Button>} />
    <PopoverContent>
      <div className="space-y-2">
        <div className="space-y-1">
          <PopoverTitle>Quick note</PopoverTitle>
          <PopoverDescription>Saved to this project.</PopoverDescription>
        </div>
        <PopoverFooter footer>
          <PopoverClose render={<Button variant="outline" size="sm">Cancel</Button>} />
          <Button size="sm">Save</Button>
        </PopoverFooter>
      </div>
    </PopoverContent>
  </Popover>
</div>`;

const POPOVER_SIDE_CODE = `<div className="flex justify-center">
  <Popover>
    <PopoverTrigger render={<Button variant="outline">On the side</Button>} />
    <PopoverContent side="right" align="start">
      <div className="space-y-1">
        <PopoverTitle>Docked panel</PopoverTitle>
        <PopoverDescription>Pinned to the trigger edge.</PopoverDescription>
      </div>
    </PopoverContent>
  </Popover>
</div>`;

const POPOVER_INPUT_IMPORT = `import { Button, Input, Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger } from "@noarka/ui";`;

const POPOVER_INPUT_CODE = `<div className="flex justify-center">
  <Popover>
    <PopoverTrigger render={<Button>Invite by email</Button>} />
    <PopoverContent>
      <div className="space-y-2">
        <div className="space-y-1">
          <PopoverTitle>Invite a teammate</PopoverTitle>
          <PopoverDescription>They get access immediately.</PopoverDescription>
        </div>
        <Input type="email" placeholder="teammate@company.com" />
        <div className="flex justify-end">
          <Button size="sm">Send invite</Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</div>`;

const POPOVER_API: ApiSection[] = [
  {
    component: "Popover",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the popover opens or closes.",
      },
      {
        name: "onOpenChangeComplete",
        type: "(open: boolean) => void",
        description: "Called after open or close animations finish.",
      },
      {
        name: "modal",
        type: "boolean | 'trap-focus'",
        description: "Limit interaction to the popover while open.",
      },
    ],
  },
  {
    component: "PopoverContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        default: '"bottom"',
        description: "Preferred placement side.",
      },
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        description: "Gap between trigger and panel.",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        default: '"center"',
        description: "Alignment against the trigger edge.",
      },
      {
        name: "alignOffset",
        type: "number",
        default: "0",
        description: "Offset along the alignment axis.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default panel.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default panel styles.",
      },
    ],
  },
  {
    component: "PopoverTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button>Open popover</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "PopoverClose",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom close control. Must live inside the popover.",
      },
    ],
  },
  {
    component: "PopoverTitle",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the title styles.",
      },
    ],
  },
  {
    component: "PopoverDescription",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the muted description styles.",
      },
    ],
  },
  {
    component: "PopoverFooter",
    props: [
      {
        name: "footer",
        type: "boolean",
        default: "false",
        description:
          "Show the muted footer band with a top border. Without it the footer is plain.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default footer styles.",
      },
    ],
  },
];

const SCROLL_AREA_SOURCE = `"use client";

import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "../../utils/cn";

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="h-full w-full rounded-[inherit]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaScrollbar />
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollAreaScrollbar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2 w-full flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollAreaScrollbar };`;

const SCROLL_AREA_IMPORT = `import { ScrollArea } from "@noarka/ui";`;

const SCROLL_AREA_USAGE = `<ScrollArea className="h-48 w-full max-w-sm rounded-xl border">
  <div className="space-y-2 p-4">
    <p className="text-sm font-medium">Changelog</p>
    <p className="text-sm text-muted-foreground">v2.4: Faster sync.</p>
    <p className="text-sm text-muted-foreground">v2.3: New dashboard.</p>
    <p className="text-sm text-muted-foreground">v2.2: Bug fixes.</p>
    <p className="text-sm text-muted-foreground">v2.1: First release.</p>
  </div>
</ScrollArea>`;

const SCROLL_AREA_PREVIEW_CODE = `<ScrollArea className="mx-auto h-64 w-full max-w-sm rounded-xl border">
  <div className="space-y-2 p-4">
    <p className="text-sm font-medium">Changelog</p>
    <p className="text-sm text-muted-foreground">v2.6: Dark mode polish.</p>
    <p className="text-sm text-muted-foreground">v2.5: Shared workspaces.</p>
    <p className="text-sm text-muted-foreground">v2.4: Faster sync.</p>
    <p className="text-sm text-muted-foreground">v2.3: New dashboard.</p>
    <p className="text-sm text-muted-foreground">v2.2: Bug fixes.</p>
    <p className="text-sm text-muted-foreground">v2.1: First release.</p>
    <p className="text-sm text-muted-foreground">v2.0: Hello world.</p>
    <p className="text-sm text-muted-foreground">v1.9: Beta channel.</p>
    <p className="text-sm text-muted-foreground">v1.8: Initial prototype.</p>
  </div>
</ScrollArea>`;

const SCROLL_AREA_HORIZONTAL_CODE = `<ScrollArea className="mx-auto w-full max-w-sm rounded-xl border">
  <div className="flex w-max gap-3 p-4">
    <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
    <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
    <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
    <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
  </div>
  <ScrollAreaScrollbar orientation="horizontal" />
</ScrollArea>`;

const SCROLL_AREA_CONTACTS_CODE = `<ScrollArea className="mx-auto h-64 w-full max-w-sm rounded-xl border">
  <div className="p-2">
    {["Ada", "Grace", "Alan", "Katherine", "Linus", "Margaret", "Dennis", "Barbara"].map((name) => (
      <div key={name} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm">
        <span className="flex size-6 items-center justify-center rounded-full bg-muted text-xs">
          {name[0]}
        </span>
        {name}
      </div>
    ))}
  </div>
</ScrollArea>`;

const SCROLL_AREA_BOTH_CODE = `<ScrollArea className="mx-auto h-48 w-full max-w-sm rounded-xl border">
  <div className="grid w-max grid-cols-4 gap-3 p-4">
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
    <div className="h-20 w-32 rounded-lg bg-muted" />
  </div>
  <ScrollAreaScrollbar orientation="horizontal" />
</ScrollArea>`;

const SCROLL_AREA_API: ApiSection[] = [
  {
    component: "ScrollArea",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Scrollable content. Give the area a fixed height.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged on the root. rounding inherits to the viewport.",
      },
    ],
  },
  {
    component: "ScrollAreaScrollbar",
    props: [
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"vertical"',
        description: "Scrollbar direction. Render one per axis you need.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default scrollbar styles.",
      },
    ],
  },
];

const CONTEXT_MENU_SOURCE = `"use client";

import * as React from "react";
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { cn } from "../../utils/cn";
import { AltArrowRightIcon } from "@solar-icons/react/linear";

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

export type ContextMenuContentProps = Omit<
  MenuPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.Popup.Props["render"];
  side?: MenuPrimitive.Positioner.Props["side"];
  sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
  align?: MenuPrimitive.Positioner.Props["align"];
  alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"];
};

function ContextMenuContent({
  className,
  align = "start",
  side,
  sideOffset = 4,
  alignOffset,
  ...props
}: ContextMenuContentProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <MenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border bg-surface text-popover-foreground min-w-48 rounded-xl p-1 text-muted-foreground font-medium border border-border/60 duration-200 z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto data-closed:overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export type ContextMenuItemProps = Omit<
  MenuPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: MenuPrimitive.Item.Props["render"];
  inset?: boolean;
  variant?: "default" | "destructive";
  /**
   * Back-compat alias for \`onClick\` (previous Radix-based API exposed \`onSelect\`).
   * The menu still closes on select unless \`closeOnClick={false}\`.
   */
  onSelect?: MenuPrimitive.Item.Props["onClick"];
};

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  onSelect,
  onClick,
  ...props
}: ContextMenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-lg px-2 py-1 text-xs leading-snug [&_svg:not([class*='size-'])]:size-3.5 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      onClick={onSelect ?? onClick}
      {...props}
    />
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
}) {
  // GroupLabel requires a Group ancestor, so the label brings its own.
  // Nesting inside an explicit group is harmless: the inner group simply
  // takes over label association.
  return (
    <MenuPrimitive.Group data-slot="context-menu-group">
      <MenuPrimitive.GroupLabel
        data-slot="context-menu-label"
        data-inset={inset}
        className={cn(
          "text-muted-foreground px-2 py-1.5 text-xs data-[inset]:pl-8",
          className
        )}
        {...props}
      />
    </MenuPrimitive.Group>
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      data-slot="context-menu-separator"
      className={cn("bg-border/50 -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-[0.625rem] tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: Omit<MenuPrimitive.SubmenuTrigger.Props, "className"> & {
  className?: string;
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground min-h-8 gap-2 rounded-md px-2 py-1 text-xs [&_svg:not([class*='size-'])]:size-3.5 flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <AltArrowRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: Omit<MenuPrimitive.Popup.Props, "className" | "render"> & {
  className?: string;
  render?: MenuPrimitive.Popup.Props["render"];
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner className="isolate z-50">
        <MenuPrimitive.Popup
          data-slot="context-menu-sub-content"
          className={cn(
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border bg-surface text-popover-foreground min-w-32 rounded-xl p-1 duration-100 z-50 origin-(--transform-origin) overflow-hidden",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
};`;

const CONTEXT_MENU_IMPORT = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@noarka/ui";`;

const CONTEXT_MENU_USAGE = `<ContextMenu>
  <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
    Right click me
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`;

const CONTEXT_MENU_PREVIEW_CODE = `<div className="mx-auto w-full max-w-sm">
  <ContextMenu>
    <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">Sign out</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</div>`;

const CONTEXT_MENU_LABEL_CODE = `<div className="mx-auto w-full max-w-sm">
  <ContextMenu>
    <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>ada@example.com</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</div>`;

const CONTEXT_MENU_SHORTCUT_IMPORT = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@noarka/ui";`;

const CONTEXT_MENU_SHORTCUT_CODE = `<div className="mx-auto w-full max-w-sm">
  <ContextMenu>
    <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</div>`;

const CONTEXT_MENU_SUB_IMPORT = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@noarka/ui";`;

const CONTEXT_MENU_SUB_CODE = `<div className="mx-auto w-full max-w-sm">
  <ContextMenu>
    <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>Email</ContextMenuItem>
          <ContextMenuItem>Copy link</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">Sign out</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</div>`;

const CONTEXT_MENU_API: ApiSection[] = [
  {
    component: "ContextMenu",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the menu opens or closes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Ignore user interaction.",
      },
    ],
  },
  {
    component: "ContextMenuTrigger",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "The right-click area. Usually a dashed zone describing the gesture.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged on the trigger area.",
      },
    ],
  },
  {
    component: "ContextMenuContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        description: "Preferred placement side.",
      },
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        description: "Gap between cursor and panel.",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        default: '"start"',
        description: "Alignment against the cursor point.",
      },
      {
        name: "alignOffset",
        type: "number",
        description: "Offset along the alignment axis.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default panel.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default panel styles.",
      },
    ],
  },
  {
    component: "ContextMenuItem",
    props: [
      {
        name: "variant",
        type: '"default" | "destructive"',
        default: '"default"',
        description: "Destructive tints the item red.",
      },
      {
        name: "inset",
        type: "boolean",
        description: "Offset content to align with labeled groups.",
      },
      {
        name: "onSelect",
        type: "(event) => void",
        description: "Back-compat alias for onClick. The menu still closes on select unless closeOnClick is false.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "ContextMenuLabel",
    props: [
      {
        name: "inset",
        type: "boolean",
        description:
          "Offset content to align with inset items. The label renders its own group, so it works directly inside content.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default label styles.",
      },
    ],
  },
  {
    component: "ContextMenuSeparator",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default separator styles.",
      },
    ],
  },
  {
    component: "ContextMenuShortcut",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the shortcut hint styles.",
      },
    ],
  },
  {
    component: "ContextMenuSubTrigger",
    props: [
      {
        name: "inset",
        type: "boolean",
        description: "Offset content to align with inset items.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the submenu trigger.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default trigger styles.",
      },
    ],
  },
];

const AUTOCOMPLETE_SOURCE = `"use client";

import * as React from "react";
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { cn } from "../../utils/cn";

export type AutocompleteFilter = (
  item: { value: unknown; label: React.ReactNode },
  query: string
) => boolean;

function defaultMatch(
  item: { value: unknown; label: React.ReactNode },
  query: string
) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const label =
    typeof item.label === "string" || typeof item.label === "number"
      ? String(item.label)
      : "";
  const valueText =
    typeof item.value === "string" || typeof item.value === "number"
      ? String(item.value)
      : "";
  const haystack = (label || valueText).toLowerCase();
  return haystack.includes(q);
}

const AutocompleteQueryContext = React.createContext("");
const AutocompleteFilterContext =
  React.createContext<AutocompleteFilter | null>(defaultMatch);

type DerivedAutocompleteItem = { value: unknown; label: React.ReactNode };

function textLabel(children: React.ReactNode): string | undefined {
  let text = "";
  let plain = true;
  React.Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      text += String(child);
    } else if (child !== null && child !== undefined && typeof child !== "boolean") {
      plain = false;
    }
  });
  return plain && text !== "" ? text : undefined;
}

function collectAutocompleteItems(children: React.ReactNode): DerivedAutocompleteItem[] {
  const items: DerivedAutocompleteItem[] = [];
  const seen = new Set<unknown>();
  const walk = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      const childProps = child.props as {
        value?: unknown;
        children?: React.ReactNode;
      };
      const label = textLabel(childProps.children);
      if (childProps.value !== undefined && label !== undefined) {
        if (!seen.has(childProps.value)) {
          seen.add(childProps.value);
          items.push({ value: childProps.value, label });
        }
        return;
      }
      walk(childProps.children);
    });
  };
  walk(children);
  return items;
}

export type AutocompleteProps = Omit<
  ComboboxPrimitive.Root.Props<string, false>,
  "items" | "filter" | "itemToStringLabel" | "onInputValueChange" | "children"
> & {
  items?: ComboboxPrimitive.Root.Props<string, false>["items"];
  filter?: ComboboxPrimitive.Root.Props<string, false>["filter"];
  itemToStringLabel?: (itemValue: unknown) => string;
  onInputValueChange?: ComboboxPrimitive.Root.Props<string, false>["onInputValueChange"];
  children?: React.ReactNode;
  /**
   * Show the popup on click regardless of the query.
   * @default false
   */
  openOnInputClick?: boolean;
};

function Autocomplete({
  items,
  itemToStringLabel,
  filter,
  onInputValueChange,
  openOnInputClick = false,
  children,
  ...props
}: AutocompleteProps) {
  const [query, setQuery] = React.useState("");
  const collected = React.useMemo(() => collectAutocompleteItems(children), [children]);
  const derivedItems = React.useMemo(() => {
    if (items != null) return items;
    return collected.length > 0 ? collected : undefined;
  }, [items, collected]);
  const labelMap = React.useMemo(() => {
    const map = new Map<unknown, string>();
    for (const item of collected) {
      if (typeof item.label === "string" || typeof item.label === "number") {
        map.set(item.value, String(item.label));
      }
    }
    return map;
  }, [collected]);
  const resolvedItemToStringLabel = React.useMemo(() => {
    if (itemToStringLabel) return itemToStringLabel;
    return (itemValue: unknown) => {
      if (
        typeof itemValue === "object" &&
        itemValue !== null &&
        "label" in itemValue
      ) {
        const label = (itemValue as { label?: unknown }).label;
        return label == null ? "" : String(label);
      }
      const hit = labelMap.get(itemValue);
      if (hit != null) return hit;
      return String(itemValue ?? "");
    };
  }, [itemToStringLabel, labelMap]);
  const effectiveFilter = React.useMemo<AutocompleteFilter | null>(() => {
    if (filter === null) return null;
    if (filter) {
      return (item, q) => filter(item.value as string, q);
    }
    return defaultMatch;
  }, [filter]);
  const handleInputValueChange: NonNullable<
    ComboboxPrimitive.Root.Props<string, false>["onInputValueChange"]
  > = (value, eventDetails) => {
    setQuery(value);
    onInputValueChange?.(value, eventDetails);
  };
  // Mirror Base's own filtering for static children so non-matches unmount,
  // exactly like the data-driven Collection pattern does.
  const baseFilter = React.useMemo(() => {
    if (effectiveFilter === null) return null;
    const fn = effectiveFilter;
    return (itemValue: unknown, q: string) =>
      fn(
        typeof itemValue === "object" && itemValue !== null && "label" in itemValue
          ? (itemValue as { value: unknown; label: React.ReactNode })
          : { value: itemValue, label: itemValue as React.ReactNode },
        q
      );
  }, [effectiveFilter]);
  return (
    <AutocompleteQueryContext.Provider value={query}>
      <AutocompleteFilterContext.Provider value={effectiveFilter}>
        <ComboboxPrimitive.Root
          data-slot="autocomplete"
          items={derivedItems}
          itemToStringLabel={resolvedItemToStringLabel}
          filter={baseFilter}
          openOnInputClick={openOnInputClick}
          onInputValueChange={handleInputValueChange}
          {...props}
        >
          {children}
        </ComboboxPrimitive.Root>
      </AutocompleteFilterContext.Provider>
    </AutocompleteQueryContext.Provider>
  );
}

function AutocompleteInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="autocomplete-input"
      className={cn(
        "h-9 w-full min-w-0 rounded-lg bg-input bg-clip-padding px-[calc(--spacing(3)-1px)] text-base leading-9 outline-none placeholder:text-muted-foreground/72 focus-visible:border-ring sm:h-8 sm:text-sm sm:leading-8",
        className
      )}
      {...props}
    />
  );
}

export type AutocompleteContentProps = Omit<
  ComboboxPrimitive.Popup.Props,
  "className" | "render"
> & {
  className?: string;
  render?: ComboboxPrimitive.Popup.Props["render"];
  side?: ComboboxPrimitive.Positioner.Props["side"];
  sideOffset?: ComboboxPrimitive.Positioner.Props["sideOffset"];
  align?: ComboboxPrimitive.Positioner.Props["align"];
  alignOffset?: ComboboxPrimitive.Positioner.Props["alignOffset"];
};

function AutocompleteContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  render,
  ...props
}: AutocompleteContentProps) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="autocomplete-content"
          className={cn(
            "relative z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border bg-surface p-1 text-popover-foreground duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          render={render}
          {...props}
        >
          <ComboboxPrimitive.List>{children}</ComboboxPrimitive.List>
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

export type AutocompleteItemProps = Omit<
  ComboboxPrimitive.Item.Props,
  "className" | "render"
> & {
  className?: string;
  render?: ComboboxPrimitive.Item.Props["render"];
};

function AutocompleteItem({
  className,
  children,
  render,
  ...props
}: AutocompleteItemProps) {
  const query = React.useContext(AutocompleteQueryContext);
  const filter = React.useContext(AutocompleteFilterContext);
  const value = (props as { value?: unknown }).value;
  if (filter) {
    const text = textLabel(children);
    const label: React.ReactNode =
      text ?? (value as React.ReactNode);
    const visible = filter({ value, label }, query);
    if (!visible) return null;
  }
  return (
    <ComboboxPrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-foreground/80 min-h-8 outline-hidden select-none hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      render={render}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Item>
  );
}

function AutocompleteEmpty({
  className,
  children = "No results found.",
  ...props
}: ComboboxPrimitive.Empty.Props) {
  const filteredItems = ComboboxPrimitive.useFilteredItems();
  // Base always renders the Empty div and only nulls its children, which
  // would leave its padding behind as an empty gap. Unmount instead.
  if (filteredItems.length !== 0) return null;
  return (
    <ComboboxPrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "px-2 py-6 text-center text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Empty>
  );
}

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteEmpty,
};`;

const AUTOCOMPLETE_IMPORT = `import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@noarka/ui";`;

const AUTOCOMPLETE_USAGE = `<div className="mx-auto max-w-xs">
  <Autocomplete>
    <AutocompleteInput placeholder="Search languages..." />
    <AutocompleteContent>
      <AutocompleteItem value="typescript">TypeScript</AutocompleteItem>
      <AutocompleteItem value="python">Python</AutocompleteItem>
      <AutocompleteItem value="rust">Rust</AutocompleteItem>
      <AutocompleteEmpty>No language found.</AutocompleteEmpty>
    </AutocompleteContent>
  </Autocomplete>
</div>`;

const AUTOCOMPLETE_PREVIEW_CODE = `<div className="mx-auto max-w-xs">
  <Autocomplete>
    <AutocompleteInput placeholder="Search fruits..." />
    <AutocompleteContent>
      <AutocompleteItem value="apple">Apple</AutocompleteItem>
      <AutocompleteItem value="banana">Banana</AutocompleteItem>
      <AutocompleteItem value="cherry">Cherry</AutocompleteItem>
      <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
    </AutocompleteContent>
  </Autocomplete>
</div>`;

const AUTOCOMPLETE_FRAMEWORKS_CODE = `<div className="mx-auto max-w-xs">
  <Autocomplete>
    <AutocompleteInput placeholder="Search frameworks..." />
    <AutocompleteContent>
      <AutocompleteItem value="next">Next.js</AutocompleteItem>
      <AutocompleteItem value="remix">Remix</AutocompleteItem>
      <AutocompleteItem value="astro">Astro</AutocompleteItem>
      <AutocompleteItem value="sveltekit">SvelteKit</AutocompleteItem>
      <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
    </AutocompleteContent>
  </Autocomplete>
</div>`;

const AUTOCOMPLETE_DISABLED_CODE = `<div className="mx-auto max-w-xs">
  <Autocomplete>
    <AutocompleteInput placeholder="Search fruits..." />
    <AutocompleteContent>
      <AutocompleteItem value="apple">Apple</AutocompleteItem>
      <AutocompleteItem value="durian" disabled>
        Durian (out of season)
      </AutocompleteItem>
      <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
    </AutocompleteContent>
  </Autocomplete>
</div>`;

const AUTOCOMPLETE_LABEL_IMPORT = `import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  Label,
} from "@noarka/ui";`;

const AUTOCOMPLETE_LABEL_CODE = `<div className="mx-auto max-w-xs space-y-1.5">
  <Label htmlFor="demo-fruit">Favorite fruit</Label>
  <Autocomplete defaultValue="apple">
    <AutocompleteInput id="demo-fruit" placeholder="Search fruits..." />
    <AutocompleteContent>
      <AutocompleteItem value="apple">Apple</AutocompleteItem>
      <AutocompleteItem value="banana">Banana</AutocompleteItem>
      <AutocompleteItem value="cherry">Cherry</AutocompleteItem>
      <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
    </AutocompleteContent>
  </Autocomplete>
</div>`;

const AUTOCOMPLETE_API: ApiSection[] = [
  {
    component: "Autocomplete",
    props: [
      {
        name: "value",
        type: "string",
        description: "Controlled selected value. Use with onValueChange.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initially selected value when uncontrolled.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Called when the selection changes.",
      },
      {
        name: "itemToStringLabel",
        type: "(value: unknown) => string",
        description:
          "Formats values for display. Defaults to resolving item labels automatically.",
      },
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open when uncontrolled.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the input and popup.",
      },
      {
        name: "openOnInputClick",
        type: "boolean",
        default: "false",
        description:
          "Show the popup on click. Leave off so it only appears while typing.",
      },
      {
        name: "name",
        type: "string",
        description: "Identifies the field when the form is submitted.",
      },
    ],
  },
  {
    component: "AutocompleteInput",
    props: [
      {
        name: "placeholder",
        type: "string",
        description: "Hint text shown while empty.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the input.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default input styles.",
      },
    ],
  },
  {
    component: "AutocompleteContent",
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        default: '"bottom"',
        description: "Preferred placement side.",
      },
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        description: "Gap between input and popup.",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        default: '"center"',
        description: "Alignment against the input edge.",
      },
      {
        name: "alignOffset",
        type: "number",
        default: "0",
        description: "Offset along the alignment axis.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop. Use to render a custom element instead of the default popup.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default popup styles.",
      },
    ],
  },
  {
    component: "AutocompleteItem",
    props: [
      {
        name: "value",
        type: "string",
        description: "Value set when selected. Labels display via the item text.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item.",
      },
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Polymorphic render prop.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "AutocompleteEmpty",
    props: [
      {
        name: "children",
        type: "ReactNode",
        default: '"No results found."',
        description: "Shown when the query matches nothing.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default empty styles.",
      },
    ],
  },
];

const COLLAPSIBLE_SOURCE = `"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

export type CollapsibleProps = CollapsiblePrimitive.Root.Props;

export type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props;

export type CollapsibleContentProps = Omit<
  CollapsiblePrimitive.Panel.Props,
  "className"
> & {
  className?: string;
};

function Collapsible({ ...props }: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className="w-full"
      {...props}
    />
  );
}

function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  );
}

function CollapsibleContent({ ...props }: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };`;

const COLLAPSIBLE_IMPORT = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@noarka/ui";`;

const COLLAPSIBLE_USAGE = `<Collapsible>
  <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
    Shipping options
    <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p className="px-2 pt-2 text-sm text-muted-foreground">
      Standard delivery arrives in 3 to 5 business days. Express arrives tomorrow.
    </p>
  </CollapsibleContent>
</Collapsible>`;

const COLLAPSIBLE_OPEN_CODE = `<Collapsible defaultOpen>
  <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
    Order history
    <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p className="px-2 pt-2 text-sm text-muted-foreground">
      12 orders in the last year, totalling £1,240.
    </p>
  </CollapsibleContent>
</Collapsible>`;

const COLLAPSIBLE_DISABLED_CODE = `<Collapsible disabled>
  <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
    Archived invoices
    <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p className="px-2 pt-2 text-sm text-muted-foreground">
      Invoices older than 7 years are removed.
    </p>
  </CollapsibleContent>
</Collapsible>`;

const COLLAPSIBLE_API: ApiSection[] = [
  {
    component: "Collapsible",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initially open panel (uncontrolled).",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the panel is opened or closed.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Ignore user interaction across the whole collapsible.",
      },
    ],
  },
  {
    component: "CollapsibleTrigger",
    props: [
      {
        name: "render",
        type: "ReactElement | ((props) => ReactNode)",
        description: "Render a custom trigger element, e.g. render={<Button>Edit</Button>}.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the trigger.",
      },
    ],
  },
  {
    component: "CollapsibleContent",
    props: [
      {
        name: "keepMounted",
        type: "boolean",
        default: "false",
        description: "Keep panel content in the DOM while closed.",
      },
      {
        name: "hiddenUntilFound",
        type: "boolean",
        default: "false",
        description: "Hide the closed panel with hidden=\"until-found\" so browser find can expand it.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default panel styles.",
      },
    ],
  },
];

const COMMAND_SOURCE = `"use client";

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
      className="flex h-10 shrink-0 items-center gap-2 border-b border-border/60 px-3"
    >
      <MagnifierIcon className="size-4 shrink-0 text-muted-foreground" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground/72 flex h-10 w-full min-w-0 bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[selected=true]:**:text-accent-foreground hover:bg-accent hover:text-accent-foreground [&_svg:not([class*='size-'])]:size-3.5 group/command-item relative flex min-h-8 cursor-default items-center gap-2 rounded-lg px-2 py-1 text-xs leading-snug outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
      className={cn("bg-border/50 -mx-1 my-1 h-px", className)}
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
   * Element rendered as the open trigger, e.g. \`<Button>Search...</Button>\`.
   * Omit it and control \`open\` / \`onOpenChange\` yourself for hotkey-driven
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
};`;

const COMMAND_IMPORT = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@noarka/ui";`;

const COMMAND_USAGE = `<Command className="border">
  <CommandInput placeholder="Search commands..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem value="docs">Documentation</CommandItem>
      <CommandItem value="themes">Themes</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;

const COMMAND_PREVIEW_CODE = `<div className="flex justify-center">
  <CommandDialog trigger={<Button variant="outline">Search actions...</Button>}>
    <CommandInput placeholder="Search for apps and commands..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">Calendar</CommandItem>
        <CommandItem value="docs">Documentation</CommandItem>
        <CommandItem value="themes">Themes</CommandItem>
      </CommandGroup>
    </CommandList>
    <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
      <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
      <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
    </div>
  </CommandDialog>
</div>`;

const COMMAND_GROUPS_CODE = `<div className="flex justify-center">
  <CommandDialog trigger={<Button variant="outline">Search settings...</Button>}>
    <CommandInput placeholder="Search settings..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="General">
        <CommandItem value="profile">Profile</CommandItem>
        <CommandItem value="billing">Billing</CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Workspace">
        <CommandItem value="members">Members</CommandItem>
        <CommandItem value="keys">API keys</CommandItem>
      </CommandGroup>
    </CommandList>
    <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
      <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
      <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
    </div>
  </CommandDialog>
</div>`;

const COMMAND_SHORTCUT_IMPORT = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@noarka/ui";`;

const COMMAND_SHORTCUT_CODE = `<div className="flex justify-center">
  <CommandDialog trigger={<Button variant="outline">Open commands...</Button>}>
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem value="copy">
          Copy <CommandShortcut>Ctrl C</CommandShortcut>
        </CommandItem>
        <CommandItem value="paste">
          Paste <CommandShortcut>Ctrl V</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
    <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
      <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
      <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
    </div>
  </CommandDialog>
</div>`;

const COMMAND_DISABLED_CODE = `<div className="flex justify-center">
  <CommandDialog trigger={<Button variant="outline">Search actions...</Button>}>
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">Calendar</CommandItem>
        <CommandItem value="billing" disabled>
          Billing (no access)
        </CommandItem>
      </CommandGroup>
    </CommandList>
    <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
      <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
      <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
    </div>
  </CommandDialog>
</div>`;

const COMMAND_TRIGGER_IMPORT = `import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Kbd,
} from "@noarka/ui";`;

const COMMAND_TRIGGER_CODE = `<div className="flex justify-center">
  <CommandDialog trigger={<Button variant="outline">Search actions...</Button>}>
    <CommandInput placeholder="Search for apps and commands..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">Calendar</CommandItem>
        <CommandItem value="docs">Documentation</CommandItem>
        <CommandItem value="themes">Themes</CommandItem>
      </CommandGroup>
    </CommandList>
    <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
      <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
      <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
    </div>
  </CommandDialog>
</div>`;

const COMMAND_API: ApiSection[] = [
  {
    component: "Command",
    props: [
      {
        name: "label",
        type: "string",
        description: "Accessible label for the menu. Not shown visibly.",
      },
      {
        name: "shouldFilter",
        type: "boolean",
        default: "true",
        description: "Set to false to turn off automatic filtering and sort yourself.",
      },
      {
        name: "filter",
        type: "(value: string, search: string, keywords?: string[]) => number",
        description: "Custom match score from 0 (hidden) to 1 (best match). Defaults to the command-score filter.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initially selected item value when uncontrolled.",
      },
      {
        name: "value",
        type: "string",
        description: "Controlled selected item value. Use with onValueChange.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Called when the selected item changes.",
      },
      {
        name: "loop",
        type: "boolean",
        default: "false",
        description: "Loop arrow key navigation around the ends of the list.",
      },
      {
        name: "disablePointerSelection",
        type: "boolean",
        default: "false",
        description: "Set to true to disable selection via pointer events.",
      },
      {
        name: "vimBindings",
        type: "boolean",
        default: "true",
        description: "Set to false to disable ctrl+n/j/p/k shortcuts.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default menu styles.",
      },
    ],
  },
  {
    component: "CommandDialog",
    props: [
      {
        name: "trigger",
        type: "ReactElement",
        description:
          "Element rendered as the open trigger, e.g. render a Button. Omit it and control open / onOpenChange yourself for hotkey-driven palettes.",
      },
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state. Use with onOpenChange.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the menu opens or closes (Esc, outside click).",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged onto the floating panel.",
      },
    ],
  },
  {
    component: "CommandInput",
    props: [
      {
        name: "value",
        type: "string",
        description: "Controlled search text. Use with onValueChange.",
      },
      {
        name: "onValueChange",
        type: "(search: string) => void",
        description: "Called when the search text changes.",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Hint text shown while the search is empty.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the search input.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default input styles.",
      },
    ],
  },
  {
    component: "CommandList",
    props: [
      {
        name: "label",
        type: "string",
        default: '"Suggestions"',
        description: "Accessible label for the list of suggestions. Not shown visibly.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default list styles.",
      },
    ],
  },
  {
    component: "CommandEmpty",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Shown automatically when the search matches nothing.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default empty styles.",
      },
    ],
  },
  {
    component: "CommandGroup",
    props: [
      {
        name: "heading",
        type: "ReactNode",
        description: "Heading rendered above the grouped items.",
      },
      {
        name: "value",
        type: "string",
        description: "Unique group value. Required when no heading is provided.",
      },
      {
        name: "forceMount",
        type: "boolean",
        description: "Always render the group even when filtering hides it.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default group styles.",
      },
    ],
  },
  {
    component: "CommandItem",
    props: [
      {
        name: "value",
        type: "string",
        description: "Unique value for the item. Inferred from the text content when omitted, so pass a stable value when the content changes between renders.",
      },
      {
        name: "keywords",
        type: "string[]",
        description: "Extra keywords matched against when filtering.",
      },
      {
        name: "onSelect",
        type: "(value: string) => void",
        description: "Called when the item is selected via click or keyboard.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the item so it cannot be selected.",
      },
      {
        name: "forceMount",
        type: "boolean",
        description: "Always render the item even when filtering hides it.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default item styles.",
      },
    ],
  },
  {
    component: "CommandSeparator",
    props: [
      {
        name: "alwaysRender",
        type: "boolean",
        description: "Always render the separator. By default it hides while searching.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default separator styles.",
      },
    ],
  },
  {
    component: "CommandShortcut",
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional classes merged with the default shortcut hint styles.",
      },
    ],
  },
];

export const COMPONENTS: ComponentEntry[] = [
  {
    slug: "accordion",
    name: "Accordion",
    description: "Stacked expandable sections with animated panels.",
    imports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent", "AccordionChevron"],
    code: ACCORDION_PREVIEW_CODE,
    demo: (
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is Noarka UI? <AccordionChevron />
          </AccordionTrigger>
          <AccordionContent>
            <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
              An open-source React component library built on Base UI primitives.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How do I install it? <AccordionChevron />
          </AccordionTrigger>
          <AccordionContent>
            <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
              Run the install command, import the tokens, and render primitives directly.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    details: {
      installCli: "@noarka/cli add accordion",
      installPackages: ["@noarka/ui", "@base-ui/react", "@solar-icons/react", "clsx", "tailwind-merge"],
      source: ACCORDION_SOURCE,
      sourceFilename: "components/ui/accordion.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: ACCORDION_IMPORT,
      usage: ACCORDION_USAGE,
      api: ACCORDION_API,
      examples: [
        {
          title: "Single open panel",
          description: "Only one item stays open at a time. Opening another closes the first.",
          code: ACCORDION_SINGLE_CODE,
          demo: (
            <Accordion defaultValue={["returns"]}>
              <AccordionItem value="returns">
                <AccordionTrigger>
                  Returns <AccordionChevron />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
                    Free returns within 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="warranty">
                <AccordionTrigger>
                  Warranty <AccordionChevron />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
                    Two year warranty on all parts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "Multiple open panels",
          description: "Pass multiple to keep more than one item open at a time.",
          code: ACCORDION_MULTIPLE_CODE,
          demo: (
            <Accordion multiple defaultValue={["a"]}>
              <AccordionItem value="a">
                <AccordionTrigger>
                  Returns <AccordionChevron />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
                    Free returns within 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>
                  Warranty <AccordionChevron />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
                    Two year warranty on all parts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "Disabled item",
          description: "Items accept disabled to lock them closed.",
          code: ACCORDION_DISABLED_CODE,
          demo: (
            <Accordion defaultValue={["a"]}>
              <AccordionItem value="a">
                <AccordionTrigger>
                  Returns <AccordionChevron />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
                    Free returns within 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b" disabled>
                <AccordionTrigger>
                  Warranty <AccordionChevron />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-4 pt-1 pb-4 text-sm text-muted-foreground">
                    Two year warranty on all parts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
      ],
    },
  },
  {
    slug: "button",
    name: "Button",
    description: "Six variants, seven sizes. Use render to polymorph into links.",
    imports: ["Button"],
    code: `import { Button } from "@noarka/ui";

<div className="flex justify-center">
  <Button>Default</Button>
</div>`,
    demo: (
      <div className="flex justify-center">
        <Button>Default</Button>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add button",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: BUTTON_SOURCE,
      sourceFilename: "components/ui/button.tsx",
      extraFiles: [
        { filename: "components/ui/button.variants.ts", code: BUTTON_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: BUTTON_IMPORT,
      usage: BUTTON_USAGE,
      api: BUTTON_API,
      examples: [
        {
          title: "Variants",
          description: "Six visual styles for different emphasis.",
          code: BUTTON_VARIANTS_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          ),
        },
        {
          title: "Sizes",
          description: "Small to large text sizes plus an icon-only button.",
          code: BUTTON_SIZES_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button size="xs">Extra small</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Example icon button">★</Button>
            </div>
          ),
        },
        {
          title: "As a link",
          description: "Use render to polymorph into an anchor while keeping button styles.",
          code: BUTTON_LINK_CODE,
          demo: (
            <div className="flex justify-center">
              <Button render={<a href="#">Read the docs</a>} />
            </div>
          ),
        },
        {
          title: "Icon buttons",
          description: "Icon-only sizes for compact actions. Always label them for assistive tech.",
          code: BUTTON_ICON_CODE,
          demo: (
            <div className="flex items-center justify-center gap-2">
              <Button size="icon" aria-label="Download">
                <AltArrowDownLinearIcon size={16} />
              </Button>
              <Button size="icon-sm" variant="secondary" aria-label="Download small">
                <AltArrowDownLinearIcon size={14} />
              </Button>
            </div>
          ),
        },
        {
          title: "Disabled",
          description: "Disabled buttons ignore pointer events and render at half opacity.",
          code: BUTTON_DISABLED_CODE,
          demo: (
            <div className="flex items-center justify-center gap-2">
              <Button disabled>Save changes</Button>
              <Button variant="secondary" disabled>
                Cancel
              </Button>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "badge",
    name: "Badge",
    description: "Status labels. Supports render like Button.",
    imports: ["Badge"],
    code: `import { Badge } from "@noarka/ui";

<div className="flex flex-wrap items-center justify-center gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="ghost">Ghost</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="link">Link</Badge>
</div>`,
    demo: (
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add badge",
      installPackages: ["@noarka/ui", "clsx", "tailwind-merge", "class-variance-authority"],
      source: BADGE_SOURCE,
      sourceFilename: "components/ui/badge.tsx",
      extraFiles: [
        { filename: "components/ui/badge.variants.ts", code: BADGE_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: BADGE_IMPORT,
      usage: BADGE_USAGE,
      api: BADGE_API,
      examples: [
        {
          title: "Status dot",
          description: "Prefix the label with a dot span for live status indicators.",
          code: BADGE_DOT_CODE,
          demo: (
            <div className="flex justify-center">
              <Badge variant="outline">
                <span className="size-1.5 rounded-full bg-success" />
                Live
              </Badge>
            </div>
          ),
        },
        {
          title: "As a link",
          description: "Use render to turn the badge into an anchor. Styles merge onto it.",
          code: BADGE_LINK_CODE,
          demo: (
            <div className="flex justify-center">
              <Badge variant="secondary" render={<a href="#">View changelog</a>} />
            </div>
          ),
        },
        {
          title: "Custom colors",
          description: "Override with utilities for one-off status colors.",
          code: BADGE_CUSTOM_CODE,
          demo: (
            <div className="flex justify-center">
              <Badge className="border-transparent bg-success/15 text-success">Active</Badge>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "input",
    name: "Input",
    description: "Three sizes, plus search and file types.",
    imports: ["Input"],
    code: `import { Input } from "@noarka/ui";

<Input placeholder="Email address" />`,
    demo: (
      <Input placeholder="Email address" />
    ),
    details: {
      installCli: "@noarka/cli add input",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: INPUT_SOURCE,
      sourceFilename: "components/ui/input.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: INPUT_IMPORT,
      usage: INPUT_USAGE,
      api: INPUT_API,
      examples: [
        {
          title: "Sizes",
          description: "Small, default, and large heights.",
          code: INPUT_SIZES_CODE,
          demo: (
            <div className="space-y-3">
              <Input placeholder="Default input" />
              <Input size="sm" placeholder="Small input" />
              <Input size="lg" placeholder="Large input" />
            </div>
          ),
        },
        {
          title: "Search",
          description: "Search type with native cancel styling.",
          code: INPUT_SEARCH_CODE,
          demo: <Input type="search" placeholder="Search..." />,
        },
        {
          title: "File upload",
          description: "File type with a styled picker button.",
          code: INPUT_FILE_CODE,
          demo: <Input type="file" />,
        },
        {
          title: "Disabled and invalid",
          description: "Dimmed when disabled, red ring when aria-invalid.",
          code: INPUT_STATES_CODE,
          demo: (
            <div className="space-y-3">
              <Input placeholder="Disabled" disabled />
              <Input placeholder="Invalid email" aria-invalid="true" defaultValue="not-an-email" />
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "label",
    name: "Label",
    description: "Accessible label for form controls.",
    imports: ["Label", "Input"],
    code: LABEL_PREVIEW_CODE,
    demo: (
      <div className="mx-auto max-w-sm space-y-1.5">
        <Label htmlFor="demo-label">Email</Label>
        <Input id="demo-label" placeholder="you@example.com" />
      </div>
    ),
    details: {
      installCli: "@noarka/cli add label",
      installPackages: ["@noarka/ui", "clsx", "tailwind-merge"],
      source: LABEL_SOURCE,
      sourceFilename: "components/ui/label.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: LABEL_IMPORT,
      usage: LABEL_USAGE,
      api: LABEL_API,
      examples: [
        {
          title: "Required mark",
          description: "Flag required fields with an asterisk.",
          code: LABEL_REQUIRED_CODE,
          demo: (
            <div className="mx-auto max-w-sm space-y-1.5">
              <Label htmlFor="demo-name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="demo-name" placeholder="Ada Lovelace" required />
            </div>
          ),
        },
        {
          title: "Disabled group",
          description: "Labels dim automatically inside a disabled group or next to a disabled peer.",
          code: LABEL_DISABLED_CODE,
          demo: (
            <div className="group mx-auto max-w-sm space-y-1.5" data-disabled={true}>
              <Label htmlFor="demo-disabled">Email</Label>
              <Input id="demo-disabled" placeholder="you@example.com" disabled />
            </div>
          ),
        },
        {
          title: "With helper text",
          description: "Add a hint line under the field.",
          code: LABEL_HELPER_CODE,
          demo: (
            <div className="mx-auto max-w-sm space-y-1.5">
              <Label htmlFor="demo-bio">Bio</Label>
              <Input id="demo-bio" placeholder="Tell us about yourself" />
              <p className="text-xs text-muted-foreground">Visible on your public profile.</p>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "card",
    name: "Card",
    description: "Default single border, or the double-border KPI style.",
    imports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter", "CardAction", "Button"],
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@noarka/ui";

<Card>
  <CardHeader>
    <CardTitle>Default card</CardTitle>
    <CardDescription>Single border.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Card body.</p>
  </CardContent>
</Card>`,
    demo: (
      <Card>
        <CardHeader>
          <CardTitle>Default card</CardTitle>
          <CardDescription>Single border.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Card body.</p>
        </CardContent>
      </Card>
    ),
    details: {
      installCli: "@noarka/cli add card",
      installPackages: ["@noarka/ui", "clsx", "tailwind-merge", "class-variance-authority"],
      source: CARD_SOURCE,
      sourceFilename: "components/ui/card.tsx",
      extraFiles: [
        { filename: "components/ui/card.variants.ts", code: CARD_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: CARD_IMPORT,
      usage: CARD_USAGE,
      api: CARD_API,
      examples: [
        {
          title: "Single border",
          description: "The default card with a single border.",
          code: CARD_SINGLE_CODE,
          demo: (
            <Card>
              <CardHeader>
                <CardTitle>Default card</CardTitle>
                <CardDescription>Single border.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Card body.</p>
              </CardContent>
            </Card>
          ),
        },
        {
          title: "Double border",
          description: "The KPI style with a double-border frame.",
          code: CARD_DOUBLE_CODE,
          demo: (
            <Card variant="border">
              <p className="text-sm font-medium">Border card</p>
              <p className="text-sm text-muted-foreground">Double border effect.</p>
              <p className="font-serif text-3xl font-medium">$12,408</p>
            </Card>
          ),
        },
        {
          title: "With header action and footer",
          description: "CardAction docks a control in the header corner. Footer renders the muted band.",
          code: CARD_FOOTER_IMPORT + "\n\n" + CARD_FOOTER_CODE,
          demo: (
            <Card>
              <CardHeader>
                <CardTitle>Invite a teammate</CardTitle>
                <CardDescription>They get access immediately.</CardDescription>
                <CardAction>
                  <Button size="sm" variant="outline">Copy link</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Pending invites appear here.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Send invite</Button>
              </CardFooter>
            </Card>
          ),
        },
      ],
    },
  },
  {
    slug: "separator",
    name: "Separator",
    description: "Horizontal or vertical divider.",
    imports: ["Separator"],
    code: SEPARATOR_PREVIEW_CODE,
    demo: (
      <div className="mx-auto max-w-sm space-y-2 text-sm">
        <p>Above</p>
        <Separator />
        <p>Below</p>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add separator",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: SEPARATOR_SOURCE,
      sourceFilename: "components/ui/separator.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: SEPARATOR_IMPORT,
      usage: SEPARATOR_USAGE,
      api: SEPARATOR_API,
      examples: [
        {
          title: "Vertical",
          description: "Place dividers between inline items in a fixed-height row.",
          code: SEPARATOR_VERTICAL_CODE,
          demo: (
            <div className="flex h-5 items-center justify-center gap-2 text-sm">
              <span>Home</span>
              <Separator orientation="vertical" />
              <span>Docs</span>
              <Separator orientation="vertical" />
              <span>Blog</span>
            </div>
          ),
        },
        {
          title: "Menu list",
          description: "Split stacked rows with hairlines.",
          code: SEPARATOR_LIST_CODE,
          demo: (
            <div className="mx-auto max-w-sm space-y-1 text-sm">
              <p className="px-1">Profile</p>
              <Separator />
              <p className="px-1">Billing</p>
              <Separator />
              <p className="px-1">Sign out</p>
            </div>
          ),
        },
        {
          title: "Custom style",
          description: "Recolor through className overrides.",
          code: SEPARATOR_CUSTOM_CODE,
          demo: (
            <div className="mx-auto max-w-sm space-y-2 text-sm">
              <p>Above</p>
              <Separator className="bg-destructive/50" />
              <p>Below</p>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "Image with automatic fallback.",
    imports: ["Avatar", "AvatarImage", "AvatarFallback"],
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@noarka/ui";

<div className="flex items-center justify-center gap-3">
  <Avatar>
    <AvatarImage src="/placeholder-image.png" alt="Avatar" />
    <AvatarFallback>NK</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AR</AvatarFallback>
  </Avatar>
</div>`,
    demo: (
      <div className="flex items-center justify-center gap-3">
        <Avatar>
          <AvatarImage src="/placeholder-image.png" alt="Avatar" />
          <AvatarFallback>NK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add avatar",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: AVATAR_SOURCE,
      sourceFilename: "components/ui/avatar.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: AVATAR_IMPORT,
      usage: AVATAR_USAGE,
      api: AVATAR_API,
      examples: [
        {
          title: "Sizes",
          description: "Control the size with height and width utilities. Default is h-10 w-10.",
          code: AVATAR_SIZES_CODE,
          demo: (
            <div className="flex items-center justify-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-image.png" alt="Avatar" />
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-image.png" alt="Avatar" />
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-image.png" alt="Avatar" />
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
        {
          title: "Square shape",
          description: "Override the default full rounding with any radius. Apply it to both Avatar and AvatarFallback.",
          code: AVATAR_SQUARE_CODE,
          demo: (
            <div className="flex items-center justify-center gap-3">
              <Avatar className="rounded-xl">
                <AvatarImage src="/placeholder-image.png" alt="Avatar" />
                <AvatarFallback className="rounded-xl">NK</AvatarFallback>
              </Avatar>
              <Avatar className="rounded-xl">
                <AvatarFallback className="rounded-xl">AR</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
        {
          title: "Stacked group",
          description: "Overlap avatars with negative spacing, matching the ring to the card behind them.",
          code: AVATAR_STACKED_CODE,
          demo: (
            <div className="flex justify-center -space-x-2">
              <Avatar className="ring-2 ring-card">
                <AvatarImage src="/placeholder-image.png" alt="Avatar" />
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-card">
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-card">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Checked, unchecked, and indeterminate states.",
    imports: ["Checkbox"],
    code: `import { Checkbox } from "@noarka/ui";

<div className="flex justify-center">
  <label className="flex cursor-pointer items-center gap-2 text-sm">
    <Checkbox defaultChecked /> Email notifications
  </label>
</div>`,
    demo: (
      <div className="flex justify-center">
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox defaultChecked /> Email notifications
        </label>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add checkbox",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: CHECKBOX_SOURCE,
      sourceFilename: "components/ui/checkbox.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: CHECKBOX_IMPORT,
      usage: CHECKBOX_USAGE,
      api: CHECKBOX_API,
      examples: [
        {
          title: "Form integration",
          description: "Name, value and required wire the checkbox into native form submission and validation.",
          code: `import { Button, Checkbox } from "@noarka/ui";` + "\n\n" + CHECKBOX_FORM_CODE,
          demo: (
            <div className="flex justify-center">
              <form className="w-full max-w-sm space-y-3" action="#">
                <label className="flex cursor-pointer items-start gap-2 text-sm">
                  <Checkbox name="terms" value="accepted" required className="mt-0.5" />
                  <span>
                    Accept the terms
                    <span className="block text-xs text-muted-foreground">Required to create your account.</span>
                  </span>
                </label>
                <Button type="submit" className="w-full">
                  Create account
                </Button>
              </form>
            </div>
          ),
        },
        {
          title: "Disabled",
          description: "Disabled checkboxes ignore interaction and render dimmed.",
          code: CHECKBOX_DISABLED_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <label className="flex cursor-not-allowed items-center gap-2 text-sm opacity-70">
                <Checkbox defaultChecked disabled /> Checked
              </label>
              <label className="flex cursor-not-allowed items-center gap-2 text-sm opacity-70">
                <Checkbox disabled /> Unchecked
              </label>
            </div>
          ),
        },
        {
          title: "With description",
          description: "Pair the label with helper text for longer explanations.",
          code: CHECKBOX_DESC_CODE,
          demo: (
            <div className="flex justify-center">
              <label className="flex cursor-pointer items-start gap-2 text-sm">
                <Checkbox defaultChecked className="mt-0.5" />
                <span>
                  Email notifications
                  <span className="block text-xs text-muted-foreground">Get notified about activity.</span>
                </span>
              </label>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "switch",
    name: "Switch",
    description: "On/off toggle.",
    imports: ["Switch"],
    code: SWITCH_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <Switch defaultChecked /> Enable notifications
        </label>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add switch",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: SWITCH_SOURCE,
      sourceFilename: "components/ui/switch.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: SWITCH_IMPORT,
      usage: SWITCH_USAGE,
      api: SWITCH_API,
      examples: [
        {
          title: "States",
          description: "On, off, and disabled side by side.",
          code: SWITCH_STATES_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <Switch defaultChecked /> On
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <Switch /> Off
              </label>
              <label className="flex cursor-not-allowed items-center gap-2 text-sm opacity-70">
                <Switch disabled /> Disabled
              </label>
            </div>
          ),
        },
        {
          title: "With description",
          description: "Pair the label with helper text for longer explanations.",
          code: SWITCH_DESC_CODE,
          demo: (
            <div className="flex justify-center">
              <label className="flex cursor-pointer items-start gap-2 text-sm">
                <Switch defaultChecked className="mt-0.5" />
                <span>
                  Marketing emails
                  <span className="block text-xs text-muted-foreground">Occasional product news, no spam.</span>
                </span>
              </label>
            </div>
          ),
        },
        {
          title: "Settings list",
          description: "Stacked toggle rows separated by dividers.",
          code: SWITCH_LIST_CODE,
          demo: (
            <div className="mx-auto w-full max-w-sm divide-y divide-border rounded-xl border">
              <label className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
                Push notifications
                <Switch defaultChecked />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
                Email digests
                <Switch />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm">
                SMS alerts
                <Switch disabled />
              </label>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    description: "Expandable region with animated panel.",
    imports: ["Collapsible", "CollapsibleTrigger", "CollapsibleContent"],
    code: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@noarka/ui";
import { AltArrowDownLinearIcon } from "@solar-icons/react";

<Collapsible>
  <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
    What is Noarka UI?
    <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p className="px-2 pt-2 text-sm text-muted-foreground">
      An open-source React component library built on Base UI.
    </p>
  </CollapsibleContent>
</Collapsible>`,
    demo: (
      <Collapsible>
        <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
          What is Noarka UI?
          <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <p className="px-2 pt-2 text-sm text-muted-foreground">
            An open-source React component library built on Base UI.
          </p>
        </CollapsibleContent>
      </Collapsible>
    ),
    details: {
      installCli: "@noarka/cli add collapsible",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: COLLAPSIBLE_SOURCE,
      sourceFilename: "components/ui/collapsible.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: COLLAPSIBLE_IMPORT,
      usage: COLLAPSIBLE_USAGE,
      api: COLLAPSIBLE_API,
      examples: [
        {
          title: "Open by default",
          description: "Pass defaultOpen to render the panel expanded on first paint.",
          code: COLLAPSIBLE_OPEN_CODE,
          demo: (
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
                Order history
                <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="px-2 pt-2 text-sm text-muted-foreground">
                  12 orders in the last year, totalling £1,240.
                </p>
              </CollapsibleContent>
            </Collapsible>
          ),
        },
        {
          title: "Disabled",
          description: "Pass disabled to lock the panel shut.",
          code: COLLAPSIBLE_DISABLED_CODE,
          demo: (
            <Collapsible disabled>
              <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium">
                Archived invoices
                <AltArrowDownLinearIcon size={16} className="transition-transform group-data-panel-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="px-2 pt-2 text-sm text-muted-foreground">
                  Invoices older than 7 years are removed.
                </p>
              </CollapsibleContent>
            </Collapsible>
          ),
        },
      ],
    },
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "Two-state pressed button.",
    imports: ["Toggle"],
    code: TOGGLE_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <Toggle defaultPressed aria-label="Notifications">
          On
        </Toggle>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add toggle",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: TOGGLE_SOURCE,
      sourceFilename: "components/ui/toggle.tsx",
      extraFiles: [
        { filename: "components/ui/toggle.variants.ts", code: TOGGLE_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: TOGGLE_IMPORT,
      usage: TOGGLE_USAGE,
      api: TOGGLE_API,
      examples: [
        {
          title: "Variants",
          description: "Default and outline styles.",
          code: TOGGLE_VARIANTS_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Toggle defaultPressed aria-label="Default pressed">
                On
              </Toggle>
              <Toggle variant="outline" aria-label="Outline">
                Outline
              </Toggle>
            </div>
          ),
        },
        {
          title: "Sizes",
          description: "Small, default, and large.",
          code: TOGGLE_SIZES_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Toggle size="sm" aria-label="Small">
                Small
              </Toggle>
              <Toggle aria-label="Default">
                Default
              </Toggle>
              <Toggle size="lg" aria-label="Large">
                Large
              </Toggle>
            </div>
          ),
        },
        {
          title: "Disabled",
          description: "Disabled toggles ignore interaction.",
          code: TOGGLE_DISABLED_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Toggle disabled aria-label="Disabled off">
                Off
              </Toggle>
              <Toggle defaultPressed disabled aria-label="Disabled on">
                On
              </Toggle>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "Tabbed interface with keyboard navigation.",
    imports: ["Tabs", "TabsList", "TabsTab", "TabsPanel"],
    code: `import { Tabs, TabsList, TabsPanel, TabsTab } from "@noarka/ui";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTab value="overview">Overview</TabsTab>
    <TabsTab value="code">Code</TabsTab>
  </TabsList>
  <TabsPanel value="overview">
    <p className="pt-3 text-sm text-muted-foreground">
      Switch between tabs. Arrow keys work too.
    </p>
  </TabsPanel>
  <TabsPanel value="code">
    <p className="pt-3 text-sm text-muted-foreground">
      Each panel renders only when its tab is active.
    </p>
  </TabsPanel>
</Tabs>`,
    demo: (
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTab value="overview">Overview</TabsTab>
          <TabsTab value="code">Code</TabsTab>
        </TabsList>
        <TabsPanel value="overview">
          <p className="pt-3 text-sm text-muted-foreground">
            Switch between tabs. Arrow keys work too.
          </p>
        </TabsPanel>
        <TabsPanel value="code">
          <p className="pt-3 text-sm text-muted-foreground">
            Each panel renders only when its tab is active.
          </p>
        </TabsPanel>
      </Tabs>
    ),
    details: {
      installCli: "@noarka/cli add tabs",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: TABS_SOURCE,
      sourceFilename: "components/ui/tabs.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: TABS_IMPORT,
      usage: TABS_USAGE,
      api: TABS_API,
      examples: [
        {
          title: "Disabled tab",
          description: "Disabled tabs are skipped by clicks and keyboard navigation.",
          code: TABS_DISABLED_CODE,
          demo: (
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTab value="overview">Overview</TabsTab>
                <TabsTab value="activity">Activity</TabsTab>
                <TabsTab value="settings" disabled>Settings</TabsTab>
              </TabsList>
              <TabsPanel value="overview">
                <p className="pt-3 text-sm text-muted-foreground">Project overview.</p>
              </TabsPanel>
              <TabsPanel value="activity">
                <p className="pt-3 text-sm text-muted-foreground">Recent events.</p>
              </TabsPanel>
              <TabsPanel value="settings">
                <p className="pt-3 text-sm text-muted-foreground">Requires admin access.</p>
              </TabsPanel>
            </Tabs>
          ),
        },
        {
          title: "Custom tab content",
          description: "Tabs accept rich children like count badges.",
          code: TABS_COUNT_CODE,
          demo: (
            <Tabs defaultValue="inbox">
              <TabsList>
                <TabsTab value="inbox">Inbox</TabsTab>
                <TabsTab value="sent">
                  Sent
                  <span className="ml-1 rounded-full bg-muted px-1.5 text-xs">3</span>
                </TabsTab>
              </TabsList>
              <TabsPanel value="inbox">
                <p className="pt-3 text-sm text-muted-foreground">No unread messages.</p>
              </TabsPanel>
              <TabsPanel value="sent">
                <p className="pt-3 text-sm text-muted-foreground">3 messages sent this week.</p>
              </TabsPanel>
            </Tabs>
          ),
        },
        {
          title: "Vertical",
          description: "Stack the list beside the panels with a vertical orientation.",
          code: TABS_VERTICAL_CODE,
          demo: (
            <Tabs defaultValue="general" orientation="vertical">
              <div className="flex gap-4">
                <TabsList className="flex-col items-stretch">
                  <TabsTab value="general">General</TabsTab>
                  <TabsTab value="security">Security</TabsTab>
                </TabsList>
                <div className="flex-1">
                  <TabsPanel value="general">
                    <p className="pt-1 text-sm text-muted-foreground">General preferences.</p>
                  </TabsPanel>
                  <TabsPanel value="security">
                    <p className="pt-1 text-sm text-muted-foreground">Password and sessions.</p>
                  </TabsPanel>
                </div>
              </div>
            </Tabs>
          ),
        },
      ],
    },
  },
  {
    slug: "dialog",
    name: "Dialog",
    description: "Modal with backdrop, title, and footer.",
    imports: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogTitle", "DialogDescription", "DialogFooter", "Button", "Label", "Input"],
    code: DIALOG_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary">Open dialog</Button>} />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite a teammate</DialogTitle>
              <DialogDescription>They get access immediately.</DialogDescription>
            </DialogHeader>
            <div className="space-y-1.5">
              <Label htmlFor="demo-invite">Email</Label>
              <Input id="demo-invite" placeholder="teammate@company.com" />
            </div>
            <DialogFooter>
              <Button>Send invite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add dialog",
      installPackages: ["@noarka/ui", "@base-ui/react", "@solar-icons/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: DIALOG_SOURCE,
      sourceFilename: "components/ui/dialog.tsx",
      extraFiles: [
        { filename: "components/ui/button.tsx", code: BUTTON_SOURCE },
        { filename: "components/ui/button.variants.ts", code: BUTTON_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: DIALOG_IMPORT,
      usage: DIALOG_USAGE,
      api: DIALOG_API,
      examples: [
        {
          title: "Footer close button",
          description: "Let the footer render its own outline Close button.",
          code: DIALOG_FOOTER_CLOSE_CODE,
          demo: (
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger render={<Button variant="secondary">Open dialog</Button>} />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Invite a teammate</DialogTitle>
                    <DialogDescription>They get access immediately.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-1.5">
                    <Label htmlFor="demo-invite-footer">Email</Label>
                    <Input id="demo-invite-footer" placeholder="teammate@company.com" />
                  </div>
                  <DialogFooter showCloseButton>
                    <Button>Send invite</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ),
        },
        {
          title: "Nested dialog",
          description: "Opening the inner dialog hides the outer one. Closing it brings the outer back.",
          code: DIALOG_NESTED_CODE,
          demo: <NestedDialogDemo />,
        },
        {
          title: "Scrollable content",
          description: "Constrain long bodies with a max height so the dialog itself never overflows.",
          code: DIALOG_SCROLL_CODE,
          demo: (
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger render={<Button variant="outline">Read terms</Button>} />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Terms of service</DialogTitle>
                    <DialogDescription>Last updated June 2026.</DialogDescription>
                  </DialogHeader>
                  <div className="max-h-64 space-y-3 overflow-y-auto pr-1 text-sm text-muted-foreground">
                    <p>Welcome to Noarka. By using our services you agree to these terms.</p>
                    <p>Your workspace data remains yours. We never sell personal information to third parties.</p>
                    <p>Paid plans renew automatically each billing period. Cancel anytime from settings.</p>
                    <p>Accounts inactive for 24 months may be archived. Export your data before then.</p>
                    <p>Abuse, spam, or unlawful content may result in suspension without notice.</p>
                    <p>Questions? Contact support and we will respond within two business days.</p>
                  </div>
                  <DialogFooter>
                    <Button>Accept</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description: "Blocking confirmation with action and cancel.",
    imports: ["AlertDialog", "AlertDialogTrigger", "AlertDialogContent", "AlertDialogHeader", "AlertDialogTitle", "AlertDialogDescription", "AlertDialogFooter", "AlertDialogCancel", "AlertDialogAction", "Button"],
    code: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button } from "@noarka/ui";

<div className="flex justify-center">
  <AlertDialog>
    <AlertDialogTrigger render={<Button variant="destructive">Delete workspace</Button>} />
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>`,
    demo: (
      <div className="flex justify-center">
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive">Delete workspace</Button>} />
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add alert-dialog",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: ALERT_DIALOG_SOURCE,
      sourceFilename: "components/ui/alert-dialog.tsx",
      extraFiles: [
        { filename: "components/ui/button.tsx", code: BUTTON_SOURCE },
        { filename: "components/ui/button.variants.ts", code: BUTTON_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: ALERT_DIALOG_IMPORT,
      usage: ALERT_DIALOG_USAGE,
      api: ALERT_DIALOG_API,
      examples: [
        {
          title: "Default size",
          description: "Roomier dialog for longer explanations. Uses the default size.",
          code: ALERT_DIALOG_DEFAULT_CODE,
          demo: (
            <div className="flex justify-center">
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="outline">Archive project</Button>} />
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Archive this project?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Archived projects are hidden from your workspace but can be restored at any time.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="default">Archive</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ),
        },
        {
          title: "Small size",
          description: "Compact dialog for short confirmations.",
          code: ALERT_DIALOG_SMALL_CODE,
          demo: (
            <div className="flex justify-center">
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="destructive">Remove member</Button>} />
                <AlertDialogContent size="sm">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove from team?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Ada will lose access immediately. You can invite them back later.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Remove</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ),
        },
        {
          title: "No footer",
          description: "Omit the footer entirely for a borderless layout.",
          code: ALERT_DIALOG_SINGLE_ACTION_CODE,
          demo: (
            <div className="flex justify-center">
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="outline">Show session notice</Button>} />
                <AlertDialogContent size="sm">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Session expired</AlertDialogTitle>
                    <AlertDialogDescription>
                      Please sign in again to continue working.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction variant="default">Sign in</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "Dialog panel sliding in from any edge.",
    imports: ["Sheet", "SheetTrigger", "SheetContent", "SheetHeader", "SheetTitle", "SheetDescription", "Button", "Switch"],
    code: SHEET_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <Sheet>
          <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Slides in from the right.</SheetDescription>
            </SheetHeader>
            <div className="px-4">
              <label className="flex items-center justify-between gap-3 text-sm">
                Compact mode <Switch />
              </label>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add sheet",
      installPackages: ["@noarka/ui", "@base-ui/react", "@solar-icons/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: SHEET_SOURCE,
      sourceFilename: "components/ui/sheet.tsx",
      extraFiles: [
        { filename: "components/ui/button.tsx", code: BUTTON_SOURCE },
        { filename: "components/ui/button.variants.ts", code: BUTTON_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: SHEET_IMPORT,
      usage: SHEET_USAGE,
      api: SHEET_API,
      examples: [
        {
          title: "Left side",
          description: "Slide in from any edge with the side prop.",
          code: SHEET_LEFT_CODE,
          demo: (
            <div className="flex justify-center">
              <Sheet>
                <SheetTrigger render={<Button variant="outline">Open menu</Button>} />
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Navigate the workspace.</SheetDescription>
                  </SheetHeader>
                  <div className="px-4">
                    <p className="text-sm text-muted-foreground">Dashboard</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                    <p className="text-sm text-muted-foreground">Settings</p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ),
        },
        {
          title: "With footer",
          description: "Pin actions to the panel bottom with SheetFooter.",
          code: SHEET_FOOTER_IMPORT + "\n\n" + SHEET_FOOTER_CODE,
          demo: (
            <div className="flex justify-center">
              <Sheet>
                <SheetTrigger render={<Button>Edit profile</Button>} />
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Changes are saved when you confirm.</SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <Button>Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          ),
        },
        {
          title: "Without close button",
          description: "Hide the corner X with showCloseButton={false}.",
          code: SHEET_NO_CLOSE_CODE,
          demo: (
            <div className="flex justify-center">
              <Sheet>
                <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
                <SheetContent side="right" showCloseButton={false}>
                  <SheetHeader>
                    <SheetTitle>Read only</SheetTitle>
                    <SheetDescription>Dismiss with escape or a click outside.</SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "Hover hint anchored to a trigger.",
    imports: ["Tooltip", "TooltipTrigger", "TooltipContent", "Button"],
    code: TOOLTIP_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
          <TooltipContent side="top">Useful extra context</TooltipContent>
        </Tooltip>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add tooltip",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: TOOLTIP_SOURCE,
      sourceFilename: "components/ui/tooltip.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: TOOLTIP_IMPORT,
      usage: TOOLTIP_USAGE,
      api: TOOLTIP_API,
      examples: [
        {
          title: "Sides",
          description: "Anchor the popup to any side of the trigger.",
          code: TOOLTIP_SIDES_CODE,
          demo: (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Top</Button>} />
                <TooltipContent side="top">Above the trigger</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Right</Button>} />
                <TooltipContent side="right">Right of the trigger</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Bottom</Button>} />
                <TooltipContent side="bottom">Below the trigger</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Left</Button>} />
                <TooltipContent side="left">Left of the trigger</TooltipContent>
              </Tooltip>
            </div>
          ),
        },
        {
          title: "Shared delay",
          description: "Group tooltips under one provider to share open timing.",
          code: TOOLTIP_DELAY_IMPORT + "\n\n" + TOOLTIP_DELAY_CODE,
          demo: (
            <TooltipProvider delay={100}>
              <div className="flex items-center justify-center gap-2">
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" size="sm">Fast A</Button>} />
                  <TooltipContent side="top">Appears quickly</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="outline" size="sm">Fast B</Button>} />
                  <TooltipContent side="top">Shares the same delay</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          ),
        },
        {
          title: "Long content",
          description: "Content wraps at the max width.",
          code: TOOLTIP_LONG_CODE,
          demo: (
            <div className="flex justify-center">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline">Hover for details</Button>} />
                <TooltipContent side="top">
                  Workspaces include unlimited projects, viewers, and version history on every plan.
                </TooltipContent>
              </Tooltip>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "menu",
    name: "Menu",
    description: "Menu with labels, separators, and destructive items.",
    imports: ["DropdownMenu", "DropdownMenuTrigger", "DropdownMenuContent", "DropdownMenuLabel", "DropdownMenuSeparator", "DropdownMenuItem", "Button"],
    code: MENU_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>ada@example.com</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add menu",
      installPackages: ["@noarka/ui", "@base-ui/react", "@solar-icons/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: DROPDOWN_MENU_SOURCE,
      sourceFilename: "components/ui/menu.tsx",
      extraFiles: [
        { filename: "components/ui/button.tsx", code: BUTTON_SOURCE },
        { filename: "components/ui/button.variants.ts", code: BUTTON_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: MENU_IMPORT,
      usage: MENU_USAGE,
      api: MENU_API,
      examples: [
        {
          title: "Checkbox items",
          description: "Toggle options with check indicators. Uncontrolled via defaultChecked.",
          code: MENU_CHECKBOX_CODE,
          demo: (
            <div className="flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline">View options</Button>} />
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem defaultChecked>Show toolbar</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Show sidebar</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ),
        },
        {
          title: "Radio items",
          description: "Single-select groups with a shared defaultValue.",
          code: MENU_RADIO_CODE,
          demo: (
            <div className="flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline">Sort by</Button>} />
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuRadioGroup defaultValue="newest">
                    <DropdownMenuRadioItem value="newest">Newest first</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="oldest">Oldest first</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="name">By name</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ),
        },
        {
          title: "Submenu",
          description: "Nest a submenu off any item trigger.",
          code: MENU_SUB_CODE,
          demo: (
            <div className="flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline">Open menu</Button>} />
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Copy link</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "select",
    name: "Select",
    description: "Dropdown select with aligned popup.",
    imports: ["Select", "SelectTrigger", "SelectValue", "SelectContent", "SelectItem"],
    code: SELECT_PREVIEW_CODE,
    demo: (
      <div className="mx-auto max-w-xs">
        <Select defaultValue="pro">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="team">Team</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add select",
      installPackages: ["@noarka/ui", "@base-ui/react", "@solar-icons/react", "clsx", "tailwind-merge"],
      source: SELECT_SOURCE,
      sourceFilename: "components/ui/select.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: SELECT_IMPORT,
      usage: SELECT_USAGE,
      api: SELECT_API,
      examples: [
        {
          title: "With label",
          description: "Pair the select with a form label.",
          code: SELECT_LABEL_CODE,
          demo: (
            <div className="mx-auto max-w-xs space-y-1.5">
              <Label htmlFor="demo-plan">Plan</Label>
              <Select defaultValue="pro">
                <SelectTrigger id="demo-plan">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ),
        },
        {
          title: "Grouped options",
          description: "Group items under labels with separators. Items accept disabled.",
          code: SELECT_GROUPED_CODE,
          demo: (
            <div className="mx-auto max-w-xs">
              <Select defaultValue="apple">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Vegetables</SelectLabel>
                    <SelectItem value="carrot">Carrot</SelectItem>
                    <SelectItem value="lettuce" disabled>Lettuce</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ),
        },
        {
          title: "Disabled",
          description: "The whole select locks with a single prop.",
          code: SELECT_DISABLED_CODE,
          demo: (
            <div className="mx-auto max-w-xs">
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Unavailable" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "kbd",
    name: "Kbd",
    description: "Keyboard key cap for shortcuts and hints.",
    imports: ["Kbd"],
    code: KBD_PREVIEW_CODE,
    demo: (
      <div className="flex items-center justify-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span className="text-xs text-muted-foreground">+</span>
        <Kbd>K</Kbd>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add kbd",
      installPackages: ["@noarka/ui", "clsx", "tailwind-merge"],
      source: KBD_SOURCE,
      sourceFilename: "components/ui/kbd.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: KBD_IMPORT,
      usage: KBD_USAGE,
      api: KBD_API,
      examples: [
        {
          title: "Key combinations",
          description: "Join caps with plus separators.",
          code: KBD_COMBO_CODE,
          demo: (
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <Kbd>Ctrl</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>K</Kbd>
              </span>
              <span className="flex items-center gap-1">
                <Kbd>Shift</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>Ctrl</Kbd>
                <span className="text-xs text-muted-foreground">+</span>
                <Kbd>S</Kbd>
              </span>
            </div>
          ),
        },
        {
          title: "Single keys",
          description: "Standalone caps for navigation hints.",
          code: KBD_SINGLE_CODE,
          demo: (
            <div className="flex items-center justify-center gap-2">
              <Kbd>Esc</Kbd>
              <Kbd>Enter</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>⌫</Kbd>
            </div>
          ),
        },
        {
          title: "Inline in text",
          description: "Drop caps into running copy.",
          code: KBD_INLINE_CODE,
          demo: (
            <div className="mx-auto max-w-sm">
              <p className="text-sm text-muted-foreground">
                Select all with <Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>, then copy with <Kbd>Ctrl</Kbd> +{" "}
                <Kbd>C</Kbd>.
              </p>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description: "Shimmer placeholder while content loads.",
    imports: ["Skeleton"],
    code: SKELETON_PREVIEW_CODE,
    demo: (
      <div className="mx-auto w-full max-w-sm space-y-3">
        <Skeleton className="h-32 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add skeleton",
      installPackages: ["@noarka/ui", "clsx", "tailwind-merge"],
      source: SKELETON_SOURCE,
      sourceFilename: "components/ui/skeleton.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: SKELETON_IMPORT,
      usage: SKELETON_USAGE,
      api: SKELETON_API,
      examples: [
        {
          title: "Profile",
          description: "Circle avatar with text lines.",
          code: SKELETON_PROFILE_CODE,
          demo: (
            <div className="mx-auto flex w-full max-w-sm items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ),
        },
        {
          title: "Table rows",
          description: "Stacked bars for list content.",
          code: SKELETON_TABLE_CODE,
          demo: (
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          ),
        },
        {
          title: "Article text",
          description: "Heading bar with paragraph lines.",
          code: SKELETON_ARTICLE_CODE,
          demo: (
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Hierarchical trail with links and current page.",
    imports: ["Breadcrumb", "BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink", "BreadcrumbPage", "BreadcrumbSeparator", "BreadcrumbEllipsis"],
    code: BREADCRUMB_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Library</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add breadcrumb",
      installPackages: ["@noarka/ui", "@solar-icons/react", "clsx", "tailwind-merge"],
      source: BREADCRUMB_SOURCE,
      sourceFilename: "components/ui/breadcrumb.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: BREADCRUMB_IMPORT,
      usage: BREADCRUMB_USAGE,
      api: BREADCRUMB_API,
      examples: [
        {
          title: "With ellipsis",
          description: "Collapse middle levels behind an ellipsis.",
          code: BREADCRUMB_ELLIPSIS_CODE,
          demo: (
            <div className="flex justify-center">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          ),
        },
        {
          title: "Custom separator",
          description: "Pass any glyph as the separator child.",
          code: BREADCRUMB_SLASH_CODE,
          demo: (
            <div className="flex justify-center">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Library</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          ),
        },
        {
          title: "Overflow menu",
          description: "Hide collapsed levels inside a menu.",
          code: BREADCRUMB_OVERFLOW_IMPORT + "\n\n" + BREADCRUMB_OVERFLOW_CODE,
          demo: (
            <div className="flex justify-center">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <button
                            aria-label="More pages"
                            className="flex size-5 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
                          >
                            &#8230;
                          </button>
                        }
                      />
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Components</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Button</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "Page navigation with numbered links.",
    imports: ["Pagination", "PaginationContent", "PaginationItem", "PaginationLink", "PaginationPrevious", "PaginationNext", "PaginationEllipsis"],
    code: PAGINATION_PREVIEW_CODE,
    demo: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    details: {
      installCli: "@noarka/cli add pagination",
      installPackages: ["@noarka/ui", "@solar-icons/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: PAGINATION_SOURCE,
      sourceFilename: "components/ui/pagination.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: PAGINATION_IMPORT,
      usage: PAGINATION_USAGE,
      api: PAGINATION_API,
      examples: [
        {
          title: "Many pages",
          description: "Previous/next controls with an ellipsis over skipped ranges.",
          code: PAGINATION_MANY_CODE,
          demo: (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ),
        },
        {
          title: "Small size",
          description: "Compact page buttons.",
          code: PAGINATION_SMALL_CODE,
          demo: (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink href="#" size="sm" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="sm">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="sm">
                    3
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ),
        },
        {
          title: "Compact",
          description: "Previous/next around a page counter.",
          code: PAGINATION_COMPACT_CODE,
          demo: (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#">Back</PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <span className="px-2 text-sm text-muted-foreground">Page 2 of 10</span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#">Continue</PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ),
        },
      ],
    },
  },
  {
    slug: "popover",
    name: "Popover",
    description: "Anchored panel with title and actions.",
    imports: ["Popover", "PopoverTrigger", "PopoverContent", "PopoverTitle", "PopoverDescription", "PopoverClose", "Button"],
    code: POPOVER_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
          <PopoverContent>
            <div className="space-y-1">
              <PopoverTitle>About this workspace</PopoverTitle>
              <PopoverDescription>Shared with 4 teammates. Created June 2026.</PopoverDescription>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add popover",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge", "class-variance-authority"],
      source: POPOVER_SOURCE,
      sourceFilename: "components/ui/popover.tsx",
      extraFiles: [
        { filename: "components/ui/button.tsx", code: BUTTON_SOURCE },
        { filename: "components/ui/button.variants.ts", code: BUTTON_VARIANTS_SOURCE },
        { filename: "utils/cn.ts", code: CN_SOURCE },
      ],
      usageImport: POPOVER_IMPORT,
      usage: POPOVER_USAGE,
      api: POPOVER_API,
      examples: [
        {
          title: "With actions",
          description: "Close and confirm controls in a footer band.",
          code: POPOVER_FORM_CODE,
          demo: (
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger render={<Button>Add note</Button>} />
                <PopoverContent>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <PopoverTitle>Quick note</PopoverTitle>
                      <PopoverDescription>Saved to this project.</PopoverDescription>
                    </div>
                    <PopoverFooter footer>
                      <PopoverClose render={<Button variant="outline" size="sm">Cancel</Button>} />
                      <Button size="sm">Save</Button>
                    </PopoverFooter>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ),
        },
        {
          title: "Side placement",
          description: "Dock the panel to any trigger edge.",
          code: POPOVER_SIDE_CODE,
          demo: (
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger render={<Button variant="outline">On the side</Button>} />
                <PopoverContent side="right" align="start">
                  <div className="space-y-1">
                    <PopoverTitle>Docked panel</PopoverTitle>
                    <PopoverDescription>Pinned to the trigger edge.</PopoverDescription>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ),
        },
        {
          title: "With input",
          description: "Collect a value without leaving the page.",
          code: POPOVER_INPUT_IMPORT + "\n\n" + POPOVER_INPUT_CODE,
          demo: (
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger render={<Button>Invite by email</Button>} />
                <PopoverContent>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <PopoverTitle>Invite a teammate</PopoverTitle>
                      <PopoverDescription>They get access immediately.</PopoverDescription>
                    </div>
                    <Input type="email" placeholder="teammate@company.com" />
                    <div className="flex justify-end">
                      <Button size="sm">Send invite</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    description: "Styled scrollbars for overflowing content.",
    imports: ["ScrollArea", "ScrollAreaScrollbar"],
    code: SCROLL_AREA_PREVIEW_CODE,
    demo: (
      <ScrollArea className="mx-auto h-64 w-full max-w-sm rounded-xl border">
        <div className="space-y-2 p-4">
          <p className="text-sm font-medium">Changelog</p>
          <p className="text-sm text-muted-foreground">v2.6: Dark mode polish.</p>
          <p className="text-sm text-muted-foreground">v2.5: Shared workspaces.</p>
          <p className="text-sm text-muted-foreground">v2.4: Faster sync.</p>
          <p className="text-sm text-muted-foreground">v2.3: New dashboard.</p>
          <p className="text-sm text-muted-foreground">v2.2: Bug fixes.</p>
          <p className="text-sm text-muted-foreground">v2.1: First release.</p>
          <p className="text-sm text-muted-foreground">v2.0: Hello world.</p>
          <p className="text-sm text-muted-foreground">v1.9: Beta channel.</p>
          <p className="text-sm text-muted-foreground">v1.8: Initial prototype.</p>
        </div>
      </ScrollArea>
    ),
    details: {
      installCli: "@noarka/cli add scroll-area",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: SCROLL_AREA_SOURCE,
      sourceFilename: "components/ui/scroll-area.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: SCROLL_AREA_IMPORT,
      usage: SCROLL_AREA_USAGE,
      api: SCROLL_AREA_API,
      examples: [
        {
          title: "Horizontal",
          description: "Add a horizontal scrollbar for wide content.",
          code: SCROLL_AREA_HORIZONTAL_CODE,
          demo: (
            <ScrollArea className="mx-auto w-full max-w-sm rounded-xl border">
              <div className="flex w-max gap-3 p-4">
                <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
                <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
                <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
                <div className="h-20 w-32 shrink-0 rounded-lg bg-muted" />
              </div>
              <ScrollAreaScrollbar orientation="horizontal" />
            </ScrollArea>
          ),
        },
        {
          title: "Contact list",
          description: "A realistic scrollable roster.",
          code: SCROLL_AREA_CONTACTS_CODE,
          demo: (
            <ScrollArea className="mx-auto h-64 w-full max-w-sm rounded-xl border">
              <div className="p-2">
                {["Ada", "Grace", "Alan", "Katherine", "Linus", "Margaret", "Dennis", "Barbara"].map((name) => (
                  <div key={name} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm">
                    <span className="flex size-6 items-center justify-center rounded-full bg-muted text-xs">
                      {name[0]}
                    </span>
                    {name}
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
        },
        {
          title: "Both axes",
          description: "Combine vertical and horizontal scrollbars for grids.",
          code: SCROLL_AREA_BOTH_CODE,
          demo: (
            <ScrollArea className="mx-auto h-48 w-full max-w-sm rounded-xl border">
              <div className="grid w-max grid-cols-4 gap-3 p-4">
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
                <div className="h-20 w-32 rounded-lg bg-muted" />
              </div>
              <ScrollAreaScrollbar orientation="horizontal" />
            </ScrollArea>
          ),
        },
      ],
    },
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    description: "Right-click menu with items and submenus.",
    imports: ["ContextMenu", "ContextMenuTrigger", "ContextMenuContent", "ContextMenuItem", "ContextMenuSeparator"],
    code: CONTEXT_MENU_PREVIEW_CODE,
    demo: (
      <div className="mx-auto w-full max-w-sm">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Sign out</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add context-menu",
      installPackages: ["@noarka/ui", "@base-ui/react", "@solar-icons/react", "clsx", "tailwind-merge"],
      source: CONTEXT_MENU_SOURCE,
      sourceFilename: "components/ui/context-menu.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: CONTEXT_MENU_IMPORT,
      usage: CONTEXT_MENU_USAGE,
      api: CONTEXT_MENU_API,
      examples: [
        {
          title: "With label",
          description: "Head the menu with an account label.",
          code: CONTEXT_MENU_LABEL_CODE,
          demo: (
            <div className="mx-auto w-full max-w-sm">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuLabel>ada@example.com</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Profile</ContextMenuItem>
                  <ContextMenuItem>Billing</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>
          ),
        },
        {
          title: "With shortcuts",
          description: "Hint at keyboard equivalents.",
          code: CONTEXT_MENU_SHORTCUT_IMPORT + "\n\n" + CONTEXT_MENU_SHORTCUT_CODE,
          demo: (
            <div className="mx-auto w-full max-w-sm">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>
                    Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>
          ),
        },
        {
          title: "With submenu",
          description: "Nest a submenu off any item trigger.",
          code: CONTEXT_MENU_SUB_IMPORT + "\n\n" + CONTEXT_MENU_SUB_CODE,
          demo: (
            <div className="mx-auto w-full max-w-sm">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Profile</ContextMenuItem>
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
                    <ContextMenuSubContent>
                      <ContextMenuItem>Email</ContextMenuItem>
                      <ContextMenuItem>Copy link</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive">Sign out</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "autocomplete",
    name: "Autocomplete",
    description: "Filter-as-you-type input with suggestions.",
    imports: ["Autocomplete", "AutocompleteInput", "AutocompleteContent", "AutocompleteItem", "AutocompleteEmpty"],
    code: AUTOCOMPLETE_PREVIEW_CODE,
    demo: (
      <div className="mx-auto max-w-xs">
        <Autocomplete>
          <AutocompleteInput placeholder="Search fruits..." />
          <AutocompleteContent>
            <AutocompleteItem value="apple">Apple</AutocompleteItem>
            <AutocompleteItem value="banana">Banana</AutocompleteItem>
            <AutocompleteItem value="cherry">Cherry</AutocompleteItem>
            <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
          </AutocompleteContent>
        </Autocomplete>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add autocomplete",
      installPackages: ["@noarka/ui", "@base-ui/react", "clsx", "tailwind-merge"],
      source: AUTOCOMPLETE_SOURCE,
      sourceFilename: "components/ui/autocomplete.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: AUTOCOMPLETE_IMPORT,
      usage: AUTOCOMPLETE_USAGE,
      api: AUTOCOMPLETE_API,
      examples: [
        {
          title: "Frameworks",
          description: "A longer list to filter through.",
          code: AUTOCOMPLETE_FRAMEWORKS_CODE,
          demo: (
            <div className="mx-auto max-w-xs">
              <Autocomplete>
                <AutocompleteInput placeholder="Search frameworks..." />
                <AutocompleteContent>
                  <AutocompleteItem value="next">Next.js</AutocompleteItem>
                  <AutocompleteItem value="remix">Remix</AutocompleteItem>
                  <AutocompleteItem value="astro">Astro</AutocompleteItem>
                  <AutocompleteItem value="sveltekit">SvelteKit</AutocompleteItem>
                  <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
                </AutocompleteContent>
              </Autocomplete>
            </div>
          ),
        },
        {
          title: "Disabled item",
          description: "Options can be locked individually.",
          code: AUTOCOMPLETE_DISABLED_CODE,
          demo: (
            <div className="mx-auto max-w-xs">
              <Autocomplete>
                <AutocompleteInput placeholder="Search fruits..." />
                <AutocompleteContent>
                  <AutocompleteItem value="apple">Apple</AutocompleteItem>
                  <AutocompleteItem value="durian" disabled>
                    Durian (out of season)
                  </AutocompleteItem>
                  <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
                </AutocompleteContent>
              </Autocomplete>
            </div>
          ),
        },
        {
          title: "With label",
          description: "Pair the field with a form label.",
          code: AUTOCOMPLETE_LABEL_IMPORT + "\n\n" + AUTOCOMPLETE_LABEL_CODE,
          demo: (
            <div className="mx-auto max-w-xs space-y-1.5">
              <Label htmlFor="demo-fruit">Favorite fruit</Label>
              <Autocomplete defaultValue="apple">
                <AutocompleteInput id="demo-fruit" placeholder="Search fruits..." />
                <AutocompleteContent>
                  <AutocompleteItem value="apple">Apple</AutocompleteItem>
                  <AutocompleteItem value="banana">Banana</AutocompleteItem>
                  <AutocompleteItem value="cherry">Cherry</AutocompleteItem>
                  <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
                </AutocompleteContent>
              </Autocomplete>
            </div>
          ),
        },
      ],
    },
  },
  {
    slug: "command",
    name: "Command",
    description: "Filterable command palette with grouped actions.",
    imports: ["Command", "CommandInput", "CommandList", "CommandEmpty", "CommandGroup", "CommandItem"],
    code: COMMAND_PREVIEW_CODE,
    demo: (
      <div className="flex justify-center">
        <CommandDialog trigger={<Button variant="outline">Search actions...</Button>}>
          <CommandInput placeholder="Search for apps and commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="calendar">Calendar</CommandItem>
              <CommandItem value="docs">Documentation</CommandItem>
              <CommandItem value="themes">Themes</CommandItem>
            </CommandGroup>
          </CommandList>
          <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
            <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
            <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
          </div>
        </CommandDialog>
      </div>
    ),
    details: {
      installCli: "@noarka/cli add command",
      installPackages: ["@noarka/ui", "cmdk", "@solar-icons/react", "clsx", "tailwind-merge"],
      source: COMMAND_SOURCE,
      sourceFilename: "components/ui/command.tsx",
      extraFiles: [{ filename: "utils/cn.ts", code: CN_SOURCE }],
      usageImport: COMMAND_IMPORT,
      usage: COMMAND_USAGE,
      api: COMMAND_API,
      examples: [
        {
          title: "With groups",
          description: "Split actions into labelled groups with a separator.",
          code: COMMAND_GROUPS_CODE,
          demo: (
            <div className="flex justify-center">
              <CommandDialog trigger={<Button variant="outline">Search settings...</Button>}>
                <CommandInput placeholder="Search settings..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="General">
                    <CommandItem value="profile">Profile</CommandItem>
                    <CommandItem value="billing">Billing</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Workspace">
                    <CommandItem value="members">Members</CommandItem>
                    <CommandItem value="keys">API keys</CommandItem>
                  </CommandGroup>
                </CommandList>
                <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
                  <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
                  <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
                </div>
              </CommandDialog>
            </div>
          ),
        },
        {
          title: "With shortcuts",
          description: "Hint at keyboard equivalents beside each action.",
          code: COMMAND_SHORTCUT_IMPORT + "\n\n" + COMMAND_SHORTCUT_CODE,
          demo: (
            <div className="flex justify-center">
              <CommandDialog trigger={<Button variant="outline">Open commands...</Button>}>
                <CommandInput placeholder="Type a command..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Actions">
                    <CommandItem value="copy">
                      Copy <CommandShortcut>Ctrl C</CommandShortcut>
                    </CommandItem>
                    <CommandItem value="paste">
                      Paste <CommandShortcut>Ctrl V</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
                <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
                  <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
                  <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
                </div>
              </CommandDialog>
            </div>
          ),
        },
        {
          title: "Disabled item",
          description: "Items can be locked so they cannot be selected.",
          code: COMMAND_DISABLED_CODE,
          demo: (
            <div className="flex justify-center">
              <CommandDialog trigger={<Button variant="outline">Search actions...</Button>}>
                <CommandInput placeholder="Type a command..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem value="calendar">Calendar</CommandItem>
                    <CommandItem value="billing" disabled>
                      Billing (no access)
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
                <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
                  <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
                  <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
                </div>
              </CommandDialog>
            </div>
          ),
        },
        {
          title: "With trigger button",
          description: "Open the floating menu from a button.",
          code: COMMAND_TRIGGER_IMPORT + "\n\n" + COMMAND_TRIGGER_CODE,
          demo: (
            <div className="flex justify-center">
              <CommandDialog trigger={<Button variant="outline">Search actions...</Button>}>
                <CommandInput placeholder="Search for apps and commands..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem value="calendar">Calendar</CommandItem>
                    <CommandItem value="docs">Documentation</CommandItem>
                    <CommandItem value="themes">Themes</CommandItem>
                  </CommandGroup>
                </CommandList>
                <div className="flex items-center gap-4 border-t border-border/60 bg-accent px-3 py-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> Navigate</span>
                  <span className="flex items-center gap-1"><Kbd>↵</Kbd> Open</span>
                  <span className="ml-auto flex items-center gap-1.5"><Kbd>Esc</Kbd> Close</span>
                </div>
              </CommandDialog>
            </div>
          ),
        },
      ],
    },
  },
];
