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
import { PaymentCallbackConfigAdminApi } from '../PaymentCallbackConfigAdminApi.js'

import { PaymentCallbackConfigInfo } from '../../generated-definitions/PaymentCallbackConfigInfo.js'
import { PaymentCallbackConfigUpdate } from '../../generated-definitions/PaymentCallbackConfigUpdate.js'

export enum Key_PaymentCallbackConfigAdmin {
  PaymentConfigCallback = 'Platform.PaymentCallbackConfigAdmin.PaymentConfigCallback'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentCallbackConfigAdmin.PaymentConfigCallback, input]
 * }
 * ```
 */
export const usePaymentCallbackConfigAdminApi_GetPaymentConfigCallback = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PaymentCallbackConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentCallbackConfigInfo>) => void
): UseQueryResult<PaymentCallbackConfigInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentCallbackConfigAdminApi_GetPaymentConfigCallback>[1]) => async () => {
      const response = await PaymentCallbackConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPaymentConfigCallback()
      callback && callback(response)
      return response.data
    }

  return useQuery<PaymentCallbackConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentCallbackConfigAdmin.PaymentConfigCallback, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentCallbackConfigAdmin.PaymentConfigCallback, input]
 * }
 * ```
 */
export const usePaymentCallbackConfigAdminApi_UpdatePaymentConfigCallbackMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PaymentCallbackConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentCallbackConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PaymentCallbackConfigInfo) => void
): UseMutationResult<PaymentCallbackConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentCallbackConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PaymentCallbackConfigUpdate }) => {
    const response = await PaymentCallbackConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePaymentConfigCallback(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentCallbackConfigAdmin.PaymentConfigCallback],
    mutationFn,
    ...options
  })
}
