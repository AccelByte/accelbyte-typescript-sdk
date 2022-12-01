/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportErrorDetails } from './ImportErrorDetails'
import { ImportStoreItemInfo } from './ImportStoreItemInfo'

export const ImportStoreError = z.object({
  type: z.enum(['ITEM']).nullish(),
  item: ImportStoreItemInfo.nullish(),
  errors: z.array(ImportErrorDetails).nullish()
})

export type ImportStoreError = z.TypeOf<typeof ImportStoreError>
