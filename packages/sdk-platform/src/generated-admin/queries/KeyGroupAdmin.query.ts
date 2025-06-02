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
import { KeyGroupAdminApi } from '../KeyGroupAdminApi.js'

import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { KeyGroupCreate } from '../../generated-definitions/KeyGroupCreate.js'
import { KeyGroupDynamicInfo } from '../../generated-definitions/KeyGroupDynamicInfo.js'
import { KeyGroupInfo } from '../../generated-definitions/KeyGroupInfo.js'
import { KeyGroupPagingSlicedResult } from '../../generated-definitions/KeyGroupPagingSlicedResult.js'
import { KeyGroupUpdate } from '../../generated-definitions/KeyGroupUpdate.js'
import { KeyPagingSliceResult } from '../../generated-definitions/KeyPagingSliceResult.js'

export enum Key_KeyGroupAdmin {
  Keygroups = 'Platform.KeyGroupAdmin.Keygroups',
  Keygroup = 'Platform.KeyGroupAdmin.Keygroup',
  KeygroupsByBoothName = 'Platform.KeyGroupAdmin.KeygroupsByBoothName',
  Keygroup_ByKeyGroupId = 'Platform.KeyGroupAdmin.Keygroup_ByKeyGroupId',
  Keys_ByKeyGroupId = 'Platform.KeyGroupAdmin.Keys_ByKeyGroupId',
  Key_ByKeyGroupId = 'Platform.KeyGroupAdmin.Key_ByKeyGroupId',
  Dynamic_ByKeyGroupId = 'Platform.KeyGroupAdmin.Dynamic_ByKeyGroupId'
}

/**
 * Query key groups, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of key group&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Keygroups, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_GetKeygroups = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; name?: string | null; offset?: number; tag?: string | null } },
  options?: Omit<UseQueryOptions<KeyGroupPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<KeyGroupPagingSlicedResult>) => void
): UseQueryResult<KeyGroupPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useKeyGroupAdminApi_GetKeygroups>[1]) => async () => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getKeygroups(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<KeyGroupPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Keygroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created key group&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Keygroup, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_CreateKeygroupMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<KeyGroupInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: KeyGroupCreate }>, 'mutationKey'>,
  callback?: (data: KeyGroupInfo) => void
): UseMutationResult<KeyGroupInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: KeyGroupCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: KeyGroupCreate }) => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createKeygroup(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_KeyGroupAdmin.Keygroup],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.KeygroupsByBoothName, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_GetKeygroupsByBoothName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { boothName: string | null } },
  options?: Omit<UseQueryOptions<KeyGroupInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<KeyGroupInfo>) => void
): UseQueryResult<KeyGroupInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useKeyGroupAdminApi_GetKeygroupsByBoothName>[1]) => async () => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getKeygroupsByBoothName(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<KeyGroupInfo, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.KeygroupsByBoothName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Keygroup_ByKeyGroupId, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_GetKeygroup_ByKeyGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { keyGroupId: string },
  options?: Omit<UseQueryOptions<KeyGroupInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<KeyGroupInfo>) => void
): UseQueryResult<KeyGroupInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useKeyGroupAdminApi_GetKeygroup_ByKeyGroupId>[1]) => async () => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getKeygroup_ByKeyGroupId(
      input.keyGroupId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<KeyGroupInfo, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Keygroup_ByKeyGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated key group&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Keygroup_ByKeyGroupId, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_UpdateKeygroup_ByKeyGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<KeyGroupInfo, AxiosError<ApiError>, SdkSetConfigParam & { keyGroupId: string; data: KeyGroupUpdate }>,
    'mutationKey'
  >,
  callback?: (data: KeyGroupInfo) => void
): UseMutationResult<KeyGroupInfo, AxiosError<ApiError>, SdkSetConfigParam & { keyGroupId: string; data: KeyGroupUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { keyGroupId: string; data: KeyGroupUpdate }) => {
    const response = await KeyGroupAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateKeygroup_ByKeyGroupId(input.keyGroupId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_KeyGroupAdmin.Keygroup_ByKeyGroupId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to list keys of a key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: keys&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Keys_ByKeyGroupId, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_GetKeys_ByKeyGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { keyGroupId: string; queryParams?: { limit?: number; offset?: number; status?: 'ACQUIRED' | 'ACTIVE' } },
  options?: Omit<UseQueryOptions<KeyPagingSliceResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<KeyPagingSliceResult>) => void
): UseQueryResult<KeyPagingSliceResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useKeyGroupAdminApi_GetKeys_ByKeyGroupId>[1]) => async () => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getKeys_ByKeyGroupId(
      input.keyGroupId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<KeyPagingSliceResult, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Keys_ByKeyGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to upload keys with csv format to a key group.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Key_ByKeyGroupId, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_CreateKey_ByKeyGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { keyGroupId: string; data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { keyGroupId: string; data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { keyGroupId: string; data: { file?: File } }) => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createKey_ByKeyGroupId(
      input.keyGroupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_KeyGroupAdmin.Key_ByKeyGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Get key group dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_KeyGroupAdmin.Dynamic_ByKeyGroupId, input]
 * }
 * ```
 */
export const useKeyGroupAdminApi_GetDynamic_ByKeyGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { keyGroupId: string },
  options?: Omit<UseQueryOptions<KeyGroupDynamicInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<KeyGroupDynamicInfo>) => void
): UseQueryResult<KeyGroupDynamicInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useKeyGroupAdminApi_GetDynamic_ByKeyGroupId>[1]) => async () => {
    const response = await KeyGroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDynamic_ByKeyGroupId(
      input.keyGroupId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<KeyGroupDynamicInfo, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Dynamic_ByKeyGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
