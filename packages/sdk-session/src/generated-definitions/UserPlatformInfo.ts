/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPlatformInfo = z.object({ name: z.string(), userID: z.string() })

export interface UserPlatformInfo extends z.TypeOf<typeof UserPlatformInfo> {}
