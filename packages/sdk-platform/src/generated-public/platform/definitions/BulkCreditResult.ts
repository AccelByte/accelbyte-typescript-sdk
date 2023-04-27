/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditResult } from './CreditResult.js'

export const BulkCreditResult = z.object({
  successList: z.array(CreditResult).nullish(),
  failList: z.array(CreditResult).nullish(),
  status: z.enum(['SUCCESS', 'FAIL', 'PARTIAL_SUCCESS']).nullish()
})

export interface BulkCreditResult extends z.TypeOf<typeof BulkCreditResult> {}
