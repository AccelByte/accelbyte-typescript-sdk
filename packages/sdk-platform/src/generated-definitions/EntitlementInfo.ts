/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemSnapshot } from './ItemSnapshot.js'

export const EntitlementInfo = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  clazz: z.enum(['APP', 'CODE', 'ENTITLEMENT', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SUBSCRIPTION']),
  collectionId: z.string().nullish(),
  createdAt: z.string(),
  endDate: z.string().nullish(),
  features: z.array(z.string()).nullish(),
  grantedAt: z.string().nullish(),
  grantedCode: z.string().nullish(),
  id: z.string(),
  itemId: z.string(),
  itemNamespace: z.string(),
  itemSnapshot: ItemSnapshot.nullish(),
  name: z.string().nullish(),
  namespace: z.string(),
  noOrigin: z.boolean().nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  platformAvailable: z.boolean().nullish(),
  sku: z.string().nullish(),
  source: z.enum(['ACHIEVEMENT', 'GIFT', 'IAP', 'OTHER', 'PROMOTION', 'PURCHASE', 'REDEEM_CODE', 'REFERRAL_BONUS', 'REWARD']).nullish(),
  stackable: z.boolean().nullish(),
  startDate: z.string().nullish(),
  status: z.enum(['ACTIVE', 'CONSUMED', 'INACTIVE', 'REVOKED', 'SOLD']),
  storeId: z.string().nullish(),
  type: z.enum(['CONSUMABLE', 'DURABLE']).nullish(),
  updatedAt: z.string(),
  useCount: z.number().int().nullish(),
  userId: z.string().nullish()
})

export interface EntitlementInfo extends z.TypeOf<typeof EntitlementInfo> {}
