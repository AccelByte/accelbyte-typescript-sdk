/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatCycleInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  cycleType: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'ANNUALLY', 'SEASONAL']),
  name: z.string(),
  description: z.string().nullish(),
  resetTime: z.string(),
  resetDay: z.number().int().nullish(),
  resetDate: z.number().int().nullish(),
  resetMonth: z.number().int().nullish(),
  seasonPeriod: z.number().int().nullish(),
  currentVersion: z.number().int(),
  status: z.enum(['INIT', 'ACTIVE', 'STOPPED']),
  nextReset: z.string().nullish(),
  start: z.string(),
  end: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface StatCycleInfo extends z.TypeOf<typeof StatCycleInfo> {}
