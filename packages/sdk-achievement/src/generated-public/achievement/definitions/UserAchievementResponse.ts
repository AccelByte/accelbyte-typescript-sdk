/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserAchievementResponse = z.object({
  achievedAt: z.string(),
  achievementCode: z.string(),
  id: z.string(),
  latestValue: z.number(),
  name: z.record(z.string()),
  status: z.number().int()
})

export interface UserAchievementResponse extends z.TypeOf<typeof UserAchievementResponse> {}
