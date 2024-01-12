/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DailyConfig } from './DailyConfig.js'
import { MonthlyConfig } from './MonthlyConfig.js'
import { WeeklyConfig } from './WeeklyConfig.js'

export const GetLeaderboardConfigResp = z.object({
  daily: DailyConfig,
  deletedAt: z.string().nullish(),
  descending: z.boolean(),
  iconURL: z.string(),
  isArchived: z.boolean(),
  isDeleted: z.boolean(),
  leaderboardCode: z.string(),
  monthly: MonthlyConfig,
  name: z.string(),
  seasonPeriod: z.number().int(),
  startTime: z.string(),
  statCode: z.string(),
  weekly: WeeklyConfig
})

export interface GetLeaderboardConfigResp extends z.TypeOf<typeof GetLeaderboardConfigResp> {}
