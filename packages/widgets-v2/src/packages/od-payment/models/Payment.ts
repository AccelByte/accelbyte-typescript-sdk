/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentStatusType = z.enum(['CANCELLED', 'DONE', 'FAILED', 'PENDING', 'RECEIVED', 'UNKNOWN'])

const PaymentAggregator = z.enum(['ADYEN', 'STRIPE', 'XSOLLA', 'CHECKOUT'])
const PaymentMethod = z.enum(['ALIPAY', 'WXPAY', 'PAYPAL'])
export const PAYMENT_PROVIDER_WITHOUT_PAYMENT_URL = [PaymentAggregator.enum.CHECKOUT]

export const PaymentProvider = z.enum([...PaymentAggregator.options, ...PaymentMethod.options])
export type PaymentProvider = z.infer<typeof PaymentProvider>
export type PaymentStatusType = z.infer<typeof PaymentStatusType>

export const PaymentType = z.enum(['QR_CODE', 'LINK'])
export type PaymentType = z.infer<typeof PaymentType>

export type RequestType<T> = { value: T; isLoading: boolean; error: Error | null }

export class OrderStatusIsChargingError extends Error {
  constructor(m?: string) {
    super(m)
    Object.setPrototypeOf(this, OrderStatusIsChargingError.prototype)
  }
}

export const IFRAME_CHANNEL = 'parent-payment-station'
