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
import { FulfillmentScriptAdminApi } from '../FulfillmentScriptAdminApi.js'

import { FulfillmentScriptCreate } from '../../generated-definitions/FulfillmentScriptCreate.js'
import { FulfillmentScriptInfo } from '../../generated-definitions/FulfillmentScriptInfo.js'
import { FulfillmentScriptInfoArray } from '../../generated-definitions/FulfillmentScriptInfoArray.js'
import { FulfillmentScriptUpdate } from '../../generated-definitions/FulfillmentScriptUpdate.js'

export enum Key_FulfillmentScriptAdmin {
  FulfillmentScripts = 'Platform.FulfillmentScriptAdmin.FulfillmentScripts',
  FulfillmentScript_ById = 'Platform.FulfillmentScriptAdmin.FulfillmentScript_ById'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;List all fulfillment scripts.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScripts, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_GetFulfillmentScripts = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<FulfillmentScriptInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FulfillmentScriptInfoArray>) => void
): UseQueryResult<FulfillmentScriptInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFulfillmentScriptAdminApi_GetFulfillmentScripts>[1]) => async () => {
    const response = await FulfillmentScriptAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getFulfillmentScripts()
    callback && callback(response)
    return response.data
  }

  return useQuery<FulfillmentScriptInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScripts, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete fulfillment script.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_DeleteFulfillmentScript_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string }) => {
    const response = await FulfillmentScriptAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteFulfillmentScript_ById(input.id)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get fulfillment script by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get fulfillment script&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_GetFulfillmentScript_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string },
  options?: Omit<UseQueryOptions<FulfillmentScriptInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FulfillmentScriptInfo>) => void
): UseQueryResult<FulfillmentScriptInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFulfillmentScriptAdminApi_GetFulfillmentScript_ById>[1]) => async () => {
    const response = await FulfillmentScriptAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getFulfillmentScript_ById(input.id)
    callback && callback(response)
    return response.data
  }

  return useQuery<FulfillmentScriptInfo, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update fulfillment script.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_PatchFulfillmentScript_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: FulfillmentScriptUpdate }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentScriptInfo) => void
): UseMutationResult<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: FulfillmentScriptUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: FulfillmentScriptUpdate }) => {
    const response = await FulfillmentScriptAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchFulfillmentScript_ById(input.id, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Create fulfillment script.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;Fulfillment scripts are used for adding custom fulfillment logic based on &lt;b&gt;ITEM_TYPE&lt;/b&gt;: [MEDIA,INGAMEITEM] for now, and the custom scripts only cover grantDays.&lt;br&gt;Example for grantDays: &lt;br&gt;&lt;code&gt;order &amp;&amp; ((order.currency &amp;&amp; order.currency.currencyCode) == &#39;LP&#39; || order.isFree) ? 30 : -1&lt;/code&gt;&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_CreateFulfillmentScript_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: FulfillmentScriptCreate }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentScriptInfo) => void
): UseMutationResult<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: FulfillmentScriptCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: FulfillmentScriptCreate }) => {
    const response = await FulfillmentScriptAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createFulfillmentScript_ById(input.id, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}
