/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ThirdPartySubscriptionTransactionInfo = z.object({
  active: z.boolean(),
  createdAt: z.string().nullish(),
  expiredAt: z.string(),
  id: z.string(),
  lastTransactionId: z.string().nullish(),
  namespace: z.string(),
  originalTransactionId: z.string(),
  platform: z.enum(['APPLE', 'EPICGAMES', 'GOOGLE', 'OCULUS', 'PLAYSTATION', 'STADIA', 'STEAM', 'TWITCH', 'XBOX']),
  purchaseToken: z.string().nullish(),
  startAt: z.string().nullish(),
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
  subscriptionGroupId: z.string().nullish(),
  subscriptionProductId: z.string(),
  updatedAt: z.string().nullish(),
  userId: z.string()
})

export interface ThirdPartySubscriptionTransactionInfo extends z.TypeOf<typeof ThirdPartySubscriptionTransactionInfo> {}
