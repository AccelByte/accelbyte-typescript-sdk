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

import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'

export enum Key_Config {
  Config_ByConfigKey_v3 = 'Iam.Config.Config_ByConfigKey_v3'
}

/**
 * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. Note: this endpoint does not need any authorization. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled
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
