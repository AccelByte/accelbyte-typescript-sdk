/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserLoginHistoryResponse } from './UserLoginHistoryResponse'

export const LoginHistoriesResponse = z.object({ Data: z.array(UserLoginHistoryResponse), Paging: Pagination })

export type LoginHistoriesResponse = z.TypeOf<typeof LoginHistoriesResponse>
