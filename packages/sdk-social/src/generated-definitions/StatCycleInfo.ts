/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatCycleInfo = z.object({
  createdAt: z.string(),
  currentVersion: z.number().int(),
  cycleType: z.enum(['ANNUALLY', 'DAILY', 'MONTHLY', 'SEASONAL', 'WEEKLY']),
  description: z.string().nullish(),
  end: z.string().nullish(),
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  nextReset: z.string().nullish(),
  resetDate: z.number().int().nullish(),
  resetDay: z.number().int().nullish(),
  resetMonth: z.number().int().nullish(),
  resetTime: z.string(),
  seasonPeriod: z.number().int().nullish(),
  start: z.string(),
  status: z.enum(['ACTIVE', 'INIT', 'STOPPED']),
  updatedAt: z.string()
})

export interface StatCycleInfo extends z.TypeOf<typeof StatCycleInfo> {}
