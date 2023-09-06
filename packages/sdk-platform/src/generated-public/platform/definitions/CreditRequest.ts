/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditRequest = z.object({
  amount: z.number().int(),
  expireAt: z.string().nullish(),
  metadata: z.record(z.any()).nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  reason: z.string().nullish(),
  source: z
    .enum([
      'ACHIEVEMENT',
      'CONSUME_ENTITLEMENT',
      'DLC',
      'GIFT',
      'IAP',
      'IAP_CHARGEBACK_REVERSED',
      'OTHER',
      'PROMOTION',
      'PURCHASE',
      'REDEEM_CODE',
      'REFERRAL_BONUS',
      'REFUND',
      'REWARD',
      'SELL_BACK'
    ])
    .nullish()
})

export interface CreditRequest extends z.TypeOf<typeof CreditRequest> {}
