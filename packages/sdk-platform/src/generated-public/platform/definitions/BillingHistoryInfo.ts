/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BillingAccount } from './BillingAccount.js'
import { CurrencySummary } from './CurrencySummary.js'

export const BillingHistoryInfo = z.object({
  amount: z.number().int(),
  billingAccount: BillingAccount.nullish(),
  changeBillingAccount: z.boolean().nullish(),
  createdAt: z.string(),
  currency: CurrencySummary,
  description: z.string().nullish(),
  extTxId: z.string().nullish(),
  itemId: z.string(),
  namespace: z.string(),
  paymentOrderNo: z.string().nullish(),
  recurringOrderNo: z.string(),
  retryAttempted: z.number().int().nullish(),
  sandbox: z.boolean(),
  sku: z.string().nullish(),
  status: z.enum(['CHARGED', 'CHARGE_FAILED', 'INIT', 'REFUNDED', 'REFUND_FAILED']),
  statusReason: z.string().nullish(),
  subscriptionId: z.string(),
  subtotalPrice: z.number().int().nullish(),
  title: z.string(),
  totalPrice: z.number().int().nullish(),
  totalTax: z.number().int().nullish(),
  txEndTime: z.string().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface BillingHistoryInfo extends z.TypeOf<typeof BillingHistoryInfo> {}
