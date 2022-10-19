/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderChargeStatus = z.object({
  status: z
    .enum([
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
    ])
    .nullish(),
  charging: z.boolean().nullish()
})

export type PaymentOrderChargeStatus = z.TypeOf<typeof PaymentOrderChargeStatus>
