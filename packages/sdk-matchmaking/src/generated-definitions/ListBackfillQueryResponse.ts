/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BackfillGetResponse } from './BackfillGetResponse.js'
import { Pagination } from './Pagination.js'

export const ListBackfillQueryResponse = z.object({ data: z.array(BackfillGetResponse), pagination: Pagination.nullish() })

export interface ListBackfillQueryResponse extends z.TypeOf<typeof ListBackfillQueryResponse> {}
