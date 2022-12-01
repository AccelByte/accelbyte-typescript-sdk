/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentUrl = z.object({
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  paymentUrl: z.string().nullish(),
  returnUrl: z.string().nullish(),
  paymentType: z.enum(['QR_CODE', 'LINK']),
  sessionId: z.string().nullish(),
  sessionData: z.string().nullish()
})

export type PaymentUrl = z.TypeOf<typeof PaymentUrl>
