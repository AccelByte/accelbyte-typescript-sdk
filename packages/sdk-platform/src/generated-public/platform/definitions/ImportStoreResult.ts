/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportStoreError } from './ImportStoreError.js'
import { StoreInfo } from './StoreInfo.js'

export const ImportStoreResult = z.object({
  errors: z.array(ImportStoreError).nullish(),
  storeInfo: StoreInfo.nullish(),
  success: z.boolean().nullish()
})

export interface ImportStoreResult extends z.TypeOf<typeof ImportStoreResult> {}
