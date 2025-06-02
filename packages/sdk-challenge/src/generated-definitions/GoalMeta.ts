/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Requirement } from './Requirement.js'
import { Reward } from './Reward.js'

export const GoalMeta = z.object({
  code: z.string(),
  description: z.string(),
  name: z.string(),
  requirementGroups: z.array(Requirement),
  rewards: z.array(Reward),
  tags: z.array(z.string()).nullish()
})

export interface GoalMeta extends z.TypeOf<typeof GoalMeta> {}
