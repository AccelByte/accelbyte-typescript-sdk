/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExpGrantHistoryInfo } from './ExpGrantHistoryInfo.js'
import { Paging } from './Paging.js'

export const ExpGrantHistoryPagingSlicedResult = z.object({
  data: z.array(ExpGrantHistoryInfo),
  paging: Paging.nullish(),
  total: z.number().int().nullish()
})

export interface ExpGrantHistoryPagingSlicedResult extends z.TypeOf<typeof ExpGrantHistoryPagingSlicedResult> {}
