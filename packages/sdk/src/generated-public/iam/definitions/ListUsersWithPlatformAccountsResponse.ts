/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { UserWithPlatformAccounts } from './UserWithPlatformAccounts'

export const ListUsersWithPlatformAccountsResponse = z.object({
  data: z.array(UserWithPlatformAccounts),
  paging: PaginationV3,
  totalData: z.number().int()
})

export type ListUsersWithPlatformAccountsResponse = z.TypeOf<typeof ListUsersWithPlatformAccountsResponse>
