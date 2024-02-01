/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward.js'

export const RewardsRequest = z.object({
  entitlementCollectionId: z.string().nullish(),
  entitlementOrigin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  metadata: z.record(z.any()).nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  rewards: z.array(PlatformReward),
  source: z
    .enum([
      'ACHIEVEMENT',
      'CONSUME_ENTITLEMENT',
      'DLC',
      'EXPIRATION',
      'GIFT',
      'IAP',
      'IAP_CHARGEBACK_REVERSED',
      'ORDER_REVOCATION',
      'OTHER',
      'PAYMENT',
      'PROMOTION',
      'PURCHASE',
      'REDEEM_CODE',
      'REFERRAL_BONUS',
      'REWARD',
      'SELL_BACK'
    ])
    .nullish(),
  transactionId: z.string().nullish()
})

export interface RewardsRequest extends z.TypeOf<typeof RewardsRequest> {}
