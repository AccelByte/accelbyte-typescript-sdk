import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { 'accelbyte-codegen': 'src/cli.ts' },
  format: ['cjs', 'esm'],
  outDir: 'dist',
  sourcemap: true,
  dts: true,
  clean: true,
  shims: true, // Adds necessary polyfills or shims for Node.js APIs
  esbuildOptions(options) {
    // Add shebang to output file
    options.banner = {
      js: '#!/usr/bin/env node'
    }
  },
  external: [
    /^[^./]/ // Matches modules that do not start with '.' or '/'
  ]
})
