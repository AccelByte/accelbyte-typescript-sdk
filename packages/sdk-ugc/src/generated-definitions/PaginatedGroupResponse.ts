/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateGroupResponse } from './CreateGroupResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const PaginatedGroupResponse = z.object({ data: z.array(CreateGroupResponse), paging: PagingCursor })

export interface PaginatedGroupResponse extends z.TypeOf<typeof PaginatedGroupResponse> {}
