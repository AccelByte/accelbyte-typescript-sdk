/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { WalletInfo } from './WalletInfo.js'

export const CurrencyWallet = z.object({
  balance: z.number().int(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  namespace: z.string(),
  totalPermanentBalance: z.number().int().nullish(),
  totalTimeLimitedBalance: z.number().int().nullish(),
  userId: z.string(),
  walletInfos: z.array(WalletInfo).nullish()
})

export interface CurrencyWallet extends z.TypeOf<typeof CurrencyWallet> {}
