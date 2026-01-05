/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetLeaderboardConfigPublicResp = z.object({
  iconURL: z.string(),
  leaderboardCode: z.string(),
  name: z.string(),
  statCode: z.string()
})

export interface GetLeaderboardConfigPublicResp extends z.TypeOf<typeof GetLeaderboardConfigPublicResp> {}
