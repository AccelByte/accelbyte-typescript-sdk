import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/plugins.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react', 'react-dom', '@accelbyte/sdk', '@accelbyte/sdk-iam'],
  sourcemap: true,
  clean: true
})
