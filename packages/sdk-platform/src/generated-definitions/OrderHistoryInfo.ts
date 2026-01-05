/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderHistoryInfo = z.object({
  action: z.enum([
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'CHARGED',
    'CLOSE',
    'DELETED',
    'FULFILLED',
    'FULFILL_FAILED',
    'INIT',
    'REFUNDED',
    'REFUNDING',
    'REFUND_FAILED',
    'SET_STATUS'
  ]),
  createdAt: z.string(),
  namespace: z.string(),
  operator: z.string(),
  orderNo: z.string(),
  reason: z.string().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface OrderHistoryInfo extends z.TypeOf<typeof OrderHistoryInfo> {}
