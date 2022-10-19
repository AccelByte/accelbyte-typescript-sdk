/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary'
import { Transaction } from './Transaction'

export const PaymentOrder = z.object({
  rvn: z.number().int().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  paymentOrderNo: z.string().nullish(),
  namespace: z.string().nullish(),
  userId: z.string().nullish(),
  status: z
    .enum([
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
    ])
    .nullish(),
  sandbox: z.boolean().nullish(),
  extOrderNo: z.string().nullish(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']).nullish(),
  price: z.number().int().nullish(),
  sku: z.string().nullish(),
  extUserId: z.string().nullish(),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish(),
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']).nullish(),
  paymentMethod: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  zipCode: z.string().nullish(),
  state: z.string().nullish(),
  tax: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  currency: CurrencySummary.nullish(),
  paymentStationUrl: z.string().nullish(),
  transactions: z.array(Transaction).nullish(),
  statusReason: z.string().nullish(),
  createdTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  authorisedTime: z.string().nullish(),
  refundedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargebackReversedTime: z.string().nullish(),
  returnUrl: z.string().nullish(),
  channel: z.enum(['EXTERNAL', 'INTERNAL']).nullish(),
  notifyUrl: z.string().nullish(),
  customParameters: z.record(z.any()).nullish(),
  charging: z.boolean().nullish(),
  subscriptionId: z.string().nullish(),
  recurringPaymentOrderNo: z.string().nullish(),
  omitNotification: z.boolean().nullish(),
  platform: z.string().nullish(),
  metadata: z.record(z.string()).nullish(),
  totalTax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  subtotalPrice: z.number().int().nullish()
})

export type PaymentOrder = z.TypeOf<typeof PaymentOrder>
