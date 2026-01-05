/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FriendWithPlatform } from './FriendWithPlatform.js'
import { Pagination } from './Pagination.js'

export const GetUserFriendsResponse = z.object({
  friendIDs: z.array(z.string()),
  friends: z.array(FriendWithPlatform).nullish(),
  paging: Pagination
})

export interface GetUserFriendsResponse extends z.TypeOf<typeof GetUserFriendsResponse> {}
