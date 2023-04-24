/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatCycleUpdate = z.object({
  name: z.string(),
  description: z.string().nullish(),
  cycleType: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'ANNUALLY', 'SEASONAL']),
  resetTime: z.string(),
  resetDay: z.number().int().nullish(),
  resetDate: z.number().int().nullish(),
  resetMonth: z.number().int().nullish(),
  seasonPeriod: z.number().int().nullish(),
  start: z.string(),
  end: z.string().nullish()
})

export interface StatCycleUpdate extends z.TypeOf<typeof StatCycleUpdate> {}
