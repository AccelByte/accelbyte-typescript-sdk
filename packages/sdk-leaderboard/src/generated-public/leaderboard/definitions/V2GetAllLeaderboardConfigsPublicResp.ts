/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetLeaderboardConfigPublicResp } from './GetLeaderboardConfigPublicResp.js'
import { Pagination } from './Pagination.js'

export const V2GetAllLeaderboardConfigsPublicResp = z.object({ data: z.array(GetLeaderboardConfigPublicResp), paging: Pagination })

export interface V2GetAllLeaderboardConfigsPublicResp extends z.TypeOf<typeof V2GetAllLeaderboardConfigsPublicResp> {}
