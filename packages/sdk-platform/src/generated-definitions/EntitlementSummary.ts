/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementSummary = z.object({
  clazz: z.enum(['APP', 'CODE', 'ENTITLEMENT', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SUBSCRIPTION']),
  collectionId: z.string().nullish(),
  createdAt: z.string(),
  endDate: z.string().nullish(),
  grantedCode: z.string().nullish(),
  id: z.string(),
  itemId: z.string().nullish(),
  name: z.string().nullish(),
  namespace: z.string(),
  noOrigin: z.boolean().nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  stackable: z.boolean().nullish(),
  stackedUseCount: z.number().int().nullish(),
  startDate: z.string().nullish(),
  storeId: z.string().nullish(),
  type: z.enum(['CONSUMABLE', 'DURABLE']),
  updatedAt: z.string(),
  userId: z.string()
})

export interface EntitlementSummary extends z.TypeOf<typeof EntitlementSummary> {}
