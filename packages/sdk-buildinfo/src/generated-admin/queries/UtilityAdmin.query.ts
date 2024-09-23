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
import { UtilityAdminApi } from '../UtilityAdminApi.js'

import { CleanerConfigObject } from '../../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../../generated-definitions/PingResultResponse.js'

export enum Key_UtilityAdmin {
  PingDiffer = 'Buildinfo.UtilityAdmin.PingDiffer',
  Configurations = 'Buildinfo.UtilityAdmin.Configurations',
  Configuration = 'Buildinfo.UtilityAdmin.Configuration',
  ValidateSdkConfig = 'Buildinfo.UtilityAdmin.ValidateSdkConfig',
  CleanerConfigurations = 'Buildinfo.UtilityAdmin.CleanerConfigurations'
}

/**
 * This API is used to manually checks the readiness of differ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ping result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilityAdmin.PingDiffer, input]
 * }
 * ```
 */
export const useUtilityAdminApi_GetPingDiffer = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PingResultResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PingResultResponse>) => void
): UseQueryResult<PingResultResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilityAdminApi_GetPingDiffer>[1]) => async () => {
    const response = await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPingDiffer()
    callback && callback(response)
    return response.data
  }

  return useQuery<PingResultResponse, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.PingDiffer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get the BuildInfo configurations.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilityAdmin.Configurations, input]
 * }
 * ```
 */
export const useUtilityAdminApi_GetConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ConfigurationInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigurationInfo>) => void
): UseQueryResult<ConfigurationInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilityAdminApi_GetConfigurations>[1]) => async () => {
    const response = await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigurations()
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigurationInfo, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update the BuildInfo configurations.&lt;br/&gt;This API support update configuration based on given data. Single request can update single field or multi fields.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilityAdmin.Configuration, input]
 * }
 * ```
 */
export const useUtilityAdminApi_PatchConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigurationInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigurationUpdate }>,
    'mutationKey'
  >,
  callback?: (data: ConfigurationInfo) => void
): UseMutationResult<ConfigurationInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigurationUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigurationUpdate }) => {
    const response = await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfiguration(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UtilityAdmin.Configuration],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to validate clientId and redirectUri from SDK Config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilityAdmin.ValidateSdkConfig, input]
 * }
 * ```
 */
export const useUtilityAdminApi_GetValidateSdkConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { clientId: string | null; redirectUri: string | null } },
  options?: Omit<UseQueryOptions<ClientPayload, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClientPayload>) => void
): UseQueryResult<ClientPayload, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilityAdminApi_GetValidateSdkConfig>[1]) => async () => {
    const response = await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getValidateSdkConfig(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ClientPayload, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.ValidateSdkConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to retrieve grace period of buildinfo cleaner.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Buildinfo Grace Period Time&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilityAdmin.CleanerConfigurations, input]
 * }
 * ```
 */
export const useUtilityAdminApi_GetCleanerConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CleanerConfigObject, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CleanerConfigObject>) => void
): UseQueryResult<CleanerConfigObject, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilityAdminApi_GetCleanerConfigurations>[1]) => async () => {
    const response = await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCleanerConfigurations()
    callback && callback(response)
    return response.data
  }

  return useQuery<CleanerConfigObject, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.CleanerConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
