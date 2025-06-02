/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentDownloadResponse } from './ContentDownloadResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedContentDownloadResponse = z.object({ data: z.array(ContentDownloadResponse), paging: PagingCursor })

export interface PaginatedContentDownloadResponse extends z.TypeOf<typeof PaginatedContentDownloadResponse> {}
