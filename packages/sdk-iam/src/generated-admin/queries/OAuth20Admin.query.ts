/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { OAuth20AdminApi } from '../OAuth20AdminApi.js'

import { TokenThirdPartyResponse } from '../../generated-definitions/TokenThirdPartyResponse.js'

export enum Key_OAuth20Admin {
  RevokeOauth_ByUserId_v3 = 'Iam.OAuth20Admin.RevokeOauth_ByUserId_v3',
  PlatformTokenOauth_ByUserId_ByPlatformId_v3 = 'Iam.OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId_v3'
}

/**
 * This endpoint revokes all access tokens and refresh tokens a user has prior the revocation time. This endpoint requires authorized requests header with valid access token. It is a convenient feature for the developer (or admin) who wanted to revokes all user&#39;s access tokens and refresh tokens generated before some period of time. action code : 10707
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Admin.RevokeOauth_ByUserId_v3, input]
 * }
 * ```
 */
export const useOAuth20AdminApi_UpdateRevokeOauth_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; queryParams?: { includeGameNamespace?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; queryParams?: { includeGameNamespace?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; queryParams?: { includeGameNamespace?: boolean | null } }) => {
    const response = await OAuth20AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevokeOauth_ByUserId_v3(input.userId, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Admin.RevokeOauth_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Admin Retrieve User Third Party Platform Token This endpoint used for retrieving third party platform token for user that login using third party, if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace. Passing platform group name or it&#39;s member will return same access token that can be used across the platform members. If platformUserId provided, IAM will prefer to get platform token by platform user id. Notes: The third party platform and platform group covered for this is: - (psn) ps4web - (psn) ps4 - (psn) ps5 - epicgames - twitch - awscognito - amazon - eaorigin - snapchat - twitch - live
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20AdminApi_GetPlatformTokenOauth_ByUserId_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; platformId: string; queryParams?: { platformUserId?: string | null } },
  options?: Omit<UseQueryOptions<TokenThirdPartyResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TokenThirdPartyResponse>) => void
): UseQueryResult<TokenThirdPartyResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useOAuth20AdminApi_GetPlatformTokenOauth_ByUserId_ByPlatformId_v3>[1]) => async () => {
      const response = await OAuth20AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformTokenOauth_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TokenThirdPartyResponse, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
