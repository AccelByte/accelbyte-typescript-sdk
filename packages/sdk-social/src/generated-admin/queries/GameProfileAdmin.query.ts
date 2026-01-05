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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GameProfileAdminApi } from '../GameProfileAdminApi.js'

import { GameProfileHeaderArray } from '../../generated-definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../../generated-definitions/GameProfileInfo.js'

export enum Key_GameProfileAdmin {
  Profiles_ByUserId = 'Social.GameProfileAdmin.Profiles_ByUserId',
  Profile_ByUserId_ByProfileId = 'Social.GameProfileAdmin.Profile_ByUserId_ByProfileId'
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns all profiles&#39; header for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfileAdmin.Profiles_ByUserId, input]
 * }
 * ```
 */
export const useGameProfileAdminApi_GetProfiles_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GameProfileHeaderArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameProfileHeaderArray>) => void
): UseQueryResult<GameProfileHeaderArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameProfileAdminApi_GetProfiles_ByUserId>[1]) => async () => {
    const response = await GameProfileAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProfiles_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameProfileHeaderArray, AxiosError<ApiError>>({
    queryKey: [Key_GameProfileAdmin.Profiles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns profile for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: game profile info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfileAdmin.Profile_ByUserId_ByProfileId, input]
 * }
 * ```
 */
export const useGameProfileAdminApi_GetProfile_ByUserId_ByProfileId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; profileId: string },
  options?: Omit<UseQueryOptions<GameProfileInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameProfileInfo>) => void
): UseQueryResult<GameProfileInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameProfileAdminApi_GetProfile_ByUserId_ByProfileId>[1]) => async () => {
    const response = await GameProfileAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getProfile_ByUserId_ByProfileId(input.userId, input.profileId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GameProfileInfo, AxiosError<ApiError>>({
    queryKey: [Key_GameProfileAdmin.Profile_ByUserId_ByProfileId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
