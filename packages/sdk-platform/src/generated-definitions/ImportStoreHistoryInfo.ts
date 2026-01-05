/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportStoreError } from './ImportStoreError.js'

export const ImportStoreHistoryInfo = z.object({
  createdAt: z.string(),
  errors: z.array(ImportStoreError).nullish(),
  id: z.string(),
  importFileFormat: z.enum(['CSV', 'JSON']),
  initiatedBy: z.string(),
  namespace: z.string(),
  note: z.string().nullish(),
  storeId: z.string(),
  success: z.boolean()
})

export interface ImportStoreHistoryInfo extends z.TypeOf<typeof ImportStoreHistoryInfo> {}
