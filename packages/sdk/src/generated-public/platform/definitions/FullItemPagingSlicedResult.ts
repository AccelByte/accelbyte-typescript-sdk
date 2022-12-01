/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullItemInfo } from './FullItemInfo'
import { Paging } from './Paging'

export const FullItemPagingSlicedResult = z.object({ data: z.array(FullItemInfo), paging: Paging.nullish() })

export type FullItemPagingSlicedResult = z.TypeOf<typeof FullItemPagingSlicedResult>
