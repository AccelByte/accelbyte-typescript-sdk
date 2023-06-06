/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExpGrantHistoryInfo = z.object({
  createdAt: z.string(),
  grantExp: z.number().int(),
  id: z.string(),
  namespace: z.string(),
  seasonId: z.string(),
  source: z.enum(['PAID_FOR', 'SWEAT']).nullish(),
  tags: z.array(z.string()).nullish(),
  userId: z.string()
})

export interface ExpGrantHistoryInfo extends z.TypeOf<typeof ExpGrantHistoryInfo> {}
