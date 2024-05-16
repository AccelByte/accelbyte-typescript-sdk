/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateChallengeRequest = z.object({
  activeGoalsPerRotation: z.number().int().nullish(),
  assignmentRule: z.enum(['FIXED', 'RANDOMIZED', 'UNSCHEDULED']),
  code: z.string(),
  description: z.string().nullish(),
  endAfter: z.number().int().nullish(),
  endDate: z.string().nullish(),
  goalsVisibility: z.enum(['PERIODONLY', 'SHOWALL']),
  name: z.string(),
  repeatAfter: z.number().int().nullish(),
  rotation: z.enum(['DAILY', 'MONTHLY', 'NONE', 'STAT_CYCLE', 'WEEKLY']),
  startDate: z.string(),
  statCycleId: z.string().nullish()
})

export interface CreateChallengeRequest extends z.TypeOf<typeof CreateChallengeRequest> {}
