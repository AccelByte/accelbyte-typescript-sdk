/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserReward } from './UserReward.js'

export const ListUserRewardsResponse = z.object({ data: z.array(UserReward), paging: Pagination })

export interface ListUserRewardsResponse extends z.TypeOf<typeof ListUserRewardsResponse> {}
