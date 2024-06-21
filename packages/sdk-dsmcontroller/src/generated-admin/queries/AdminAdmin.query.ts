/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
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
  Workers = 'AdminAdmin.Workers',
  Worker = 'AdminAdmin.Worker',
  Servers = 'AdminAdmin.Servers',
  Sessions = 'AdminAdmin.Sessions',
  ServersCount = 'AdminAdmin.ServersCount',
  ServersLocal = 'AdminAdmin.ServersLocal',
  WorkersGhost = 'AdminAdmin.WorkersGhost',
  SessionsCount = 'AdminAdmin.SessionsCount',
  WorkerZombie = 'AdminAdmin.WorkerZombie',
  ManualBufferAdd = 'AdminAdmin.ManualBufferAdd',
  Server_ByPodName = 'AdminAdmin.Server_ByPodName',
  ServerLocal_ByName = 'AdminAdmin.ServerLocal_ByName',
  Session_BySessionId = 'AdminAdmin.Session_BySessionId',
  ServersCountDetailed = 'AdminAdmin.ServersCountDetailed'
}

export const useAdmWorkers = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<WorkerConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: WorkerConfig) => void
): UseQueryResult<WorkerConfig, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmWorkers>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getWorkers()
    callback && callback(data)
    return data
  }

  return useQuery<WorkerConfig, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Workers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateWorkerMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<WorkerConfig, AxiosError<ApiError>, ApiArgs & { data: WorkerConfigRequest }>, 'mutationKey'>,
  callback?: (data: WorkerConfig) => void
): UseMutationResult<WorkerConfig, AxiosError<ApiError>, ApiArgs & { data: WorkerConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: WorkerConfigRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).createWorker(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Worker],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateWorkerMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: WorkerConfigRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: WorkerConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: WorkerConfigRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateWorker(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Worker],
    mutationFn,
    ...options
  })
}

export const useAdmServers = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { count: number; offset: number; region?: string | null } },
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListServerResponse) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServers>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getServers(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Servers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSessions = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { count: number; offset: number; region?: string | null; withServer?: boolean | null } },
  options?: Omit<UseQueryOptions<ListSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListSessionResponse) => void
): UseQueryResult<ListSessionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSessions>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getSessions(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Sessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmServersCount = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<CountServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CountServerResponse) => void
): UseQueryResult<CountServerResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServersCount>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getServersCount()
    callback && callback(data)
    return data
  }

  return useQuery<CountServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.ServersCount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmServersLocal = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListServerResponse) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServersLocal>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getServersLocal()
    callback && callback(data)
    return data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.ServersLocal, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmWorkersGhost = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmWorkersGhost>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getWorkersGhost()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.WorkersGhost, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSessionsCount = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { region?: string | null } },
  options?: Omit<UseQueryOptions<CountSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CountSessionResponse) => void
): UseQueryResult<CountSessionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSessionsCount>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getSessionsCount(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CountSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.SessionsCount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateWorkerZombieMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DeleteZombieRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DeleteZombieRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DeleteZombieRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).createWorkerZombie(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.WorkerZombie],
    mutationFn,
    ...options
  })
}

export const useAdmCreateManualBufferAddMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<AddBufferResponse, AxiosError<ApiError>, ApiArgs & { data: AddBufferRequest }>, 'mutationKey'>,
  callback?: (data: AddBufferResponse) => void
): UseMutationResult<AddBufferResponse, AxiosError<ApiError>, ApiArgs & { data: AddBufferRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AddBufferRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).createManualBufferAdd(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.ManualBufferAdd],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteServer_ByPodNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { podName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { podName: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { podName: string }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteServer_ByPodName(input.podName)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Server_ByPodName],
    mutationFn,
    ...options
  })
}

export const useAdmServer_ByPodName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { podName: string },
  options?: Omit<UseQueryOptions<ServerDetailsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ServerDetailsResponse) => void
): UseQueryResult<ServerDetailsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServer_ByPodName>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getServer_ByPodName(input.podName)
    callback && callback(data)
    return data
  }

  return useQuery<ServerDetailsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.Server_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteServerLocal_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { name: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteServerLocal_ByName(input.name)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.ServerLocal_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteSession_BySessionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { sessionID: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { sessionID: string }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSession_BySessionId(input.sessionID)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Session_BySessionId],
    mutationFn,
    ...options
  })
}

export const useAdmServersCountDetailed = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { region?: string | null } },
  options?: Omit<UseQueryOptions<DetailedCountServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DetailedCountServerResponse) => void
): UseQueryResult<DetailedCountServerResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServersCountDetailed>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getServersCountDetailed(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DetailedCountServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.ServersCountDetailed, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
