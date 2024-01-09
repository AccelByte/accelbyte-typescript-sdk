/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementIfc = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  clazz: z.enum(['APP', 'CODE', 'ENTITLEMENT', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SUBSCRIPTION']).nullish(),
  createdAt: z.string().nullish(),
  endDate: z.string().nullish(),
  features: z.array(z.string()).nullish(),
  grantedCode: z.string().nullish(),
  id: z.string().nullish(),
  itemId: z.string().nullish(),
  itemNamespace: z.string().nullish(),
  name: z.string().nullish(),
  namespace: z.string().nullish(),
  noOrigin: z.boolean().nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  sku: z.string().nullish(),
  startDate: z.string().nullish(),
  status: z.enum(['ACTIVE', 'CONSUMED', 'INACTIVE', 'REVOKED', 'SOLD']).nullish(),
  storeId: z.string().nullish(),
  type: z.enum(['CONSUMABLE', 'DURABLE']).nullish(),
  updatedAt: z.string().nullish(),
  useCount: z.number().int().nullish(),
  userId: z.string().nullish()
})

export interface EntitlementIfc extends z.TypeOf<typeof EntitlementIfc> {}
