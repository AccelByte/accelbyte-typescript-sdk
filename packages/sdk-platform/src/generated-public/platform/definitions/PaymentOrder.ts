/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary.js'
import { Transaction } from './Transaction.js'

export const PaymentOrder = z.object({
  authorisedTime: z.string().nullish(),
  channel: z.enum(['EXTERNAL', 'INTERNAL']).nullish(),
  chargebackReversedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  charging: z.boolean().nullish(),
  createdAt: z.string().nullish(),
  createdTime: z.string().nullish(),
  currency: CurrencySummary.nullish(),
  customParameters: z.record(z.any()).nullish(),
  description: z.string().nullish(),
  extOrderNo: z.string().nullish(),
  extUserId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  language: z.string().nullish(),
  metadata: z.record(z.string()).nullish(),
  namespace: z.string().nullish(),
  notifyUrl: z.string().nullish(),
  omitNotification: z.boolean().nullish(),
  paymentMethod: z.string().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  paymentOrderNo: z.string().nullish(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']).nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentStationUrl: z.string().nullish(),
  platform: z.string().nullish(),
  price: z.number().int().nullish(),
  recurringPaymentOrderNo: z.string().nullish(),
  refundedTime: z.string().nullish(),
  region: z.string().nullish(),
  returnUrl: z.string().nullish(),
  rvn: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  sandbox: z.boolean().nullish(),
  sku: z.string().nullish(),
  state: z.string().nullish(),
  status: z
    .enum([
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
    ])
    .nullish(),
  statusReason: z.string().nullish(),
  subscriptionId: z.string().nullish(),
  subtotalPrice: z.number().int().nullish(),
  targetNamespace: z.string().nullish(),
  targetUserId: z.string().nullish(),
  tax: z.number().int().nullish(),
  title: z.string().nullish(),
  totalPrice: z.number().int().nullish(),
  totalTax: z.number().int().nullish(),
  transactions: z.array(Transaction).nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  vat: z.number().int().nullish(),
  zipCode: z.string().nullish()
})

export interface PaymentOrder extends z.TypeOf<typeof PaymentOrder> {}
