/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserBanWithStatus } from './UserBanWithStatus.js'

export const GetUserBanSummaryV3 = z.object({
  activeCount: z.number().int(),
  data: z.array(UserBanWithStatus),
  inactiveCount: z.number().int(),
  totalCount: z.number().int()
})

export interface GetUserBanSummaryV3 extends z.TypeOf<typeof GetUserBanSummaryV3> {}
