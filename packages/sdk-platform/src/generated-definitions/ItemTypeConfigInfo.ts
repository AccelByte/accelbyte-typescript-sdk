/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemTypeConfigInfo = z.object({
  clazz: z.string().nullish(),
  createdAt: z.string(),
  dryRun: z.boolean().nullish(),
  fulfillmentUrl: z.string(),
  id: z.string(),
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
  purchaseConditionUrl: z.string().nullish(),
  updatedAt: z.string()
})

export interface ItemTypeConfigInfo extends z.TypeOf<typeof ItemTypeConfigInfo> {}
