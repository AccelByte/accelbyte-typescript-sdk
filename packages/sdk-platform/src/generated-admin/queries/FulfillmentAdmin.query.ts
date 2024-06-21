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
import { FulfillmentAdminApi } from '../FulfillmentAdminApi.js'

import { FulfillCodeRequest } from '../../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentHistoryPagingSlicedResult } from '../../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentRequest } from '../../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../../generated-definitions/FulfillmentResult.js'
import { PreCheckFulfillmentRequest } from '../../generated-definitions/PreCheckFulfillmentRequest.js'
import { RewardsRequest } from '../../generated-definitions/RewardsRequest.js'

export enum Key_FulfillmentAdmin {
  FulfillmentHistory = 'FulfillmentAdmin.FulfillmentHistory',
  Fulfillment_ByUserId = 'FulfillmentAdmin.Fulfillment_ByUserId',
  FulfillmentCode_ByUserId = 'FulfillmentAdmin.FulfillmentCode_ByUserId',
  FulfillmentReward_ByUserId = 'FulfillmentAdmin.FulfillmentReward_ByUserId',
  FulfillmentPreCheck_ByUserId = 'FulfillmentAdmin.FulfillmentPreCheck_ByUserId',
  FulfillmentReward_ByUserId_ByNS = 'FulfillmentAdmin.FulfillmentReward_ByUserId_ByNS'
}

export const useAdmFulfillmentHistory = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; status?: 'FAIL' | 'SUCCESS'; userId?: string | null } },
  options?: Omit<UseQueryOptions<FulfillmentHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FulfillmentHistoryPagingSlicedResult) => void
): UseQueryResult<FulfillmentHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmFulfillmentHistory>[1]) => async () => {
    const data = await FulfillmentAdminApi(sdk, { namespace: input.namespace }).getFulfillmentHistory(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FulfillmentHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentAdmin.FulfillmentHistory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateFulfillment_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: FulfillmentRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentResult) => void
): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: FulfillmentRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: FulfillmentRequest }) => {
    const data = await FulfillmentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFulfillment_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.Fulfillment_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFulfillmentCode_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: FulfillCodeRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentResult) => void
): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: FulfillCodeRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: FulfillCodeRequest }) => {
    const data = await FulfillmentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFulfillmentCode_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentCode_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFulfillmentReward_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: RewardsRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: RewardsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: RewardsRequest }) => {
    const data = await FulfillmentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFulfillmentReward_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentReward_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFulfillmentPreCheck_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentItemArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: PreCheckFulfillmentRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentItemArray) => void
): UseMutationResult<FulfillmentItemArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: PreCheckFulfillmentRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: PreCheckFulfillmentRequest }) => {
    const data = await FulfillmentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFulfillmentPreCheck_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentPreCheck_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFulfillmentReward_ByUserId_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: RewardsRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentResult) => void
): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: RewardsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: RewardsRequest }) => {
    const data = await FulfillmentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFulfillmentReward_ByUserId_ByNS(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentReward_ByUserId_ByNS],
    mutationFn,
    ...options
  })
}
