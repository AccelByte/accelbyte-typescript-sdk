/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportErrorDetails } from './ImportErrorDetails.js'
import { ImportStoreAppInfo } from './ImportStoreAppInfo.js'
import { ImportStoreCategoryInfo } from './ImportStoreCategoryInfo.js'
import { ImportStoreItemInfo } from './ImportStoreItemInfo.js'
import { ImportStoreSectionInfo } from './ImportStoreSectionInfo.js'
import { ImportStoreViewInfo } from './ImportStoreViewInfo.js'

export const ImportStoreError = z.object({
  app: ImportStoreAppInfo.nullish(),
  category: ImportStoreCategoryInfo.nullish(),
  errors: z.array(ImportErrorDetails).nullish(),
  item: ImportStoreItemInfo.nullish(),
  section: ImportStoreSectionInfo.nullish(),
  type: z.enum(['APP', 'CATEGORY', 'ITEM', 'SECTION', 'STORE', 'VIEW']).nullish(),
  view: ImportStoreViewInfo.nullish()
})

export interface ImportStoreError extends z.TypeOf<typeof ImportStoreError> {}
