/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserSearchByPlatformIdResult } from './UserSearchByPlatformIdResult'

export const SearchUsersByPlatformIdResponse = z.object({ Data: z.array(UserSearchByPlatformIdResult), Paging: Pagination })

export type SearchUsersByPlatformIdResponse = z.TypeOf<typeof SearchUsersByPlatformIdResponse>
