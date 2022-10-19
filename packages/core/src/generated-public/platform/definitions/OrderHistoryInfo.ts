/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderHistoryInfo = z.object({
  orderNo: z.string(),
  operator: z.string(),
  action: z.enum([
    'INIT',
    'CHARGED',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'FULFILLED',
    'FULFILL_FAILED',
    'REFUNDING',
    'REFUNDED',
    'REFUND_FAILED',
    'CLOSE',
    'DELETED',
    'SET_STATUS'
  ]),
  reason: z.string().nullish(),
  namespace: z.string(),
  userId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type OrderHistoryInfo = z.TypeOf<typeof OrderHistoryInfo>
