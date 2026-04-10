import { defineConfig } from "tsup";
import pkg from "./package.json";

const sdkVersionDefine = { '__SDK_VERSION__': JSON.stringify(pkg.version) }

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
    define: sdkVersionDefine,
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
    define: sdkVersionDefine,
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
    define: sdkVersionDefine,
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
    define: sdkVersionDefine,
  }
]);
