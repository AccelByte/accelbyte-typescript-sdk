/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CategoryLimit } from './CategoryLimit.js'

export const ReportingLimit = z.object({
  categoryLimits: z.array(CategoryLimit),
  timeInterval: z.number().int(),
  userMaxReportPerTimeInterval: z.number().int()
})

export interface ReportingLimit extends z.TypeOf<typeof ReportingLimit> {}
