/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRequest } from './CreditRequest.js'

export const CreditResult = z.object({
  userId: z.string().nullish(),
  currencyCode: z.string().nullish(),
  creditRequest: CreditRequest.nullish(),
  reason: z.string().nullish()
})

export interface CreditResult extends z.TypeOf<typeof CreditResult> {}
