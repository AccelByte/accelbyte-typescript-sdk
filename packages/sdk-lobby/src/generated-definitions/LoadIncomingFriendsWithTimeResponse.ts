/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IncomingFriendsWithTimeData } from './IncomingFriendsWithTimeData.js'
import { Pagination } from './Pagination.js'

export const LoadIncomingFriendsWithTimeResponse = z.object({ data: z.array(IncomingFriendsWithTimeData), paging: Pagination })

export interface LoadIncomingFriendsWithTimeResponse extends z.TypeOf<typeof LoadIncomingFriendsWithTimeResponse> {}
