/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CatalogChangeInfo = z.object({
  action: z.enum(['CREATE', 'DELETE', 'UPDATE']),
  categoryPath: z.string().nullish(),
  changeId: z.string(),
  createdAt: z.string(),
  description: z.string().nullish(),
  itemId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  namespace: z.string(),
  publishedAt: z.string().nullish(),
  sectionId: z.string().nullish(),
  selected: z.boolean(),
  sku: z.string().nullish(),
  status: z.enum(['PUBLISHED', 'UNPUBLISHED']),
  storeId: z.string(),
  title: z.string().nullish(),
  type: z.enum(['CATEGORY', 'ITEM', 'SECTION', 'STORE', 'VIEW']).nullish(),
  updatedAt: z.string(),
  viewId: z.string().nullish()
})

export interface CatalogChangeInfo extends z.TypeOf<typeof CatalogChangeInfo> {}
