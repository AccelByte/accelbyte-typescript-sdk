/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalScheduleRequest } from './GoalScheduleRequest.js'
import { Requirement } from './Requirement.js'
import { Reward } from './Reward.js'

export const CreateGoalRequest = z.object({
  code: z.string(),
  description: z.string().nullish(),
  isActive: z.boolean(),
  name: z.string(),
  requirementGroups: z.array(Requirement).nullish(),
  rewards: z.array(Reward).nullish(),
  schedule: GoalScheduleRequest.nullish(),
  tags: z.array(z.string()).nullish()
})

export interface CreateGoalRequest extends z.TypeOf<typeof CreateGoalRequest> {}
