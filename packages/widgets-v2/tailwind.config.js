/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
const tailwindConfig = require('../../../packages/od-shared/tailwind.config.js')

module.exports = {
  ...tailwindConfig,
  corePlugins: {
    preflight: false
  },
  content: [
    './src/**/*.{ts,tsx}',
    '../../../packages/od-shared/src/**/*.{ts,tsx}*',
    '../../../packages/od-components/src/**/*.{ts,tsx}',
    '../../../packages/od-account/src/**/*.{ts,tsx}',
    '../../../packages/od-ecommerce/src/**/*.{ts,tsx}',
    '../../../packages/od-legal/src/**/*.{ts,tsx}'
  ]
}
