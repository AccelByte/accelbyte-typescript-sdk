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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DsmcDefaultConfigurationAdminApi } from '../DsmcDefaultConfigurationAdminApi.js'

import { DefaultDsmcConfig } from '../../generated-definitions/DefaultDsmcConfig.js'

export enum Key_DsmcDefaultConfigurationAdmin {
  DsconfigsDefault = 'Session.DsmcDefaultConfigurationAdmin.DsconfigsDefault'
}

/**
 * Get dsmc default configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DsmcDefaultConfigurationAdmin.DsconfigsDefault, input]
 * }
 * ```
 */
export const useDsmcDefaultConfigurationAdminApi_GetDsconfigsDefault = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DefaultDsmcConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DefaultDsmcConfig>) => void
): UseQueryResult<DefaultDsmcConfig, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDsmcDefaultConfigurationAdminApi_GetDsconfigsDefault>[1]) => async () => {
    const response = await DsmcDefaultConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDsconfigsDefault()
    callback && callback(response)
    return response.data
  }

  return useQuery<DefaultDsmcConfig, AxiosError<ApiError>>({
    queryKey: [Key_DsmcDefaultConfigurationAdmin.DsconfigsDefault, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
