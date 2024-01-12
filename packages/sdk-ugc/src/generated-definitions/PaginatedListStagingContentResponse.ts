/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PagingCursor } from './PagingCursor.js'
import { StagingContentResponse } from './StagingContentResponse.js'

export const PaginatedListStagingContentResponse = z.object({ data: z.array(StagingContentResponse), paging: PagingCursor })

export interface PaginatedListStagingContentResponse extends z.TypeOf<typeof PaginatedListStagingContentResponse> {}
