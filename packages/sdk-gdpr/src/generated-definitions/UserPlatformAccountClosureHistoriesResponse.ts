/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserPlatformAccountClosureHistory } from './UserPlatformAccountClosureHistory.js'

export const UserPlatformAccountClosureHistoriesResponse = z.object({
  data: z.array(UserPlatformAccountClosureHistory),
  pagination: Pagination
})

export interface UserPlatformAccountClosureHistoriesResponse extends z.TypeOf<typeof UserPlatformAccountClosureHistoriesResponse> {}
