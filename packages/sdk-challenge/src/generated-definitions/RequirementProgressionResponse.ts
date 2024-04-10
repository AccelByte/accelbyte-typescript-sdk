/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequirementProgressionResponse = z.object({
  completedAt: z.string().nullish(),
  currrentValue: z.number().nullish(),
  id: z.string(),
  targetValue: z.number()
})

export interface RequirementProgressionResponse extends z.TypeOf<typeof RequirementProgressionResponse> {}
