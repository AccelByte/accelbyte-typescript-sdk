/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserRankingResponseDetail } from './UserRankingResponseDetail'

export const UserRankingResponse = z.object({
  allTime: UserRankingResponseDetail,
  current: UserRankingResponseDetail,
  daily: UserRankingResponseDetail,
  monthly: UserRankingResponseDetail,
  userId: z.string(),
  weekly: UserRankingResponseDetail
})

export interface UserRankingResponse extends z.TypeOf<typeof UserRankingResponse> {}
