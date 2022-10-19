/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BasicItem = z.object({
  itemId: z.string(),
  appId: z.string().nullish(),
  appType: z.enum(['GAME', 'SOFTWARE', 'DLC', 'DEMO']).nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  baseAppId: z.string().nullish(),
  sku: z.string().nullish(),
  namespace: z.string(),
  name: z.string(),
  entitlementType: z.enum(['DURABLE', 'CONSUMABLE']),
  useCount: z.number().int().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']),
  tags: z.array(z.string()).nullish(),
  features: z.array(z.string()).nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type BasicItem = z.TypeOf<typeof BasicItem>
