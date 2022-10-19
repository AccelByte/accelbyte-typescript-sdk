/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BillingAccount } from './BillingAccount'
import { CurrencySummary } from './CurrencySummary'
import { EntitlementSummary } from './EntitlementSummary'
import { ItemSnapshot } from './ItemSnapshot'
import { Recurring } from './Recurring'

export const SubscriptionInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  userId: z.string(),
  itemId: z.string(),
  sku: z.string().nullish(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  currency: CurrencySummary.nullish(),
  price: z.number().int().nullish(),
  trialPrice: z.number().int().nullish(),
  recurring: Recurring,
  status: z.enum(['INIT', 'ACTIVE', 'CANCELLED', 'EXPIRED']),
  chargeStatus: z.enum(['NEVER', 'SETUP', 'RECURRING_CHARGING', 'CHARGED', 'CHARGE_FAILED']),
  nextBillingDate: z.string().nullish(),
  entitlements: z.array(EntitlementSummary).nullish(),
  itemSnapshot: ItemSnapshot.nullish(),
  currentPeriodStart: z.string().nullish(),
  currentPeriodEnd: z.string().nullish(),
  start: z.string().nullish(),
  end: z.string().nullish(),
  currentCycle: z.number().int().nullish(),
  chargedCycles: z.number().int().nullish(),
  trialedCycles: z.number().int().nullish(),
  inFixedFreeDays: z.boolean(),
  inFixedCycleTrial: z.boolean(),
  firstSubscribe: z.boolean().nullish(),
  paid: z.boolean().nullish(),
  paymentFlowRequired: z.boolean(),
  paymentStationUrl: z.string().nullish(),
  source: z.string().nullish(),
  subscribedBy: z.enum(['USER', 'PLATFORM']).nullish(),
  subscribedAt: z.string().nullish(),
  unsubscribedAt: z.string().nullish(),
  unsubscribeReason: z.string().nullish(),
  paymentOrderNo: z.string().nullish(),
  billingAccount: BillingAccount.nullish(),
  returnUrl: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  sandbox: z.boolean().nullish(),
  retryAttempted: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type SubscriptionInfo = z.TypeOf<typeof SubscriptionInfo>
