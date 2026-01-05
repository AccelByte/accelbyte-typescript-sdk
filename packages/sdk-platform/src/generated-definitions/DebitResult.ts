/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DebitByCurrencyCodeRequest } from './DebitByCurrencyCodeRequest.js'

export const DebitResult = z.object({
  currencyCode: z.string().nullish(),
  reason: z.string().nullish(),
  request: DebitByCurrencyCodeRequest.nullish(),
  userId: z.string().nullish()
})

export interface DebitResult extends z.TypeOf<typeof DebitResult> {}
