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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigReq } from '../../generated-definitions/ConfigReq.js'
import { Configuration } from '../../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export enum Key_ConfigAdmin {
  Config = 'Lobby.ConfigAdmin.Config',
  ConfigLog = 'Lobby.ConfigAdmin.ConfigLog',
  Config_ByNamespace = 'Lobby.ConfigAdmin.Config_ByNamespace',
  ConfigExport = 'Lobby.ConfigAdmin.ConfigExport',
  ConfigImport = 'Lobby.ConfigAdmin.ConfigImport'
}

/**
 * Get lobby config of all namespaces.&lt;br&gt;default MaxDSWaitTime is 120 (second)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ConfigList, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigList>) => void
): UseQueryResult<ConfigList, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfig>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig()
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigList, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Get Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigLog, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigLog = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<Configuration, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Configuration>) => void
): UseQueryResult<Configuration, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigLog>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigLog()
    callback && callback(response)
    return response.data
  }

  return useQuery<Configuration, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Update Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigLog, input]
 * }
 * ```
 */
export const useConfigAdminApi_PatchConfigLogMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<Configuration, AxiosError<ApiError>, SdkSetConfigParam & { data: Configuration }>, 'mutationKey'>,
  callback?: (data: Configuration) => void
): UseMutationResult<Configuration, AxiosError<ApiError>, SdkSetConfigParam & { data: Configuration }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: Configuration }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfigLog(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigLog],
    mutationFn,
    ...options
  })
}

/**
 * Get lobby config of a namespace.&lt;br&gt;default MaxDSWaitTime is 120 (second)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfig_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ConfigReq, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigReq>) => void
): UseQueryResult<ConfigReq, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfig_ByNamespace>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByNamespace()
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigReq, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update lobby config of a namespace.&lt;br&gt;MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input]
 * }
 * ```
 */
export const useConfigAdminApi_UpdateConfig_ByNamespaceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigReq }>, 'mutationKey'>,
  callback?: (data: ConfigReq) => void
): UseMutationResult<ConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigReq }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateConfig_ByNamespace(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByNamespace],
    mutationFn,
    ...options
  })
}

/**
 *  Export lobby configuration to a json file. The file can then be imported from the /import endpoint. JSON Schema of the exported file: { &#34;required&#34;: [ &#34;namespace&#34;, &#34;entitlementItemID&#34;, &#34;chatRateLimitDuration&#34;, &#34;unregisterDelay&#34;, &#34;generalRateLimitDuration&#34;, &#34;autoKickOnDisconnectDelay&#34;, &#34;chatRateLimitBurst&#34;, &#34;generalRateLimitBurst&#34;, &#34;maxPartyMember&#34;, &#34;autoKickOnDisconnect&#34;, &#34;profanityFilter&#34;, &#34;enableChat&#34;, &#34;entitlementCheck&#34;, &#34;cancelTicketOnDisconnect&#34;, &#34;concurrentUsersLimit&#34;, &#34;readyConsentTimeout&#34;, &#34;disableInvitationOnJoinParty&#34;, &#34;allowJoinPartyDuringMatchmaking&#34;, &#34;allowInviteNonConnectedUser&#34;, &#34;keepPresenceActivityOnDisconnect&#34;, &#34;maxDSWaitTime&#34;, &#34;maxFriendsLimit&#34;, &#34;requestMetadataMaxSize&#34; ], &#34;properties&#34;: { &#34;allowInviteNonConnectedUser&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;allowJoinPartyDuringMatchmaking&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnectDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;cancelTicketOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;chatRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;chatRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;concurrentUsersLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;disableInvitationOnJoinParty&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;enableChat&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementCheck&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementItemID&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;generalRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;generalRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;keepPresenceActivityOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;maxDSWaitTime&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;maxFriendsLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;maxPartyMember&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;namespace&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;profanityFilter&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;readyConsentTimeout&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;requestMetadataMaxSize&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;unregisterDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; } } }
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigExport, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigExport>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint. MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigImport, input]
 * }
 * ```
 */
export const useConfigAdminApi_UpdateConfigImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: ImportConfigResponse) => void
): UseMutationResult<ImportConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateConfigImport(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigImport],
    mutationFn,
    ...options
  })
}
