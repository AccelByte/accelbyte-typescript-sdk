/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatResumeResponse = z.object({
  max: z.string(),
  mean: z.string(),
  min: z.string(),
  multiplier: z.string(),
  stddev: z.string(),
  valueShifts: z.record(z.string()),
  zscores: z.record(z.string())
})

export interface StatResumeResponse extends z.TypeOf<typeof StatResumeResponse> {}
