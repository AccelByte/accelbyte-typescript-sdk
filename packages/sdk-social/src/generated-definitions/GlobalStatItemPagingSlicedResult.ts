/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GlobalStatItemInfo } from './GlobalStatItemInfo.js'
import { Paging } from './Paging.js'

export const GlobalStatItemPagingSlicedResult = z.object({ data: z.array(GlobalStatItemInfo), paging: Paging.nullish() })

export interface GlobalStatItemPagingSlicedResult extends z.TypeOf<typeof GlobalStatItemPagingSlicedResult> {}
