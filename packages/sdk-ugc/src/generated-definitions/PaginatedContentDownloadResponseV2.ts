/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentDownloadResponseV2 } from './ContentDownloadResponseV2.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedContentDownloadResponseV2 = z.object({ data: z.array(ContentDownloadResponseV2), paging: PagingCursor })

export interface PaginatedContentDownloadResponseV2 extends z.TypeOf<typeof PaginatedContentDownloadResponseV2> {}
