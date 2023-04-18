/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { PaymentMethod, PaymentMethodArray, PaymentOrderDetails, PaymentUrl, Platform, TaxResult } from '@accelbyte/sdk-platform'
import { OrderStatusIsChargingError } from '@od-payment/models/Payment'
import { PaymentUtils } from '@od-payment/utils/PaymentUtils'
import { useCallback, useState } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { PaymentData } from '~/hooks/platform/usePayment'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { SdkDevice } from '@accelbyte/sdk'

export const PaymentInfoHooks = { usePaymentInfo, usePaymentMethodUrlAndTax }

// Payment info.
interface PaymentInfoState {
  paymentInfo: PaymentOrderDetails | null
  paymentInfoFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  paymentInfoError: FetchErrorType | null

  paymentMethods: PaymentMethodArray | null
  paymentMethodsFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  paymentMethodsError: FetchErrorType | null
}

const PAYMENT_INFO_DEFAULT_STATE: PaymentInfoState = {
  paymentInfo: null,
  paymentInfoFetchStatus: FetchStatus.IDLE,
  paymentInfoError: null,

  paymentMethods: null,
  paymentMethodsFetchStatus: FetchStatus.IDLE,
  paymentMethodsError: null
}

function usePaymentInfo() {
  const [state, setState] = useState(PAYMENT_INFO_DEFAULT_STATE)
  const [sdk] = useSdk()

  const fetchPaymentInfo = useCallback(
    async ({ orderNo }: { orderNo: string }): Promise<HookDataReturns<PaymentInfoState['paymentInfo']>> => {
      let nextPaymentInfo: PaymentInfoState['paymentInfo'] = null
      let nextPaymentInfoError: PaymentInfoState['paymentInfoError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          paymentInfoError: null,
          paymentInfoFetchStatus: FetchStatus.FETCHING
        }))

        const result = await Platform.PaymentStationApi(sdk).getInfoPayment_ByPaymentOrderNo(orderNo)
        if (result.charging) throw new OrderStatusIsChargingError()

        nextPaymentInfo = result
        return { data: nextPaymentInfo }
      } catch (err) {
        nextPaymentInfoError = WidgetErrorHelper.getErrorType(err)
        return { error: nextPaymentInfoError }
      } finally {
        setState(oldState => ({
          ...oldState,
          paymentInfo: nextPaymentInfo,
          paymentInfoError: nextPaymentInfoError
        }))
      }
    },
    [sdk]
  )

  const fetchPaymentMethods = useCallback(
    async ({ orderNo }: { orderNo: string }): Promise<HookDataReturns<PaymentInfoState['paymentMethods']>> => {
      let nextPaymentMethods: PaymentInfoState['paymentMethods'] = null
      let nextPaymentMethodsError: PaymentInfoState['paymentMethodsError'] = null

      try {
        nextPaymentMethods = await Platform.PaymentStationApi(sdk).getPaymentMethods({ paymentOrderNo: orderNo })

        return { data: nextPaymentMethods }
      } catch (err) {
        nextPaymentMethodsError = WidgetErrorHelper.getErrorType(err)
        return { error: nextPaymentMethodsError }
      } finally {
        setState(oldState => ({
          ...oldState,
          paymentMethods: nextPaymentMethods,
          paymentMethodsError: nextPaymentMethodsError,
          paymentMethodsFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchPaymentInfo,
      fetchPaymentMethods
    }
  }
}

// Payment methods.
interface PaymentMethodHandlerState {
  paymentUrl: PaymentUrl | null
  paymentUrlFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  paymentUrlError: FetchErrorType | null

  tax: TaxResult | null
  taxFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  taxError: FetchErrorType | null
}

const PAYMENT_METHOD_HANDLER_DEFAULT_STATE: PaymentMethodHandlerState = {
  paymentUrl: null,
  paymentUrlFetchStatus: FetchStatus.IDLE,
  paymentUrlError: null,

  tax: null,
  taxFetchStatus: FetchStatus.IDLE,
  taxError: null
}

function usePaymentMethodUrlAndTax() {
  const [state, setState] = useState(PAYMENT_METHOD_HANDLER_DEFAULT_STATE)
  const [sdk] = useSdk()

  const fetchPaymentMethodUrl = useCallback(
    async ({
      activePaymentMethod,
      paymentOrderNo,
      paymentData,
      returnUrl
    }: {
      activePaymentMethod: PaymentMethod
      paymentOrderNo: string
      paymentData: PaymentData
      returnUrl: string | undefined
    }): Promise<HookDataReturns<PaymentMethodHandlerState['paymentUrl']>> => {
      let nextPaymentUrl: PaymentMethodHandlerState['paymentUrl'] = null
      let nextPaymentUrlError: PaymentMethodHandlerState['paymentUrlError'] = null

      let finalReturnUrl = `${window.location.origin}${window.location.pathname}`
      if (returnUrl) {
        finalReturnUrl += `?returnUrl=${encodeURIComponent(returnUrl)}`
      }

      try {
        setState(oldState => ({
          ...oldState,
          paymentUrlError: null,
          paymentUrlFetchStatus: FetchStatus.FETCHING
        }))

        const ui = { version: PaymentUtils.isMobile() ? SdkDevice.TYPE.MOBILE : SdkDevice.TYPE.DESKTOP }
        nextPaymentUrl = await Platform.PaymentStationApi(sdk).createPaymentLink({
          paymentOrderNo,
          paymentProvider: activePaymentMethod.paymentProvider,
          returnUrl: finalReturnUrl,
          zipCode: paymentData.zipCode,
          ui: JSON.stringify(ui)
        })

        return { data: nextPaymentUrl }
      } catch (err) {
        nextPaymentUrlError = WidgetErrorHelper.getErrorType(err)
        return { error: nextPaymentUrlError }
      } finally {
        setState(oldState => ({
          ...oldState,
          paymentUrl: nextPaymentUrl,
          paymentUrlError: nextPaymentUrlError,
          paymentUrlFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  const fetchPaymentTax = useCallback(
    async ({
      activePaymentMethod,
      paymentOrderNo,
      paymentData
    }: {
      activePaymentMethod: PaymentMethod
      paymentOrderNo: string
      paymentData: PaymentData
    }): Promise<HookDataReturns<PaymentMethodHandlerState['tax']>> => {
      let nextTax: PaymentMethodHandlerState['tax'] = null
      let nextTaxError: PaymentMethodHandlerState['taxError'] = null

      try {
        nextTax = await Platform.PaymentStationApi(sdk).getPaymentTax({
          paymentProvider: activePaymentMethod.paymentProvider,
          paymentOrderNo,
          zipCode: paymentData.zipCode
        })
        return { data: nextTax }
      } catch (err) {
        nextTaxError = WidgetErrorHelper.getErrorType(err)
        return { error: nextTaxError }
      } finally {
        setState(oldState => ({
          ...oldState,
          tax: nextTax,
          taxError: nextTaxError,
          taxFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  const resetPaymentMethodUrl = useCallback(() => {
    setState(oldState => ({
      ...oldState,
      paymentUrl: null,
      paymentUrlError: null,
      paymentUrlFetchStatus: FetchStatus.IDLE
    }))
  }, [])

  return {
    state,
    mutations: {
      fetchPaymentMethodUrl,
      fetchPaymentTax,
      resetPaymentMethodUrl
    }
  }
}
