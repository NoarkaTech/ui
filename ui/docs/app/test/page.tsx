"use client";

/*
 * Component test bench.
 * Import anything from "@noarka/ui" and render it below to try it out.
 * This page is yours, edit freely. It never ships to production docs.
 */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Separator,
  Switch,
} from "@noarka/ui";

export default function TestPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-6 py-14">
      <div>
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Test bench
        </p>
        <h1 className="mt-1 font-serif text-3xl font-medium">
          Import it, render it, break it.
        </h1>
      </div>

      <Separator />

      {/* ---- Add your experiments below this line ---- */}

      <Card>
        <CardHeader>
          <CardTitle>Example card</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="test-input">Name</Label>
            <Input id="test-input" placeholder="Type something…" />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox defaultChecked />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Switch />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button>Click me</Button>
            <Button variant="outline">Or me</Button>
            <Badge>New</Badge>
            <Badge variant="secondary">Beta</Badge>
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="destructive">Delete</Button>} />
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this item?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-end gap-2">
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete</AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>

      {/* ---- Add your experiments above this line ---- */}

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Default card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Single border, the standard card.
            </p>
          </CardContent>
        </Card>
        <Card variant="border">
          <p className="text-sm font-medium">Border card</p>
          <p className="text-sm text-muted-foreground">
            Double border effect, like the Invoisor KPI cards.
          </p>
          <p className="font-serif text-3xl font-medium">$12,408</p>
        </Card>
      </div>
    </div>
  );
}
