/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalData } from './AdditionalData'
import { CurrencySummary } from './CurrencySummary'

export const TradeNotification = z.object({
  namespace: z.string(),
  userId: z.string().nullish(),
  issuedAt: z.string(),
  type: z.string(),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish(),
  nonceStr: z.string(),
  paymentOrderNo: z.string(),
  extOrderNo: z.string(),
  sku: z.string().nullish(),
  extUserId: z.string().nullish(),
  sandbox: z.boolean(),
  price: z.number().int(),
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  paymentMethod: z.string().nullish(),
  tax: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  currency: CurrencySummary,
  paymentStationUrl: z.string().nullish(),
  status: z.enum([
    'INIT',
    'AUTHORISED',
    'AUTHORISE_FAILED',
    'CHARGED',
    'CHARGE_FAILED',
    'NOTIFICATION_OF_CHARGEBACK',
    'REQUEST_FOR_INFORMATION',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'REFUNDING',
    'REFUNDED',
    'REFUND_FAILED',
    'DELETED'
  ]),
  statusReason: z.string().nullish(),
  authorisedTime: z.string().nullish(),
  createdTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  refundedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargebackReversedTime: z.string().nullish(),
  customParameters: z.record(z.any()).nullish(),
  metadata: z.record(z.string()).nullish(),
  subscriptionId: z.string().nullish(),
  totalTax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  subtotalPrice: z.number().int().nullish(),
  extTxId: z.string().nullish(),
  txEndTime: z.string().nullish(),
  additionalData: AdditionalData.nullish()
})

export type TradeNotification = z.TypeOf<typeof TradeNotification>
