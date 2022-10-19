/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderUpdate = z.object({
  status: z.enum([
    'INIT',
    'CHARGED',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'FULFILLED',
    'FULFILL_FAILED',
    'REFUNDING',
    'REFUNDED',
    'REFUND_FAILED',
    'CLOSED',
    'DELETED'
  ]),
  statusReason: z.string()
})

export type OrderUpdate = z.TypeOf<typeof OrderUpdate>
