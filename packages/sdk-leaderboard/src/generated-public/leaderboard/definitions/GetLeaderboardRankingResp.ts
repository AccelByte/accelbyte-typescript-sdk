/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserPoint } from './UserPoint'

export const GetLeaderboardRankingResp = z.object({ data: z.array(UserPoint), paging: Pagination })

export interface GetLeaderboardRankingResp extends z.TypeOf<typeof GetLeaderboardRankingResp> {}
