/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ListSeasonInfo } from './ListSeasonInfo.js'
import { Paging } from './Paging.js'

export const ListSeasonInfoPagingSlicedResult = z.object({ data: z.array(ListSeasonInfo), paging: Paging.nullish() })

export interface ListSeasonInfoPagingSlicedResult extends z.TypeOf<typeof ListSeasonInfoPagingSlicedResult> {}
