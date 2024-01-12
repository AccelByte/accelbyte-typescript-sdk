/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserRankingResponseDetail } from './UserRankingResponseDetail.js'

export const UserLeaderboardRanking = z.object({
  allTime: UserRankingResponseDetail,
  current: UserRankingResponseDetail,
  daily: UserRankingResponseDetail,
  leaderboardCode: z.string(),
  leaderboardName: z.string(),
  monthly: UserRankingResponseDetail,
  userId: z.string(),
  weekly: UserRankingResponseDetail
})

export interface UserLeaderboardRanking extends z.TypeOf<typeof UserLeaderboardRanking> {}
