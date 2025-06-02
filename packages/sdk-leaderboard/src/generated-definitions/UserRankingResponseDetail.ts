/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRankingResponseDetail = z.object({
  additionalData: z.record(z.any()),
  hidden: z.boolean().nullish(),
  point: z.number(),
  rank: z.number().int()
})

export interface UserRankingResponseDetail extends z.TypeOf<typeof UserRankingResponseDetail> {}
