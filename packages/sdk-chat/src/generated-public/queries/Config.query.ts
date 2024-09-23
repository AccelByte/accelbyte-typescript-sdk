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
import { ConfigApi } from '../ConfigApi.js'

import { PublicConfigResponse } from '../../generated-definitions/PublicConfigResponse.js'

export enum Key_Config {
  Config_ByNamespace = 'Chat.Config.Config_ByNamespace'
}

/**
 * Get chat config of a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Config.Config_ByNamespace, input]
 * }
 * ```
 */
export const useConfigApi_GetConfig_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PublicConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicConfigResponse>) => void
): UseQueryResult<PublicConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigApi_GetConfig_ByNamespace>[1]) => async () => {
    const response = await ConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByNamespace()
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_Config.Config_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
