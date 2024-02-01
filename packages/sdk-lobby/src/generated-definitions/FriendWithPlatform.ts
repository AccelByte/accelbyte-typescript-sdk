/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FriendWithPlatform = z.object({ platformId: z.string(), userId: z.string() })

export interface FriendWithPlatform extends z.TypeOf<typeof FriendWithPlatform> {}
