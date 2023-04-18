/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { ItemInfo, OrderInfo, OrderPagingSlicedResult, OrderStatus, Platform } from '@accelbyte/sdk-platform'

export const OrdersHooks = { useOrdersList, useOrderDetail }

// Orders list.
interface OrdersListState {
  ordersList: OrderPagingSlicedResult | null
  ordersListFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  ordersListError: FetchErrorType | null
}

function useOrdersList() {
  const [sdk] = useSdk()
  const [state, setState] = useState<OrdersListState>({
    ordersList: null,
    ordersListFetchStatus: FetchStatus.IDLE,
    ordersListError: null
  })

  const fetchOrdersList = useCallback(
    async ({
      userId,
      page,
      pageSize,
      status
    }: {
      userId: string
      page: number
      pageSize?: number
      status?:
        | 'INIT'
        | 'CHARGED'
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'FULFILLED'
        | 'FULFILL_FAILED'
        | 'REFUNDING'
        | 'REFUNDED'
        | 'REFUND_FAILED'
        | 'CLOSED'
        | 'DELETED'
    }): Promise<HookDataReturns<OrdersListState['ordersList']>> => {
      let nextOrdersList: OrdersListState['ordersList'] = null
      let nextOrdersListError: OrdersListState['ordersListError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          ordersListError: null,
          ordersListFetchStatus: FetchStatus.FETCHING
        }))

        nextOrdersList = await Platform.OrderApi(sdk).getOrders_ByUserId(userId, {
          status,
          offset: getOffset(page),
          limit: getLimit(pageSize)
        })
        return { data: nextOrdersList }
      } catch (err) {
        nextOrdersListError = WidgetErrorHelper.getErrorType(err)
        return { error: nextOrdersListError }
      } finally {
        setState({
          ordersList: nextOrdersList,
          ordersListError: nextOrdersListError,
          ordersListFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchOrdersList
    }
  }
}

// Single order.
interface OrderDetailState {
  order: OrderInfo | null
  orderedItem: ItemInfo | null
  isOrderExpired: boolean

  orderFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  orderError: FetchErrorType | null
}

function useOrderDetail() {
  const [sdk] = useSdk()
  const [state, setState] = useState<OrderDetailState>({
    order: null,
    orderedItem: null,
    isOrderExpired: false,
    orderFetchStatus: FetchStatus.IDLE,
    orderError: null
  })
  const {
    mutations: { fetchPendingOrders }
  } = usePendingOrders()
  const timeoutRef = useRef(-1)

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const fetchOrder = useCallback(
    async ({
      userId,
      orderNo
    }: {
      userId: string
      orderNo: string
    }): Promise<HookDataReturns<Pick<OrderDetailState, 'order' | 'orderedItem'>>> => {
      let nextOrder: OrderDetailState['order'] = null
      let nextOrderedItem: OrderDetailState['orderedItem'] = null
      let nextOrderError: OrderDetailState['orderError'] = null

      try {
        setState(oldState => ({ ...oldState, orderError: null, orderFetchStatus: FetchStatus.FETCHING }))

        // Get the order.
        nextOrder = await Platform.OrderApi(sdk).getOrder_ByUserId_ByOrderNo(userId, orderNo)
        // Get the item associated with the order.
        const itemResult = await Platform.ItemApi(sdk).getItemsLocaleByIds({ itemIds: nextOrder.itemId })

        nextOrderedItem = itemResult[0]

        // Get the pending orders associated with the item.
        const pendingOrdersResult = await fetchPendingOrders({ itemId: nextOrder.itemId, userId })
        if (pendingOrdersResult.error) throw pendingOrdersResult.error

        if (nextOrder && nextOrder.status === OrderStatus.enum.INIT && nextOrder.expireTime) {
          const TODAY = new Date().getTime()
          const orderExpiredTime = new Date(nextOrder.expireTime).getTime()
          let orderExpiredTimeout = orderExpiredTime - TODAY
          if (orderExpiredTimeout < 0) {
            orderExpiredTimeout = 0
          }

          timeoutRef.current = window.setTimeout(() => {
            setState(oldState => ({ ...oldState, isOrderExpired: true }))
          }, orderExpiredTimeout)
        }

        return { data: { order: nextOrder, orderedItem: nextOrderedItem } }
      } catch (err) {
        nextOrderError = WidgetErrorHelper.getErrorType(err)
        return { error: nextOrderError }
      } finally {
        setState(oldState => ({
          ...oldState,
          order: nextOrder,
          orderedItem: nextOrderedItem,
          orderError: nextOrderError,
          orderFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchOrder
    }
  }
}

// Helper functions.
function getLimit(pageSize = 10) {
  return pageSize
}

function getOffset(page: number): number {
  return page ? (page - 1) * getLimit() : 0
}
