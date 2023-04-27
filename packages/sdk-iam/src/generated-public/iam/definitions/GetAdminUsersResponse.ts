/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserResponse } from './UserResponse.js'

export const GetAdminUsersResponse = z.object({ Data: z.array(UserResponse), Paging: Pagination })

export interface GetAdminUsersResponse extends z.TypeOf<typeof GetAdminUsersResponse> {}
