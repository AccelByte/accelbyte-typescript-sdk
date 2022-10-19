/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserSearchResult } from './UserSearchResult'

export const SearchUsersResponse = z.object({ Data: z.array(UserSearchResult) })

export type SearchUsersResponse = z.TypeOf<typeof SearchUsersResponse>
