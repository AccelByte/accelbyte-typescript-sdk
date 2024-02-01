/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderUpdate = z.object({
  status: z.enum([
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'CHARGED',
    'CLOSED',
    'DELETED',
    'FULFILLED',
    'FULFILL_FAILED',
    'INIT',
    'REFUNDED',
    'REFUNDING',
    'REFUND_FAILED'
  ]),
  statusReason: z.string()
})

export interface OrderUpdate extends z.TypeOf<typeof OrderUpdate> {}
