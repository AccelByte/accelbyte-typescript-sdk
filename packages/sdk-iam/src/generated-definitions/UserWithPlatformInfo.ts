/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const UserWithPlatformInfo = z.object({
  avatarUrl: z.string().nullish(),
  displayName: z.string().nullish(),
  platformInfos: z.array(UserPlatformInfo),
  uniqueDisplayName: z.string().nullish(),
  userId: z.string(),
  username: z.string().nullish(),
  xuid: z.string().nullish()
})

export interface UserWithPlatformInfo extends z.TypeOf<typeof UserWithPlatformInfo> {}
