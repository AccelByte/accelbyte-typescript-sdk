/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebitByCurrencyCodeRequest = z.object({
  allowOverdraft: z.boolean().nullish(),
  amount: z.number().int(),
  balanceOrigin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  balanceSource: z.enum(['DLC_REVOCATION', 'EXPIRATION', 'IAP_REVOCATION', 'ORDER_REVOCATION', 'OTHER', 'PAYMENT']).nullish(),
  metadata: z.record(z.any()).nullish(),
  reason: z.string().nullish()
})

export interface DebitByCurrencyCodeRequest extends z.TypeOf<typeof DebitByCurrencyCodeRequest> {}
