/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditRequest = z.object({
  amount: z.number().int(),
  source: z
    .enum(['PURCHASE', 'IAP', 'PROMOTION', 'ACHIEVEMENT', 'REFERRAL_BONUS', 'REDEEM_CODE', 'REWARD', 'GIFT', 'REFUND', 'DLC', 'OTHER'])
    .nullish(),
  expireAt: z.string().nullish(),
  reason: z.string().nullish(),
  origin: z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'Stadia', 'IOS', 'GooglePlay', 'Twitch', 'Nintendo', 'System', 'Other']).nullish()
})

export type CreditRequest = z.TypeOf<typeof CreditRequest>
