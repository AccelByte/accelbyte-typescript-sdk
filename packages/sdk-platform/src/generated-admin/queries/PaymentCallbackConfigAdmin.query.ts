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
import { PaymentCallbackConfigAdminApi } from '../PaymentCallbackConfigAdminApi.js'

import { PaymentCallbackConfigInfo } from '../../generated-definitions/PaymentCallbackConfigInfo.js'
import { PaymentCallbackConfigUpdate } from '../../generated-definitions/PaymentCallbackConfigUpdate.js'

export enum Key_PaymentCallbackConfigAdmin {
  PaymentConfigCallback = 'PaymentCallbackConfigAdmin.PaymentConfigCallback'
}

export const useAdmPaymentConfigCallback = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PaymentCallbackConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentCallbackConfigInfo) => void
): UseQueryResult<PaymentCallbackConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigCallback>[1]) => async () => {
    const data = await PaymentCallbackConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigCallback()
    callback && callback(data)
    return data
  }

  return useQuery<PaymentCallbackConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentCallbackConfigAdmin.PaymentConfigCallback, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdatePaymentConfigCallbackMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentCallbackConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PaymentCallbackConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PaymentCallbackConfigInfo) => void
): UseMutationResult<PaymentCallbackConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PaymentCallbackConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PaymentCallbackConfigUpdate }) => {
    const data = await PaymentCallbackConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePaymentConfigCallback(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentCallbackConfigAdmin.PaymentConfigCallback],
    mutationFn,
    ...options
  })
}
