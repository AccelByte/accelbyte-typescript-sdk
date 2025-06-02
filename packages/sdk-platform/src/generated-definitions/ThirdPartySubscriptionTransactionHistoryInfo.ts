/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ThirdPartySubscriptionTransactionHistoryInfo = z.object({
  createdAt: z.string().nullish(),
  expiredAt: z.string().nullish(),
  id: z.string(),
  lastTransactionId: z.string().nullish(),
  namespace: z.string(),
  operator: z.string().nullish(),
  reason: z.string().nullish(),
  status: z.enum([
    'ACTIVE',
    'BILLING_RETRY_PERIOD',
    'CANCELED',
    'EXPIRED',
    'IN_GRACE_PERIOD',
    'ON_HOLD',
    'PAUSED',
    'PENDING',
    'REVOKED',
    'UNKNOWN'
  ]),
  subscriptionProductId: z.string().nullish(),
  thirdPartySubscriptionId: z.string(),
  updatedAt: z.string().nullish(),
  userId: z.string()
})

export interface ThirdPartySubscriptionTransactionHistoryInfo extends z.TypeOf<typeof ThirdPartySubscriptionTransactionHistoryInfo> {}
