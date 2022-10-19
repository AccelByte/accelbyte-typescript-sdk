/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization'

export const ImportStoreItemInfo = z.object({
  itemId: z.string(),
  name: z.string(),
  sku: z.string().nullish(),
  categoryPath: z.string(),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']),
  localizations: z.record(Localization)
})

export type ImportStoreItemInfo = z.TypeOf<typeof ImportStoreItemInfo>
