/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GlobalAchievementResponse = z.object({
  achievedAt: z.string().nullish(),
  achievementCode: z.string(),
  createdAt: z.string(),
  id: z.string(),
  latestValue: z.number(),
  name: z.record(z.string()),
  namespace: z.string(),
  status: z.number().int(),
  updatedAt: z.string().nullish()
})

export interface GlobalAchievementResponse extends z.TypeOf<typeof GlobalAchievementResponse> {}
