/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { TagResponse } from './TagResponse.js'

export const TagsGetResponseV3 = z.object({ data: z.array(TagResponse), paging: PaginationV3 })

export interface TagsGetResponseV3 extends z.TypeOf<typeof TagsGetResponseV3> {}
