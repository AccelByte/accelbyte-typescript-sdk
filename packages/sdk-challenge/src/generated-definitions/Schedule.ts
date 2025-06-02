/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalOrder } from './GoalOrder.js'

export const Schedule = z.object({
  challengeCode: z.string(),
  createdAt: z.string(),
  endTime: z.string(),
  goals: z.array(GoalOrder),
  namespace: z.string(),
  startTime: z.string(),
  updatedAt: z.string()
})

export interface Schedule extends z.TypeOf<typeof Schedule> {}
