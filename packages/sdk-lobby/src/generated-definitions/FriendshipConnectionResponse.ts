/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FriendshipConnection } from './FriendshipConnection.js'
import { Pagination } from './Pagination.js'

export const FriendshipConnectionResponse = z.object({ data: z.array(FriendshipConnection), paging: Pagination })

export interface FriendshipConnectionResponse extends z.TypeOf<typeof FriendshipConnectionResponse> {}
