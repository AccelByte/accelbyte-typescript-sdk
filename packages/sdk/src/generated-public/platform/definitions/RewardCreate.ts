/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RewardCondition } from './RewardCondition'

export const RewardCreate = z.object({
  rewardCode: z.string(),
  description: z.string().nullish(),
  eventTopic: z.string(),
  rewardConditions: z.array(RewardCondition).nullish(),
  maxAwarded: z.number().int().nullish(),
  maxAwardedPerUser: z.number().int().nullish(),
  userIdExpression: z.string().nullish(),
  namespaceExpression: z.string().nullish()
})

export interface RewardCreate extends z.TypeOf<typeof RewardCreate> {}
