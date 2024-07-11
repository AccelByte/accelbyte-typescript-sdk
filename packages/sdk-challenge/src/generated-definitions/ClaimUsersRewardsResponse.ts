/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Error } from './Error.js'
import { UserReward } from './UserReward.js'

export const ClaimUsersRewardsResponse = z.object({
  errorDetail: Error.nullish(),
  isSuccess: z.boolean(),
  rewards: z.array(UserReward),
  userId: z.string()
})

export interface ClaimUsersRewardsResponse extends z.TypeOf<typeof ClaimUsersRewardsResponse> {}
