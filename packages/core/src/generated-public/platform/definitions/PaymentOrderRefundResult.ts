/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderRefundResult = z.object({
  paymentOrderNo: z.string(),
  namespace: z.string(),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish(),
  status: z.enum([
    'INIT',
    'AUTHORISED',
    'AUTHORISE_FAILED',
    'CHARGED',
    'CHARGE_FAILED',
    'NOTIFICATION_OF_CHARGEBACK',
    'REQUEST_FOR_INFORMATION',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'REFUNDING',
    'REFUNDED',
    'REFUND_FAILED',
    'DELETED'
  ]),
  createdTime: z.string(),
  refundedTime: z.string().nullish()
})

export type PaymentOrderRefundResult = z.TypeOf<typeof PaymentOrderRefundResult>
