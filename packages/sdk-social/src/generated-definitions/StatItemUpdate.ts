/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatItemUpdate = z.object({
  additionalData: z.record(z.any()).nullish(),
  updateStrategy: z.enum(['INCREMENT', 'MAX', 'MIN', 'OVERRIDE']),
  value: z.number()
})

export interface StatItemUpdate extends z.TypeOf<typeof StatItemUpdate> {}
