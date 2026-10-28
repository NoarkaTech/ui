#!/usr/bin/env node
// @noarka/cli: scaffold Noarka UI primitives into your project.
// Templates ship inside @noarka/ui (its `files` include `src/`), so the CLI
// never duplicates component source. Zero runtime dependencies.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import readline from "node:readline";

const require = createRequire(import.meta.url);

function cliVersion(): string {
  try {
    const pkg = require("../package.json") as { version?: unknown };
    return typeof pkg.version === "string" ? pkg.version : "0.0.0";
  } catch {
    return "0.0.0";
  }
}

function uiRoot(): string {
  try {
    return path.dirname(require.resolve("@noarka/ui/package.json"));
  } catch {
    console.error(
      "Could not find @noarka/ui. Install it first:\n  npm install @noarka/ui"
    );
    process.exit(1);
  }
}

function primitivesDir(): string {
  return path.join(uiRoot(), "src", "primitives");
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function slugifyDir(dir: string): string {
  return dir.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function available(): string[] {
  return fs
    .readdirSync(primitivesDir(), { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

function findDir(name: string): string | null {
  const want = normalize(name);
  return available().find((d) => normalize(d) === want) ?? null;
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(target: string, content: string, overwrite: boolean): string {
  if (fs.existsSync(target) && !overwrite) {
    return "skipped (exists, use --overwrite to replace)";
  }
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, content, "utf8");
  return "created";
}

function cnPath(projectDir: string): string {
  return path.join(projectDir, "utils", "cn.ts");
}

// shadcn-style conflict prompt: ask per existing file whether to replace it.
async function askReplace(target: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    const answer = await new Promise<string>((resolve) => {
      rl.question(
        ` ${path.relative(process.cwd(), target)} already exists. Replace it? (y/N) `,
        resolve
      );
    });
    return /^y(es)?$/i.test(answer.trim());
  } finally {
    rl.close();
  }
}

// Write a scaffolded file, prompting on conflicts (unless --overwrite was
// passed, or the process is non-interactive, where files are kept).
async function writeFilePrompted(
  target: string,
  content: string,
  overwrite: boolean
): Promise<string> {
  const existed = fs.existsSync(target);
  if (existed && !overwrite) {
    if (process.stdin.isTTY === true) {
      const replace = await askReplace(target);
      if (!replace) return "skipped (kept your version)";
    } else {
      return "skipped (exists, use --overwrite to replace)";
    }
  }
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, content, "utf8");
  return existed ? "replaced" : "created";
}

function readTemplate(rel: string): string {
  return fs.readFileSync(path.join(uiRoot(), rel), "utf8");
}

// Lowercase scaffolded basenames to match the documented
// `components/ui/<name>.tsx` convention, rewriting same-dir imports.
function scaffoldName(basename: string): string {
  return basename.charAt(0).toLowerCase() + basename.slice(1);
}

// All files land in one flat directory (`components/ui/`), so every import
// must be rewritten for the new layout:
//   `./Button.tsx`          -> `./button.tsx`   (name lowercasing)
//   `../Button/Button`      -> `./button`       (sibling primitive, flattened)
//   `../../utils/cn`        -> unchanged        (file stays two levels deep)
function rewriteImports(source: string): string {
  const lowerLast = (spec: string): string => {
    const parts = spec.split("/");
    const last = parts[parts.length - 1];
    parts[parts.length - 1] = scaffoldName(last);
    return parts.join("/");
  };
  return source
    .replace(/from\s+["'](\.\.\/[^"']+)["']/g, (_m, spec: string) => {
      // Only single-traversal sibling imports (`../X/Y`) collapse into the flat
      // directory; `../../utils/cn` keeps its depth.
      if (spec.split("/").length !== 3) return `from "${spec}"`;
      return `from "./${scaffoldName(spec.split("/")[2])}"`;
    })
    .replace(/from\s+["']\.\/([^"']+)["']/g, (_m, spec: string) => `from "./${lowerLast(spec)}"`);
}

function componentFiles(dir: string): string[] {
  return fs
    .readdirSync(path.join(primitivesDir(), dir))
    .filter((f) => f !== "index.ts" && (f.endsWith(".tsx") || f.endsWith(".ts")))
    .sort();
}

function peerDeps(dir: string): string[] {
  const deps = new Set<string>();
  for (const file of componentFiles(dir)) {
    const src = readTemplate(path.join("src", "primitives", dir, file));
    for (const match of src.matchAll(/from\s+["']\.\.\/([^/"']+)/g)) {
      // Skip parent traversal (`../../utils/cn`) and shared helpers: only
      // sibling primitive dirs count as peer dependencies.
      if (match[1] === ".." || match[1] === "utils") continue;
      if (match[1] !== dir) deps.add(slugifyDir(match[1]));
    }
  }
  return [...deps].sort();
}

// Design-token wiring. The scaffolded classes (bg-surface, text-foreground,
// border-border, ...) only exist once tokens.css is imported into the app's
// stylesheet entry: it declares the Tailwind `@theme` mappings. The entry also
// needs `@source` covering the package dist, since Tailwind v4 skips
// node_modules by default. Patch the project's real stylesheet instead of
// writing a separate one users then have to wire by hand.
const CSS_CANDIDATES = [
  "app/globals.css",
  "src/app/globals.css",
  "app/global.css",
  "src/app/global.css",
  "styles/globals.css",
  "src/styles/globals.css",
  "src/index.css",
  "app/index.css",
];

function findCssEntry(projectDir: string): string | null {
  for (const candidate of CSS_CANDIDATES) {
    const p = path.join(projectDir, candidate);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  // Fallback: any globals.css one level inside the usual app folders.
  for (const root of ["app", "src", "styles"]) {
    const dir = path.join(projectDir, root);
    if (!fs.existsSync(dir)) continue;
    const found = fs
      .readdirSync(dir, { withFileTypes: true, recursive: true })
      .find((e) => e.isFile() && e.name === "globals.css");
    if (found) return path.join(found.parentPath ?? dir, found.name);
  }
  return null;
}

function tokenBlock(cssFile: string, projectDir: string): string {
  const rel = path.relative(path.dirname(cssFile), projectDir).replace(/\\/g, "/");
  const dist = `${rel ? `${rel}/` : ""}node_modules/@noarka/ui/dist/**/*.js`;
  return `@import "@noarka/ui/styles/tokens.css";
@import "@noarka/ui/styles/base.css";

/* Noarka UI design tokens (bg-surface, text-foreground, ...) */
@source "${dist}";
`;
}

let tokensEnsured = false;

function ensureTokens(projectDir: string, create: boolean): void {
  if (tokensEnsured) return;
  tokensEnsured = true;
  const entry = findCssEntry(projectDir);
  if (!entry) {
    if (!create) {
      console.log("\nNOTE: run `npx @noarka/cli init` once per project to wire up");
      console.log("design tokens (bg-surface, text-foreground, ...) in your stylesheet.");
      return;
    }
    const cssTarget = path.join(projectDir, "styles", "globals.css");
    ensureDir(path.dirname(cssTarget));
    fs.writeFileSync(cssTarget, tokenBlock(cssTarget, projectDir), "utf8");
    console.log(`created: ${path.relative(process.cwd(), cssTarget)} (Noarka UI design tokens)`);
    console.log('Next: import it once in your app entry: import "./styles/globals.css";');
    return;
  }
  const current = fs.readFileSync(entry, "utf8");
  if (current.includes("@noarka/ui/styles/tokens.css")) return;
  fs.writeFileSync(entry, `${tokenBlock(entry, projectDir)}\n${current}`, "utf8");
  console.log(`patched: ${path.relative(process.cwd(), entry)} (added Noarka UI design tokens)`);
  console.log("Design tokens now work out of the box: bg-surface, text-foreground, bg-muted, ...");
}

function cmdInit(projectDir: string, overwrite: boolean): void {
  const cn = cnPath(projectDir);
  console.log(`${writeFile(cn, readTemplate(path.join("src", "utils", "cn.ts")), overwrite)}: ${path.relative(process.cwd(), cn)}`);
  ensureTokens(projectDir, true);
}

async function cmdAdd(name: string, projectDir: string, overwrite: boolean): Promise<void> {
  const dir = findDir(name);
  if (!dir) {
    console.error(`Unknown component "${name}".\n`);
    cmdList();
    process.exit(1);
  }
  for (const file of componentFiles(dir)) {
    const src = readTemplate(path.join("src", "primitives", dir, file));
    const target = path.join(projectDir, "components", "ui", scaffoldName(file));
    console.log(`${await writeFilePrompted(target, rewriteImports(src), overwrite)}: ${path.relative(process.cwd(), target)}`);
  }
  const cn = cnPath(projectDir);
  console.log(`${await writeFilePrompted(cn, readTemplate(path.join("src", "utils", "cn.ts")), overwrite)}: ${path.relative(process.cwd(), cn)}`);
  ensureTokens(projectDir, false);
  const peers = peerDeps(dir).filter((d) => normalize(d) !== normalize(dir));
  if (peers.length > 0) {
    console.log(`\nThis component also uses: ${peers.join(", ")}`);
    console.log(`Run: npx @noarka/cli add ${peers.join(" ")}`);
  }
}

function cmdList(): void {
  console.log("Available components:");
  for (const dir of available()) {
    console.log(`  ${slugifyDir(dir)}`);
  }
}

function help(): void {
  console.log(`noarka: scaffold Noarka UI primitives into your project.

Usage:
  noarka init [options]              write utils/cn.ts and wire design tokens
  noarka add <component> [options]   copy a primitive to components/ui/
  noarka list                        show available components

Options:
  --dir <path>   project root to scaffold into (default: current directory)
  --overwrite    replace files that already exist (no prompt)
  -h, --help     show this message
  -v, --version  show the version

On conflicts you are asked per file whether to replace it, so your local edits
are never silently dropped.`);
}

function parseArgs(argv: string[]): { opts: { dir: string; overwrite: boolean }; rest: string[] } {
  const opts = { dir: process.cwd(), overwrite: false };
  const rest: string[] = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dir" && argv[i + 1]) {
      opts.dir = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--overwrite") {
      opts.overwrite = true;
    } else if (arg === "-h" || arg === "--help") {
      help();
      process.exit(0);
    } else if (arg === "-v" || arg === "--version") {
      console.log(cliVersion());
      process.exit(0);
    } else if (arg.startsWith("-")) {
      console.error(`Unknown option "${arg}". See: noarka --help`);
      process.exit(1);
    } else {
      rest.push(arg);
    }
  }
  return { opts, rest };
}

async function main(): Promise<void> {
  const { opts, rest } = parseArgs(process.argv.slice(2));
  const [command, ...names] = rest;

  if (command === "init") {
    cmdInit(opts.dir, opts.overwrite);
  } else if (command === "add") {
    if (names.length === 0) {
      console.error("Specify at least one component. See: noarka list");
      process.exit(1);
    }
    for (const name of names) await cmdAdd(name, opts.dir, opts.overwrite);
  } else if (command === "list") {
    cmdList();
  } else if (!command) {
    help();
  } else {
    console.error(`Unknown command "${command}". See: noarka --help`);
    process.exit(1);
  }
}

await main();
