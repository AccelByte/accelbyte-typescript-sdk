/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetLeaderboardConfigPublicResp } from './GetLeaderboardConfigPublicResp'
import { V2Pagination } from './V2Pagination'

export const GetAllLeaderboardConfigsPublicResp = z.object({ data: z.array(GetLeaderboardConfigPublicResp), paging: V2Pagination })

export interface GetAllLeaderboardConfigsPublicResp extends z.TypeOf<typeof GetAllLeaderboardConfigsPublicResp> {}
