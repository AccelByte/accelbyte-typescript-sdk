/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TimeLimitedBalance } from './TimeLimitedBalance.js'

export const SimpleWallet = z.object({
  balance: z.number().int().nullish(),
  balanceOrigin: z.string().nullish(),
  currencyCode: z.string().nullish(),
  timeLimitedBalances: z.array(TimeLimitedBalance).nullish(),
  walletId: z.string().nullish()
})

export interface SimpleWallet extends z.TypeOf<typeof SimpleWallet> {}
