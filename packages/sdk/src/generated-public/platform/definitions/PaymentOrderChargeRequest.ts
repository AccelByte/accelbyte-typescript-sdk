/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderChargeRequest = z.object({
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  paymentMethod: z.string().nullish(),
  extTxId: z.string().nullish()
})

export type PaymentOrderChargeRequest = z.TypeOf<typeof PaymentOrderChargeRequest>
