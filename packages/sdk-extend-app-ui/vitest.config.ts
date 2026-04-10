import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths({ ignoreConfigErrors: true })],
  resolve: {
    dedupe: ['react', 'react-dom', '@tanstack/react-query']
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
})
