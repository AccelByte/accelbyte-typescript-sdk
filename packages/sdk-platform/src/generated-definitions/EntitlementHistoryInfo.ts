/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementHistoryInfo = z.object({
  action: z.enum(['DECREMENT', 'DISABLE', 'ENABLE', 'GRANT', 'REVOKE', 'SELL_BACK', 'UPDATE']),
  clazz: z.enum(['APP', 'CODE', 'ENTITLEMENT', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SUBSCRIPTION']).nullish(),
  createdAt: z.string(),
  entitlementId: z.string(),
  itemId: z.string().nullish(),
  namespace: z.string(),
  operator: z.string(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  reason: z.string().nullish(),
  sku: z.string().nullish(),
  updatedAt: z.string(),
  useCount: z.number().int().nullish(),
  useCountChange: z.number().int().nullish(),
  userId: z.string()
})

export interface EntitlementHistoryInfo extends z.TypeOf<typeof EntitlementHistoryInfo> {}
