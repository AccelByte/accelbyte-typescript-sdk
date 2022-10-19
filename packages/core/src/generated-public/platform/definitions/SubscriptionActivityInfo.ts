/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubscriptionActivityInfo = z.object({
  namespace: z.string(),
  userId: z.string(),
  subscriptionId: z.string(),
  operator: z.string(),
  action: z.enum(['SUBSCRIBE', 'CANCEL', 'IMMEDIATE_CANCEL', 'RESUBSCRIBE', 'GRANT_DAYS', 'CHANGE_BILLING_ACCOUNT']),
  subscribedBy: z.enum(['USER', 'PLATFORM']),
  currentCycle: z.number().int(),
  chargedCycles: z.number().int(),
  trialedCycles: z.number().int().nullish(),
  inFixedFreeDays: z.boolean().nullish(),
  inFixedCycleTrial: z.boolean().nullish(),
  reason: z.string().nullish(),
  grantDays: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type SubscriptionActivityInfo = z.TypeOf<typeof SubscriptionActivityInfo>
