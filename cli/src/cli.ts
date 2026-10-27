#!/usr/bin/env node
// @noarka/cli: scaffold Noarka UI primitives into your project.
// Templates ship inside @noarka/ui (its `files` include `src/`), so the CLI
// never duplicates component source. Zero runtime dependencies.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

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

function readTemplate(rel: string): string {
  return fs.readFileSync(path.join(uiRoot(), rel), "utf8");
}

// Lowercase scaffolded basenames to match the documented
// `components/ui/<name>.tsx` convention, rewriting same-dir imports.
function scaffoldName(basename: string): string {
  return basename.charAt(0).toLowerCase() + basename.slice(1);
}

function rewriteImports(source: string): string {
  return source.replace(/from\s+["']\.\/([^"']+)["']/g, (_m, spec: string) => {
    const parts = spec.split("/");
    parts[parts.length - 1] = scaffoldName(parts[parts.length - 1]);
    return `from "./${parts.join("/")}"`;
  });
}

function ensureCn(projectDir: string, overwrite: boolean): { target: string; status: string } {
  const target = path.join(projectDir, "utils", "cn.ts");
  const content = readTemplate(path.join("src", "utils", "cn.ts"));
  return { target, status: writeFile(target, content, overwrite) };
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

function cmdInit(projectDir: string, overwrite: boolean): void {
  const { target, status } = ensureCn(projectDir, overwrite);
  console.log(`${status}: ${path.relative(process.cwd(), target)}`);
  const cssTarget = path.join(projectDir, "styles", "globals.css");
  const cssContent = `@import "@noarka/ui/styles/tokens.css";
@import "@noarka/ui/styles/base.css";

/* Required: node_modules is skipped by Tailwind v4's automatic content detection. */
@source "../node_modules/@noarka/ui/dist/**/*.js";
`;
  const cssStatus = writeFile(cssTarget, cssContent, overwrite);
  console.log(`${cssStatus}: ${path.relative(process.cwd(), cssTarget)}`);
  console.log("\nNext: import the scaffolded stylesheet once in your app entry:");
  console.log('  import "./styles/globals.css";');
  console.log("\nDesign tokens (incl. --surface) are now available as utilities:");
  console.log("  bg-surface, text-foreground, bg-muted, ...");
}

function cmdAdd(name: string, projectDir: string, overwrite: boolean): void {
  const dir = findDir(name);
  if (!dir) {
    console.error(`Unknown component "${name}".\n`);
    cmdList();
    process.exit(1);
  }
  for (const file of componentFiles(dir)) {
    const src = readTemplate(path.join("src", "primitives", dir, file));
    const target = path.join(projectDir, "components", "ui", scaffoldName(file));
    console.log(`${writeFile(target, rewriteImports(src), overwrite)}: ${path.relative(process.cwd(), target)}`);
  }
  const cn = ensureCn(projectDir, overwrite);
  console.log(`${cn.status}: ${path.relative(process.cwd(), cn.target)}`);
  const peers = peerDeps(dir).filter((d) => normalize(d) !== normalize(dir));
  if (peers.length > 0) {
    console.log(`\nThis component also uses: ${peers.join(", ")}`);
    console.log(`Run: noarka add ${peers.join(" ")}`);
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
  noarka init [options]            write utils/cn.ts once per project
  noarka add <component> [options]  copy a primitive to components/ui/
  noarka list                      show available components

Options:
  --dir <path>   project root to scaffold into (default: current directory)
  --overwrite    replace files that already exist
  -h, --help     show this message
  -v, --version  show the version`);
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

const { opts, rest } = parseArgs(process.argv.slice(2));
const [command, ...names] = rest;

if (command === "init") {
  cmdInit(opts.dir, opts.overwrite);
} else if (command === "add") {
  if (names.length === 0) {
    console.error("Specify at least one component. See: noarka list");
    process.exit(1);
  }
  for (const name of names) cmdAdd(name, opts.dir, opts.overwrite);
} else if (command === "list") {
  cmdList();
} else if (!command) {
  help();
} else {
  console.error(`Unknown command "${command}". See: noarka --help`);
  process.exit(1);
}
