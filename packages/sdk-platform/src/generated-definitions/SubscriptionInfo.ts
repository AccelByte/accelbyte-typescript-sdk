/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BillingAccount } from './BillingAccount.js'
import { CurrencySummary } from './CurrencySummary.js'
import { EntitlementSummary } from './EntitlementSummary.js'
import { ItemSnapshot } from './ItemSnapshot.js'
import { Recurring } from './Recurring.js'

export const SubscriptionInfo = z.object({
  billingAccount: BillingAccount.nullish(),
  chargeStatus: z.enum(['CHARGED', 'CHARGE_FAILED', 'NEVER', 'RECURRING_CHARGING', 'SETUP']),
  chargedCycles: z.number().int().nullish(),
  createdAt: z.string(),
  currency: CurrencySummary.nullish(),
  currentCycle: z.number().int().nullish(),
  currentPeriodEnd: z.string().nullish(),
  currentPeriodStart: z.string().nullish(),
  description: z.string().nullish(),
  end: z.string().nullish(),
  entitlements: z.array(EntitlementSummary).nullish(),
  firstSubscribe: z.boolean().nullish(),
  id: z.string(),
  inFixedCycleTrial: z.boolean(),
  inFixedFreeDays: z.boolean(),
  itemId: z.string(),
  itemSnapshot: ItemSnapshot.nullish(),
  language: z.string().nullish(),
  namespace: z.string(),
  nextBillingDate: z.string().nullish(),
  paid: z.boolean().nullish(),
  paymentFlowRequired: z.boolean(),
  paymentOrderNo: z.string().nullish(),
  paymentStationUrl: z.string().nullish(),
  price: z.number().int().nullish(),
  recurring: Recurring,
  region: z.string().nullish(),
  retryAttempted: z.number().int().nullish(),
  returnUrl: z.string().nullish(),
  sandbox: z.boolean().nullish(),
  sku: z.string().nullish(),
  source: z.string().nullish(),
  start: z.string().nullish(),
  status: z.enum(['ACTIVE', 'CANCELLED', 'EXPIRED', 'INIT']),
  subscribedAt: z.string().nullish(),
  subscribedBy: z.enum(['PLATFORM', 'USER']).nullish(),
  title: z.string().nullish(),
  trialPrice: z.number().int().nullish(),
  trialedCycles: z.number().int().nullish(),
  unsubscribeReason: z.string().nullish(),
  unsubscribedAt: z.string().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface SubscriptionInfo extends z.TypeOf<typeof SubscriptionInfo> {}
