/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DebitByCurrencyCodeRequest } from './DebitByCurrencyCodeRequest.js'

export const BulkDebitRequest = z.object({
  currencyCode: z.string().nullish(),
  request: DebitByCurrencyCodeRequest.nullish(),
  userIds: z.array(z.string()).nullish()
})

export interface BulkDebitRequest extends z.TypeOf<typeof BulkDebitRequest> {}
