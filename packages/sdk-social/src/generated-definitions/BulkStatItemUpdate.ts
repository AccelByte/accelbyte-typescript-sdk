/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkStatItemUpdate = z.object({
  additionalData: z.record(z.any()).nullish(),
  statCode: z.string(),
  updateStrategy: z.enum(['INCREMENT', 'MAX', 'MIN', 'OVERRIDE']),
  value: z.number()
})

export interface BulkStatItemUpdate extends z.TypeOf<typeof BulkStatItemUpdate> {}
