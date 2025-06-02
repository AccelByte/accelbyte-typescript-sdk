/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetLeaderboardConfigRespV3 } from './GetLeaderboardConfigRespV3.js'
import { PaginationV3 } from './PaginationV3.js'

export const GetAllLeaderboardConfigsRespV3 = z.object({ data: z.array(GetLeaderboardConfigRespV3), paging: PaginationV3 })

export interface GetAllLeaderboardConfigsRespV3 extends z.TypeOf<typeof GetAllLeaderboardConfigsRespV3> {}
