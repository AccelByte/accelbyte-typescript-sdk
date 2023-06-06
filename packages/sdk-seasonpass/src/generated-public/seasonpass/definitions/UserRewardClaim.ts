/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRewardClaim = z.object({ passCode: z.string(), rewardCode: z.string(), tierIndex: z.number().int() })

export interface UserRewardClaim extends z.TypeOf<typeof UserRewardClaim> {}
