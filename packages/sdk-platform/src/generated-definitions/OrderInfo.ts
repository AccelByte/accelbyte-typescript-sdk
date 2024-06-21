/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary.js'
import { DeductionDetail } from './DeductionDetail.js'
import { ItemSnapshot } from './ItemSnapshot.js'
import { OrderBundleItemInfo } from './OrderBundleItemInfo.js'
import { OrderCreationOptions } from './OrderCreationOptions.js'

export const OrderInfo = z.object({
  chargebackReversedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  chargedTime: z.string().nullish(),
  createdAt: z.string(),
  createdTime: z.string().nullish(),
  creationOptions: OrderCreationOptions.nullish(),
  currency: CurrencySummary,
  deduction: z.number().int(),
  deductionDetails: z.array(DeductionDetail).nullish(),
  discountedPrice: z.number().int(),
  expireTime: z.string().nullish(),
  ext: z.record(z.any()).nullish(),
  fulfilledTime: z.string().nullish(),
  itemId: z.string(),
  itemSnapshot: ItemSnapshot.nullish(),
  language: z.string().nullish(),
  namespace: z.string(),
  orderBundleItemInfos: z.array(OrderBundleItemInfo).nullish(),
  orderNo: z.string(),
  paymentMethod: z.string().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  paymentOrderNo: z.string().nullish(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']).nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentRemainSeconds: z.number().int(),
  paymentStationUrl: z.string().nullish(),
  price: z.number().int(),
  quantity: z.number().int(),
  refundedTime: z.string().nullish(),
  region: z.string().nullish(),
  salesTax: z.number().int().nullish(),
  sandbox: z.boolean(),
  status: z.enum([
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'CHARGED',
    'CLOSED',
    'DELETED',
    'FULFILLED',
    'FULFILL_FAILED',
    'INIT',
    'REFUNDED',
    'REFUNDING',
    'REFUND_FAILED'
  ]),
  statusReason: z.string().nullish(),
  subtotalPrice: z.number().int().nullish(),
  tax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  totalTax: z.number().int().nullish(),
  updatedAt: z.string(),
  userId: z.string(),
  vat: z.number().int().nullish()
})

export interface OrderInfo extends z.TypeOf<typeof OrderInfo> {}
