/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserReward = z.object({
  challengeCode: z.string(),
  createdAt: z.string(),
  goalCode: z.string(),
  goalProgressionId: z.string(),
  id: z.string(),
  itemId: z.string(),
  itemName: z.string(),
  qty: z.number(),
  status: z.enum(['CLAIMED', 'UNCLAIMED']),
  type: z.enum(['ENTITLEMENT', 'STATISTIC']),
  updatedAt: z.string(),
  userId: z.string()
})

export interface UserReward extends z.TypeOf<typeof UserReward> {}
