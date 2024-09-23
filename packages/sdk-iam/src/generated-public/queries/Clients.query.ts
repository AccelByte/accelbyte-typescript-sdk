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
import { ClientsApi } from '../ClientsApi.js'

import { ClientCreateRequest } from '../../generated-definitions/ClientCreateRequest.js'
import { ClientCreationResponse } from '../../generated-definitions/ClientCreationResponse.js'
import { ClientPermissions } from '../../generated-definitions/ClientPermissions.js'
import { ClientResponse } from '../../generated-definitions/ClientResponse.js'
import { ClientResponseArray } from '../../generated-definitions/ClientResponseArray.js'
import { ClientUpdateRequest } from '../../generated-definitions/ClientUpdateRequest.js'
import { ClientUpdateSecretRequest } from '../../generated-definitions/ClientUpdateSecretRequest.js'

export enum Key_Clients {
  Clients = 'Iam.Clients.Clients',
  Client = 'Iam.Clients.Client',
  Client_ByClientId = 'Iam.Clients.Client_ByClientId',
  Secret_ByClientId = 'Iam.Clients.Secret_ByClientId',
  Clients_ByNS = 'Iam.Clients.Clients_ByNS',
  Client_ByNS = 'Iam.Clients.Client_ByNS',
  Clientpermission_ByClientId = 'Iam.Clients.Clientpermission_ByClientId',
  Client_ByClientId_ByNS = 'Iam.Clients.Client_ByClientId_ByNS',
  Clientpermission_ByClientId_ByResource_ByAction = 'Iam.Clients.Clientpermission_ByClientId_ByResource_ByAction'
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Clients, input]
 * }
 * ```
 */
export const useClientsApi_GetClients = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ClientResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClientResponseArray>) => void
): UseQueryResult<ClientResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClientsApi_GetClients>[1]) => async () => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getClients()
    callback && callback(response)
    return response.data
  }

  return useQuery<ClientResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Clients.Clients, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Client, input]
 * }
 * ```
 */
export const useClientsApi_CreateClientMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClientCreationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: ClientCreationResponse) => void
): UseMutationResult<ClientCreationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClientCreateRequest }) => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createClient(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Client],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Client_ByClientId, input]
 * }
 * ```
 */
export const useClientsApi_DeleteClient_ByClientIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string }) => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteClient_ByClientId(
      input.clientId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Client_ByClientId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Client_ByClientId, input]
 * }
 * ```
 */
export const useClientsApi_GetClient_ByClientId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { clientId: string },
  options?: Omit<UseQueryOptions<ClientResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClientResponse>) => void
): UseQueryResult<ClientResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClientsApi_GetClient_ByClientId>[1]) => async () => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getClient_ByClientId(
      input.clientId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ClientResponse, AxiosError<ApiError>>({
    queryKey: [Key_Clients.Client_ByClientId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Client_ByClientId, input]
 * }
 * ```
 */
export const useClientsApi_UpdateClient_ByClientIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClientResponse, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: ClientResponse) => void
): UseMutationResult<ClientResponse, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: ClientUpdateRequest }) => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateClient_ByClientId(
      input.clientId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Client_ByClientId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/{clientId}/secret [PUT]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Secret_ByClientId, input]
 * }
 * ```
 */
export const useClientsApi_UpdateSecret_ByClientIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientUpdateSecretRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientUpdateSecretRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: ClientUpdateSecretRequest }) => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateSecret_ByClientId(
      input.clientId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Secret_ByClientId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Clients_ByNS, input]
 * }
 * ```
 */
export const useClientsApi_GetClients_ByNS = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ClientResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClientResponseArray>) => void
): UseQueryResult<ClientResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClientsApi_GetClients_ByNS>[1]) => async () => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getClients_ByNS()
    callback && callback(response)
    return response.data
  }

  return useQuery<ClientResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Clients.Clients_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/v3/admin/namespaces/{namespace}/clients [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Client_ByNS, input]
 * }
 * ```
 */
export const useClientsApi_CreateClient_ByNSMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClientCreationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: ClientCreationResponse) => void
): UseMutationResult<ClientCreationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClientCreateRequest }) => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createClient_ByNS(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Client_ByNS],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [PUT]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Clientpermission_ByClientId, input]
 * }
 * ```
 */
export const useClientsApi_UpdateClientpermission_ByClientIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientPermissions }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientPermissions }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: ClientPermissions }) => {
    const response = await ClientsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClientpermission_ByClientId(input.clientId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Clientpermission_ByClientId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Client_ByClientId_ByNS, input]
 * }
 * ```
 */
export const useClientsApi_DeleteClient_ByClientId_ByNSMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string }) => {
    const response = await ClientsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteClient_ByClientId_ByNS(
      input.clientId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Client_ByClientId_ByNS],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action} [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Clientpermission_ByClientId_ByResource_ByAction, input]
 * }
 * ```
 */
export const useClientsApi_DeleteClientpermission_ByClientId_ByResource_ByActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; resource: string; action: number }) => {
    const response = await ClientsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteClientpermission_ByClientId_ByResource_ByAction(input.clientId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Clientpermission_ByClientId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Clients.Clientpermission_ByClientId_ByResource_ByAction, input]
 * }
 * ```
 */
export const useClientsApi_UpdateClientpermission_ByClientId_ByResource_ByActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; resource: string; action: number }) => {
    const response = await ClientsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClientpermission_ByClientId_ByResource_ByAction(input.clientId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Clients.Clientpermission_ByClientId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
