/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ADtoObjectForOrderCreationOptions } from './ADtoObjectForOrderCreationOptions'
import { CurrencySummary } from './CurrencySummary'
import { ItemSnapshot } from './ItemSnapshot'

export const Order = z.object({
  rvn: z.number().int().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  orderNo: z.string().nullish(),
  namespace: z.string().nullish(),
  userId: z.string().nullish(),
  paymentOrderNo: z.string().nullish(),
  status: z
    .enum([
      'INIT',
      'CHARGED',
      'CHARGEBACK',
      'CHARGEBACK_REVERSED',
      'FULFILLED',
      'FULFILL_FAILED',
      'REFUNDING',
      'REFUNDED',
      'REFUND_FAILED',
      'CLOSED',
      'DELETED'
    ])
    .nullish(),
  creationOptions: ADtoObjectForOrderCreationOptions.nullish(),
  sandbox: z.boolean().nullish(),
  itemId: z.string().nullish(),
  quantity: z.number().int().nullish(),
  price: z.number().int().nullish(),
  discountedPrice: z.number().int().nullish(),
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']).nullish(),
  paymentMethod: z.string().nullish(),
  tax: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  currency: CurrencySummary.nullish(),
  paymentStationUrl: z.string().nullish(),
  statusReason: z.string().nullish(),
  createdTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  fulfilledTime: z.string().nullish(),
  refundedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargebackReversedTime: z.string().nullish(),
  returnUrl: z.string().nullish(),
  ext: z.record(z.any()).nullish(),
  itemSnapshot: ItemSnapshot.nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  countNamespace: z.string().nullish(),
  countItemId: z.string().nullish(),
  countUserId: z.string().nullish(),
  expireTime: z.string().nullish(),
  paymentRemainSeconds: z.number().int().nullish(),
  charged: z.boolean().nullish(),
  free: z.boolean().nullish(),
  totalTax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  subtotalPrice: z.number().int().nullish()
})

export type Order = z.TypeOf<typeof Order>
