/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { WalletInfo } from './WalletInfo'

export const PlatformWallet = z.object({
  namespace: z.string(),
  userId: z.string(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  balance: z.number().int(),
  walletInfos: z.array(WalletInfo).nullish(),
  walletStatus: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  id: z.string().nullish()
})

export type PlatformWallet = z.TypeOf<typeof PlatformWallet>
