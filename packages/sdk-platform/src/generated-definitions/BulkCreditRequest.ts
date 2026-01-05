/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRequest } from './CreditRequest.js'

export const BulkCreditRequest = z.object({
  creditRequest: CreditRequest.nullish(),
  currencyCode: z.string().nullish(),
  userIds: z.array(z.string()).nullish()
})

export interface BulkCreditRequest extends z.TypeOf<typeof BulkCreditRequest> {}
