/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRequest } from './CreditRequest.js'

export const CreditResult = z.object({
  creditRequest: CreditRequest.nullish(),
  currencyCode: z.string().nullish(),
  reason: z.string().nullish(),
  userId: z.string().nullish()
})

export interface CreditResult extends z.TypeOf<typeof CreditResult> {}
