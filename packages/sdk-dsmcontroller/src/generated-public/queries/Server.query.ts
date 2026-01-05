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
import { ServerApi } from '../ServerApi.js'

import { DeregisterLocalServerRequest } from '../../generated-definitions/DeregisterLocalServerRequest.js'
import { DetailedCountServerResponse } from '../../generated-definitions/DetailedCountServerResponse.js'
import { DsHeartbeatRequest } from '../../generated-definitions/DsHeartbeatRequest.js'
import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'
import { RegisterLocalServerRequest } from '../../generated-definitions/RegisterLocalServerRequest.js'
import { RegisterServerRequest } from '../../generated-definitions/RegisterServerRequest.js'
import { Server } from '../../generated-definitions/Server.js'
import { ServerDeploymentConfigSessionTimeoutResponse } from '../../generated-definitions/ServerDeploymentConfigSessionTimeoutResponse.js'
import { ServerSessionResponse } from '../../generated-definitions/ServerSessionResponse.js'
import { ShutdownServerRequest } from '../../generated-definitions/ShutdownServerRequest.js'

export enum Key_Server {
  Servers = 'Dsmcontroller.Server.Servers',
  ServerRegister = 'Dsmcontroller.Server.ServerRegister',
  ServerShutdown = 'Dsmcontroller.Server.ServerShutdown',
  ServerHeartbeat = 'Dsmcontroller.Server.ServerHeartbeat',
  ServersCountDetailed = 'Dsmcontroller.Server.ServersCountDetailed',
  ServerLocalRegister = 'Dsmcontroller.Server.ServerLocalRegister',
  ServerLocalDeregister = 'Dsmcontroller.Server.ServerLocalDeregister',
  Session_ByPodName = 'Dsmcontroller.Server.Session_ByPodName',
  ConfigSessiontimeout_ByPodName = 'Dsmcontroller.Server.ConfigSessiontimeout_ByPodName'
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.Servers, input]
 * }
 * ```
 */
export const useServerApi_GetServers = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number; region?: string | null } },
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListServerResponse>) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServerApi_GetServers>[1]) => async () => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServers(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.Servers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to let DSM know that it is ready for use. This MUST be called by DS after it is ready to accept match data and incoming client connections. Upon successfully calling this endpoint, the dedicated server is listed under READY servers.```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ServerRegister, input]
 * }
 * ```
 */
export const useServerApi_CreateServerRegisterMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterServerRequest }>, 'mutationKey'>,
  callback?: (data: Server) => void
): UseMutationResult<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterServerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RegisterServerRequest }) => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createServerRegister(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Server.ServerRegister],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to let DSM know that it is shutting down. Calling this will remove the server and session records from DB.Set &#39;kill_me&#39; in request to &#39;true&#39; if the DS cannot shut itself down.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ServerShutdown, input]
 * }
 * ```
 */
export const useServerApi_CreateServerShutdownMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ShutdownServerRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ShutdownServerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ShutdownServerRequest }) => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createServerShutdown(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Server.ServerShutdown],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server which already has claimed to extend its lifetime. DS should call this periodically after it claimed. The timeframe between 2 heartbeat call should be smaller than the session timout in the deployment configuration. If the last heartbeat is longer than the session timout, the server. will be considered as expired and will be terminated by DSMC.```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ServerHeartbeat, input]
 * }
 * ```
 */
export const useServerApi_UpdateServerHeartbeatMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsHeartbeatRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsHeartbeatRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DsHeartbeatRequest }) => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateServerHeartbeat(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Server.ServerHeartbeat],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a region managed by this service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ServersCountDetailed, input]
 * }
 * ```
 */
export const useServerApi_GetServersCountDetailed = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { region?: string | null } },
  options?: Omit<UseQueryOptions<DetailedCountServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DetailedCountServerResponse>) => void
): UseQueryResult<DetailedCountServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServerApi_GetServersCountDetailed>[1]) => async () => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServersCountDetailed(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DetailedCountServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.ServersCountDetailed, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social Use the alternative GET of the same endpoint to upgrade DS connection to DSM via websocket. This endpoint is intended to be called by local dedicated server to let DSM know that it is ready for use. Use local DS only for development purposes since DSM wouldn&#39;t be able to properly manage local DS in production. This MUST be called by DS after it is ready to accept match data and incoming client connections. Upon successfully calling this endpoint, the dedicated server is listed under READY local servers.```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ServerLocalRegister, input]
 * }
 * ```
 */
export const useServerApi_CreateServerLocalRegisterMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterLocalServerRequest }>, 'mutationKey'>,
  callback?: (data: Server) => void
): UseMutationResult<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterLocalServerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RegisterLocalServerRequest }) => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createServerLocalRegister(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Server.ServerLocalRegister],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by local dedicated server to let DSM know that it is shutting down. Calling this will remove the server records from DB.```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ServerLocalDeregister, input]
 * }
 * ```
 */
export const useServerApi_CreateServerLocalDeregisterMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeregisterLocalServerRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeregisterLocalServerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeregisterLocalServerRequest }) => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createServerLocalDeregister(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Server.ServerLocalDeregister],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: NAMESPACE:{namespace}:DSM:SERVER [UPDATE] Required scope: social This endpoint is intended to be called by dedicated server to query its session ID. DS should call this when it first receive player connection, to see if it is actually claimed```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.Session_ByPodName, input]
 * }
 * ```
 */
export const useServerApi_GetSession_ByPodName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { podName: string },
  options?: Omit<UseQueryOptions<ServerSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ServerSessionResponse>) => void
): UseQueryResult<ServerSessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServerApi_GetSession_ByPodName>[1]) => async () => {
    const response = await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSession_ByPodName(
      input.podName
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ServerSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.Session_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint is intended to be called by dedicated server to get the session timeout that will be used for the DS. DS will use this session timeout to make sure it regularly make heartbeat call to the DSMC, before the session timeout.```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ConfigSessiontimeout_ByPodName, input]
 * }
 * ```
 */
export const useServerApi_GetConfigSessiontimeout_ByPodName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { podName: string },
  options?: Omit<UseQueryOptions<ServerDeploymentConfigSessionTimeoutResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ServerDeploymentConfigSessionTimeoutResponse>) => void
): UseQueryResult<ServerDeploymentConfigSessionTimeoutResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServerApi_GetConfigSessiontimeout_ByPodName>[1]) => async () => {
    const response = await ServerApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfigSessiontimeout_ByPodName(input.podName)
    callback && callback(response)
    return response.data
  }

  return useQuery<ServerDeploymentConfigSessionTimeoutResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.ConfigSessiontimeout_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
