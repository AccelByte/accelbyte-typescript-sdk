/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DebitByCurrencyCodeRequest } from './DebitByCurrencyCodeRequest'

export const DebitResult = z.object({
  userId: z.string().nullish(),
  currencyCode: z.string().nullish(),
  request: DebitByCurrencyCodeRequest.nullish(),
  reason: z.string().nullish()
})

export interface DebitResult extends z.TypeOf<typeof DebitResult> {}
