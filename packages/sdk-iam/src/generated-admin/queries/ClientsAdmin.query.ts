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
import { ClientsAdminApi } from '../ClientsAdminApi.js'

import { ClientCreationV3Request } from '../../generated-definitions/ClientCreationV3Request.js'
import { ClientPermissionsV3 } from '../../generated-definitions/ClientPermissionsV3.js'
import { ClientUpdateV3Request } from '../../generated-definitions/ClientUpdateV3Request.js'
import { ClientV3Response } from '../../generated-definitions/ClientV3Response.js'
import { ClientsUpdateRequestV3 } from '../../generated-definitions/ClientsUpdateRequestV3.js'
import { ClientsV3Response } from '../../generated-definitions/ClientsV3Response.js'
import { V3ClientUpdateSecretRequest } from '../../generated-definitions/V3ClientUpdateSecretRequest.js'

export enum Key_ClientsAdmin {
  Clients = 'ClientsAdmin.Clients',
  Client = 'ClientsAdmin.Client',
  Secret_ByClientId = 'ClientsAdmin.Secret_ByClientId',
  Client_ByClientId = 'ClientsAdmin.Client_ByClientId',
  Permission_ByClientId = 'ClientsAdmin.Permission_ByClientId',
  Permission_ByClientId_ByResource_ByAction = 'ClientsAdmin.Permission_ByClientId_ByResource_ByAction'
}

export const useAdmClients = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      clientId?: string | null
      clientName?: string | null
      clientType?: string | null
      limit?: number
      offset?: number
      skipLoginQueue?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<ClientsV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ClientsV3Response) => void
): UseQueryResult<ClientsV3Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmClients>[1]) => async () => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace }).getClients(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ClientsV3Response, AxiosError<ApiError>>({
    queryKey: [Key_ClientsAdmin.Clients, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateClientMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ClientV3Response, AxiosError<ApiError>, ApiArgs & { data: ClientCreationV3Request }>, 'mutationKey'>,
  callback?: (data: ClientV3Response) => void
): UseMutationResult<ClientV3Response, AxiosError<ApiError>, ApiArgs & { data: ClientCreationV3Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ClientCreationV3Request }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createClient(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateClientMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: ClientsUpdateRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: ClientsUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ClientsUpdateRequestV3 }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateClient(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateSecret_ByClientIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; data: V3ClientUpdateSecretRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; data: V3ClientUpdateSecretRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { clientId: string; data: V3ClientUpdateSecretRequest }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateSecret_ByClientId(
      input.clientId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Secret_ByClientId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteClient_ByClientIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { clientId: string }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteClient_ByClientId(input.clientId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_ByClientId],
    mutationFn,
    ...options
  })
}

export const useAdmClient_ByClientId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { clientId: string },
  options?: Omit<UseQueryOptions<ClientV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ClientV3Response) => void
): UseQueryResult<ClientV3Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmClient_ByClientId>[1]) => async () => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace }).getClient_ByClientId(input.clientId)
    callback && callback(data)
    return data
  }

  return useQuery<ClientV3Response, AxiosError<ApiError>>({
    queryKey: [Key_ClientsAdmin.Client_ByClientId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchClient_ByClientIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ClientV3Response, AxiosError<ApiError>, ApiArgs & { clientId: string; data: ClientUpdateV3Request }>,
    'mutationKey'
  >,
  callback?: (data: ClientV3Response) => void
): UseMutationResult<ClientV3Response, AxiosError<ApiError>, ApiArgs & { clientId: string; data: ClientUpdateV3Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { clientId: string; data: ClientUpdateV3Request }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchClient_ByClientId(
      input.clientId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_ByClientId],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePermission_ByClientIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; data: ClientPermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; data: ClientPermissionsV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { clientId: string; data: ClientPermissionsV3 }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPermission_ByClientId(
      input.clientId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePermission_ByClientIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; data: ClientPermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; data: ClientPermissionsV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { clientId: string; data: ClientPermissionsV3 }) => {
    const data = await ClientsAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePermission_ByClientId(
      input.clientId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePermission_ByClientId_ByResource_ByActionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { clientId: string; resource: string; action: number }> => {
  //
  const mutationFn = async (input: ApiArgs & { clientId: string; resource: string; action: number }) => {
    const data = await ClientsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deletePermission_ByClientId_ByResource_ByAction(input.clientId, input.resource, input.action)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
