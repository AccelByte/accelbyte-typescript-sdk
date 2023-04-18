/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@accelbyte/validator': resolve('../validator/src'),
      '@accelbyte/sdk-iam': resolve('../sdk-iam/src'),
      '@accelbyte/sdk-legal': resolve('../sdk-legal/src')
    }
  },
  test: {
    environment: 'happy-dom',
    exclude: [
      'test/e2e/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
    ]
  }
})
