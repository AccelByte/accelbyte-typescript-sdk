/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateTypeResponse } from './CreateTypeResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedGetTypeResponse = z.object({ data: z.array(CreateTypeResponse), paging: PagingCursor })

export interface PaginatedGetTypeResponse extends z.TypeOf<typeof PaginatedGetTypeResponse> {}
