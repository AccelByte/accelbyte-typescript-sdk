/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformInfos } from './UserPlatformInfos.js'

export const UsersPlatformInfosResponse = z.object({ data: z.array(UserPlatformInfos) })

export interface UsersPlatformInfosResponse extends z.TypeOf<typeof UsersPlatformInfosResponse> {}
