/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { TagInfo } from './TagInfo.js'

export const ListTagsResponse = z.object({ data: z.array(TagInfo), paging: Pagination })

export interface ListTagsResponse extends z.TypeOf<typeof ListTagsResponse> {}
