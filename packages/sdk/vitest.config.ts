/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@accelbyte/sdk': './src'
    }
  },
  test: {
    environment: 'jsdom'
  }
})
