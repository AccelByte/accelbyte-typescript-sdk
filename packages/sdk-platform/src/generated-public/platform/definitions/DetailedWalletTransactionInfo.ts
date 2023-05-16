/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DetailedWalletTransactionInfo = z.object({
  amount: z.number().int(),
  balanceSource: z.string().nullish(),
  createdAt: z.string(),
  currencyCode: z.string(),
  namespace: z.string(),
  operator: z.string(),
  reason: z.string().nullish(),
  updatedAt: z.string(),
  userId: z.string(),
  walletAction: z.enum(['CREDIT', 'DEBIT', 'PAYMENT']).nullish(),
  walletId: z.string()
})

export interface DetailedWalletTransactionInfo extends z.TypeOf<typeof DetailedWalletTransactionInfo> {}
