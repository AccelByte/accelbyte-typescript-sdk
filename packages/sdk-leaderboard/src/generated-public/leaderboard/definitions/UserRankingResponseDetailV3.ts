/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRankingResponseDetailV3 = z.object({
  additionalData: z.record(z.any()).nullish(),
  hidden: z.boolean().nullish(),
  point: z.number(),
  rank: z.number().int()
})

export interface UserRankingResponseDetailV3 extends z.TypeOf<typeof UserRankingResponseDetailV3> {}
