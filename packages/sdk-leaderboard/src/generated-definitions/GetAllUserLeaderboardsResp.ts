/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserLeaderboardRanking } from './UserLeaderboardRanking.js'

export const GetAllUserLeaderboardsResp = z.object({ data: z.array(UserLeaderboardRanking), paging: Pagination })

export interface GetAllUserLeaderboardsResp extends z.TypeOf<typeof GetAllUserLeaderboardsResp> {}
