/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetLeaderboardConfigResp } from './GetLeaderboardConfigResp.js'
import { Pagination } from './Pagination.js'

export const GetAllLeaderboardConfigsResp = z.object({ data: z.array(GetLeaderboardConfigResp), paging: Pagination })

export interface GetAllLeaderboardConfigsResp extends z.TypeOf<typeof GetAllLeaderboardConfigsResp> {}
