/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import react from '@vitejs/plugin-react'
import cookie from 'cookie'
import { defineConfig, loadEnv } from 'vite'

const SHARED_CLOUD_URL = '.gamingservices.accelbyte.io'
const PORT = 3000

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const target = env.AGS_BASE_URL ?? ''

  return {
    plugins: [react()],
    base: env.BASE_PATH ? env.BASE_PATH : undefined,
    server: {
      port: PORT,
      proxy: {
        '/api/iam/v3/oauth/authorize': {
          changeOrigin: true,
          target,
          rewrite: path => {
            return path.replace(/^\/api/, '')
          }
        },
        '/api/iam/v3/oauth/token': {
          changeOrigin: true,
          target,
          cookieDomainRewrite: 'localhost',
          rewrite: path => {
            return path.replace(/^\/api/, '')
          }
        },
        '/api': {
          changeOrigin: true,
          target,
          cookieDomainRewrite: 'localhost',
          configure(proxy) {
            proxy.on('proxyReq', (proxyReq, req) => {
              try {
                // This proxy is only valid for AGS Shared Cloud.
                if (!target.endsWith(SHARED_CLOUD_URL)) return

                const cookieHeader = req.headers.cookie
                if (cookieHeader) {
                  const parsedCookie = cookie.parse(cookieHeader as string)
                  const accessToken = parsedCookie.access_token

                  // When we have access token, we want to ensure we have the right Referer header.
                  if (!accessToken) return

                  const [, tokenPayload] = accessToken.split('.')
                  const { namespace } = JSON.parse(Buffer.from(tokenPayload, 'base64').toString())

                  let effectiveHost = req.headers.host
                  if (!effectiveHost.startsWith(namespace)) {
                    effectiveHost = `${namespace}.${effectiveHost}`
                  }

                  proxyReq.setHeader('Referer', `http://${effectiveHost}`)
                }
              } catch (err) {
                console.error(err)
              }
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
