/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalData } from './AdditionalData.js'
import { CurrencySummary } from './CurrencySummary.js'
import { PaymentData } from './PaymentData.js'

export const Transaction = z.object({
  additionalData: AdditionalData.nullish(),
  amount: z.number().int().nullish(),
  currency: CurrencySummary.nullish(),
  extMessage: z.string().nullish(),
  extStatusCode: z.string().nullish(),
  extTxId: z.string().nullish(),
  merchantId: z.string().nullish(),
  notified: z.boolean().nullish(),
  paymentData: PaymentData.nullish(),
  paymentMethod: z.string().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  provider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']).nullish(),
  salesTax: z.number().int().nullish(),
  status: z.enum(['FAILED', 'FINISHED']).nullish(),
  tax: z.number().int().nullish(),
  txEndTime: z.string().nullish(),
  txId: z.string().nullish(),
  type: z
    .enum([
      'AUTHORISATION',
      'CHARGE',
      'CHARGEBACK',
      'CHARGEBACK_REVERSED',
      'CHARGE_FAILED',
      'NOTIFICATION_OF_CHARGEBACK',
      'REFUND',
      'REFUND_FAILED',
      'REQUEST_FOR_INFORMATION'
    ])
    .nullish(),
  vat: z.number().int().nullish()
})

export interface Transaction extends z.TypeOf<typeof Transaction> {}
