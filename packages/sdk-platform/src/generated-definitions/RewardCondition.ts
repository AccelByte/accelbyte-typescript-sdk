/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RewardItem } from './RewardItem.js'

export const RewardCondition = z.object({
  condition: z.string().nullish(),
  conditionName: z.string().nullish(),
  eventName: z.string().nullish(),
  rewardItems: z.array(RewardItem).nullish()
})

export interface RewardCondition extends z.TypeOf<typeof RewardCondition> {}
