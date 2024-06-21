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
import { AdminConfigAdminApi } from '../AdminConfigAdminApi.js'

import { PaginatedGetConfigsResponse } from '../../generated-definitions/PaginatedGetConfigsResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'

export enum Key_AdminConfigAdmin {
  Configs = 'AdminConfigAdmin.Configs',
  Config_ByKey = 'AdminConfigAdmin.Config_ByKey'
}

export const useAdmConfigs = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetConfigsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGetConfigsResponse) => void
): UseQueryResult<PaginatedGetConfigsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigs>[1]) => async () => {
    const data = await AdminConfigAdminApi(sdk, { namespace: input.namespace }).getConfigs(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGetConfigsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminConfigAdmin.Configs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfig_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string; data: UpdateConfigRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string; data: UpdateConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: UpdateConfigRequest }) => {
    const data = await AdminConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfig_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConfigAdmin.Config_ByKey],
    mutationFn,
    ...options
  })
}
