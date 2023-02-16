/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemNaming = z.object({
  itemId: z.string(),
  namespace: z.string(),
  itemType: z.enum([
    'APP',
    'COINS',
    'INGAMEITEM',
    'BUNDLE',
    'CODE',
    'SUBSCRIPTION',
    'SEASON',
    'MEDIA',
    'OPTIONBOX',
    'EXTENSION',
    'LOOTBOX'
  ]),
  sku: z.string().nullish(),
  name: z.string(),
  categoryPath: z.string().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish()
})

export interface ItemNaming extends z.TypeOf<typeof ItemNaming> {}
