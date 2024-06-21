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
import { AdminConfigurationsAdminApi } from '../AdminConfigurationsAdminApi.js'

import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ReportingLimit } from '../../generated-definitions/ReportingLimit.js'

export enum Key_AdminConfigurationsAdmin {
  Configurations = 'AdminConfigurationsAdmin.Configurations',
  Configuration = 'AdminConfigurationsAdmin.Configuration'
}

export const useAdmConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { category?: 'all' | 'extension' } },
  options?: Omit<UseQueryOptions<ConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigResponse) => void
): UseQueryResult<ConfigResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigurations>[1]) => async () => {
    const data = await AdminConfigurationsAdminApi(sdk, { namespace: input.namespace }).getConfigurations(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminConfigurationsAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ConfigResponse, AxiosError<ApiError>, ApiArgs & { data: ReportingLimit }>, 'mutationKey'>,
  callback?: (data: ConfigResponse) => void
): UseMutationResult<ConfigResponse, AxiosError<ApiError>, ApiArgs & { data: ReportingLimit }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ReportingLimit }) => {
    const data = await AdminConfigurationsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfiguration(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConfigurationsAdmin.Configuration],
    mutationFn,
    ...options
  })
}
