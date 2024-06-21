/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentOrderNeonPayConfig } from './PaymentOrderNeonPayConfig.js'

export const PaymentUrlCreate = z.object({
  neonPayConfig: PaymentOrderNeonPayConfig.nullish(),
  paymentOrderNo: z.string(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']),
  returnUrl: z.string().nullish(),
  ui: z.string().nullish(),
  zipCode: z.string().nullish()
})

export interface PaymentUrlCreate extends z.TypeOf<typeof PaymentUrlCreate> {}
