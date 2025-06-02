/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary.js'
import { DeductionDetail } from './DeductionDetail.js'
import { ItemSnapshot } from './ItemSnapshot.js'
import { OrderBundleItemInfo } from './OrderBundleItemInfo.js'
import { OrderCreationOptions } from './OrderCreationOptions.js'
import { PaymentData } from './PaymentData.js'

export const Order = z.object({
  chargebackReversedTime: z.string().nullish(),
  chargebackTime: z.string().nullish(),
  charged: z.boolean().nullish(),
  chargedTime: z.string().nullish(),
  countItemId: z.string().nullish(),
  countNamespace: z.string().nullish(),
  countUserId: z.string().nullish(),
  createdAt: z.string().nullish(),
  createdTime: z.string().nullish(),
  creationOptions: OrderCreationOptions.nullish(),
  currency: CurrencySummary.nullish(),
  deduction: z.number().int().nullish(),
  deductionDetails: z.array(DeductionDetail).nullish(),
  discountedPrice: z.number().int().nullish(),
  expireTime: z.string().nullish(),
  ext: z.record(z.any()).nullish(),
  finalPrice: z.number().int().nullish(),
  free: z.boolean().nullish(),
  fulfilledTime: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSnapshot: ItemSnapshot.nullish(),
  language: z.string().nullish(),
  namespace: z.string().nullish(),
  orderBundleItemInfos: z.array(OrderBundleItemInfo).nullish(),
  orderNo: z.string().nullish(),
  paymentData: PaymentData.nullish(),
  paymentMethod: z.string().nullish(),
  paymentMethodFee: z.number().int().nullish(),
  paymentOrderNo: z.string().nullish(),
  paymentProvider: z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA']).nullish(),
  paymentProviderFee: z.number().int().nullish(),
  paymentRemainSeconds: z.number().int().nullish(),
  paymentStationUrl: z.string().nullish(),
  price: z.number().int().nullish(),
  quantity: z.number().int().nullish(),
  refundedTime: z.string().nullish(),
  region: z.string().nullish(),
  returnUrl: z.string().nullish(),
  rvn: z.number().int().nullish(),
  salesTax: z.number().int().nullish(),
  sandbox: z.boolean().nullish(),
  status: z
    .enum([
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
    ])
    .nullish(),
  statusReason: z.string().nullish(),
  subtotalPrice: z.number().int().nullish(),
  tax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish(),
  totalTax: z.number().int().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish(),
  vat: z.number().int().nullish()
})

export interface Order extends z.TypeOf<typeof Order> {}
