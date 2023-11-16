/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditPayload = z.object({
  balanceOrigin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  count: z.number().int(),
  currencyCode: z.string(),
  expireAt: z.string().nullish()
})

export interface CreditPayload extends z.TypeOf<typeof CreditPayload> {}
