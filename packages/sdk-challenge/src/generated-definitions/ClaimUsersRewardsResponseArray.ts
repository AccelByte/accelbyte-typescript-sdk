/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClaimUsersRewardsResponse } from './ClaimUsersRewardsResponse.js'

export const ClaimUsersRewardsResponseArray = z.array(ClaimUsersRewardsResponse)

export interface ClaimUsersRewardsResponseArray extends z.TypeOf<typeof ClaimUsersRewardsResponseArray> {}
