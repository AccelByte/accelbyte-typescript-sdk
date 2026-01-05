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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { CreateDsmConfigRequest } from '../../generated-definitions/CreateDsmConfigRequest.js'
import { CreatePortRequest } from '../../generated-definitions/CreatePortRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { ImportResponse } from '../../generated-definitions/ImportResponse.js'
import { ListConfigResponse } from '../../generated-definitions/ListConfigResponse.js'
import { UpdateDsmConfigRequest } from '../../generated-definitions/UpdateDsmConfigRequest.js'
import { UpdatePortRequest } from '../../generated-definitions/UpdatePortRequest.js'

export enum Key_ConfigAdmin {
  Configs = 'Dsmcontroller.ConfigAdmin.Configs',
  Config = 'Dsmcontroller.ConfigAdmin.Config',
  Configs_ByNS = 'Dsmcontroller.ConfigAdmin.Configs_ByNS',
  Config_ByNS = 'Dsmcontroller.ConfigAdmin.Config_ByNS',
  ConfigCache = 'Dsmcontroller.ConfigAdmin.ConfigCache',
  ConfigsExport = 'Dsmcontroller.ConfigAdmin.ConfigsExport',
  ConfigImport = 'Dsmcontroller.ConfigAdmin.ConfigImport',
  ConfigPort_ByName = 'Dsmcontroller.ConfigAdmin.ConfigPort_ByName'
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers configs.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Configs, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ListConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListConfigResponse>) => void
): UseQueryResult<ListConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigs>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigs()
    callback && callback(response)
    return response.data
  }

  return useQuery<ListConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint adds/modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, &#34;image_version_mapping&#34;: { &#34;1.4.0&#34;: &#34;accelbyte/sample-ds-go:1.4.0&#34; }, &#34;default_version&#34;: &#34;1.4.0&#34;, &#34;cpu_limit&#34;: &#34;100&#34;, &#34;mem_limit&#34;: &#34;64&#34;, &#34;params&#34;: &#34;&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 0, &#34;configurations&#34;: { &#34;1player&#34;: { &#34;cpu_limit&#34;: &#34;100&#34;, &#34;mem_limit&#34;: &#34;64&#34;, &#34;params&#34;: &#34;-gamemode 1p&#34;, }, &#34;50players&#34;: { &#34;cpu_limit&#34;: &#34;200&#34;, &#34;mem_limit&#34;: &#34;512&#34;, &#34;params&#34;: &#34;-gamemode 50p&#34;, } }, &#34;deployments&#34;: { &#34;global-1p&#34;: { &#34;game_version&#34;: &#34;1.4.0&#34;&#34;, &#34;regions&#34;: [&#34;us-west&#34;, &#34;ap-southeast&#34;], &#34;configuration&#34;: &#34;1player&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 2 }, &#34;us-50p&#34;: { &#34;game_version&#34;: &#34;1.4.0&#34;&#34;, &#34;regions&#34;: [&#34;us-west&#34;], &#34;configuration&#34;: &#34;50players&#34;, &#34;min_count&#34;: 0, &#34;max_count&#34;: 0, &#34;buffer_count&#34;: 5 }, }, } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config, input]
 * }
 * ```
 */
export const useConfigAdminApi_CreateConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsmConfigRecord }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsmConfigRecord }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DsmConfigRecord }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfig(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint removes config. When there are ready servers, those servers will be removed. ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config, input]
 * }
 * ```
 */
export const useConfigAdminApi_DeleteConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfig()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Configs_ByNS, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigs_ByNS = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DsmConfigRecord>) => void
): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigs_ByNS>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigs_ByNS()
    callback && callback(response)
    return response.data
  }

  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint modifies config. When there are ready servers and the server version is updated, those servers will be replaced with newer version. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config, input]
 * }
 * ```
 */
export const useConfigAdminApi_PatchConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateDsmConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateDsmConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UpdateDsmConfigRequest }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfig(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates config. Port is where your game listens for incoming UDP connection, if empty it&#39;ll be set to 15000 CPU and Memory limit / request are formatted with Kubernetes format, e.g. CPU of 1000m is 1 core, and Memory of 512Mi is 512 MB. The creation/claim/session/unreachable/heartbeat timeouts are all in seconds. Creation timeout is time limit for DS to startup until registers itself. Claim timeout is time limit for game session manager to claim its ready DS. Session timeout is time limit for match session before deleted. Unreachable timeout is time limit for DS in UNREACHABLE state before deleted. Heartbeat timeout is time limit for DS to give heartbeat before marked as UNREACHABLE. Sample config: { &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;providers&#34;: [ &#34;aws&#34; ], &#34;port&#34;: 7777, &#34;protocol&#34;: &#34;udp&#34;, &#34;creation_timeout&#34;: 120, &#34;claim_timeout&#34;: 60, &#34;session_timeout&#34;: 1800, &#34;heartbeat_timeout&#34;: 30, &#34;unreachable_timeout&#34;: 30, } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByNS, input]
 * }
 * ```
 */
export const useConfigAdminApi_CreateConfig_ByNSMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDsmConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDsmConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateDsmConfigRequest }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfig_ByNS(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByNS],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint clears config cache in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigCache, input]
 * }
 * ```
 */
export const useConfigAdminApi_DeleteConfigCacheMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfigCache()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigCache],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint export a dedicated servers config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigsExport, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigsExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigsExport>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigsExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint import a dedicated servers config in a namespace. If there is an existing configuration, the configuration would be replaced.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigImport, input]
 * }
 * ```
 */
export const useConfigAdminApi_CreateConfigImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ImportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: ImportResponse) => void
): UseMutationResult<ImportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfigImport(
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

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server port config in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigPort_ByName, input]
 * }
 * ```
 */
export const useConfigAdminApi_DeleteConfigPort_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string }>, 'mutationKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfigPort_ByName(
      input.name
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers port config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigPort_ByName, input]
 * }
 * ```
 */
export const useConfigAdminApi_PatchConfigPort_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: UpdatePortRequest }>,
    'mutationKey'
  >,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: UpdatePortRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: UpdatePortRequest }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfigPort_ByName(
      input.name,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers port config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigPort_ByName, input]
 * }
 * ```
 */
export const useConfigAdminApi_CreateConfigPort_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: CreatePortRequest }>,
    'mutationKey'
  >,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: CreatePortRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: CreatePortRequest }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfigPort_ByName(
      input.name,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}
