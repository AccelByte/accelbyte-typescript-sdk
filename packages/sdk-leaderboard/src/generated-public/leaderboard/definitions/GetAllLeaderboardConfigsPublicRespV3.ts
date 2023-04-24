/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetLeaderboardConfigPublicRespV3 } from './GetLeaderboardConfigPublicRespV3'
import { PaginationV3 } from './PaginationV3'

export const GetAllLeaderboardConfigsPublicRespV3 = z.object({ data: z.array(GetLeaderboardConfigPublicRespV3), paging: PaginationV3 })

export interface GetAllLeaderboardConfigsPublicRespV3 extends z.TypeOf<typeof GetAllLeaderboardConfigsPublicRespV3> {}
