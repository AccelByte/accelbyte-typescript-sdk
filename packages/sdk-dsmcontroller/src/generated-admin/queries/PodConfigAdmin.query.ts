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
import { PodConfigAdminApi } from '../PodConfigAdminApi.js'

import { CreatePodConfigRequest } from '../../generated-definitions/CreatePodConfigRequest.js'
import { InstanceSpec } from '../../generated-definitions/InstanceSpec.js'
import { ListPodConfigResponse } from '../../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../../generated-definitions/PodConfigRecord.js'
import { UpdatePodConfigRequest } from '../../generated-definitions/UpdatePodConfigRequest.js'

export enum Key_PodConfigAdmin {
  InstancesSpecLowest = 'Dsmcontroller.PodConfigAdmin.InstancesSpecLowest',
  ConfigsPods = 'Dsmcontroller.PodConfigAdmin.ConfigsPods',
  ConfigPod_ByName = 'Dsmcontroller.PodConfigAdmin.ConfigPod_ByName'
}

/**
 * Required permission: ADMIN:NAMESPACE:*:DSM:CONFIG [READ] Required scope: social This endpoint returns the lowest instance spec, both cpu (in Mhz) and memory (in Mb).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfigAdmin.InstancesSpecLowest, input]
 * }
 * ```
 */
export const usePodConfigAdminApi_GetInstancesSpecLowest = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<InstanceSpec, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InstanceSpec>) => void
): UseQueryResult<InstanceSpec, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePodConfigAdminApi_GetInstancesSpecLowest>[1]) => async () => {
    const response = await PodConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInstancesSpecLowest()
    callback && callback(response)
    return response.data
  }

  return useQuery<InstanceSpec, AxiosError<ApiError>>({
    queryKey: [Key_PodConfigAdmin.InstancesSpecLowest, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfigAdmin.ConfigsPods, input]
 * }
 * ```
 */
export const usePodConfigAdminApi_GetConfigsPods = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number } },
  options?: Omit<UseQueryOptions<ListPodConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPodConfigResponse>) => void
): UseQueryResult<ListPodConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePodConfigAdminApi_GetConfigsPods>[1]) => async () => {
    const response = await PodConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigsPods(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPodConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_PodConfigAdmin.ConfigsPods, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfigAdmin.ConfigPod_ByName, input]
 * }
 * ```
 */
export const usePodConfigAdminApi_DeleteConfigPod_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string }) => {
    const response = await PodConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfigPod_ByName(
      input.name
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PodConfigAdmin.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server pod config in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfigAdmin.ConfigPod_ByName, input]
 * }
 * ```
 */
export const usePodConfigAdminApi_GetConfigPod_ByName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { name: string },
  options?: Omit<UseQueryOptions<PodConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PodConfigRecord>) => void
): UseQueryResult<PodConfigRecord, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePodConfigAdminApi_GetConfigPod_ByName>[1]) => async () => {
    const response = await PodConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigPod_ByName(
      input.name
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PodConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_PodConfigAdmin.ConfigPod_ByName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers pod config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfigAdmin.ConfigPod_ByName, input]
 * }
 * ```
 */
export const usePodConfigAdminApi_PatchConfigPod_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PodConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: UpdatePodConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PodConfigRecord) => void
): UseMutationResult<PodConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: UpdatePodConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: UpdatePodConfigRequest }) => {
    const response = await PodConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfigPod_ByName(
      input.name,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PodConfigAdmin.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PodConfigAdmin.ConfigPod_ByName, input]
 * }
 * ```
 */
export const usePodConfigAdminApi_CreateConfigPod_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PodConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: CreatePodConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PodConfigRecord) => void
): UseMutationResult<PodConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: CreatePodConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: CreatePodConfigRequest }) => {
    const response = await PodConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfigPod_ByName(
      input.name,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PodConfigAdmin.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}
