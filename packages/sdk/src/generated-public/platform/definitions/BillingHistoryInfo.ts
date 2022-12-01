/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BillingAccount } from './BillingAccount'
import { CurrencySummary } from './CurrencySummary'

export const BillingHistoryInfo = z.object({
  recurringOrderNo: z.string(),
  namespace: z.string(),
  userId: z.string(),
  subscriptionId: z.string(),
  itemId: z.string(),
  sku: z.string().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  amount: z.number().int(),
  totalTax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  subtotalPrice: z.number().int().nullish(),
  sandbox: z.boolean(),
  currency: CurrencySummary,
  paymentOrderNo: z.string(),
  billingAccount: BillingAccount.nullish(),
  status: z.enum(['INIT', 'CHARGED', 'CHARGE_FAILED', 'REFUNDED', 'REFUND_FAILED']),
  statusReason: z.string().nullish(),
  txEndTime: z.string().nullish(),
  extTxId: z.string().nullish(),
  changeBillingAccount: z.boolean().nullish(),
  retryAttempted: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type BillingHistoryInfo = z.TypeOf<typeof BillingHistoryInfo>
