/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DebitResult } from './DebitResult.js'

export const BulkDebitResult = z.object({
  failList: z.array(DebitResult).nullish(),
  status: z.enum(['FAIL', 'PARTIAL_SUCCESS', 'SUCCESS']).nullish(),
  successList: z.array(DebitResult).nullish()
})

export interface BulkDebitResult extends z.TypeOf<typeof BulkDebitResult> {}
