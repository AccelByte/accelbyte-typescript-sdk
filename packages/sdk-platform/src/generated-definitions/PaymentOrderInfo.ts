/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary.js'
import { Transaction } from './Transaction.js'

export const PaymentOrderInfo = z.object({
  authorisedTime: z.string().nullish(),
  channel: z.enum(['EXTERNAL', 'INTERNAL']),
  chargebackReversedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  charging: z.boolean().nullish(),
  createdAt: z.string(),
  createdTime: z.string().nullish(),
  currency: CurrencySummary,
  customParameters: z.record(z.any()).nullish(),
  description: z.string().nullish(),
  extOrderNo: z.string(),
  extUserId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  language: z.string().nullish(),
  metadata: z.record(z.string()).nullish(),
  namespace: z.string(),
  notifyUrl: z.string().nullish(),
  omitNotification: z.boolean().nullish(),
  paymentMethod: z.string().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  paymentOrderNo: z.string(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']).nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentStationUrl: z.string().nullish(),
  price: z.number().int(),
  recurringPaymentOrderNo: z.string().nullish(),
  refundedTime: z.string().nullish(),
  region: z.string().nullish(),
  returnUrl: z.string().nullish(),
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
  title: z.string(),
  totalPrice: z.number().int().nullish(),
  totalTax: z.number().int().nullish(),
  transactions: z.array(Transaction).nullish(),
  updatedAt: z.string(),
  userId: z.string(),
  vat: z.number().int().nullish()
})

export interface PaymentOrderInfo extends z.TypeOf<typeof PaymentOrderInfo> {}
