/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary'
import { Transaction } from './Transaction'

export const PaymentOrderInfo = z.object({
  paymentOrderNo: z.string(),
  namespace: z.string(),
  userId: z.string(),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish(),
  extOrderNo: z.string(),
  sku: z.string().nullish(),
  extUserId: z.string().nullish(),
  sandbox: z.boolean(),
  price: z.number().int(),
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']),
  paymentMethod: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  tax: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  currency: CurrencySummary,
  paymentStationUrl: z.string().nullish(),
  transactions: z.array(Transaction).nullish(),
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
  createdTime: z.string().nullish(),
  authorisedTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  refundedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargebackReversedTime: z.string().nullish(),
  returnUrl: z.string().nullish(),
  notifyUrl: z.string().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']).nullish(),
  channel: z.enum(['EXTERNAL', 'INTERNAL']),
  customParameters: z.record(z.any()).nullish(),
  subscriptionId: z.string().nullish(),
  recurringPaymentOrderNo: z.string().nullish(),
  charging: z.boolean().nullish(),
  omitNotification: z.boolean().nullish(),
  metadata: z.record(z.string()).nullish(),
  totalTax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  subtotalPrice: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type PaymentOrderInfo = z.TypeOf<typeof PaymentOrderInfo>
