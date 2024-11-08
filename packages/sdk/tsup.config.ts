import { defineConfig } from "tsup";

export default defineConfig([
  // Node CJS build
  {
    entry: { "node/index": "src/index.node.ts" },
    format: ["cjs"],
    outDir: "dist/cjs",
    target: "node14",
    sourcemap: true,
    splitting: false,
    clean: true,
    tsconfig: "./tsconfig.build.json",
  },
  // ES build for Node
  {
    entry: { "node/index.node": "src/index.node.ts" },
    format: ["esm"],
    outDir: "dist/es",
    target: "node14",
    sourcemap: true,
    splitting: false,
    tsconfig: "./tsconfig.build.json",
  },
  // ES build for Browser
  {
    entry: { "browser/index.browser": "src/index.browser.ts" },
    format: ["esm"],
    outDir: "dist/es",
    target: "es2020",
    sourcemap: true,
    splitting: false,
    tsconfig: "./tsconfig.build.json",
  },
  // Global
  {
    entry: {"index": "src/index.global.ts"},
    format: ["iife"],
    outDir: "dist/global",
    platform: "browser",
    target: "es2020",
    minify: true,
    splitting: false,
    tsconfig: "./tsconfig.build.json",
  }
]);
