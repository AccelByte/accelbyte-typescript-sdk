/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@accelbyte/sdk': resolve('../sdk/src'),
      '@accelbyte/validator': resolve('../validator/src'),
      '@accelbyte/sdk-iam': resolve('../sdk-iam/src'),
      '@accelbyte/sdk-legal': resolve('../sdk-legal/src'),
      '~/iam-definitions': resolve('../sdk-iam/src/generated-definitions')
    }
  },
  test: {
    environment: 'node',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
    ]
  }
})
