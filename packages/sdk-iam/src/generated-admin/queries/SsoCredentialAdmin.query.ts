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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { SsoCredentialAdminApi } from '../SsoCredentialAdminApi.js'

import { SsoPlatformCredentialRequest } from '../../generated-definitions/SsoPlatformCredentialRequest.js'
import { SsoPlatformCredentialResponse } from '../../generated-definitions/SsoPlatformCredentialResponse.js'
import { SsoPlatformCredentialResponseArray } from '../../generated-definitions/SsoPlatformCredentialResponseArray.js'

export enum Key_SsoCredentialAdmin {
  PlatformsSso_v3 = 'Iam.SsoCredentialAdmin.PlatformsSso_v3',
  Sso_ByPlatformId_v3 = 'Iam.SsoCredentialAdmin.Sso_ByPlatformId_v3'
}

/**
 * This is the API to Get All Active SSO Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoCredentialAdmin.PlatformsSso_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_GetPlatformsSso_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<SsoPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SsoPlatformCredentialResponseArray>) => void
): UseQueryResult<SsoPlatformCredentialResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSsoCredentialAdminApi_GetPlatformsSso_v3>[1]) => async () => {
    const response = await SsoCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlatformsSso_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SsoPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_SsoCredentialAdmin.PlatformsSso_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the API to Delete SSO Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_DeleteSso_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string }) => {
    const response = await SsoCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSso_ByPlatformId_v3(input.platformId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to Get SSO Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_GetSso_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string },
  options?: Omit<UseQueryOptions<SsoPlatformCredentialResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SsoPlatformCredentialResponse>) => void
): UseQueryResult<SsoPlatformCredentialResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSsoCredentialAdminApi_GetSso_ByPlatformId_v3>[1]) => async () => {
    const response = await SsoCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSso_ByPlatformId_v3(input.platformId)
    callback && callback(response)
    return response.data
  }

  return useQuery<SsoPlatformCredentialResponse, AxiosError<ApiError>>({
    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the API to Delete SSO Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_PatchSso_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SsoPlatformCredentialResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: SsoPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SsoPlatformCredentialResponse) => void
): UseMutationResult<
  SsoPlatformCredentialResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: SsoPlatformCredentialRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: SsoPlatformCredentialRequest }) => {
    const response = await SsoCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchSso_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to Add SSO Platform Credential. ## Supported platforms: - **discourse** the ssoUrl of the discourse is the discourse forum url. example: https://forum.example.com - **azure with SAML** **appId** is an application identifier in IdP, in azure it&#39;s called EntityID **acsUrl** is an endpoint on the service provider where the identity provider will redirect to with its authentication response. example: /iam/v3/sso/saml/azuresaml/authenticate **federationMetadataUrl** is an endpoint on the Identity Provider(IdP) to get IdP federation metadata for service provider to build trust relationship
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_CreateSso_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SsoPlatformCredentialResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: SsoPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SsoPlatformCredentialResponse) => void
): UseMutationResult<
  SsoPlatformCredentialResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: SsoPlatformCredentialRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: SsoPlatformCredentialRequest }) => {
    const response = await SsoCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSso_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
