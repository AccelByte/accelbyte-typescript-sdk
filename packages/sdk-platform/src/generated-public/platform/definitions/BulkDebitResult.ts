/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DebitResult } from './DebitResult'

export const BulkDebitResult = z.object({
  successList: z.array(DebitResult).nullish(),
  failList: z.array(DebitResult).nullish(),
  status: z.enum(['SUCCESS', 'FAIL', 'PARTIAL_SUCCESS']).nullish()
})

export interface BulkDebitResult extends z.TypeOf<typeof BulkDebitResult> {}
