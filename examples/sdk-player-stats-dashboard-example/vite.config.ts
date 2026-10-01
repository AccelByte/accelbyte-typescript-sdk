import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // AGS Public Cloud services send no usable CORS headers for other origins, so
  // local runs reach AGS through this same-origin proxy.
  const target = loadEnv(mode, process.cwd(), '').AGS_PROXY_TARGET
  const proxy = target
    ? Object.fromEntries(
        ['/iam', '/social', '/leaderboard', '/cloudsave'].map(path => [path, { target, changeOrigin: true }])
      )
    : undefined

  return {
    server: { host: '127.0.0.1', port: 4317, strictPort: true, proxy },
    preview: { host: '127.0.0.1', port: 4317, strictPort: true, proxy }
  }
})
