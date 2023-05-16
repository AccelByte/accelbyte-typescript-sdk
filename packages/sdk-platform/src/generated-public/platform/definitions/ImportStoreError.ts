/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportErrorDetails } from './ImportErrorDetails.js'
import { ImportStoreItemInfo } from './ImportStoreItemInfo.js'

export const ImportStoreError = z.object({
  errors: z.array(ImportErrorDetails).nullish(),
  item: ImportStoreItemInfo.nullish(),
  type: z.enum(['ITEM']).nullish()
})

export interface ImportStoreError extends z.TypeOf<typeof ImportStoreError> {}
