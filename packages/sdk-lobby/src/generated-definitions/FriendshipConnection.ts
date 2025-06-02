/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FriendshipConnection = z.object({ friendId: z.string(), subjectId: z.string() })

export interface FriendshipConnection extends z.TypeOf<typeof FriendshipConnection> {}
