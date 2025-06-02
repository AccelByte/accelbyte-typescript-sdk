/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPresence = z.object({
  activity: z.string(),
  availability: z.string(),
  lastSeenAt: z.string(),
  namespace: z.string(),
  platform: z.string(),
  userID: z.string()
})

export interface UserPresence extends z.TypeOf<typeof UserPresence> {}
