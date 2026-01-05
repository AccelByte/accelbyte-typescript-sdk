/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TimeLimitedBalance } from './TimeLimitedBalance.js'

export const WalletInfo = z.object({
  balance: z.number().int(),
  balanceOrigin: z.string(),
  createdAt: z.string(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  id: z.string(),
  namespace: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  timeLimitedBalances: z.array(TimeLimitedBalance).nullish(),
  totalPermanentBalance: z.number().int().nullish(),
  totalTimeLimitedBalance: z.number().int().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface WalletInfo extends z.TypeOf<typeof WalletInfo> {}
