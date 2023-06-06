/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClaimableRewards = z.object({
  claimingRewards: z.record(z.record(z.array(z.string()))),
  toClaimRewards: z.record(z.record(z.array(z.string())))
})

export interface ClaimableRewards extends z.TypeOf<typeof ClaimableRewards> {}
