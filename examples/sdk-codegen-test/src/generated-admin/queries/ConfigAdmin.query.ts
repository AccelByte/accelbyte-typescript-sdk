/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'

export const Key_ConfigAdmin = {
  Config_ByConfigKey_v3: 'Iam.ConfigAdmin.Config_ByConfigKey_v3'
} as const

/**
 * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByConfigKey_v3, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfig_ByConfigKey_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigValueResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigValueResponseV3>) => void
): UseQueryResult<ConfigValueResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfig_ByConfigKey_v3>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByConfigKey_v3(
      input.configKey
    )
    callback?.(response)
    return response.data
  }

  return useQuery<ConfigValueResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByConfigKey_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
