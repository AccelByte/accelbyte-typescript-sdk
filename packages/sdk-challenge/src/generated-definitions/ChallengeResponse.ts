/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChallengeResponse = z.object({
  activeGoalsPerRotation: z.number().int(),
  assignmentRule: z.enum(['FIXED', 'RANDOMIZED', 'UNSCHEDULED']),
  code: z.string(),
  createdAt: z.string(),
  description: z.string(),
  endAfter: z.number().int().nullish(),
  endDate: z.string().nullish(),
  goalsVisibility: z.enum(['PERIODONLY', 'SHOWALL']),
  name: z.string(),
  repeatAfter: z.number().int().nullish(),
  rotation: z.enum(['DAILY', 'MONTHLY', 'NONE', 'WEEKLY']),
  startDate: z.string(),
  status: z.enum(['INIT', 'RETIRED', 'TIED']),
  updatedAt: z.string()
})

export interface ChallengeResponse extends z.TypeOf<typeof ChallengeResponse> {}
