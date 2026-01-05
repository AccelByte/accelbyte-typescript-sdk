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
import { AdminAdminApi } from '../AdminAdminApi.js'

import { AddBufferRequest } from '../../generated-definitions/AddBufferRequest.js'
import { AddBufferResponse } from '../../generated-definitions/AddBufferResponse.js'
import { CountServerResponse } from '../../generated-definitions/CountServerResponse.js'
import { CountSessionResponse } from '../../generated-definitions/CountSessionResponse.js'
import { DeleteZombieRequest } from '../../generated-definitions/DeleteZombieRequest.js'
import { DetailedCountServerResponse } from '../../generated-definitions/DetailedCountServerResponse.js'
import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'
import { ListSessionResponse } from '../../generated-definitions/ListSessionResponse.js'
import { ServerDetailsResponse } from '../../generated-definitions/ServerDetailsResponse.js'
import { WorkerConfig } from '../../generated-definitions/WorkerConfig.js'
import { WorkerConfigRequest } from '../../generated-definitions/WorkerConfigRequest.js'

export enum Key_AdminAdmin {
  Workers = 'Dsmcontroller.AdminAdmin.Workers',
  Worker = 'Dsmcontroller.AdminAdmin.Worker',
  Server = 'Dsmcontroller.AdminAdmin.Server',
  Servers = 'Dsmcontroller.AdminAdmin.Servers',
  Sessions = 'Dsmcontroller.AdminAdmin.Sessions',
  ServersCount = 'Dsmcontroller.AdminAdmin.ServersCount',
  ServersLocal = 'Dsmcontroller.AdminAdmin.ServersLocal',
  WorkersGhost = 'Dsmcontroller.AdminAdmin.WorkersGhost',
  SessionsCount = 'Dsmcontroller.AdminAdmin.SessionsCount',
  WorkerZombie = 'Dsmcontroller.AdminAdmin.WorkerZombie',
  ManualBufferAdd = 'Dsmcontroller.AdminAdmin.ManualBufferAdd',
  Server_ByPodName = 'Dsmcontroller.AdminAdmin.Server_ByPodName',
  ServerLocal_ByName = 'Dsmcontroller.AdminAdmin.ServerLocal_ByName',
  Session_BySessionId = 'Dsmcontroller.AdminAdmin.Session_BySessionId',
  ServersCountDetailed = 'Dsmcontroller.AdminAdmin.ServersCountDetailed'
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [READ] Required scope: social This endpoint retrieves a worker configuration to control the worker in the DSMC.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Workers, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetWorkers = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<WorkerConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WorkerConfig>) => void
): UseQueryResult<WorkerConfig, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetWorkers>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getWorkers()
    callback && callback(response)
    return response.data
  }

  return useQuery<WorkerConfig, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Workers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [CREATE] Required scope: social This endpoint creates a worker configuration to control the worker in the DSMC.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Worker, input]
 * }
 * ```
 */
export const useAdminAdminApi_CreateWorkerMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<WorkerConfig, AxiosError<ApiError>, SdkSetConfigParam & { data: WorkerConfigRequest }>, 'mutationKey'>,
  callback?: (data: WorkerConfig) => void
): UseMutationResult<WorkerConfig, AxiosError<ApiError>, SdkSetConfigParam & { data: WorkerConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: WorkerConfigRequest }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createWorker(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Worker],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:WORKER:CONFIG [UPDATE] Required scope: social This endpoint updates a worker configuration to control the worker in the DSMC.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Worker, input]
 * }
 * ```
 */
export const useAdminAdminApi_UpdateWorkerMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: WorkerConfigRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: WorkerConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: WorkerConfigRequest }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateWorker(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Worker],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes all dedicated servers from DB and terminates the DS pod.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Server, input]
 * }
 * ```
 */
export const useAdminAdminApi_DeleteServerMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { version: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { version: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams: { version: string | null } }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteServer(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Server],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of dedicated servers in a namespace managed by this service. Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Servers, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetServers = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number; region?: string | null } },
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListServerResponse>) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetServers>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServers(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Servers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint lists all of sessions in a namespace managed by this service. Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Sessions, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetSessions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number; region?: string | null; withServer?: boolean | null } },
  options?: Omit<UseQueryOptions<ListSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListSessionResponse>) => void
): UseQueryResult<ListSessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetSessions>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSessions(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Sessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint counts all of dedicated servers in a namespace managed by this service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.ServersCount, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetServersCount = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CountServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountServerResponse>) => void
): UseQueryResult<CountServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetServersCount>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServersCount()
    callback && callback(response)
    return response.data
  }

  return useQuery<CountServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.ServersCount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint lists all of local dedicated servers in a namespace managed by this service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.ServersLocal, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetServersLocal = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListServerResponse>) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetServersLocal>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServersLocal()
    callback && callback(response)
    return response.data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.ServersLocal, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run ghost cleaner once.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.WorkersGhost, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetWorkersGhost = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetWorkersGhost>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getWorkersGhost()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.WorkersGhost, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint count all of sessions in a namespace managed by this service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.SessionsCount, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetSessionsCount = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { region?: string | null } },
  options?: Omit<UseQueryOptions<CountSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountSessionResponse>) => void
): UseQueryResult<CountSessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetSessionsCount>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSessionsCount(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CountSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.SessionsCount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint run zombie cleaner once use * as region name to target all regions ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.WorkerZombie, input]
 * }
 * ```
 */
export const useAdminAdminApi_CreateWorkerZombieMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteZombieRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteZombieRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteZombieRequest }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createWorkerZombie(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.WorkerZombie],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint manually adds buffer for selected namespace and deployment x Job will contain y num of allocs. Region can be filled with comma-separated values. use * as region name to deploy to all region specified in the deployment&#39;s region list if JobPriority set to 0, we will use 80 as default value for job priority OverrideVersion will be used as override version for the new allocations. If OverrideVersion is empty, will use version in the deployment. ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.ManualBufferAdd, input]
 * }
 * ```
 */
export const useAdminAdminApi_CreateManualBufferAddMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AddBufferResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AddBufferRequest }>,
    'mutationKey'
  >,
  callback?: (data: AddBufferResponse) => void
): UseMutationResult<AddBufferResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AddBufferRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AddBufferRequest }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createManualBufferAdd(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.ManualBufferAdd],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified dedicated server from DB and terminates the DS pod.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Server_ByPodName, input]
 * }
 * ```
 */
export const useAdminAdminApi_DeleteServer_ByPodNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { podName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { podName: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { podName: string }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteServer_ByPodName(
      input.podName
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Server_ByPodName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [READ] Required scope: social This endpoint queries a specified dedicated server from DB.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Server_ByPodName, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetServer_ByPodName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { podName: string },
  options?: Omit<UseQueryOptions<ServerDetailsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ServerDetailsResponse>) => void
): UseQueryResult<ServerDetailsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetServer_ByPodName>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServer_ByPodName(
      input.podName
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ServerDetailsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Server_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SERVER [DELETE] Required scope: social This endpoint deletes a specified local dedicated server from DB. Note that DSM has no ability to shutdown local DS.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.ServerLocal_ByName, input]
 * }
 * ```
 */
export const useAdminAdminApi_DeleteServerLocal_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteServerLocal_ByName(
      input.name
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.ServerLocal_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint deletes a specified session and its corresponding match result from DB.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.Session_BySessionId, input]
 * }
 * ```
 */
export const useAdminAdminApi_DeleteSession_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteSession_BySessionId(
      input.sessionID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Session_BySessionId],
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
 *    queryKey: [Key_AdminAdmin.ServersCountDetailed, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetServersCountDetailed = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { region?: string | null } },
  options?: Omit<UseQueryOptions<DetailedCountServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DetailedCountServerResponse>) => void
): UseQueryResult<DetailedCountServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetServersCountDetailed>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getServersCountDetailed(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DetailedCountServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.ServersCountDetailed, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
