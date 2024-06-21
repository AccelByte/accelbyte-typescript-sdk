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
import { RevocationAdminApi } from '../RevocationAdminApi.js'

import { RevocationConfigInfo } from '../../generated-definitions/RevocationConfigInfo.js'
import { RevocationConfigUpdate } from '../../generated-definitions/RevocationConfigUpdate.js'
import { RevocationHistoryPagingSlicedResult } from '../../generated-definitions/RevocationHistoryPagingSlicedResult.js'
import { RevocationRequest } from '../../generated-definitions/RevocationRequest.js'
import { RevocationResult } from '../../generated-definitions/RevocationResult.js'

export enum Key_RevocationAdmin {
  RevocationConfig = 'RevocationAdmin.RevocationConfig',
  RevocationHistory = 'RevocationAdmin.RevocationHistory',
  Revocation_ByUserId = 'RevocationAdmin.Revocation_ByUserId'
}

export const useAdmDeleteRevocationConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await RevocationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRevocationConfig()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RevocationAdmin.RevocationConfig],
    mutationFn,
    ...options
  })
}

export const useAdmRevocationConfig = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<RevocationConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RevocationConfigInfo) => void
): UseQueryResult<RevocationConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRevocationConfig>[1]) => async () => {
    const data = await RevocationAdminApi(sdk, { namespace: input.namespace }).getRevocationConfig()
    callback && callback(data)
    return data
  }

  return useQuery<RevocationConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_RevocationAdmin.RevocationConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateRevocationConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RevocationConfigInfo, AxiosError<ApiError>, ApiArgs & { data: RevocationConfigUpdate }>, 'mutationKey'>,
  callback?: (data: RevocationConfigInfo) => void
): UseMutationResult<RevocationConfigInfo, AxiosError<ApiError>, ApiArgs & { data: RevocationConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: RevocationConfigUpdate }) => {
    const data = await RevocationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRevocationConfig(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RevocationAdmin.RevocationConfig],
    mutationFn,
    ...options
  })
}

export const useAdmRevocationHistory = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      source?: 'DLC' | 'IAP' | 'ORDER' | 'OTHER'
      startTime?: string | null
      status?: 'FAIL' | 'SUCCESS'
      transactionId?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<RevocationHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RevocationHistoryPagingSlicedResult) => void
): UseQueryResult<RevocationHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRevocationHistory>[1]) => async () => {
    const data = await RevocationAdminApi(sdk, { namespace: input.namespace }).getRevocationHistory(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RevocationHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_RevocationAdmin.RevocationHistory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateRevocation_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RevocationResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: RevocationRequest }>,
    'mutationKey'
  >,
  callback?: (data: RevocationResult) => void
): UseMutationResult<RevocationResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: RevocationRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: RevocationRequest }) => {
    const data = await RevocationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRevocation_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RevocationAdmin.Revocation_ByUserId],
    mutationFn,
    ...options
  })
}
