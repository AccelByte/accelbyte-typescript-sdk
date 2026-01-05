/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ResetConfig } from './ResetConfig.js'

export const CreateChallengeRequest = z.object({
  activeGoalsPerRotation: z.number().int().nullish(),
  assignmentRule: z.enum(['CUSTOM', 'FIXED', 'RANDOMIZED', 'UNSCHEDULED']),
  code: z.string(),
  description: z.string().nullish(),
  endAfter: z.number().int().nullish(),
  endDate: z.string().nullish(),
  goalsVisibility: z.enum(['PERIODONLY', 'SHOWALL']),
  name: z.string(),
  randomizedPerRotation: z.boolean().nullish(),
  repeatAfter: z.number().int().nullish(),
  resetConfig: ResetConfig.nullish(),
  rotation: z.enum(['DAILY', 'MONTHLY', 'NONE', 'WEEKLY']),
  startDate: z.string(),
  tags: z.array(z.string()).nullish()
})

export interface CreateChallengeRequest extends z.TypeOf<typeof CreateChallengeRequest> {}
