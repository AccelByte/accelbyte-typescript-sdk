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
import { GlobalConfigurationAdminApi } from '../GlobalConfigurationAdminApi.js'

import { GlobalConfigurationResponse } from '../../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export enum Key_GlobalConfigurationAdmin {
  GlobalConfiguration = 'GlobalConfigurationAdmin.GlobalConfiguration',
  GlobalConfigurations = 'GlobalConfigurationAdmin.GlobalConfigurations'
}

export const useAdmDeleteGlobalConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await GlobalConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGlobalConfiguration()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GlobalConfigurationAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmGlobalConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GlobalConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GlobalConfigurationResponse) => void
): UseQueryResult<GlobalConfigurationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGlobalConfigurations>[1]) => async () => {
    const data = await GlobalConfigurationAdminApi(sdk, { namespace: input.namespace }).getGlobalConfigurations()
    callback && callback(data)
    return data
  }

  return useQuery<GlobalConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalConfigurationAdmin.GlobalConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateGlobalConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GlobalConfigurationResponse, AxiosError<ApiError>, ApiArgs & { data: PutGlobalConfigurationRequest }>,
    'mutationKey'
  >,
  callback?: (data: GlobalConfigurationResponse) => void
): UseMutationResult<GlobalConfigurationResponse, AxiosError<ApiError>, ApiArgs & { data: PutGlobalConfigurationRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PutGlobalConfigurationRequest }) => {
    const data = await GlobalConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateGlobalConfiguration(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GlobalConfigurationAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}
