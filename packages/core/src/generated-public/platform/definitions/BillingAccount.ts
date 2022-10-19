/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalData } from './AdditionalData'

export const BillingAccount = z.object({
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']).nullish(),
  paymentMethod: z.string().nullish(),
  additionalData: AdditionalData.nullish()
})

export type BillingAccount = z.TypeOf<typeof BillingAccount>
