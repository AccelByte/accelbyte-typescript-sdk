/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TimeLimitedBalance } from './TimeLimitedBalance'

export const WalletInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  userId: z.string(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  balance: z.number().int(),
  balanceOrigin: z.string(),
  timeLimitedBalances: z.array(TimeLimitedBalance).nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  totalPermanentBalance: z.number().int().nullish(),
  totalTimeLimitedBalance: z.number().int().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE'])
})

export type WalletInfo = z.TypeOf<typeof WalletInfo>
