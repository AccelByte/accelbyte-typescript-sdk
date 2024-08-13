/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const User = z.object({
  ID: z.string().nullish(),
  PlatformID: z.string().nullish(),
  PlatformUserID: z.string().nullish(),
  Status: z.string().nullish(),
  StatusV2: z.string().nullish(),
  UpdatedAt: z.string().nullish()
})

export interface User extends z.TypeOf<typeof User> {}
