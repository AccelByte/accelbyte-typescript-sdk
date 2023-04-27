/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRequest } from './CreditRequest.js'

export const BulkCreditRequest = z.object({
  currencyCode: z.string().nullish(),
  creditRequest: CreditRequest.nullish(),
  userIds: z.array(z.string()).nullish()
})

export interface BulkCreditRequest extends z.TypeOf<typeof BulkCreditRequest> {}
