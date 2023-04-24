/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkStatItemUpdate = z.object({
  statCode: z.string(),
  updateStrategy: z.enum(['OVERRIDE', 'INCREMENT', 'MAX', 'MIN']),
  value: z.number(),
  additionalData: z.record(z.any()).nullish()
})

export interface BulkStatItemUpdate extends z.TypeOf<typeof BulkStatItemUpdate> {}
