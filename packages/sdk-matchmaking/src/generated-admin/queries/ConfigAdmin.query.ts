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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { Configuration } from '../../generated-definitions/Configuration.js'

export enum Key_ConfigAdmin {
  ConfigLog = 'ConfigAdmin.ConfigLog'
}

export const useAdmConfigLog = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<Configuration, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Configuration) => void
): UseQueryResult<Configuration, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigLog>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigLog()
    callback && callback(data)
    return data
  }

  return useQuery<Configuration, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfigLogMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<Configuration, AxiosError<ApiError>, ApiArgs & { data: Configuration }>, 'mutationKey'>,
  callback?: (data: Configuration) => void
): UseMutationResult<Configuration, AxiosError<ApiError>, ApiArgs & { data: Configuration }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: Configuration }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfigLog(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigLog],
    mutationFn,
    ...options
  })
}
