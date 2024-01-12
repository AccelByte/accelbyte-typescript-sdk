/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserCycleRankingResponseDetail = z.object({
  additionalData: z.record(z.any()).nullish(),
  cycleId: z.string(),
  hidden: z.boolean().nullish(),
  point: z.number(),
  rank: z.number().int()
})

export interface UserCycleRankingResponseDetail extends z.TypeOf<typeof UserCycleRankingResponseDetail> {}
