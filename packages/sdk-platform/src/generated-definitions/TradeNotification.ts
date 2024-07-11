/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalData } from './AdditionalData.js'
import { CurrencySummary } from './CurrencySummary.js'
import { PaymentData } from './PaymentData.js'

export const TradeNotification = z.object({
  additionalData: AdditionalData.nullish(),
  authorisedTime: z.string().nullish(),
  chargebackReversedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  createdTime: z.string().nullish(),
  currency: CurrencySummary,
  customParameters: z.record(z.any()).nullish(),
  extOrderNo: z.string(),
  extTxId: z.string().nullish(),
  extUserId: z.string().nullish(),
  issuedAt: z.string(),
  metadata: z.record(z.string()).nullish(),
  namespace: z.string(),
  nonceStr: z.string(),
  paymentData: PaymentData.nullish(),
  paymentMethod: z.string().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  paymentOrderNo: z.string(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']),
  paymentProviderFee: z.number().int().nullish(),
  paymentStationUrl: z.string().nullish(),
  price: z.number().int(),
  refundedTime: z.string().nullish(),
  salesTax: z.number().int().nullish(),
  sandbox: z.boolean(),
  sku: z.string().nullish(),
  status: z.enum([
    'AUTHORISED',
    'AUTHORISE_FAILED',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'CHARGED',
    'CHARGE_FAILED',
    'DELETED',
    'INIT',
    'NOTIFICATION_OF_CHARGEBACK',
    'REFUNDED',
    'REFUNDING',
    'REFUND_FAILED',
    'REQUEST_FOR_INFORMATION'
  ]),
  statusReason: z.string().nullish(),
  subscriptionId: z.string().nullish(),
  subtotalPrice: z.number().int().nullish(),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish(),
  tax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  totalTax: z.number().int().nullish(),
  txEndTime: z.string().nullish(),
  type: z.string(),
  userId: z.string().nullish(),
  vat: z.number().int().nullish()
})

export interface TradeNotification extends z.TypeOf<typeof TradeNotification> {}
