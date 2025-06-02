/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ResetConfig } from './ResetConfig.js'

export const ChallengeResponse = z.object({
  activeGoalsPerRotation: z.number().int(),
  assignmentRule: z.enum(['CUSTOM', 'FIXED', 'RANDOMIZED', 'UNSCHEDULED']),
  code: z.string(),
  createdAt: z.string(),
  description: z.string(),
  endAfter: z.number().int().nullish(),
  endDate: z.string().nullish(),
  goalsVisibility: z.enum(['PERIODONLY', 'SHOWALL']),
  name: z.string(),
  randomizedPerRotation: z.boolean(),
  repeatAfter: z.number().int().nullish(),
  resetConfig: ResetConfig,
  rotation: z.enum(['DAILY', 'MONTHLY', 'NONE', 'WEEKLY']),
  startDate: z.string(),
  status: z.enum(['INIT', 'RETIRED', 'TIED']),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string()
})

export interface ChallengeResponse extends z.TypeOf<typeof ChallengeResponse> {}
