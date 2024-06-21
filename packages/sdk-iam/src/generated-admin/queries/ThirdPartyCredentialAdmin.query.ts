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
import { ThirdPartyCredentialAdminApi } from '../ThirdPartyCredentialAdminApi.js'

import { CheckAvailabilityResponse } from '../../generated-definitions/CheckAvailabilityResponse.js'
import { PlatformDomainDeleteRequest } from '../../generated-definitions/PlatformDomainDeleteRequest.js'
import { PlatformDomainResponse } from '../../generated-definitions/PlatformDomainResponse.js'
import { PlatformDomainUpdateRequest } from '../../generated-definitions/PlatformDomainUpdateRequest.js'
import { ThirdPartyLoginPlatformCredentialRequest } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialRequest.js'
import { ThirdPartyLoginPlatformCredentialResponse } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponse.js'
import { ThirdPartyLoginPlatformCredentialResponseArray } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponseArray.js'

export enum Key_ThirdPartyCredentialAdmin {
  Availability_ByPlatformId = 'ThirdPartyCredentialAdmin.Availability_ByPlatformId',
  PlatformsAllClients = 'ThirdPartyCredentialAdmin.PlatformsAllClients',
  PlatformsAllClientsActive = 'ThirdPartyCredentialAdmin.PlatformsAllClientsActive',
  Client_ByPlatformId = 'ThirdPartyCredentialAdmin.Client_ByPlatformId',
  Clients_ByPlatformId = 'ThirdPartyCredentialAdmin.Clients_ByPlatformId',
  ClientDomain_ByPlatformId = 'ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId'
}

export const useAdmAvailability_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platformId: string },
  options?: Omit<UseQueryOptions<CheckAvailabilityResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CheckAvailabilityResponse) => void
): UseQueryResult<CheckAvailabilityResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAvailability_ByPlatformId>[1]) => async () => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace }).getAvailability_ByPlatformId(input.platformId)
    callback && callback(data)
    return data
  }

  return useQuery<CheckAvailabilityResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.Availability_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPlatformsAllClients = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponseArray) => void
): UseQueryResult<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformsAllClients>[1]) => async () => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace }).getPlatformsAllClients()
    callback && callback(data)
    return data
  }

  return useQuery<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClients, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPlatformsAllClientsActive = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponseArray) => void
): UseQueryResult<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformsAllClientsActive>[1]) => async () => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace }).getPlatformsAllClientsActive()
    callback && callback(data)
    return data
  }

  return useQuery<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClientsActive, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteClient_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { platformId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string }) => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteClient_ByPlatformId(
      input.platformId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmClients_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platformId: string },
  options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
): UseQueryResult<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmClients_ByPlatformId>[1]) => async () => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace }).getClients_ByPlatformId(input.platformId)
    callback && callback(data)
    return data
  }

  return useQuery<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.Clients_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchClient_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ThirdPartyLoginPlatformCredentialResponse,
      AxiosError<ApiError>,
      ApiArgs & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
): UseMutationResult<
  ThirdPartyLoginPlatformCredentialResponse,
  AxiosError<ApiError>,
  ApiArgs & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }) => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchClient_ByPlatformId(
      input.platformId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateClient_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ThirdPartyLoginPlatformCredentialResponse,
      AxiosError<ApiError>,
      ApiArgs & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
): UseMutationResult<
  ThirdPartyLoginPlatformCredentialResponse,
  AxiosError<ApiError>,
  ApiArgs & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }) => {
    const data = await ThirdPartyCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).createClient_ByPlatformId(
      input.platformId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteClientDomain_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { platformId: string; data: PlatformDomainDeleteRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { platformId: string; data: PlatformDomainDeleteRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string; data: PlatformDomainDeleteRequest }) => {
    const data = await ThirdPartyCredentialAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteClientDomain_ByPlatformId(input.platformId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateClientDomain_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlatformDomainResponse, AxiosError<ApiError>, ApiArgs & { platformId: string; data: PlatformDomainUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlatformDomainResponse) => void
): UseMutationResult<PlatformDomainResponse, AxiosError<ApiError>, ApiArgs & { platformId: string; data: PlatformDomainUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string; data: PlatformDomainUpdateRequest }) => {
    const data = await ThirdPartyCredentialAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateClientDomain_ByPlatformId(input.platformId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId],
    mutationFn,
    ...options
  })
}
