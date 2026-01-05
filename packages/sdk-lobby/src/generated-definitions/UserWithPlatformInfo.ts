/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const UserWithPlatformInfo = z.object({
  avatarUrl: z.string(),
  displayName: z.string(),
  platformInfos: z.array(UserPlatformInfo),
  userId: z.string(),
  username: z.string().nullish()
})

export interface UserWithPlatformInfo extends z.TypeOf<typeof UserWithPlatformInfo> {}
