/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { OrderAdminApi } from '../OrderAdminApi.js'

import { AdminOrderCreate } from '../../generated-definitions/AdminOrderCreate.js'
import { OrderHistoryInfoArray } from '../../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../../generated-definitions/OrderInfo.js'
import { OrderPagingResult } from '../../generated-definitions/OrderPagingResult.js'
import { OrderPagingSlicedResult } from '../../generated-definitions/OrderPagingSlicedResult.js'
import { OrderRefundCreate } from '../../generated-definitions/OrderRefundCreate.js'
import { OrderStatistics } from '../../generated-definitions/OrderStatistics.js'
import { OrderUpdate } from '../../generated-definitions/OrderUpdate.js'
import { PurchasedItemCount } from '../../generated-definitions/PurchasedItemCount.js'
import { TradeNotification } from '../../generated-definitions/TradeNotification.js'

export enum Key_OrderAdmin {
  Orders = 'OrderAdmin.Orders',
  OrdersStats = 'OrderAdmin.OrdersStats',
  Order_ByOrderNo = 'OrderAdmin.Order_ByOrderNo',
  Orders_ByUserId = 'OrderAdmin.Orders_ByUserId',
  Order_ByUserId = 'OrderAdmin.Order_ByUserId',
  Refund_ByOrderNo = 'OrderAdmin.Refund_ByOrderNo',
  Order_ByUserId_ByOrderNo = 'OrderAdmin.Order_ByUserId_ByOrderNo',
  OrdersCountOfItem_ByUserId = 'OrderAdmin.OrdersCountOfItem_ByUserId',
  Fulfill_ByUserId_ByOrderNo = 'OrderAdmin.Fulfill_ByUserId_ByOrderNo',
  History_ByUserId_ByOrderNo = 'OrderAdmin.History_ByUserId_ByOrderNo',
  ReceiptPdf_ByUserId_ByOrderNo = 'OrderAdmin.ReceiptPdf_ByUserId_ByOrderNo',
  Notification_ByUserId_ByOrderNo = 'OrderAdmin.Notification_ByUserId_ByOrderNo'
}

export const useAdmOrders = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      orderNos?: string[]
      sortBy?: string | null
      startTime?: string | null
      status?:
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'CHARGED'
        | 'CLOSED'
        | 'DELETED'
        | 'FULFILLED'
        | 'FULFILL_FAILED'
        | 'INIT'
        | 'REFUNDED'
        | 'REFUNDING'
        | 'REFUND_FAILED'
      withTotal?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<OrderPagingResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderPagingResult) => void
): UseQueryResult<OrderPagingResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrders>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getOrders(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<OrderPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Orders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmOrdersStats = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<OrderStatistics, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderStatistics) => void
): UseQueryResult<OrderStatistics, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrdersStats>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getOrdersStats()
    callback && callback(data)
    return data
  }

  return useQuery<OrderStatistics, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.OrdersStats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmOrder_ByOrderNo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { orderNo: string },
  options?: Omit<UseQueryOptions<OrderInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderInfo) => void
): UseQueryResult<OrderInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrder_ByOrderNo>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getOrder_ByOrderNo(input.orderNo)
    callback && callback(data)
    return data
  }

  return useQuery<OrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Order_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmOrders_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: {
      discounted?: boolean | null
      itemId?: string | null
      limit?: number
      offset?: number
      status?:
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'CHARGED'
        | 'CLOSED'
        | 'DELETED'
        | 'FULFILLED'
        | 'FULFILL_FAILED'
        | 'INIT'
        | 'REFUNDED'
        | 'REFUNDING'
        | 'REFUND_FAILED'
    }
  },
  options?: Omit<UseQueryOptions<OrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderPagingSlicedResult) => void
): UseQueryResult<OrderPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrders_ByUserId>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getOrders_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<OrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Orders_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateOrder_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: AdminOrderCreate }>, 'mutationKey'>,
  callback?: (data: OrderInfo) => void
): UseMutationResult<OrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: AdminOrderCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: AdminOrderCreate }) => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace, config: input.config }).createOrder_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_OrderAdmin.Order_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRefund_ByOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<OrderInfo, AxiosError<ApiError>, ApiArgs & { orderNo: string; data: OrderRefundCreate }>,
    'mutationKey'
  >,
  callback?: (data: OrderInfo) => void
): UseMutationResult<OrderInfo, AxiosError<ApiError>, ApiArgs & { orderNo: string; data: OrderRefundCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { orderNo: string; data: OrderRefundCreate }) => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRefund_ByOrderNo(
      input.orderNo,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_OrderAdmin.Refund_ByOrderNo],
    mutationFn,
    ...options
  })
}

export const useAdmOrder_ByUserId_ByOrderNo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; orderNo: string },
  options?: Omit<UseQueryOptions<OrderInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderInfo) => void
): UseQueryResult<OrderInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrder_ByUserId_ByOrderNo>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getOrder_ByUserId_ByOrderNo(input.userId, input.orderNo)
    callback && callback(data)
    return data
  }

  return useQuery<OrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Order_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateOrder_ByUserId_ByOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<OrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; orderNo: string; data: OrderUpdate }>,
    'mutationKey'
  >,
  callback?: (data: OrderInfo) => void
): UseMutationResult<OrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; orderNo: string; data: OrderUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; orderNo: string; data: OrderUpdate }) => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateOrder_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_OrderAdmin.Order_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}

export const useAdmOrdersCountOfItem_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { itemId: string | null } },
  options?: Omit<UseQueryOptions<PurchasedItemCount, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PurchasedItemCount) => void
): UseQueryResult<PurchasedItemCount, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrdersCountOfItem_ByUserId>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getOrdersCountOfItem_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PurchasedItemCount, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.OrdersCountOfItem_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateFulfill_ByUserId_ByOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; orderNo: string }>, 'mutationKey'>,
  callback?: (data: OrderInfo) => void
): UseMutationResult<OrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; orderNo: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; orderNo: string }) => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateFulfill_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_OrderAdmin.Fulfill_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}

export const useAdmHistory_ByUserId_ByOrderNo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; orderNo: string },
  options?: Omit<UseQueryOptions<OrderHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderHistoryInfoArray) => void
): UseQueryResult<OrderHistoryInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmHistory_ByUserId_ByOrderNo>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getHistory_ByUserId_ByOrderNo(input.userId, input.orderNo)
    callback && callback(data)
    return data
  }

  return useQuery<OrderHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.History_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmReceiptPdf_ByUserId_ByOrderNo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; orderNo: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReceiptPdf_ByUserId_ByOrderNo>[1]) => async () => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace }).getReceiptPdf_ByUserId_ByOrderNo(input.userId, input.orderNo)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.ReceiptPdf_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNotification_ByUserId_ByOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; orderNo: string; data: TradeNotification }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; orderNo: string; data: TradeNotification }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; orderNo: string; data: TradeNotification }) => {
    const data = await OrderAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNotification_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_OrderAdmin.Notification_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}
