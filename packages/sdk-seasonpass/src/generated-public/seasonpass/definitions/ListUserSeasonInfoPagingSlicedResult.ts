/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ListUserSeasonInfo } from './ListUserSeasonInfo.js'
import { Paging } from './Paging.js'

export const ListUserSeasonInfoPagingSlicedResult = z.object({
  data: z.array(ListUserSeasonInfo),
  paging: Paging.nullish(),
  total: z.number().int().nullish()
})

export interface ListUserSeasonInfoPagingSlicedResult extends z.TypeOf<typeof ListUserSeasonInfoPagingSlicedResult> {}
