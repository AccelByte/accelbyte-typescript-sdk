/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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

import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'
import { InternalConfigResponseV3 } from '../../generated-definitions/InternalConfigResponseV3.js'

export enum Key_Config {
  ConfigPublic_v3 = 'Iam.Config.ConfigPublic_v3',
  Config_ByConfigKey_v3 = 'Iam.Config.Config_ByConfigKey_v3'
}

export const useConfigApi_GetConfigPublic_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<InternalConfigResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InternalConfigResponseV3>) => void
): UseQueryResult<InternalConfigResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigApi_GetConfigPublic_v3>[1]) => async () => {
    const response = await ConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigPublic_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<InternalConfigResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Config.ConfigPublic_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. Note: this endpoint does not need any authorization. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled * verificationCodeType If the key is verificationCodeType, then possible value format will be &#39;{collection}:{N}&#39;; example: &#39;ABCDEFGHI:6&#39;, &#39;ABCDEFGHI1234:8&#39;,&#39;01234567894:7&#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Config.Config_ByConfigKey_v3, input]
 * }
 * ```
 */
export const useConfigApi_GetConfig_ByConfigKey_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigValueResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigValueResponseV3>) => void
): UseQueryResult<ConfigValueResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigApi_GetConfig_ByConfigKey_v3>[1]) => async () => {
    const response = await ConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByConfigKey_v3(
      input.configKey
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigValueResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Config.Config_ByConfigKey_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
