/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalData } from './AdditionalData'
import { CurrencySummary } from './CurrencySummary'

export const Transaction = z.object({
  txId: z.string().nullish(),
  amount: z.number().int().nullish(),
  tax: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  currency: CurrencySummary.nullish(),
  type: z
    .enum([
      'AUTHORISATION',
      'CHARGE',
      'CHARGE_FAILED',
      'NOTIFICATION_OF_CHARGEBACK',
      'REQUEST_FOR_INFORMATION',
      'CHARGEBACK',
      'CHARGEBACK_REVERSED',
      'REFUND',
      'REFUND_FAILED'
    ])
    .nullish(),
  status: z.enum(['FINISHED', 'FAILED']).nullish(),
  provider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']).nullish(),
  paymentMethod: z.string().nullish(),
  merchantId: z.string().nullish(),
  extTxId: z.string().nullish(),
  extStatusCode: z.string().nullish(),
  extMessage: z.string().nullish(),
  txEndTime: z.string().nullish(),
  additionalData: AdditionalData.nullish(),
  notified: z.boolean().nullish()
})

export type Transaction = z.TypeOf<typeof Transaction>
