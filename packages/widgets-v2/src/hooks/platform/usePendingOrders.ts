/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK } from '@accelbyte/sdk'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { createStore, useStore } from '../useStore'
import { useCallback } from 'react'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { OrderInfo, OrderStatus, PaymentOrderDetails, Platform } from '@accelbyte/sdk-platform'

interface usePendingOrdersParams {
  itemId: string
  userId: string
}

interface State {
  pendingOrders: OrderInfo[] | null
  pendingOrdersFetchStatus: FetchStatus
  pendingOrdersError: FetchErrorType | null

  paymentInfo: PaymentOrderDetails | null
  paymentInfoFetchStatus: FetchStatus
  paymentInfoError: FetchErrorType | null

  cancelProcessFetchStatus: FetchStatus
  cancelProcessError: FetchErrorType | null
}

const DEFAULT_STATE: State = {
  pendingOrders: null,
  pendingOrdersFetchStatus: FetchStatus.IDLE,
  pendingOrdersError: null,

  paymentInfo: null,
  paymentInfoFetchStatus: FetchStatus.IDLE,
  paymentInfoError: null,

  cancelProcessFetchStatus: FetchStatus.IDLE,
  cancelProcessError: null
}

const pendingOrdersStore = createStore(DEFAULT_STATE)

export function usePendingOrders() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(pendingOrdersStore)

  const fetchPendingOrders = useCallback(
    async ({ itemId, userId }: usePendingOrdersParams): Promise<HookDataReturns<State['pendingOrders']>> => {
      let nextPendingOrders: State['pendingOrders'] = null
      let nextPendingOrdersError: State['pendingOrdersError'] = null

      try {
        setState({
          pendingOrdersFetchStatus: FetchStatus.FETCHING,
          pendingOrdersError: null
        })

        const pendingOrders = await fetchPendingOrdersFromAPI({ sdk, itemId, userId })
        nextPendingOrders = pendingOrders
        return { data: nextPendingOrders }
      } catch (err) {
        nextPendingOrdersError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          pendingOrders: nextPendingOrders,
          pendingOrdersFetchStatus: FetchStatus.IDLE,
          pendingOrdersError: nextPendingOrdersError
        })
      }
    },
    [sdk]
  )

  const fetchPaymentInfoFromOrder = useCallback(
    async (order: OrderInfo) => {
      if (!order.paymentOrderNo) return

      let nextPaymentInfo: State['paymentInfo'] = null
      let nextPaymentInfoError: State['pendingOrdersError'] = null

      try {
        setState({
          paymentInfoFetchStatus: FetchStatus.FETCHING,
          paymentInfoError: null
        })

        const paymentInfo = await fetchPaymentInfoFromAPI(sdk, order.paymentOrderNo)
        nextPaymentInfo = paymentInfo
      } catch (err) {
        nextPaymentInfoError = WidgetErrorHelper.getErrorType(err)
      } finally {
        setState({
          paymentInfo: nextPaymentInfo,
          paymentInfoFetchStatus: FetchStatus.IDLE,
          paymentInfoError: nextPaymentInfoError
        })
      }
    },
    [sdk]
  )

  const cancelAllPendingOrders = useCallback(
    async (pendingOrders: OrderInfo[], userId: string): Promise<HookDataReturns<boolean>> => {
      let nextCancelProcessError: State['cancelProcessError'] = null

      try {
        setState({
          cancelProcessFetchStatus: FetchStatus.CANCELLING,
          cancelProcessError: null
        })

        await Promise.all(
          pendingOrders.map(async order => {
            const { orderNo } = order
            // cancel order
            return Platform.OrderApi(sdk).updateCancel_ByUserId_ByOrderNo(userId, orderNo)
          })
        )
        return { data: true }
      } catch (err) {
        nextCancelProcessError = WidgetErrorHelper.getErrorType(err)
        return { error: nextCancelProcessError }
      } finally {
        setState({ cancelProcessError: nextCancelProcessError, cancelProcessFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk, state.pendingOrders]
  )

  return {
    state,
    mutations: {
      fetchPendingOrders,
      fetchPaymentInfoFromOrder,
      cancelAllPendingOrders
    }
  }
}

// Helper functions.
async function fetchPendingOrdersFromAPI({
  sdk,
  userId,
  itemId
}: {
  sdk: AccelbyteSDK
  userId: string
  itemId: string
}): Promise<OrderInfo[]> {
  const result = await Platform.OrderApi(sdk).getOrders_ByUserId(userId, { itemId, status: OrderStatus.enum.INIT })
  return result.data
}

async function fetchPaymentInfoFromAPI(sdk: AccelbyteSDK, paymentOrderNo: string): Promise<PaymentOrderDetails | null> {
  try {
    return await Platform.PaymentStationApi(sdk).getInfoPayment_ByPaymentOrderNo(paymentOrderNo)
  } catch (error) {
    if (ErrorHelper.isAxiosError(error) && error.response && error.response.status === 404) {
      return null
    } else {
      throw error
    }
  }
}
