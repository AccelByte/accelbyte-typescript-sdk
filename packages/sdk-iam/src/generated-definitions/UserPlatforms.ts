/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const UserPlatforms = z.object({ userIdPlatforms: z.array(UserPlatformInfo) })

export interface UserPlatforms extends z.TypeOf<typeof UserPlatforms> {}
