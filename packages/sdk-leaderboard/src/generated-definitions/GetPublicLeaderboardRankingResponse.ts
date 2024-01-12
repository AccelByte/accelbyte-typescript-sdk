/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Entry } from './Entry.js'
import { Pagination } from './Pagination.js'

export const GetPublicLeaderboardRankingResponse = z.object({ data: z.array(Entry), paging: Pagination })

export interface GetPublicLeaderboardRankingResponse extends z.TypeOf<typeof GetPublicLeaderboardRankingResponse> {}
