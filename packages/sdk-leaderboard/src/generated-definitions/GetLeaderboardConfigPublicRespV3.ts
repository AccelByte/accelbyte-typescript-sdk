/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetLeaderboardConfigPublicRespV3 = z.object({
  allTime: z.boolean(),
  cycleIds: z.array(z.string()),
  iconURL: z.string(),
  leaderboardCode: z.string(),
  name: z.string(),
  statCode: z.string()
})

export interface GetLeaderboardConfigPublicRespV3 extends z.TypeOf<typeof GetLeaderboardConfigPublicRespV3> {}
