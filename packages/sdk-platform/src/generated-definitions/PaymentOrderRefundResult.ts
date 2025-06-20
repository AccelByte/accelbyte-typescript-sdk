/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderRefundResult = z.object({
  createdTime: z.string(),
  namespace: z.string(),
  paymentOrderNo: z.string(),
  refundedTime: z.string().nullish(),
  status: z.enum([
    'AUTHORISED',
    'AUTHORISE_FAILED',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'CHARGED',
    'CHARGE_FAILED',
    'DELETED',
    'INIT',
    'NOTIFICATION_OF_CHARGEBACK',
    'REFUNDED',
    'REFUNDING',
    'REFUND_FAILED',
    'REQUEST_FOR_INFORMATION'
  ]),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish()
})

export interface PaymentOrderRefundResult extends z.TypeOf<typeof PaymentOrderRefundResult> {}
