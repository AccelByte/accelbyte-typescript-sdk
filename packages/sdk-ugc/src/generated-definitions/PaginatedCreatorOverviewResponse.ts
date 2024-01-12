/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreatorOverviewResponse } from './CreatorOverviewResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedCreatorOverviewResponse = z.object({ data: z.array(CreatorOverviewResponse), paging: PagingCursor })

export interface PaginatedCreatorOverviewResponse extends z.TypeOf<typeof PaginatedCreatorOverviewResponse> {}
