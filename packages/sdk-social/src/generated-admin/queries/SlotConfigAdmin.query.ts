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
import { SlotConfigAdminApi } from '../SlotConfigAdminApi.js'

import { NamespaceSlotConfigInfo } from '../../generated-definitions/NamespaceSlotConfigInfo.js'
import { SlotConfigUpdate } from '../../generated-definitions/SlotConfigUpdate.js'
import { UserSlotConfigInfo } from '../../generated-definitions/UserSlotConfigInfo.js'

export enum Key_SlotConfigAdmin {
  Config = 'Social.SlotConfigAdmin.Config',
  Config_ByUserId = 'Social.SlotConfigAdmin.Config_ByUserId'
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a namespace slot configuration, the configuration will be default after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SlotConfigAdmin.Config, input]
 * }
 * ```
 */
export const useSlotConfigAdminApi_DeleteConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfig()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot configuration for a given namespace. In case slot configuration is not set, the default will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace slot config info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SlotConfigAdmin.Config, input]
 * }
 * ```
 */
export const useSlotConfigAdminApi_GetConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespaceSlotConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceSlotConfigInfo>) => void
): UseQueryResult<NamespaceSlotConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSlotConfigAdminApi_GetConfig>[1]) => async () => {
    const response = await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceSlotConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_SlotConfigAdmin.Config, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a slot namespace configuration.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace slot config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SlotConfigAdmin.Config, input]
 * }
 * ```
 */
export const useSlotConfigAdminApi_UpdateConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<NamespaceSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SlotConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: NamespaceSlotConfigInfo) => void
): UseMutationResult<NamespaceSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SlotConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SlotConfigUpdate }) => {
    const response = await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateConfig(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a user slot configuration in given namespace, the namespace slot configuration will be returned after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SlotConfigAdmin.Config_ByUserId, input]
 * }
 * ```
 */
export const useSlotConfigAdminApi_DeleteConfig_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfig_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get a user slot configuration in given namespace. In case the user slot configuration is not set, the namespace configuration will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;Returns&lt;/i&gt;: slot config info&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SlotConfigAdmin.Config_ByUserId, input]
 * }
 * ```
 */
export const useSlotConfigAdminApi_GetConfig_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserSlotConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserSlotConfigInfo>) => void
): UseQueryResult<UserSlotConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSlotConfigAdminApi_GetConfig_ByUserId>[1]) => async () => {
    const response = await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserSlotConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_SlotConfigAdmin.Config_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a user slot configuration in given namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot config&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SlotConfigAdmin.Config_ByUserId, input]
 * }
 * ```
 */
export const useSlotConfigAdminApi_UpdateConfig_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SlotConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: UserSlotConfigInfo) => void
): UseMutationResult<UserSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SlotConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SlotConfigUpdate }) => {
    const response = await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateConfig_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config_ByUserId],
    mutationFn,
    ...options
  })
}
