/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullItemInfo } from './FullItemInfo.js'
import { Paging } from './Paging.js'

export const FullItemPagingSlicedResult = z.object({ data: z.array(FullItemInfo), paging: Paging.nullish() })

export interface FullItemPagingSlicedResult extends z.TypeOf<typeof FullItemPagingSlicedResult> {}
