/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditResult } from './CreditResult.js'

export const BulkCreditResult = z.object({
  failList: z.array(CreditResult).nullish(),
  status: z.enum(['FAIL', 'PARTIAL_SUCCESS', 'SUCCESS']).nullish(),
  successList: z.array(CreditResult).nullish()
})

export interface BulkCreditResult extends z.TypeOf<typeof BulkCreditResult> {}
