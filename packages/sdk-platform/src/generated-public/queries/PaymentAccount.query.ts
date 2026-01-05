/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { PaymentAccountApi } from '../PaymentAccountApi.js'

import { PaymentAccountArray } from '../../generated-definitions/PaymentAccountArray.js'

export enum Key_PaymentAccount {
  PaymentAccounts_ByUserId = 'Platform.PaymentAccount.PaymentAccounts_ByUserId',
  PaymentAccount_ByUserId_ByType_ById = 'Platform.PaymentAccount.PaymentAccount_ByUserId_ByType_ById'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment accounts.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment account list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAccount.PaymentAccounts_ByUserId, input]
 * }
 * ```
 */
export const usePaymentAccountApi_GetPaymentAccounts_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<PaymentAccountArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentAccountArray>) => void
): UseQueryResult<PaymentAccountArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentAccountApi_GetPaymentAccounts_ByUserId>[1]) => async () => {
    const response = await PaymentAccountApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPaymentAccounts_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentAccountArray, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAccount.PaymentAccounts_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete payment account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;:&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentAccount.PaymentAccount_ByUserId_ByType_ById, input]
 * }
 * ```
 */
export const usePaymentAccountApi_DeletePaymentAccount_ByUserId_ByType_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; type: string; id: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; type: string; id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; type: string; id: string }) => {
    const response = await PaymentAccountApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePaymentAccount_ByUserId_ByType_ById(input.userId, input.type, input.id)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentAccount.PaymentAccount_ByUserId_ByType_ById],
    mutationFn,
    ...options
  })
}
