/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CatalogDefinitionInfo = z.object({
  field: z.string(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  name: z.string(),
  required: z.boolean()
})

export interface CatalogDefinitionInfo extends z.TypeOf<typeof CatalogDefinitionInfo> {}
