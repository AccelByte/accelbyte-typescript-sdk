/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatCycleUpdate = z.object({
  cycleType: z.enum(['ANNUALLY', 'DAILY', 'MONTHLY', 'SEASONAL', 'WEEKLY']),
  description: z.string().nullish(),
  end: z.string().nullish(),
  name: z.string(),
  resetDate: z.number().int().nullish(),
  resetDay: z.number().int().nullish(),
  resetMonth: z.number().int().nullish(),
  resetTime: z.string(),
  seasonPeriod: z.number().int().nullish(),
  start: z.string()
})

export interface StatCycleUpdate extends z.TypeOf<typeof StatCycleUpdate> {}
