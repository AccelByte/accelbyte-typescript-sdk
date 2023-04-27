/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DailyConfig } from './DailyConfig.js'
import { MonthlyConfig } from './MonthlyConfig.js'
import { WeeklyConfig } from './WeeklyConfig.js'

export const UpdateLeaderboardConfigReq = z.object({
  daily: DailyConfig,
  descending: z.boolean(),
  iconURL: z.string(),
  monthly: MonthlyConfig,
  name: z.string(),
  seasonPeriod: z.number().int(),
  startTime: z.string(),
  statCode: z.string(),
  weekly: WeeklyConfig
})

export interface UpdateLeaderboardConfigReq extends z.TypeOf<typeof UpdateLeaderboardConfigReq> {}
