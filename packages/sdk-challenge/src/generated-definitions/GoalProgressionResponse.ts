/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalMeta } from './GoalMeta.js'
import { RequirementProgressionResponse } from './RequirementProgressionResponse.js'

export const GoalProgressionResponse = z.object({
  challengeCode: z.string(),
  goal: GoalMeta,
  goalCode: z.string(),
  goalProgressionId: z.string(),
  requirementProgressions: z.array(RequirementProgressionResponse),
  status: z.enum(['ACTIVE', 'COMPLETED', 'NOT_STARTED', 'RETIRED'])
})

export interface GoalProgressionResponse extends z.TypeOf<typeof GoalProgressionResponse> {}
