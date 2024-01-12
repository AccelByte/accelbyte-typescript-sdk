/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementLootBoxReward } from './EntitlementLootBoxReward.js'
import { ItemSnapshot } from './ItemSnapshot.js'

export const EntitlementDecrementResult = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  clazz: z.enum(['APP', 'CODE', 'ENTITLEMENT', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SUBSCRIPTION']),
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
  replayed: z.boolean().nullish(),
  requestId: z.string().nullish(),
  rewards: z.array(EntitlementLootBoxReward).nullish(),
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

export interface EntitlementDecrementResult extends z.TypeOf<typeof EntitlementDecrementResult> {}
