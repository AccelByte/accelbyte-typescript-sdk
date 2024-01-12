/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BannedByV3 } from './BannedByV3.js'

export const UserBanResponseV3 = z.object({
  ban: z.string(),
  banId: z.string(),
  bannedBy: BannedByV3,
  comment: z.string(),
  createdAt: z.string(),
  disabledDate: z.string(),
  enabled: z.boolean(),
  endDate: z.string(),
  namespace: z.string(),
  reason: z.string(),
  userId: z.string()
})

export interface UserBanResponseV3 extends z.TypeOf<typeof UserBanResponseV3> {}
