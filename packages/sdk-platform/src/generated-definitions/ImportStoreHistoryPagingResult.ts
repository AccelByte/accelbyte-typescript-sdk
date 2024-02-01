/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImportStoreHistoryInfo } from './ImportStoreHistoryInfo.js'
import { Paging } from './Paging.js'

export const ImportStoreHistoryPagingResult = z.object({
  data: z.array(ImportStoreHistoryInfo),
  paging: Paging.nullish(),
  total: z.number().int().nullish()
})

export interface ImportStoreHistoryPagingResult extends z.TypeOf<typeof ImportStoreHistoryPagingResult> {}
