/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LeaderboardConfigReqV3 = z.object({
  allTime: z.boolean(),
  cycleIds: z.array(z.string()).nullish(),
  descending: z.boolean(),
  description: z.string().nullish(),
  iconURL: z.string().nullish(),
  leaderboardCode: z.string(),
  name: z.string(),
  statCode: z.string()
})

export interface LeaderboardConfigReqV3 extends z.TypeOf<typeof LeaderboardConfigReqV3> {}
