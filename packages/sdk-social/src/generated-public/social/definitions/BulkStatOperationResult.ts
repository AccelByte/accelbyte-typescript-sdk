/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkStatOperationResult = z.object({
  details: z.record(z.any()).nullish(),
  statCode: z.string().nullish(),
  success: z.boolean().nullish()
})

export interface BulkStatOperationResult extends z.TypeOf<typeof BulkStatOperationResult> {}
