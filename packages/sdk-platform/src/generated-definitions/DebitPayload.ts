/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebitPayload = z.object({
  count: z.number().int(),
  currencyCode: z.string(),
  walletPlatform: z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'Xbox'])
})

export interface DebitPayload extends z.TypeOf<typeof DebitPayload> {}
