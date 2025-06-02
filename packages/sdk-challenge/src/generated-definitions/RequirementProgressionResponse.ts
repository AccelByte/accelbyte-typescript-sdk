/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequirementProgressionResponse = z.object({
  completedAt: z.string().nullish(),
  currentValue: z.number(),
  id: z.string(),
  matcher: z.string(),
  parameterName: z.string(),
  parameterType: z.string(),
  statCycleId: z.string().nullish(),
  targetValue: z.number()
})

export interface RequirementProgressionResponse extends z.TypeOf<typeof RequirementProgressionResponse> {}
