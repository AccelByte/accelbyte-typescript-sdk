/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const SHARED_CLOUD_URL = '.gamingservices.accelbyte.io'
const PORT = 3000

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const agsBaseUrl = env.AGS_BASE_URL ?? ''

  const target = agsBaseUrl.endsWith(SHARED_CLOUD_URL) ? `https://${env.VITE_NAMESPACE}.${new URL(agsBaseUrl).hostname}` : agsBaseUrl

  return {
    plugins: [react()],
    base: env.BASE_PATH ? env.BASE_PATH : undefined,
    server: {
      port: PORT,
      proxy: {
        '/api': {
          changeOrigin: true,
          target,
          cookieDomainRewrite: 'localhost',
          configure(proxy) {
            proxy.on('proxyReq', req => {
              req.setHeader('Referer', `http://${env.VITE_NAMESPACE}.localhost:${PORT}`)
            })
          },
          rewrite: path => {
            return path.replace(/^\/api/, '')
          }
        }
      }
    }
  }
})
