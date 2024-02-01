/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentDownloaderResponse } from './ContentDownloaderResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedContentDownloaderResponse = z.object({ data: z.array(ContentDownloaderResponse), paging: PagingCursor })

export interface PaginatedContentDownloaderResponse extends z.TypeOf<typeof PaginatedContentDownloaderResponse> {}
