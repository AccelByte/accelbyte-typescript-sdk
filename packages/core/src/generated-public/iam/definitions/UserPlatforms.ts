/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo'

export const UserPlatforms = z.object({ userIdPlatforms: z.array(UserPlatformInfo) })

export type UserPlatforms = z.TypeOf<typeof UserPlatforms>
