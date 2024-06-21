/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClaimUsersRewardsRequest = z.object({ rewardIds: z.array(z.string()), userId: z.string() })

export interface ClaimUsersRewardsRequest extends z.TypeOf<typeof ClaimUsersRewardsRequest> {}
