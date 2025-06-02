/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateLeaderboardConfigReqV3 = z.object({
  allTime: z.boolean(),
  cycleIds: z.array(z.string()).nullish(),
  descending: z.boolean(),
  description: z.string().nullish(),
  iconURL: z.string().nullish(),
  name: z.string()
})

export interface UpdateLeaderboardConfigReqV3 extends z.TypeOf<typeof UpdateLeaderboardConfigReqV3> {}
