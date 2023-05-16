/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderNotifySimulation = z.object({
  amount: z.number().int().nullish(),
  currencyCode: z.string(),
  notifyType: z.enum(['CHARGE', 'REFUND']),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']),
  salesTax: z.number().int().nullish(),
  vat: z.number().int().nullish()
})

export interface PaymentOrderNotifySimulation extends z.TypeOf<typeof PaymentOrderNotifySimulation> {}
