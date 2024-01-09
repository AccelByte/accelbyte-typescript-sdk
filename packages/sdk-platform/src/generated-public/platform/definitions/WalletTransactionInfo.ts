/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TransactionAmountDetails } from './TransactionAmountDetails.js'

export const WalletTransactionInfo = z.object({
  amount: z.number().int(),
  balanceSource: z.string().nullish(),
  createdAt: z.string(),
  currencyCode: z.string(),
  metadata: z.record(z.any()).nullish(),
  namespace: z.string(),
  operator: z.string(),
  reason: z.string().nullish(),
  transactionAmountDetails: z.array(TransactionAmountDetails).nullish(),
  updatedAt: z.string(),
  userId: z.string(),
  walletAction: z.enum(['CREDIT', 'DEBIT', 'PAYMENT']).nullish()
})

export interface WalletTransactionInfo extends z.TypeOf<typeof WalletTransactionInfo> {}
