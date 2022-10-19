/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentUrlCreate = z.object({
  paymentOrderNo: z.string(),
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  zipCode: z.string().nullish(),
  returnUrl: z.string().nullish(),
  ui: z.string().nullish()
})

export type PaymentUrlCreate = z.TypeOf<typeof PaymentUrlCreate>
