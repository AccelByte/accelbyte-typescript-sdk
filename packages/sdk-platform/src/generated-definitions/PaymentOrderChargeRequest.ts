/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderChargeRequest = z.object({
  extTxId: z.string().nullish(),
  paymentMethod: z.string().nullish(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA'])
})

export interface PaymentOrderChargeRequest extends z.TypeOf<typeof PaymentOrderChargeRequest> {}
