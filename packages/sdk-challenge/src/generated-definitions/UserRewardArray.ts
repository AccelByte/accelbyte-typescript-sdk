/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserReward } from './UserReward.js'

export const UserRewardArray = z.array(UserReward)

export interface UserRewardArray extends z.TypeOf<typeof UserRewardArray> {}
