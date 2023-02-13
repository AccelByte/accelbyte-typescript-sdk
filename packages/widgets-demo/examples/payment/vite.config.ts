/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
