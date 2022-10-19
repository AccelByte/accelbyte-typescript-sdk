/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderNotifySimulation = z.object({
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  notifyType: z.enum(['CHARGE', 'REFUND']),
  currencyCode: z.string(),
  amount: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish()
})

export type PaymentOrderNotifySimulation = z.TypeOf<typeof PaymentOrderNotifySimulation>
