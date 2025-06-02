/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemNaming = z.object({
  categoryPath: z.string().nullish(),
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
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish()
})

export interface ItemNaming extends z.TypeOf<typeof ItemNaming> {}
