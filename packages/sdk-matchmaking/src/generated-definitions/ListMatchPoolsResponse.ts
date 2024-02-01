/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchPool } from './MatchPool.js'
import { Pagination } from './Pagination.js'

export const ListMatchPoolsResponse = z.object({ data: z.array(MatchPool).nullish(), pagination: Pagination.nullish() })

export interface ListMatchPoolsResponse extends z.TypeOf<typeof ListMatchPoolsResponse> {}
