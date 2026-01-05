/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubscriptionActivityInfo = z.object({
  action: z.enum(['CANCEL', 'CHANGE_BILLING_ACCOUNT', 'GRANT_DAYS', 'IMMEDIATE_CANCEL', 'RESUBSCRIBE', 'SUBSCRIBE']),
  chargedCycles: z.number().int(),
  createdAt: z.string(),
  currentCycle: z.number().int(),
  grantDays: z.number().int().nullish(),
  inFixedCycleTrial: z.boolean().nullish(),
  inFixedFreeDays: z.boolean().nullish(),
  namespace: z.string(),
  operator: z.string(),
  reason: z.string().nullish(),
  subscribedBy: z.enum(['PLATFORM', 'USER']),
  subscriptionId: z.string(),
  trialedCycles: z.number().int().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface SubscriptionActivityInfo extends z.TypeOf<typeof SubscriptionActivityInfo> {}
