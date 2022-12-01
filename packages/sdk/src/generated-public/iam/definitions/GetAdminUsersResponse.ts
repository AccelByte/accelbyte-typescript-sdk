/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserResponse } from './UserResponse'

export const GetAdminUsersResponse = z.object({ Data: z.array(UserResponse), Paging: Pagination })

export type GetAdminUsersResponse = z.TypeOf<typeof GetAdminUsersResponse>
