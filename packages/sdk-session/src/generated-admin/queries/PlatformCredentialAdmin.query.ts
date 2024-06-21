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
import { PlatformCredentialAdminApi } from '../PlatformCredentialAdminApi.js'

import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../../generated-definitions/PutPlatformCredentialsRequest.js'

export enum Key_PlatformCredentialAdmin {
  PlatformCredential = 'PlatformCredentialAdmin.PlatformCredential',
  PlatformCredentials = 'PlatformCredentialAdmin.PlatformCredentials'
}

export const useAdmDeletePlatformCredentialMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await PlatformCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePlatformCredential()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlatformCredentialAdmin.PlatformCredential],
    mutationFn,
    ...options
  })
}

export const useAdmPlatformCredentials = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PlatformCredentials, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlatformCredentials) => void
): UseQueryResult<PlatformCredentials, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlatformCredentials>[1]) => async () => {
    const data = await PlatformCredentialAdminApi(sdk, { namespace: input.namespace }).getPlatformCredentials()
    callback && callback(data)
    return data
  }

  return useQuery<PlatformCredentials, AxiosError<ApiError>>({
    queryKey: [Key_PlatformCredentialAdmin.PlatformCredentials, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdatePlatformCredentialMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlatformCredentials, AxiosError<ApiError>, ApiArgs & { data: PutPlatformCredentialsRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlatformCredentials) => void
): UseMutationResult<PlatformCredentials, AxiosError<ApiError>, ApiArgs & { data: PutPlatformCredentialsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PutPlatformCredentialsRequest }) => {
    const data = await PlatformCredentialAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePlatformCredential(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlatformCredentialAdmin.PlatformCredential],
    mutationFn,
    ...options
  })
}
