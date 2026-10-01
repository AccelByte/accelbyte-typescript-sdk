import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      { test: { name: 'contracts', include: ['tests/dashboard.test.ts'], environment: 'node' } },
      {
        test: {
          name: 'auth',
          include: ['tests/auth.test.ts'],
          environment: 'jsdom',
          execArgv: ['--no-experimental-webstorage'],
          environmentOptions: { jsdom: { url: 'http://localhost:4317/' } }
        }
      }
    ]
  }
})
