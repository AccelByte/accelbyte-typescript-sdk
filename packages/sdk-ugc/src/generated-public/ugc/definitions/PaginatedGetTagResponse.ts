/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateTagResponse } from './CreateTagResponse'
import { PagingCursor } from './PagingCursor'

export const PaginatedGetTagResponse = z.object({ data: z.array(CreateTagResponse), paging: PagingCursor })

export interface PaginatedGetTagResponse extends z.TypeOf<typeof PaginatedGetTagResponse> {}
