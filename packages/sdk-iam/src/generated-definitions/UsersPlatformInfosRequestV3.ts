/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UsersPlatformInfosRequestV3 = z.object({ platformId: z.string(), userIds: z.array(z.string()) })

export interface UsersPlatformInfosRequestV3 extends z.TypeOf<typeof UsersPlatformInfosRequestV3> {}
