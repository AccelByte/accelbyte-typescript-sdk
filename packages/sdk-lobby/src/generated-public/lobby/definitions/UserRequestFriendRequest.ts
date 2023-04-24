/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRequestFriendRequest = z.object({ friendId: z.string(), friendPublicId: z.string() })

export interface UserRequestFriendRequest extends z.TypeOf<typeof UserRequestFriendRequest> {}
