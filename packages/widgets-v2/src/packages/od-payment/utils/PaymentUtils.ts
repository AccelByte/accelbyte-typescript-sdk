/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { PaymentStatus } from '@od-shared/models/EcommTypes'
import { z } from 'zod'

const DESKTOP_MIN_SIZE = 900

const AdyenPaymentStatus = z.enum(['paymentSuccess', 'paymentGenericError'])
interface PaymentResult {
  orderNo: string
  paymentStatus: string
}

export class PaymentUtils {
  /**
   * Identify device is mobile by window width
   */
  static isMobile(): boolean {
    const width = document?.getElementById('paymentSection')?.offsetWidth
    if (width) {
      return width < DESKTOP_MIN_SIZE
    }

    if (!window) return false
    return window.innerWidth < DESKTOP_MIN_SIZE
  }

  static redirectToUrlIfExist(url?: string) {
    if (!url) return
    window.location.href = decodeURIComponent(url)
  }

  static getTotalPrice(price: string, tax = '0') {
    return (parseFloat(price) + parseFloat(tax)).toFixed(2)
  }

  static extractPaymentResult(maybeUrl: string): PaymentResult | null {
    try {
      if (isStringJson(maybeUrl)) {
        const data = JSON.parse(maybeUrl)
        const isSuccessPurchasedWithXsolla = data.action === 'complete' || data.paymentStatus
        if (isSuccessPurchasedWithXsolla) {
          return {
            orderNo: '',
            paymentStatus: PaymentStatus.enum.DONE
          }
        }
        const isPaymentStationEvent = !!data.type && data.type === 'paymentStationEvent'
        if (isPaymentStationEvent) {
          const paymentStationStatus = !!data.event.name && data.event.name
          let paymentResult: PaymentResult | null = null
          switch (paymentStationStatus) {
            case AdyenPaymentStatus.enum.paymentSuccess:
              paymentResult = { orderNo: data.event.orderNo, paymentStatus: PaymentStatus.enum.DONE }
              break
            case AdyenPaymentStatus.enum.paymentGenericError:
              paymentResult = { orderNo: data.event.orderNo, paymentStatus: PaymentStatus.enum.FAILED }
              break
          }
          return paymentResult
        }
      }
      return null
    } catch (error) {
      console.error(error)
      return {
        orderNo: '',
        paymentStatus: PaymentStatus.enum.FAILED
      }
    }
  }
}

// Helper functions.
function isStringJson(stringJson: string) {
  try {
    JSON.parse(stringJson)
  } catch (error) {
    return false
  }
  return true
}
