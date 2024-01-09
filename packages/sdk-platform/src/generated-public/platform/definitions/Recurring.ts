/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Recurring = z.object({
  cycle: z.enum(['MONTHLY', 'QUARTERLY', 'WEEKLY', 'YEARLY']),
  fixedFreeDays: z.number().int(),
  fixedTrialCycles: z.number().int(),
  graceDays: z.number().int()
})

export interface Recurring extends z.TypeOf<typeof Recurring> {}
