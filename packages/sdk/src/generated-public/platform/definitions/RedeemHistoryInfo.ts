/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RedeemHistoryInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  userId: z.string(),
  campaignId: z.string(),
  code: z.string(),
  orderNo: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  redeemedAt: z.string().nullish()
})

export type RedeemHistoryInfo = z.TypeOf<typeof RedeemHistoryInfo>
