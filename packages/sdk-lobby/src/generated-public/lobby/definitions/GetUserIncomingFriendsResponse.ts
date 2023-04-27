/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'

export const GetUserIncomingFriendsResponse = z.object({ friendIDs: z.array(z.string()), paging: Pagination })

export interface GetUserIncomingFriendsResponse extends z.TypeOf<typeof GetUserIncomingFriendsResponse> {}
