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
import { DlcAdminApi } from '../DlcAdminApi.js'

import { DlcItemConfigInfo } from '../../generated-definitions/DlcItemConfigInfo.js'
import { DlcItemConfigUpdate } from '../../generated-definitions/DlcItemConfigUpdate.js'
import { PlatformDlcConfigInfo } from '../../generated-definitions/PlatformDlcConfigInfo.js'
import { PlatformDlcConfigUpdate } from '../../generated-definitions/PlatformDlcConfigUpdate.js'
import { UserDlc } from '../../generated-definitions/UserDlc.js'
import { UserDlcRecordArray } from '../../generated-definitions/UserDlcRecordArray.js'

export enum Key_DlcAdmin {
  DlcConfigItem = 'Platform.DlcAdmin.DlcConfigItem',
  Dlc_ByUserId = 'Platform.DlcAdmin.Dlc_ByUserId',
  DlcConfigPlatformMap = 'Platform.DlcAdmin.DlcConfigPlatformMap',
  DlcRecords_ByUserId = 'Platform.DlcAdmin.DlcRecords_ByUserId'
}

/**
 * delete a DLC item config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcConfigItem, input]
 * }
 * ```
 */
export const useDlcAdminApi_DeleteDlcConfigItemMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteDlcConfigItem()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigItem],
    mutationFn,
    ...options
  })
}

/**
 * Get DLC item config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcConfigItem, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlcConfigItem = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DlcItemConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DlcItemConfigInfo>) => void
): UseQueryResult<DlcItemConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcAdminApi_GetDlcConfigItem>[1]) => async () => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDlcConfigItem()
    callback && callback(response)
    return response.data
  }

  return useQuery<DlcItemConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcConfigItem, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update DLC item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated DLC item config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcConfigItem, input]
 * }
 * ```
 */
export const useDlcAdminApi_UpdateDlcConfigItemMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DlcItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: DlcItemConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: DlcItemConfigInfo) => void
): UseMutationResult<DlcItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: DlcItemConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DlcItemConfigUpdate }) => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcConfigItem(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigItem],
    mutationFn,
    ...options
  })
}

/**
 * Get user dlc by platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.Dlc_ByUserId, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlc_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams: { type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' } },
  options?: Omit<UseQueryOptions<UserDlc, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserDlc>) => void
): UseQueryResult<UserDlc, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcAdminApi_GetDlc_ByUserId>[1]) => async () => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDlc_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserDlc, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.Dlc_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * delete a Platform DLC config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input]
 * }
 * ```
 */
export const useDlcAdminApi_DeleteDlcConfigPlatformMapMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteDlcConfigPlatformMap()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigPlatformMap],
    mutationFn,
    ...options
  })
}

/**
 * Get Platform DLC config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlcConfigPlatformMap = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PlatformDlcConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformDlcConfigInfo>) => void
): UseQueryResult<PlatformDlcConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcAdminApi_GetDlcConfigPlatformMap>[1]) => async () => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDlcConfigPlatformMap()
    callback && callback(response)
    return response.data
  }

  return useQuery<PlatformDlcConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update Platform DLC config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated Platform DLC config&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for platform dlc map&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input]
 * }
 * ```
 */
export const useDlcAdminApi_UpdateDlcConfigPlatformMapMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PlatformDlcConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlatformDlcConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PlatformDlcConfigInfo) => void
): UseMutationResult<PlatformDlcConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlatformDlcConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PlatformDlcConfigUpdate }) => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcConfigPlatformMap(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigPlatformMap],
    mutationFn,
    ...options
  })
}

/**
 * Get user dlc records.&lt;br&gt;Note: includeAllNamespaces means this endpoint will return user dlcs from all namespace, example scenario isadmin may need to check the user dlcs before unlink a 3rd party account, so the user dlcs should be from all namespaces because unlinking is a platform level action &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DlcAdmin.DlcRecords_ByUserId, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlcRecords_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      includeAllNamespaces?: boolean | null
      status?: 'FULFILLED' | 'REVOKED' | 'REVOKE_FAILED'
      type?: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
    }
  },
  options?: Omit<UseQueryOptions<UserDlcRecordArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserDlcRecordArray>) => void
): UseQueryResult<UserDlcRecordArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcAdminApi_GetDlcRecords_ByUserId>[1]) => async () => {
    const response = await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDlcRecords_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserDlcRecordArray, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcRecords_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
