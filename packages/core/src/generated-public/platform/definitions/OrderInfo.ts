/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ADtoObjectForOrderCreationOptions } from './ADtoObjectForOrderCreationOptions'
import { CurrencySummary } from './CurrencySummary'
import { ItemSnapshot } from './ItemSnapshot'

export const OrderInfo = z.object({
  orderNo: z.string(),
  paymentOrderNo: z.string().nullish(),
  namespace: z.string(),
  userId: z.string(),
  itemId: z.string(),
  sandbox: z.boolean(),
  quantity: z.number().int(),
  price: z.number().int(),
  discountedPrice: z.number().int(),
  creationOptions: ADtoObjectForOrderCreationOptions.nullish(),
  paymentProvider: z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL']).nullish(),
  paymentMethod: z.string().nullish(),
  tax: z.number().int().nullish(),
  vat: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  currency: CurrencySummary,
  paymentStationUrl: z.string().nullish(),
  itemSnapshot: ItemSnapshot.nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  status: z.enum([
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
  ]),
  statusReason: z.string().nullish(),
  createdTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  fulfilledTime: z.string().nullish(),
  refundedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargebackReversedTime: z.string().nullish(),
  expireTime: z.string().nullish(),
  paymentRemainSeconds: z.number().int(),
  ext: z.record(z.any()).nullish(),
  totalTax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  subtotalPrice: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type OrderInfo = z.TypeOf<typeof OrderInfo>
