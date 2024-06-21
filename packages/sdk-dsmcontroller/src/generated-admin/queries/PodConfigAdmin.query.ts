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
import { PodConfigAdminApi } from '../PodConfigAdminApi.js'

import { CreatePodConfigRequest } from '../../generated-definitions/CreatePodConfigRequest.js'
import { InstanceSpec } from '../../generated-definitions/InstanceSpec.js'
import { ListPodConfigResponse } from '../../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../../generated-definitions/PodConfigRecord.js'
import { UpdatePodConfigRequest } from '../../generated-definitions/UpdatePodConfigRequest.js'

export enum Key_PodConfigAdmin {
  InstancesSpecLowest = 'PodConfigAdmin.InstancesSpecLowest',
  ConfigsPods = 'PodConfigAdmin.ConfigsPods',
  ConfigPod_ByName = 'PodConfigAdmin.ConfigPod_ByName'
}

export const useAdmInstancesSpecLowest = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<InstanceSpec, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: InstanceSpec) => void
): UseQueryResult<InstanceSpec, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInstancesSpecLowest>[1]) => async () => {
    const data = await PodConfigAdminApi(sdk, { namespace: input.namespace }).getInstancesSpecLowest()
    callback && callback(data)
    return data
  }

  return useQuery<InstanceSpec, AxiosError<ApiError>>({
    queryKey: [Key_PodConfigAdmin.InstancesSpecLowest, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmConfigsPods = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { count: number; offset: number } },
  options?: Omit<UseQueryOptions<ListPodConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListPodConfigResponse) => void
): UseQueryResult<ListPodConfigResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigsPods>[1]) => async () => {
    const data = await PodConfigAdminApi(sdk, { namespace: input.namespace }).getConfigsPods(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListPodConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_PodConfigAdmin.ConfigsPods, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteConfigPod_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { name: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string }) => {
    const data = await PodConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteConfigPod_ByName(input.name)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PodConfigAdmin.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmConfigPod_ByName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { name: string },
  options?: Omit<UseQueryOptions<PodConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PodConfigRecord) => void
): UseQueryResult<PodConfigRecord, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigPod_ByName>[1]) => async () => {
    const data = await PodConfigAdminApi(sdk, { namespace: input.namespace }).getConfigPod_ByName(input.name)
    callback && callback(data)
    return data
  }

  return useQuery<PodConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_PodConfigAdmin.ConfigPod_ByName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfigPod_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PodConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: UpdatePodConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PodConfigRecord) => void
): UseMutationResult<PodConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: UpdatePodConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string; data: UpdatePodConfigRequest }) => {
    const data = await PodConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfigPod_ByName(
      input.name,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PodConfigAdmin.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmCreateConfigPod_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PodConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: CreatePodConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PodConfigRecord) => void
): UseMutationResult<PodConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: CreatePodConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string; data: CreatePodConfigRequest }) => {
    const data = await PodConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfigPod_ByName(
      input.name,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PodConfigAdmin.ConfigPod_ByName],
    mutationFn,
    ...options
  })
}
