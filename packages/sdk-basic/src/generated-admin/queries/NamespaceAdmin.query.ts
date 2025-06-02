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
import { NamespaceAdminApi } from '../NamespaceAdminApi.js'

import { NamespaceContext } from '../../generated-definitions/NamespaceContext.js'
import { NamespaceCreate } from '../../generated-definitions/NamespaceCreate.js'
import { NamespaceInfo } from '../../generated-definitions/NamespaceInfo.js'
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceStatusUpdate } from '../../generated-definitions/NamespaceStatusUpdate.js'
import { NamespaceUpdate } from '../../generated-definitions/NamespaceUpdate.js'

export enum Key_NamespaceAdmin {
  Namespaces = 'Basic.NamespaceAdmin.Namespaces',
  Namespace = 'Basic.NamespaceAdmin.Namespace',
  Namespace_ByNamespace = 'Basic.NamespaceAdmin.Namespace_ByNamespace',
  Game = 'Basic.NamespaceAdmin.Game',
  Basic = 'Basic.NamespaceAdmin.Basic',
  Child = 'Basic.NamespaceAdmin.Child',
  Status = 'Basic.NamespaceAdmin.Status',
  Context = 'Basic.NamespaceAdmin.Context',
  Publisher = 'Basic.NamespaceAdmin.Publisher'
}

/**
 * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Namespaces, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_GetNamespaces = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceAdminApi_GetNamespaces>[1]) => async () => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNamespaces(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a namespace.&lt;br&gt;By default the namespace is enabled.&lt;br&gt;In multi tenant mode, parentNamespace will be automatically filled with requester namespace if the requester is using studio or publisher token, and it will be filled with studio namespace if the requester uses game token. An oauth client will also be created and the id will be returned. &lt;br&gt;displayName rule: &lt;br/&gt;&lt;ul&gt;&lt;li&gt;Alphanumeric lowercase and uppercase are allowed&lt;/li&gt;&lt;li&gt;Allowed Special Character: &#39;,. -&lt;/li&gt;&lt;li&gt;Must start and end with alphanumeric&lt;/li&gt;&lt;li&gt;Spaces and special character are allowed but cannot appear twice in a row&lt;/li&gt;&lt;/ul&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11301&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Namespace, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_CreateNamespaceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceCreate }>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NamespaceCreate }) => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNamespace(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Namespace],
    mutationFn,
    ...options
  })
}

/**
 * Delete a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11307&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: deleted namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Namespace_ByNamespace, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_DeleteNamespace_ByNamespaceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await NamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteNamespace_ByNamespace()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Namespace_ByNamespace],
    mutationFn,
    ...options
  })
}

/**
 * Get a namespace.&lt;br&gt;In multi tenant mode, parentNamespace will be returned.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11304&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Namespace_ByNamespace, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_GetNamespace_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceInfo>) => void
): UseQueryResult<NamespaceInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceAdminApi_GetNamespace_ByNamespace>[1]) => async () => {
    const response = await NamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getNamespace_ByNamespace(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceInfo, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Namespace_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get game namespaces.&lt;br&gt;In multi tenant mode, a given super admin namespace will return all game namespaces of studio namespaces&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11308&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Game, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_GetGame = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceAdminApi_GetGame>[1]) => async () => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGame(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Game, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update namespace basic info.&lt;br&gt;displayName rule: &lt;br/&gt;&lt;ul&gt;&lt;li&gt;Alphanumeric lowercase and uppercase are allowed&lt;/li&gt;&lt;li&gt;Allowed Special Character: &#39;,. -&lt;/li&gt;&lt;li&gt;Must start and end with alphanumeric&lt;/li&gt;&lt;li&gt;Spaces and special character are allowed but cannot appear twice in a row&lt;/li&gt;&lt;/ul&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11302&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Basic, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_PatchBasicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceUpdate }>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NamespaceUpdate }) => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchBasic(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Basic],
    mutationFn,
    ...options
  })
}

/**
 * Get child namespaces.&lt;br&gt;If input namespace is publisher namespace, then it will return its all studio namespace.&lt;br&gt;If input namespace is studio namespace, then it will return its all game namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child namespaces&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Child, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_GetChild = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceAdminApi_GetChild>[1]) => async () => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChild(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Child, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Change a namespace status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Action code&lt;i&gt;&lt;/i&gt;: 11306&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Status, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_PatchStatusMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceStatusUpdate }>,
    'mutationKey'
  >,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceStatusUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NamespaceStatusUpdate }) => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchStatus(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Status],
    mutationFn,
    ...options
  })
}

/**
 * Get context of namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: context of namespace&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_NamespaceAdmin.Context, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_GetContext = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespaceContext, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceContext>) => void
): UseQueryResult<NamespaceContext, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceAdminApi_GetContext>[1]) => async () => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContext()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceContext, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Context, input],
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
 *    queryKey: [Key_NamespaceAdmin.Publisher, input]
 * }
 * ```
 */
export const useNamespaceAdminApi_GetPublisher = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespacePublisherInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespacePublisherInfo>) => void
): UseQueryResult<NamespacePublisherInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useNamespaceAdminApi_GetPublisher>[1]) => async () => {
    const response = await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPublisher()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespacePublisherInfo, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Publisher, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
