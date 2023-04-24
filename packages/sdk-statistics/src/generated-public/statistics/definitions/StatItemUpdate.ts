/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatItemUpdate = z.object({
  updateStrategy: z.enum(['OVERRIDE', 'INCREMENT', 'MAX', 'MIN']),
  value: z.number(),
  additionalData: z.record(z.any()).nullish()
})

export interface StatItemUpdate extends z.TypeOf<typeof StatItemUpdate> {}
