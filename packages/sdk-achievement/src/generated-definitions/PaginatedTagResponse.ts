/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { TagResponse } from './TagResponse.js'

export const PaginatedTagResponse = z.object({ data: z.array(TagResponse), paging: Pagination })

export interface PaginatedTagResponse extends z.TypeOf<typeof PaginatedTagResponse> {}
