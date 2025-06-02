/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Entry } from './Entry.js'
import { PaginationV2 } from './PaginationV2.js'

export const GetPublicLeaderboardRankingResponse = z.object({ data: z.array(Entry), paging: PaginationV2 })

export interface GetPublicLeaderboardRankingResponse extends z.TypeOf<typeof GetPublicLeaderboardRankingResponse> {}
