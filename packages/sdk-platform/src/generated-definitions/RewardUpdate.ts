/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RewardCondition } from './RewardCondition.js'

export const RewardUpdate = z.object({
  description: z.string().nullish(),
  eventTopic: z.string(),
  maxAwarded: z.number().int().nullish(),
  maxAwardedPerUser: z.number().int().nullish(),
  namespaceExpression: z.string().nullish(),
  rewardCode: z.string(),
  rewardConditions: z.array(RewardCondition).nullish(),
  userIdExpression: z.string().nullish()
})

export interface RewardUpdate extends z.TypeOf<typeof RewardUpdate> {}
