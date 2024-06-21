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
import { AdminAdminApi } from '../AdminAdminApi.js'

import { GlobalConfiguration } from '../../generated-definitions/GlobalConfiguration.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export enum Key_AdminAdmin {
  GlobalConfiguration = 'AdminAdmin.GlobalConfiguration',
  GlobalConfigurations = 'AdminAdmin.GlobalConfigurations'
}

export const useAdmDeleteGlobalConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGlobalConfiguration()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmGlobalConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GlobalConfiguration, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GlobalConfiguration) => void
): UseQueryResult<GlobalConfiguration, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGlobalConfigurations>[1]) => async () => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace }).getGlobalConfigurations()
    callback && callback(data)
    return data
  }

  return useQuery<GlobalConfiguration, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.GlobalConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateGlobalConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GlobalConfiguration, AxiosError<ApiError>, ApiArgs & { data: PutGlobalConfigurationRequest }>,
    'mutationKey'
  >,
  callback?: (data: GlobalConfiguration) => void
): UseMutationResult<GlobalConfiguration, AxiosError<ApiError>, ApiArgs & { data: PutGlobalConfigurationRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PutGlobalConfigurationRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateGlobalConfiguration(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}
