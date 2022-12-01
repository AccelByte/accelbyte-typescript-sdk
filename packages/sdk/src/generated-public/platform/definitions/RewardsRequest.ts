/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward'

export const RewardsRequest = z.object({
  rewards: z.array(PlatformReward),
  source: z
    .enum(['PURCHASE', 'IAP', 'PROMOTION', 'ACHIEVEMENT', 'REFERRAL_BONUS', 'REDEEM_CODE', 'REWARD', 'GIFT', 'DLC', 'OTHER'])
    .nullish(),
  origin: z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'Stadia', 'IOS', 'GooglePlay', 'Twitch', 'Nintendo', 'System', 'Other']).nullish()
})

export type RewardsRequest = z.TypeOf<typeof RewardsRequest>
