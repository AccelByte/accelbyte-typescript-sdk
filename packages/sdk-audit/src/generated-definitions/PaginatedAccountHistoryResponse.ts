/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { UserAccountHistory } from './UserAccountHistory.js'

export const PaginatedAccountHistoryResponse = z.object({ data: z.array(UserAccountHistory), paging: Paging })

export interface PaginatedAccountHistoryResponse extends z.TypeOf<typeof PaginatedAccountHistoryResponse> {}
