/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TimeLimitedBalance = z.object({
  balance: z.number().int().nullish(),
  balanceSource: z.string().nullish(),
  expireAt: z.string().nullish()
})

export type TimeLimitedBalance = z.TypeOf<typeof TimeLimitedBalance>
