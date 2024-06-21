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
import { PaymentDedicatedAdminApi } from '../PaymentDedicatedAdminApi.js'

import { ExternalPaymentOrderCreate } from '../../generated-definitions/ExternalPaymentOrderCreate.js'
import { PaymentOrderCreateResult } from '../../generated-definitions/PaymentOrderCreateResult.js'
import { PaymentOrderRefund } from '../../generated-definitions/PaymentOrderRefund.js'
import { PaymentOrderRefundResult } from '../../generated-definitions/PaymentOrderRefundResult.js'
import { PaymentOrderSyncResult } from '../../generated-definitions/PaymentOrderSyncResult.js'

export enum Key_PaymentDedicatedAdmin {
  PaymentOrders = 'PaymentDedicatedAdmin.PaymentOrders',
  PaymentOrder = 'PaymentDedicatedAdmin.PaymentOrder',
  RefundPayment_ByPaymentOrderNo = 'PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo'
}

export const useAdmPaymentOrders = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { end: string | null; start: string | null; nextEvaluatedKey?: string | null } },
  options?: Omit<UseQueryOptions<PaymentOrderSyncResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentOrderSyncResult) => void
): UseQueryResult<PaymentOrderSyncResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentOrders>[1]) => async () => {
    const data = await PaymentDedicatedAdminApi(sdk, { namespace: input.namespace }).getPaymentOrders(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentOrderSyncResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentDedicatedAdmin.PaymentOrders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePaymentOrderMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentOrderCreateResult, AxiosError<ApiError>, ApiArgs & { data: ExternalPaymentOrderCreate }>,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderCreateResult) => void
): UseMutationResult<PaymentOrderCreateResult, AxiosError<ApiError>, ApiArgs & { data: ExternalPaymentOrderCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ExternalPaymentOrderCreate }) => {
    const data = await PaymentDedicatedAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPaymentOrder(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentDedicatedAdmin.PaymentOrder],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRefundPayment_ByPaymentOrderNoMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentOrderRefundResult, AxiosError<ApiError>, ApiArgs & { paymentOrderNo: string; data: PaymentOrderRefund }>,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderRefundResult) => void
): UseMutationResult<PaymentOrderRefundResult, AxiosError<ApiError>, ApiArgs & { paymentOrderNo: string; data: PaymentOrderRefund }> => {
  //
  const mutationFn = async (input: ApiArgs & { paymentOrderNo: string; data: PaymentOrderRefund }) => {
    const data = await PaymentDedicatedAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRefundPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
