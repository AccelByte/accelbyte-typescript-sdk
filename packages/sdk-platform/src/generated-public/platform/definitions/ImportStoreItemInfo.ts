/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const ImportStoreItemInfo = z.object({
  categoryPath: z.string().nullish(),
  itemId: z.string().nullish(),
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
  localizations: z.record(Localization),
  name: z.string().nullish(),
  sku: z.string().nullish()
})

export interface ImportStoreItemInfo extends z.TypeOf<typeof ImportStoreItemInfo> {}
