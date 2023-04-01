/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/client',
    minify: true,
    sourcemap: false
  },
  define: {
    global: 'window',
    'process.env': JSON.stringify({ NODE_ENV: process.env.NODE_ENV })
  },
  server: {
    port: 3030,
    proxy: {
      '/api': {
        target: 'https://demo.accelbyte.io',
        changeOrigin: true,
        rewrite: path => {
          return path.replace(/^\/api/, '')
        }
      }
    }
  }
})
