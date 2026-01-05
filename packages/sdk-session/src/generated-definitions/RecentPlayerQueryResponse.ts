/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserInfoResponse } from './UserInfoResponse.js'

export const RecentPlayerQueryResponse = z.object({ data: z.array(UserInfoResponse) })

export interface RecentPlayerQueryResponse extends z.TypeOf<typeof RecentPlayerQueryResponse> {}
