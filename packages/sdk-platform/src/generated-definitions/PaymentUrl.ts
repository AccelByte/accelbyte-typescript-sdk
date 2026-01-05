/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentUrl = z.object({
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']),
  paymentType: z.enum(['LINK', 'QR_CODE']),
  paymentUrl: z.string().nullish(),
  returnUrl: z.string().nullish(),
  sessionData: z.string().nullish(),
  sessionId: z.string().nullish()
})

export interface PaymentUrl extends z.TypeOf<typeof PaymentUrl> {}
