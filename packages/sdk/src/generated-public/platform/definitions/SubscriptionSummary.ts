/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubscriptionSummary = z.object({
  id: z.string(),
  namespace: z.string(),
  userId: z.string(),
  itemId: z.string(),
  sku: z.string().nullish(),
  status: z.enum(['INIT', 'ACTIVE', 'CANCELLED', 'EXPIRED']),
  currentPeriodStart: z.string().nullish(),
  currentPeriodEnd: z.string().nullish(),
  subscribedBy: z.enum(['USER', 'PLATFORM']).nullish()
})

export type SubscriptionSummary = z.TypeOf<typeof SubscriptionSummary>
