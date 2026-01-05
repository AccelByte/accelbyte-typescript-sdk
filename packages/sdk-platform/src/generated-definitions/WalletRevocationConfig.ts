/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WalletRevocationConfig = z.object({
  enabled: z.boolean().nullish(),
  strategy: z.enum(['ALWAYS_REVOKE', 'CUSTOM', 'REVOKE_OR_REPORT']).nullish()
})

export interface WalletRevocationConfig extends z.TypeOf<typeof WalletRevocationConfig> {}
