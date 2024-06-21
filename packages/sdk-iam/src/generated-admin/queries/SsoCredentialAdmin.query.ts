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
import { SsoCredentialAdminApi } from '../SsoCredentialAdminApi.js'

import { SsoPlatformCredentialRequest } from '../../generated-definitions/SsoPlatformCredentialRequest.js'
import { SsoPlatformCredentialResponse } from '../../generated-definitions/SsoPlatformCredentialResponse.js'
import { SsoPlatformCredentialResponseArray } from '../../generated-definitions/SsoPlatformCredentialResponseArray.js'

export enum Key_SsoCredentialAdmin {
  PlatformsSso = 'SsoCredentialAdmin.PlatformsSso',
  Sso_ByPlatformId = 'SsoCredentialAdmin.Sso_ByPlatformId'
}

export const useAdmPlatformsSso = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<SsoPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SsoPlatformCredentialResponseArray) => void
): UseQueryResult<SsoPlatformCredentialResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformsSso>[1]) => async () => {
    const data = await SsoCredentialAdminApi(sdk, { namespace: input.namespace }).getPlatformsSso(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<SsoPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_SsoCredentialAdmin.PlatformsSso, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteSso_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { platformId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string }) => {
    const data = await SsoCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSso_ByPlatformId(
      input.platformId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmSso_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platformId: string },
  options?: Omit<UseQueryOptions<SsoPlatformCredentialResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SsoPlatformCredentialResponse) => void
): UseQueryResult<SsoPlatformCredentialResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSso_ByPlatformId>[1]) => async () => {
    const data = await SsoCredentialAdminApi(sdk, { namespace: input.namespace }).getSso_ByPlatformId(input.platformId)
    callback && callback(data)
    return data
  }

  return useQuery<SsoPlatformCredentialResponse, AxiosError<ApiError>>({
    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchSso_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      SsoPlatformCredentialResponse,
      AxiosError<ApiError>,
      ApiArgs & { platformId: string; data: SsoPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SsoPlatformCredentialResponse) => void
): UseMutationResult<
  SsoPlatformCredentialResponse,
  AxiosError<ApiError>,
  ApiArgs & { platformId: string; data: SsoPlatformCredentialRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string; data: SsoPlatformCredentialRequest }) => {
    const data = await SsoCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchSso_ByPlatformId(
      input.platformId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSso_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      SsoPlatformCredentialResponse,
      AxiosError<ApiError>,
      ApiArgs & { platformId: string; data: SsoPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SsoPlatformCredentialResponse) => void
): UseMutationResult<
  SsoPlatformCredentialResponse,
  AxiosError<ApiError>,
  ApiArgs & { platformId: string; data: SsoPlatformCredentialRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { platformId: string; data: SsoPlatformCredentialRequest }) => {
    const data = await SsoCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSso_ByPlatformId(
      input.platformId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId],
    mutationFn,
    ...options
  })
}
