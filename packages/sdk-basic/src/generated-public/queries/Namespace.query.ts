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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { NamespaceApi } from '../NamespaceApi.js'

import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceSimpleInfo } from '../../generated-definitions/NamespaceSimpleInfo.js'

export enum Key_Namespace {
  Namespaces = 'Basic.Namespace.Namespaces',
  Namespace_ByNamespace = 'Basic.Namespace.Namespace_ByNamespace',
  Publisher = 'Basic.Namespace.Publisher'
}

/**
 * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Namespace.Namespaces, input]
 * }
 * ```
 */
export const useNamespaceApi_GetNamespaces = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceApi_GetNamespaces>[1]) => async () => {
    const response = await NamespaceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNamespaces(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Namespace.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get a namespace info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Namespace.Namespace_ByNamespace, input]
 * }
 * ```
 */
export const useNamespaceApi_GetNamespace_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespaceSimpleInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceSimpleInfo>) => void
): UseQueryResult<NamespaceSimpleInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceApi_GetNamespace_ByNamespace>[1]) => async () => {
    const response = await NamespaceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNamespace_ByNamespace()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceSimpleInfo, AxiosError<ApiError>>({
    queryKey: [Key_Namespace.Namespace_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Namespace.Publisher, input]
 * }
 * ```
 */
export const useNamespaceApi_GetPublisher = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespacePublisherInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespacePublisherInfo>) => void
): UseQueryResult<NamespacePublisherInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceApi_GetPublisher>[1]) => async () => {
    const response = await NamespaceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPublisher()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespacePublisherInfo, AxiosError<ApiError>>({
    queryKey: [Key_Namespace.Publisher, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
