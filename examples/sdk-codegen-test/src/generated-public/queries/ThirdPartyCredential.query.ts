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
import { ThirdPartyCredentialApi } from '../ThirdPartyCredentialApi.js'

import { PublicThirdPartyPlatformInfoArray } from '../../generated-definitions/PublicThirdPartyPlatformInfoArray.js'

export const Key_ThirdPartyCredential = {
  PlatformsClientsOidc_v3: 'Iam.ThirdPartyCredential.PlatformsClientsOidc_v3',
  PlatformsClientsActive_v3: 'Iam.ThirdPartyCredential.PlatformsClientsActive_v3'
} as const

/**
 * This is the Public API to Get All Active OIDC Platform Credential By Client ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredential.PlatformsClientsOidc_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialApi_GetPlatformsClientsOidc_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { clientId: string | null } },
  options?: Omit<UseQueryOptions<PublicThirdPartyPlatformInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicThirdPartyPlatformInfoArray>) => void
): UseQueryResult<PublicThirdPartyPlatformInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyCredentialApi_GetPlatformsClientsOidc_v3>[1]) => async () => {
    const response = await ThirdPartyCredentialApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPlatformsClientsOidc_v3(input.queryParams)
    callback?.(response)
    return response.data
  }

  return useQuery<PublicThirdPartyPlatformInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredential.PlatformsClientsOidc_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the Public API to Get All Active 3rd Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredential.PlatformsClientsActive_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialApi_GetPlatformsClientsActive_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PublicThirdPartyPlatformInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicThirdPartyPlatformInfoArray>) => void
): UseQueryResult<PublicThirdPartyPlatformInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyCredentialApi_GetPlatformsClientsActive_v3>[1]) => async () => {
    const response = await ThirdPartyCredentialApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPlatformsClientsActive_v3()
    callback?.(response)
    return response.data
  }

  return useQuery<PublicThirdPartyPlatformInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredential.PlatformsClientsActive_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
