/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubscriptionSummary = z.object({
  currentPeriodEnd: z.string().nullish(),
  currentPeriodStart: z.string().nullish(),
  id: z.string(),
  itemId: z.string(),
  namespace: z.string(),
  sku: z.string().nullish(),
  status: z.enum(['ACTIVE', 'CANCELLED', 'EXPIRED', 'INIT']),
  subscribedBy: z.enum(['PLATFORM', 'USER']).nullish(),
  userId: z.string()
})

export interface SubscriptionSummary extends z.TypeOf<typeof SubscriptionSummary> {}
