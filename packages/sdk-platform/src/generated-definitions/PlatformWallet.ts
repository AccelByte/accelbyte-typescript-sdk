/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { WalletInfo } from './WalletInfo.js'

export const PlatformWallet = z.object({
  balance: z.number().int(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  id: z.string().nullish(),
  namespace: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  transactionId: z.string().nullish(),
  userId: z.string(),
  walletInfos: z.array(WalletInfo).nullish(),
  walletStatus: z.enum(['ACTIVE', 'INACTIVE']).nullish()
})

export interface PlatformWallet extends z.TypeOf<typeof PlatformWallet> {}
