/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { OrderApi } from '../OrderApi.js'

import { OrderCreate } from '../../generated-definitions/OrderCreate.js'
import { OrderDiscountPreviewRequest } from '../../generated-definitions/OrderDiscountPreviewRequest.js'
import { OrderDiscountPreviewResponse } from '../../generated-definitions/OrderDiscountPreviewResponse.js'
import { OrderHistoryInfoArray } from '../../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../../generated-definitions/OrderInfo.js'
import { OrderPagingSlicedResult } from '../../generated-definitions/OrderPagingSlicedResult.js'

export enum Key_Order {
  Orders_ByUserId = 'Platform.Order.Orders_ByUserId',
  Order_ByUserId = 'Platform.Order.Order_ByUserId',
  Order_ByUserId_ByOrderNo = 'Platform.Order.Order_ByUserId_ByOrderNo',
  Cancel_ByUserId_ByOrderNo = 'Platform.Order.Cancel_ByUserId_ByOrderNo',
  OrderDiscountPreview_ByUserId = 'Platform.Order.OrderDiscountPreview_ByUserId',
  History_ByUserId_ByOrderNo = 'Platform.Order.History_ByUserId_ByOrderNo',
  ReceiptPdf_ByUserId_ByOrderNo = 'Platform.Order.ReceiptPdf_ByUserId_ByOrderNo'
}

/**
 * Query user orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.Orders_ByUserId, input]
 * }
 * ```
 */
export const useOrderApi_GetOrders_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<OrderPagingSlicedResult>) => void
): UseQueryResult<OrderPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOrderApi_GetOrders_ByUserId>[1]) => async () => {
    const response = await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getOrders_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<OrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Order.Orders_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox order)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for ext field&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.Order_ByUserId, input]
 * }
 * ```
 */
export const useOrderApi_CreateOrder_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: OrderCreate }>,
    'mutationKey'
  >,
  callback?: (data: OrderInfo) => void
): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: OrderCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: OrderCreate }) => {
    const response = await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createOrder_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Order.Order_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Get user order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.Order_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_GetOrder_ByUserId_ByOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; orderNo: string },
  options?: Omit<UseQueryOptions<OrderInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<OrderInfo>) => void
): UseQueryResult<OrderInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOrderApi_GetOrder_ByUserId_ByOrderNo>[1]) => async () => {
    const response = await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getOrder_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<OrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_Order.Order_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Cancel user order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled order&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.Cancel_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_UpdateCancel_ByUserId_ByOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; orderNo: string }>,
    'mutationKey'
  >,
  callback?: (data: OrderInfo) => void
): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; orderNo: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; orderNo: string }) => {
    const response = await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateCancel_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Order.Cancel_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}

/**
 * Preview order price with discount code, this api is used to auto calc order price with discount code.Notes: this api don&#39;t do full order validation, only check discount code and calc final order price.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: previewed order&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.OrderDiscountPreview_ByUserId, input]
 * }
 * ```
 */
export const useOrderApi_CreateOrderDiscountPreview_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      OrderDiscountPreviewResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: OrderDiscountPreviewRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: OrderDiscountPreviewResponse) => void
): UseMutationResult<
  OrderDiscountPreviewResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: OrderDiscountPreviewRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: OrderDiscountPreviewRequest }) => {
    const response = await OrderApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createOrderDiscountPreview_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Order.OrderDiscountPreview_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Get user order histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.History_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_GetHistory_ByUserId_ByOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; orderNo: string },
  options?: Omit<UseQueryOptions<OrderHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<OrderHistoryInfoArray>) => void
): UseQueryResult<OrderHistoryInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOrderApi_GetHistory_ByUserId_ByOrderNo>[1]) => async () => {
    const response = await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getHistory_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<OrderHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Order.History_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Download user order receipt by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order receipt pdf&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.ReceiptPdf_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_GetReceiptPdf_ByUserId_ByOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; orderNo: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOrderApi_GetReceiptPdf_ByUserId_ByOrderNo>[1]) => async () => {
    const response = await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReceiptPdf_ByUserId_ByOrderNo(
      input.userId,
      input.orderNo
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Order.ReceiptPdf_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
