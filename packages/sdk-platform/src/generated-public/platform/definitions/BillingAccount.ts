/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalData } from './AdditionalData.js'

export const BillingAccount = z.object({
  additionalData: AdditionalData.nullish(),
  paymentMethod: z.string().nullish(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']).nullish()
})

export interface BillingAccount extends z.TypeOf<typeof BillingAccount> {}
