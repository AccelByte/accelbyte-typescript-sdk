/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import checker from 'vite-plugin-checker'
import { getAvailableEnvVars } from './src/constants/EnvVars'

const trimTrailingSlash = (url: string) => {
  if (url.endsWith('/')) return url.slice(0, -1)
  return url
}

// https://vitejs.dev/config/
export default async ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  const availableEnvVars = getAvailableEnvVars()

  // Proxies
  const justiceProxyTarget = trimTrailingSlash(process.env.JUSTICE_BASE_URL || 'https://development.accelbyte.io')

  return defineConfig({
    plugins: [
      checker({
        typescript: {
          root: process.cwd(),
          tsconfigPath: 'tsconfig.json'
        }
      })
    ],
    mode: availableEnvVars.NODE_ENV === 'development' ? 'development' : 'production',
    build: {
      outDir: 'dist/client',
      minify: true,
      sourcemap: false
    },
    define: {
      global: 'window',
      'process.env':
        availableEnvVars.NODE_ENV === 'production' && availableEnvVars.DEBUG_PROD !== 'true'
          ? 'process.env'
          : JSON.stringify(availableEnvVars)
    },
    resolve: {
      alias: {
        src: resolve('../widgets-demo/src'),
        '@accelbyte/sdk': resolve('../sdk/src'),
        'accelbyte-web-sdk': resolve('../sdk/src')
      }
    },
    server: {
      port: Number(process.env.PORT ?? 3030),
      proxy: {
        '/api': {
          target: justiceProxyTarget,
          changeOrigin: true,
          rewrite: path => {
            return path.replace(/^\/api/, '')
          }
        }
      },
      watch: {
        ignored: ['**/desktop-app/**', '**/conf-editor-app/**']
      }
    }
  })
}
