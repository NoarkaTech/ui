"use client";

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
          <DialogFooter footer>
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
          <DialogFooter footer>
            <DialogClose render={<Button variant="outline">Done</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
