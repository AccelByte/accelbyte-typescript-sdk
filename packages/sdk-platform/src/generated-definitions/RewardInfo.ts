/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RewardCondition } from './RewardCondition.js'

export const RewardInfo = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  eventTopic: z.string(),
  maxAwarded: z.number().int().nullish(),
  maxAwardedPerUser: z.number().int().nullish(),
  namespace: z.string(),
  namespaceExpression: z.string().nullish(),
  rewardCode: z.string().nullish(),
  rewardConditions: z.array(RewardCondition).nullish(),
  rewardId: z.string(),
  updatedAt: z.string().nullish(),
  userIdExpression: z.string().nullish()
})

export interface RewardInfo extends z.TypeOf<typeof RewardInfo> {}
