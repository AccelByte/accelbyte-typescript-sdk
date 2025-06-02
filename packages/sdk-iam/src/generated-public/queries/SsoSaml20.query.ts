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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { SsoSaml20Api } from '../SsoSaml20Api.js'

export enum Key_SsoSaml20 {
  AuthenticateSamlSso_ByPlatformId_v3 = 'Iam.SsoSaml20.AuthenticateSamlSso_ByPlatformId_v3'
}

/**
 * This endpoint authenticates user platform for SAML protocol. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. ## Supported platforms: - **azure** Microsoft login page will redirects to this endpoint after login success as previously defined on authentication request SAML
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoSaml20.AuthenticateSamlSso_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoSaml20Api_PostAuthenticateSamlSso_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; queryParams: { state: string | null; code?: string | null; error?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; queryParams: { state: string | null; code?: string | null; error?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { platformId: string; queryParams: { state: string | null; code?: string | null; error?: string | null } }
  ) => {
    const response = await SsoSaml20Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postAuthenticateSamlSso_ByPlatformId_v3(input.platformId, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SsoSaml20.AuthenticateSamlSso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
