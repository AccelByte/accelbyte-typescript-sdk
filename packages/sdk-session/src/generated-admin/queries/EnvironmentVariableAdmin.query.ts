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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { EnvironmentVariableAdminApi } from '../EnvironmentVariableAdminApi.js'

import { EnvironmentVariableListResponse } from '../../generated-definitions/EnvironmentVariableListResponse.js'

export enum Key_EnvironmentVariableAdmin {
  EnvironmentVariables = 'EnvironmentVariableAdmin.EnvironmentVariables'
}

export const useAdmEnvironmentVariables = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<EnvironmentVariableListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EnvironmentVariableListResponse) => void
): UseQueryResult<EnvironmentVariableListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEnvironmentVariables>[1]) => async () => {
    const data = await EnvironmentVariableAdminApi(sdk, { namespace: input.namespace }).getEnvironmentVariables()
    callback && callback(data)
    return data
  }

  return useQuery<EnvironmentVariableListResponse, AxiosError<ApiError>>({
    queryKey: [Key_EnvironmentVariableAdmin.EnvironmentVariables, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
