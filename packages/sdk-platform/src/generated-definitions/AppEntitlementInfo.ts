/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemSnapshot } from './ItemSnapshot.js'

export const AppEntitlementInfo = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  collectionId: z.string().nullish(),
  endDate: z.string().nullish(),
  grantedAt: z.string(),
  itemId: z.string().nullish(),
  itemSnapshot: ItemSnapshot.nullish(),
  namespace: z.string(),
  noOrigin: z.boolean().nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  sku: z.string().nullish(),
  startDate: z.string().nullish(),
  status: z.enum(['ACTIVE', 'CONSUMED', 'INACTIVE', 'REVOKED', 'SOLD']),
  storeId: z.string().nullish(),
  userId: z.string()
})

export interface AppEntitlementInfo extends z.TypeOf<typeof AppEntitlementInfo> {}
