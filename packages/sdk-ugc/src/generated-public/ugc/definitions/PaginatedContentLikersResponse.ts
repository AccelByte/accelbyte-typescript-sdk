/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentLikersResponse } from './ContentLikersResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedContentLikersResponse = z.object({ data: z.array(ContentLikersResponse), paging: PagingCursor })

export interface PaginatedContentLikersResponse extends z.TypeOf<typeof PaginatedContentLikersResponse> {}
