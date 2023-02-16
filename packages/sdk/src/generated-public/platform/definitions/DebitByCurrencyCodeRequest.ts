/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebitByCurrencyCodeRequest = z.object({
  amount: z.number().int(),
  reason: z.string().nullish(),
  balanceOrigin: z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'IOS', 'GooglePlay', 'Twitch', 'Nintendo', 'System', 'Other']).nullish(),
  allowOverdraft: z.boolean().nullish()
})

export interface DebitByCurrencyCodeRequest extends z.TypeOf<typeof DebitByCurrencyCodeRequest> {}
