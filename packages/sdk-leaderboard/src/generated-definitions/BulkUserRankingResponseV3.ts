/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserRankingResponseV3 } from './UserRankingResponseV3.js'

export const BulkUserRankingResponseV3 = z.object({ data: z.array(UserRankingResponseV3) })

export interface BulkUserRankingResponseV3 extends z.TypeOf<typeof BulkUserRankingResponseV3> {}
