/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentOrder } from './PaymentOrder.js'

export const PaymentOrderSyncResult = z.object({ nextEvaluatedKey: z.string().nullish(), paymentOrders: z.array(PaymentOrder).nullish() })

export interface PaymentOrderSyncResult extends z.TypeOf<typeof PaymentOrderSyncResult> {}
