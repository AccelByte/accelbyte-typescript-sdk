/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkStatCycleOperationResult = z.object({
  cycleId: z.string().nullish(),
  details: z.record(z.any()).nullish(),
  statCode: z.string().nullish(),
  success: z.boolean().nullish()
})

export interface BulkStatCycleOperationResult extends z.TypeOf<typeof BulkStatCycleOperationResult> {}
