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
import { PlatformAccountClosureClientAdminApi } from '../PlatformAccountClosureClientAdminApi.js'

import { PlatformAccountClosureClientRequest } from '../../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../../generated-definitions/PlatformAccountClosureClientResponse.js'

export enum Key_PlatformAccountClosureClientAdmin {
  ClosureClient_ByPlatform = 'PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform'
}

export const useAdmDeleteClosureClient_ByPlatformMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { platform: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { platform: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { platform: string }) => {
    const data = await PlatformAccountClosureClientAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteClosureClient_ByPlatform(input.platform)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform],
    mutationFn,
    ...options
  })
}

export const useAdmClosureClient_ByPlatform = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platform: string },
  options?: Omit<UseQueryOptions<PlatformAccountClosureClientResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlatformAccountClosureClientResponse) => void
): UseQueryResult<PlatformAccountClosureClientResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmClosureClient_ByPlatform>[1]) => async () => {
    const data = await PlatformAccountClosureClientAdminApi(sdk, { namespace: input.namespace }).getClosureClient_ByPlatform(input.platform)
    callback && callback(data)
    return data
  }

  return useQuery<PlatformAccountClosureClientResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateClosureClient_ByPlatformMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { platform: string; data: PlatformAccountClosureClientRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { platform: string; data: PlatformAccountClosureClientRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { platform: string; data: PlatformAccountClosureClientRequest }) => {
    const data = await PlatformAccountClosureClientAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createClosureClient_ByPlatform(input.platform, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform],
    mutationFn,
    ...options
  })
}
