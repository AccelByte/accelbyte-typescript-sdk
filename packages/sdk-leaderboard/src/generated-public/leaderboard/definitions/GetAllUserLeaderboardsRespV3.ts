/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { UserLeaderboardRankingV3 } from './UserLeaderboardRankingV3.js'

export const GetAllUserLeaderboardsRespV3 = z.object({ data: z.array(UserLeaderboardRankingV3), paging: PaginationV3 })

export interface GetAllUserLeaderboardsRespV3 extends z.TypeOf<typeof GetAllUserLeaderboardsRespV3> {}
