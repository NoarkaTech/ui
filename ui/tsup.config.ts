import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "next",
    "@base-ui/react",
    "@base-ui/react/*",
    "@solar-icons/react",
    "@solar-icons/react/*",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "next-themes",
    "cmdk",
  ],
});
