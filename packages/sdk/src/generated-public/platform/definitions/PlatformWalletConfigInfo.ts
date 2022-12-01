/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformWalletConfigInfo = z.object({
  id: z.string().nullish(),
  platform: z.string(),
  namespace: z.string(),
  allowedBalanceOrigins: z.array(z.string()),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export type PlatformWalletConfigInfo = z.TypeOf<typeof PlatformWalletConfigInfo>
