/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentOrder } from './PaymentOrder'

export const PaymentOrderSyncResult = z.object({ paymentOrders: z.array(PaymentOrder).nullish(), nextEvaluatedKey: z.string().nullish() })

export interface PaymentOrderSyncResult extends z.TypeOf<typeof PaymentOrderSyncResult> {}
