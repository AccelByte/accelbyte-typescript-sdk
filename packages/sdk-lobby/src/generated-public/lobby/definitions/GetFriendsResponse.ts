/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'

export const GetFriendsResponse = z.object({ friendIDs: z.array(z.string()), paging: Pagination })

export interface GetFriendsResponse extends z.TypeOf<typeof GetFriendsResponse> {}
