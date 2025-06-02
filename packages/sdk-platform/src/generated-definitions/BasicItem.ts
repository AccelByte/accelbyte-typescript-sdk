/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BasicItem = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  baseAppId: z.string().nullish(),
  createdAt: z.string(),
  entitlementType: z.enum(['CONSUMABLE', 'DURABLE']),
  features: z.array(z.string()).nullish(),
  itemId: z.string(),
  itemType: z.enum([
    'APP',
    'BUNDLE',
    'CODE',
    'COINS',
    'EXTENSION',
    'INGAMEITEM',
    'LOOTBOX',
    'MEDIA',
    'OPTIONBOX',
    'SEASON',
    'SUBSCRIPTION'
  ]),
  name: z.string(),
  namespace: z.string(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  sku: z.string().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string(),
  useCount: z.number().int().nullish()
})

export interface BasicItem extends z.TypeOf<typeof BasicItem> {}
