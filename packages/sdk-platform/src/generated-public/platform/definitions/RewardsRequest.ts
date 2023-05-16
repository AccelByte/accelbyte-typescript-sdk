/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward.js'

export const RewardsRequest = z.object({
  origin: z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox']).nullish(),
  rewards: z.array(PlatformReward),
  source: z
    .enum(['ACHIEVEMENT', 'DLC', 'GIFT', 'IAP', 'OTHER', 'PROMOTION', 'PURCHASE', 'REDEEM_CODE', 'REFERRAL_BONUS', 'REWARD'])
    .nullish()
})

export interface RewardsRequest extends z.TypeOf<typeof RewardsRequest> {}
