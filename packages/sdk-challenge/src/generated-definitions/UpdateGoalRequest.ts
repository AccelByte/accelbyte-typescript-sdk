/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalSchedule } from './GoalSchedule.js'
import { Requirement } from './Requirement.js'
import { Reward } from './Reward.js'

export const UpdateGoalRequest = z.object({
  description: z.string(),
  isActive: z.boolean().nullish(),
  name: z.string(),
  requirementGroups: z.array(Requirement),
  rewards: z.array(Reward),
  schedule: GoalSchedule.nullish(),
  tags: z.array(z.string())
})

export interface UpdateGoalRequest extends z.TypeOf<typeof UpdateGoalRequest> {}
