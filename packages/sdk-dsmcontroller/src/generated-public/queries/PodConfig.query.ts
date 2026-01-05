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
import { PodConfigApi } from '../PodConfigApi.js'

import { CreatePodConfigRequest } from '../../generated-definitions/CreatePodConfigRequest.js'
import { ListPodConfigResponse } from '../../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../../generated-definitions/PodConfigRecord.js'

export enum Key_PodConfig {
  ConfigsPods = 'Dsmcontroller.PodConfig.ConfigsPods',
  ConfigPod_ByName = 'Dsmcontroller.PodConfig.ConfigPod_ByName'
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfig.ConfigsPods, input]
 * }
 * ```
 */
export const usePodConfigApi_GetConfigsPods = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number } },
  options?: Omit<UseQueryOptions<ListPodConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPodConfigResponse>) => void
): UseQueryResult<ListPodConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePodConfigApi_GetConfigsPods>[1]) => async () => {
    const response = await PodConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigsPods(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPodConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_PodConfig.ConfigsPods, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfig.ConfigPod_ByName, input]
 * }
 * ```
 */
export const usePodConfigApi_DeleteConfigPod_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string }) => {
    const response = await PodConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfigPod_ByName(
      input.name
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PodConfig.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfig.ConfigPod_ByName, input]
 * }
 * ```
 */
export const usePodConfigApi_CreateConfigPod_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PodConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: CreatePodConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PodConfigRecord) => void
): UseMutationResult<PodConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: CreatePodConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: CreatePodConfigRequest }) => {
    const response = await PodConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfigPod_ByName(
      input.name,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PodConfig.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}
