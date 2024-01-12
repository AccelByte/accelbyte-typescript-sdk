/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConfigResponse } from './ConfigResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedGetConfigsResponse = z.object({ data: z.array(ConfigResponse), paging: PagingCursor })

export interface PaginatedGetConfigsResponse extends z.TypeOf<typeof PaginatedGetConfigsResponse> {}
