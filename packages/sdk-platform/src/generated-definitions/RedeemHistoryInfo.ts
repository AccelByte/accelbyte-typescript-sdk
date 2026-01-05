/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RedeemHistoryInfo = z.object({
  campaignId: z.string(),
  code: z.string(),
  createdAt: z.string(),
  id: z.string(),
  namespace: z.string(),
  orderNo: z.string().nullish(),
  redeemedAt: z.string().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface RedeemHistoryInfo extends z.TypeOf<typeof RedeemHistoryInfo> {}
