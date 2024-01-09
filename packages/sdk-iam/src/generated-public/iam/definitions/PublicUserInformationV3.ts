/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const PublicUserInformationV3 = z.object({
  createdAt: z.string(),
  displayName: z.string(),
  namespace: z.string(),
  userId: z.string(),
  userName: z.string(),
  userPlatformInfos: z.array(UserPlatformInfo).nullish()
})

export interface PublicUserInformationV3 extends z.TypeOf<typeof PublicUserInformationV3> {}
