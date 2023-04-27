/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserSearchResult } from './UserSearchResult.js'

export const SearchUsersResponse = z.object({ Data: z.array(UserSearchResult) })

export interface SearchUsersResponse extends z.TypeOf<typeof SearchUsersResponse> {}
