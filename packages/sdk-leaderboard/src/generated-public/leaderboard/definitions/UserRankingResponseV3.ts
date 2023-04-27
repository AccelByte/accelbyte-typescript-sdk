/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserCycleRankingResponseDetail } from './UserCycleRankingResponseDetail.js'
import { UserRankingResponseDetailV3 } from './UserRankingResponseDetailV3.js'

export const UserRankingResponseV3 = z.object({
  allTime: UserRankingResponseDetailV3.nullish(),
  cycles: z.array(UserCycleRankingResponseDetail),
  userId: z.string()
})

export interface UserRankingResponseV3 extends z.TypeOf<typeof UserRankingResponseV3> {}
