/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentUrlCreate = z.object({
  paymentOrderNo: z.string(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']),
  returnUrl: z.string().nullish(),
  ui: z.string().nullish(),
  zipCode: z.string().nullish()
})

export interface PaymentUrlCreate extends z.TypeOf<typeof PaymentUrlCreate> {}
