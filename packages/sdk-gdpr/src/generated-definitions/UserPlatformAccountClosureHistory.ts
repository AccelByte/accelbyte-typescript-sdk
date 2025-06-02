/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPlatformAccountClosureHistory = z.object({
  closedDate: z.number().int(),
  environment: z.string(),
  namespace: z.string(),
  platform: z.string(),
  platformUserId: z.string(),
  userId: z.string()
})

export interface UserPlatformAccountClosureHistory extends z.TypeOf<typeof UserPlatformAccountClosureHistory> {}
