/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const UserPlatformInfos = z.object({
  avatarUrl: z.string().nullish(),
  displayName: z.string().nullish(),
  platformInfos: z.array(UserPlatformInfo),
  userId: z.string()
})

export interface UserPlatformInfos extends z.TypeOf<typeof UserPlatformInfos> {}
