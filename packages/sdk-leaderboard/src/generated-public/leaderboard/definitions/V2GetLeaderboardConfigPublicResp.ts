/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const V2GetLeaderboardConfigPublicResp = z.object({
  iconURL: z.string(),
  leaderboardCode: z.string(),
  name: z.string(),
  statCode: z.string()
})

export interface V2GetLeaderboardConfigPublicResp extends z.TypeOf<typeof V2GetLeaderboardConfigPublicResp> {}
