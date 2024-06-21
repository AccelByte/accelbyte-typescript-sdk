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
  PaymentOrders = 'PaymentAdmin.PaymentOrders',
  PaymentNotifications = 'PaymentAdmin.PaymentNotifications',
  PaymentOrdersByExtTxId = 'PaymentAdmin.PaymentOrdersByExtTxId',
  PaymentOrder_ByUserId = 'PaymentAdmin.PaymentOrder_ByUserId',
  PaymentOrder_ByPaymentOrderNo = 'PaymentAdmin.PaymentOrder_ByPaymentOrderNo',
  StatusPayment_ByPaymentOrderNo = 'PaymentAdmin.StatusPayment_ByPaymentOrderNo',
  SimulateNotificationPayment_ByPaymentOrderNo = 'PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo',
  RefundPayment_ByUserId_ByPaymentOrderNo = 'PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo'
}

export const useAdmPaymentOrders = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: PaymentOrderPagingSlicedResult) => void
): UseQueryResult<PaymentOrderPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentOrders>[1]) => async () => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace }).getPaymentOrders(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPaymentNotifications = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: PaymentNotificationPagingSlicedResult) => void
): UseQueryResult<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentNotifications>[1]) => async () => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace }).getPaymentNotifications(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentNotifications, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPaymentOrdersByExtTxId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { extTxId: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentOrdersByExtTxId>[1]) => async () => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace }).getPaymentOrdersByExtTxId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrdersByExtTxId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePaymentOrder_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentOrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: PaymentOrderCreate }>,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderInfo) => void
): UseMutationResult<PaymentOrderInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: PaymentOrderCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: PaymentOrderCreate }) => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPaymentOrder_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.PaymentOrder_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmPaymentOrder_ByPaymentOrderNo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { paymentOrderNo: string },
  options?: Omit<UseQueryOptions<PaymentOrderInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentOrderInfo) => void
): UseQueryResult<PaymentOrderInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentOrder_ByPaymentOrderNo>[1]) => async () => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace }).getPaymentOrder_ByPaymentOrderNo(input.paymentOrderNo)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentOrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdatePaymentOrder_ByPaymentOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentOrderInfo, AxiosError<ApiError>, ApiArgs & { paymentOrderNo: string; data: PaymentOrderChargeRequest }>,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderInfo) => void
): UseMutationResult<PaymentOrderInfo, AxiosError<ApiError>, ApiArgs & { paymentOrderNo: string; data: PaymentOrderChargeRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { paymentOrderNo: string; data: PaymentOrderChargeRequest }) => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePaymentOrder_ByPaymentOrderNo(
      input.paymentOrderNo,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}

export const useAdmStatusPayment_ByPaymentOrderNo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { paymentOrderNo: string },
  options?: Omit<UseQueryOptions<PaymentOrderChargeStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentOrderChargeStatus) => void
): UseQueryResult<PaymentOrderChargeStatus, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatusPayment_ByPaymentOrderNo>[1]) => async () => {
    const data = await PaymentAdminApi(sdk, { namespace: input.namespace }).getStatusPayment_ByPaymentOrderNo(input.paymentOrderNo)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentOrderChargeStatus, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.StatusPayment_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateSimulateNotificationPayment_ByPaymentOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      NotificationProcessResult,
      AxiosError<ApiError>,
      ApiArgs & { paymentOrderNo: string; data: PaymentOrderNotifySimulation }
    >,
    'mutationKey'
  >,
  callback?: (data: NotificationProcessResult) => void
): UseMutationResult<
  NotificationProcessResult,
  AxiosError<ApiError>,
  ApiArgs & { paymentOrderNo: string; data: PaymentOrderNotifySimulation }
> => {
  //
  const mutationFn = async (input: ApiArgs & { paymentOrderNo: string; data: PaymentOrderNotifySimulation }) => {
    const data = await PaymentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateSimulateNotificationPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRefundPayment_ByUserId_ByPaymentOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentOrderInfo,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; paymentOrderNo: string; data: PaymentOrderRefund }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderInfo) => void
): UseMutationResult<
  PaymentOrderInfo,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; paymentOrderNo: string; data: PaymentOrderRefund }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; paymentOrderNo: string; data: PaymentOrderRefund }) => {
    const data = await PaymentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRefundPayment_ByUserId_ByPaymentOrderNo(input.userId, input.paymentOrderNo, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
