/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchmakingDetail } from './MatchmakingDetail.js'
import { Pagination } from './Pagination.js'

export const MatchmakingDetailQueryResponse = z.object({ data: z.array(MatchmakingDetail), paging: Pagination })

export interface MatchmakingDetailQueryResponse extends z.TypeOf<typeof MatchmakingDetailQueryResponse> {}
