/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { PaymentAdminApi } from '../PaymentAdminApi.js'

import { NotificationProcessResult } from '../../generated-definitions/NotificationProcessResult.js'
import { PaymentNotificationPagingSlicedResult } from '../../generated-definitions/PaymentNotificationPagingSlicedResult.js'
import { PaymentOrderChargeRequest } from '../../generated-definitions/PaymentOrderChargeRequest.js'
import { PaymentOrderChargeStatus } from '../../generated-definitions/PaymentOrderChargeStatus.js'
import { PaymentOrderCreate } from '../../generated-definitions/PaymentOrderCreate.js'
import { PaymentOrderInfo } from '../../generated-definitions/PaymentOrderInfo.js'
import { PaymentOrderNotifySimulation } from '../../generated-definitions/PaymentOrderNotifySimulation.js'
import { PaymentOrderPagingSlicedResult } from '../../generated-definitions/PaymentOrderPagingSlicedResult.js'
import { PaymentOrderRefund } from '../../generated-definitions/PaymentOrderRefund.js'

export enum Key_PaymentAdmin {
  PaymentOrders = 'Platform.PaymentAdmin.PaymentOrders',
  PaymentNotifications = 'Platform.PaymentAdmin.PaymentNotifications',
  PaymentOrdersByExtTxId = 'Platform.PaymentAdmin.PaymentOrdersByExtTxId',
  PaymentOrder_ByUserId = 'Platform.PaymentAdmin.PaymentOrder_ByUserId',
  PaymentOrder_ByPaymentOrderNo = 'Platform.PaymentAdmin.PaymentOrder_ByPaymentOrderNo',
  StatusPayment_ByPaymentOrderNo = 'Platform.PaymentAdmin.StatusPayment_ByPaymentOrderNo',
  SimulateNotificationPayment_ByPaymentOrderNo = 'Platform.PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo',
  RefundPayment_ByUserId_ByPaymentOrderNo = 'Platform.PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Query payment orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query payment orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.PaymentOrders, input]
 * }
 * ```
 */
export const usePaymentAdminApi_GetPaymentOrders = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      channel?: 'EXTERNAL' | 'INTERNAL'
      extTxId?: string | null
      limit?: number
      offset?: number
      status?:
        | 'AUTHORISED'
        | 'AUTHORISE_FAILED'
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'CHARGED'
        | 'CHARGE_FAILED'
        | 'DELETED'
        | 'INIT'
        | 'NOTIFICATION_OF_CHARGEBACK'
        | 'REFUNDED'
        | 'REFUNDING'
        | 'REFUND_FAILED'
        | 'REQUEST_FOR_INFORMATION'
    }
  },
  options?: Omit<UseQueryOptions<PaymentOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentOrderPagingSlicedResult>) => void
): UseQueryResult<PaymentOrderPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentAdminApi_GetPaymentOrders>[1]) => async () => {
    const response = await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentOrders(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Query payment notifications.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment notifications&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.PaymentNotifications, input]
 * }
 * ```
 */
export const usePaymentAdminApi_GetPaymentNotifications = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endDate?: string | null
      externalId?: string | null
      limit?: number
      notificationSource?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      notificationType?: string | null
      offset?: number
      paymentOrderNo?: string | null
      startDate?: string | null
      status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'
    }
  },
  options?: Omit<UseQueryOptions<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentNotificationPagingSlicedResult>) => void
): UseQueryResult<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentAdminApi_GetPaymentNotifications>[1]) => async () => {
    const response = await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentNotifications(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentNotifications, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;List external order No by external transaction id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.PaymentOrdersByExtTxId, input]
 * }
 * ```
 */
export const usePaymentAdminApi_GetPaymentOrdersByExtTxId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { extTxId: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentAdminApi_GetPaymentOrdersByExtTxId>[1]) => async () => {
    const response = await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentOrdersByExtTxId(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrdersByExtTxId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to create payment order from justice service. The result contains the payment station url.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;It will be forbidden while the user is banned: PAYMENT_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for custom parameters and meta data&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.PaymentOrder_ByUserId, input]
 * }
 * ```
 */
export const usePaymentAdminApi_CreatePaymentOrder_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PaymentOrderCreate }>,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderInfo) => void
): UseMutationResult<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PaymentOrderCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PaymentOrderCreate }) => {
    const response = await PaymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentOrder_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.PaymentOrder_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment order by paymentOrderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order instance&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentAdminApi_GetPaymentOrder_ByPaymentOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { paymentOrderNo: string },
  options?: Omit<UseQueryOptions<PaymentOrderInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentOrderInfo>) => void
): UseQueryResult<PaymentOrderInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentAdminApi_GetPaymentOrder_ByPaymentOrderNo>[1]) => async () => {
    const response = await PaymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPaymentOrder_ByPaymentOrderNo(input.paymentOrderNo)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentOrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Charge payment order without payment flow for unpaid payment order, usually for test usage to simulate real currency payment process.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order instance&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentAdminApi_UpdatePaymentOrder_ByPaymentOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentOrderInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderChargeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderInfo) => void
): UseMutationResult<
  PaymentOrderInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderChargeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderChargeRequest }) => {
    const response = await PaymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePaymentOrder_ByPaymentOrderNo(input.paymentOrderNo, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment order charge status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order charge status&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.StatusPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentAdminApi_GetStatusPayment_ByPaymentOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { paymentOrderNo: string },
  options?: Omit<UseQueryOptions<PaymentOrderChargeStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentOrderChargeStatus>) => void
): UseQueryResult<PaymentOrderChargeStatus, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentAdminApi_GetStatusPayment_ByPaymentOrderNo>[1]) => async () => {
    const response = await PaymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatusPayment_ByPaymentOrderNo(input.paymentOrderNo)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentOrderChargeStatus, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.StatusPayment_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Simulate payment notification on sandbox payment order, usually for test usage to simulate real currency payment notification.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: notification process result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentAdminApi_UpdateSimulateNotificationPayment_ByPaymentOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      NotificationProcessResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderNotifySimulation }
    >,
    'mutationKey'
  >,
  callback?: (data: NotificationProcessResult) => void
): UseMutationResult<
  NotificationProcessResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderNotifySimulation }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderNotifySimulation }) => {
    const response = await PaymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSimulateNotificationPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to refund order by paymentOrderNo from justice service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentAdminApi_UpdateRefundPayment_ByUserId_ByPaymentOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentOrderInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; paymentOrderNo: string; data: PaymentOrderRefund }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderInfo) => void
): UseMutationResult<
  PaymentOrderInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; paymentOrderNo: string; data: PaymentOrderRefund }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; paymentOrderNo: string; data: PaymentOrderRefund }) => {
    const response = await PaymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRefundPayment_ByUserId_ByPaymentOrderNo(input.userId, input.paymentOrderNo, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
