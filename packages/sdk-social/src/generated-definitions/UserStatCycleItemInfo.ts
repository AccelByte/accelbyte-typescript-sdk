/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserStatCycleItemInfo = z.object({
  additionalData: z.record(z.any()).nullish(),
  createdAt: z.string(),
  cycleId: z.string(),
  cycleName: z.string(),
  cycleVersion: z.number().int(),
  namespace: z.string(),
  statCode: z.string(),
  statName: z.string(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string(),
  userId: z.string(),
  value: z.number()
})

export interface UserStatCycleItemInfo extends z.TypeOf<typeof UserStatCycleItemInfo> {}
