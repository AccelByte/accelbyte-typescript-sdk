/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Entry } from './Entry'
import { V2Pagination } from './V2Pagination'

export const GetPublicLeaderboardRankingResponse = z.object({ data: z.array(Entry), paging: V2Pagination })

export interface GetPublicLeaderboardRankingResponse extends z.TypeOf<typeof GetPublicLeaderboardRankingResponse> {}
