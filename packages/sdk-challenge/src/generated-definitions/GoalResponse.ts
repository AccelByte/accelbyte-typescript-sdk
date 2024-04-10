/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalSchedule } from './GoalSchedule.js'
import { Requirement } from './Requirement.js'
import { Reward } from './Reward.js'

export const GoalResponse = z.object({
  challengeCode: z.string(),
  code: z.string(),
  createdAt: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  name: z.string(),
  namespace: z.string(),
  requirementGroups: z.array(Requirement),
  rewards: z.array(Reward),
  schedule: GoalSchedule.nullish(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string()
})

export interface GoalResponse extends z.TypeOf<typeof GoalResponse> {}
