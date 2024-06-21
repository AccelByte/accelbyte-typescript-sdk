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
import { PluginConfigAdminApi } from '../PluginConfigAdminApi.js'

import { PluginRequest } from '../../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../../generated-definitions/PluginResponse.js'

export enum Key_PluginConfigAdmin {
  Plugin = 'PluginConfigAdmin.Plugin',
  Plugins = 'PluginConfigAdmin.Plugins'
}

export const useAdmDeletePluginMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await PluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePlugin()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PluginConfigAdmin.Plugin],
    mutationFn,
    ...options
  })
}

export const useAdmPlugins = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PluginResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PluginResponse) => void
): UseQueryResult<PluginResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPlugins>[1]) => async () => {
    const data = await PluginConfigAdminApi(sdk, { namespace: input.namespace }).getPlugins()
    callback && callback(data)
    return data
  }

  return useQuery<PluginResponse, AxiosError<ApiError>>({
    queryKey: [Key_PluginConfigAdmin.Plugins, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchPluginMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<PluginResponse, AxiosError<ApiError>, ApiArgs & { data: PluginRequest }>, 'mutationKey'>,
  callback?: (data: PluginResponse) => void
): UseMutationResult<PluginResponse, AxiosError<ApiError>, ApiArgs & { data: PluginRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PluginRequest }) => {
    const data = await PluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchPlugin(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PluginConfigAdmin.Plugin],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePluginMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<PluginResponse, AxiosError<ApiError>, ApiArgs & { data: PluginRequest }>, 'mutationKey'>,
  callback?: (data: PluginResponse) => void
): UseMutationResult<PluginResponse, AxiosError<ApiError>, ApiArgs & { data: PluginRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PluginRequest }) => {
    const data = await PluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPlugin(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PluginConfigAdmin.Plugin],
    mutationFn,
    ...options
  })
}
