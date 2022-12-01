/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportStoreError } from './ImportStoreError'
import { StoreInfo } from './StoreInfo'

export const ImportStoreResult = z.object({
  success: z.boolean().nullish(),
  storeInfo: StoreInfo.nullish(),
  errors: z.array(ImportStoreError).nullish()
})

export type ImportStoreResult = z.TypeOf<typeof ImportStoreResult>
