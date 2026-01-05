/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserCycleRankingResponseDetail } from './UserCycleRankingResponseDetail.js'
import { UserRankingResponseDetailV3 } from './UserRankingResponseDetailV3.js'

export const UserLeaderboardRankingV3 = z.object({
  allTime: UserRankingResponseDetailV3.nullish(),
  cycles: z.array(UserCycleRankingResponseDetail),
  leaderboardCode: z.string(),
  leaderboardName: z.string(),
  userId: z.string()
})

export interface UserLeaderboardRankingV3 extends z.TypeOf<typeof UserLeaderboardRankingV3> {}
