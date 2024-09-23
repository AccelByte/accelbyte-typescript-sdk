/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BannedBy } from './BannedBy.js'

export const UserBanResponse = z.object({
  Ban: z.string(),
  BanId: z.string(),
  BannedBy: BannedBy,
  Comment: z.string(),
  CreatedAt: z.string(),
  DisabledDate: z.string().nullish(),
  Enabled: z.boolean(),
  EndDate: z.string(),
  Namespace: z.string(),
  Reason: z.string(),
  UserId: z.string()
})

export interface UserBanResponse extends z.TypeOf<typeof UserBanResponse> {}
