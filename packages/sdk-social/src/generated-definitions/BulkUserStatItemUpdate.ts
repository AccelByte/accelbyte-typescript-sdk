/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkUserStatItemUpdate = z.object({
  additionalData: z.record(z.any()).nullish(),
  additionalKey: z.string().nullish(),
  statCode: z.string(),
  updateStrategy: z.enum(['INCREMENT', 'MAX', 'MIN', 'OVERRIDE']),
  userId: z.string(),
  value: z.number()
})

export interface BulkUserStatItemUpdate extends z.TypeOf<typeof BulkUserStatItemUpdate> {}
