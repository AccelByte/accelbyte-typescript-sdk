/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { UserWithPlatformAccounts } from './UserWithPlatformAccounts.js'

export const ListUsersWithPlatformAccountsResponse = z.object({
  data: z.array(UserWithPlatformAccounts),
  paging: PaginationV3,
  totalData: z.number().int()
})

export interface ListUsersWithPlatformAccountsResponse extends z.TypeOf<typeof ListUsersWithPlatformAccountsResponse> {}
