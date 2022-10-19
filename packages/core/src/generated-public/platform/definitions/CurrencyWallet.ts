/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { WalletInfo } from './WalletInfo'

export const CurrencyWallet = z.object({
  namespace: z.string(),
  userId: z.string(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  balance: z.number().int(),
  walletInfos: z.array(WalletInfo).nullish(),
  totalPermanentBalance: z.number().int().nullish(),
  totalTimeLimitedBalance: z.number().int().nullish()
})

export type CurrencyWallet = z.TypeOf<typeof CurrencyWallet>
