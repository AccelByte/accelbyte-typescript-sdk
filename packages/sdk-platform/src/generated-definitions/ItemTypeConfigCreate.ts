/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemTypeConfigCreate = z.object({
  clazz: z.string().nullish(),
  dryRun: z.boolean().nullish(),
  fulfillmentUrl: z.string(),
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
  purchaseConditionUrl: z.string().nullish()
})

export interface ItemTypeConfigCreate extends z.TypeOf<typeof ItemTypeConfigCreate> {}
