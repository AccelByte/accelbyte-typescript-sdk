/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClaimUserRewardsReq = z.object({ rewardIDs: z.array(z.string()) })

export interface ClaimUserRewardsReq extends z.TypeOf<typeof ClaimUserRewardsReq> {}
