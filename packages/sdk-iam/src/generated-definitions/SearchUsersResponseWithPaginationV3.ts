/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { UserResponseV3 } from './UserResponseV3.js'

export const SearchUsersResponseWithPaginationV3 = z.object({
  data: z.array(UserResponseV3),
  paging: PaginationV3,
  totalData: z.number().int()
})

export interface SearchUsersResponseWithPaginationV3 extends z.TypeOf<typeof SearchUsersResponseWithPaginationV3> {}
