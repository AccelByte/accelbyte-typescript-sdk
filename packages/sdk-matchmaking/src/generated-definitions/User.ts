/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const User = z.object({
  ID: z.string(),
  PlatformID: z.string(),
  PlatformUserID: z.string(),
  PreviousStatus: z.string(),
  Status: z.string(),
  StatusV2: z.string(),
  UpdatedAt: z.string()
})

export interface User extends z.TypeOf<typeof User> {}
