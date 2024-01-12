/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserLoginHistoryResponse } from './UserLoginHistoryResponse.js'

export const LoginHistoriesResponse = z.object({ Data: z.array(UserLoginHistoryResponse), Paging: Pagination })

export interface LoginHistoriesResponse extends z.TypeOf<typeof LoginHistoriesResponse> {}
