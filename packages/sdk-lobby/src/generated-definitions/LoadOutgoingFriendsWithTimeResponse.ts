/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OutgoingFriendsWithTimeData } from './OutgoingFriendsWithTimeData.js'
import { Pagination } from './Pagination.js'

export const LoadOutgoingFriendsWithTimeResponse = z.object({ data: z.array(OutgoingFriendsWithTimeData), paging: Pagination })

export interface LoadOutgoingFriendsWithTimeResponse extends z.TypeOf<typeof LoadOutgoingFriendsWithTimeResponse> {}
