/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetLeaderboardConfigRespV3 = z.object({
  allTime: z.boolean(),
  createdAt: z.string(),
  cycleIds: z.array(z.string()),
  deletedAt: z.string().nullish(),
  descending: z.boolean(),
  description: z.string().nullish(),
  iconURL: z.string().nullish(),
  isDeleted: z.boolean(),
  leaderboardCode: z.string(),
  name: z.string(),
  statCode: z.string(),
  updatedAt: z.string()
})

export interface GetLeaderboardConfigRespV3 extends z.TypeOf<typeof GetLeaderboardConfigRespV3> {}
