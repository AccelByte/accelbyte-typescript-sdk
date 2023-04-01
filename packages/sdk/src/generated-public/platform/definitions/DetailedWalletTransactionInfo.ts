/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DetailedWalletTransactionInfo = z.object({
  walletId: z.string(),
  amount: z.number().int(),
  reason: z.string().nullish(),
  namespace: z.string(),
  userId: z.string(),
  operator: z.string(),
  walletAction: z.enum(['CREDIT', 'PAYMENT', 'DEBIT']).nullish(),
  currencyCode: z.string(),
  balanceSource: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface DetailedWalletTransactionInfo extends z.TypeOf<typeof DetailedWalletTransactionInfo> {}
