/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderChargeStatus = z.object({
  charging: z.boolean().nullish(),
  status: z
    .enum([
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
    ])
    .nullish()
})

export interface PaymentOrderChargeStatus extends z.TypeOf<typeof PaymentOrderChargeStatus> {}
