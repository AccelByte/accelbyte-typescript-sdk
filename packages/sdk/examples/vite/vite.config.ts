/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default () => {
  process.env = { ...process.env, ...loadEnv('development', process.cwd()) }

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3030,
      proxy: {
        '/api': {
          target: process.env.VITE_SDK_BASE_URL,
          changeOrigin: true,
          rewrite: path => {
            return path.replace(/^\/api/, '')
          }
        },
        '/cache': {
          target: process.env.VITE_SDK_BASE_URL,
          changeOrigin: true
        }
      }
    }
  })
}
