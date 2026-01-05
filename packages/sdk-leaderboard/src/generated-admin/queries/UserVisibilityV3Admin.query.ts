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
import { UserVisibilityV3AdminApi } from '../UserVisibilityV3AdminApi.js'

import { GetHiddenUserResponse } from '../../generated-definitions/GetHiddenUserResponse.js'
import { GetUserVisibilityResponse } from '../../generated-definitions/GetUserVisibilityResponse.js'
import { SetUserVisibilityRequest } from '../../generated-definitions/SetUserVisibilityRequest.js'

export enum Key_UserVisibilityV3Admin {
  Visibility_ByUserId_v3 = 'Leaderboard.UserVisibilityV3Admin.Visibility_ByUserId_v3',
  UsersHidden_ByLeaderboardCode_v3 = 'Leaderboard.UserVisibilityV3Admin.UsersHidden_ByLeaderboardCode_v3',
  Visibility_ByLeaderboardCode_ByUserId_v3 = 'Leaderboard.UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId_v3'
}

/**
 * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserVisibilityV3Admin.Visibility_ByUserId_v3, input]
 * }
 * ```
 */
export const useUserVisibilityV3AdminApi_UpdateVisibility_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetUserVisibilityResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: SetUserVisibilityRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GetUserVisibilityResponse) => void
): UseMutationResult<
  GetUserVisibilityResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: SetUserVisibilityRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SetUserVisibilityRequest }) => {
    const response = await UserVisibilityV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateVisibility_ByUserId_v3(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserVisibilityV3Admin.Visibility_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Return hidden users on a leaderboard
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserVisibilityV3Admin.UsersHidden_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useUserVisibilityV3AdminApi_GetUsersHidden_ByLeaderboardCode_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetHiddenUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetHiddenUserResponse>) => void
): UseQueryResult<GetHiddenUserResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserVisibilityV3AdminApi_GetUsersHidden_ByLeaderboardCode_v3>[1]) => async () => {
      const response = await UserVisibilityV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUsersHidden_ByLeaderboardCode_v3(input.leaderboardCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetHiddenUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserVisibilityV3Admin.UsersHidden_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useUserVisibilityV3AdminApi_GetVisibility_ByLeaderboardCode_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; userId: string },
  options?: Omit<UseQueryOptions<GetUserVisibilityResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserVisibilityResponse>) => void
): UseQueryResult<GetUserVisibilityResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserVisibilityV3AdminApi_GetVisibility_ByLeaderboardCode_ByUserId_v3>[1]) =>
    async () => {
      const response = await UserVisibilityV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getVisibility_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetUserVisibilityResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useUserVisibilityV3AdminApi_UpdateVisibility_ByLeaderboardCode_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetUserVisibilityResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { leaderboardCode: string; userId: string; data: SetUserVisibilityRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GetUserVisibilityResponse) => void
): UseMutationResult<
  GetUserVisibilityResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { leaderboardCode: string; userId: string; data: SetUserVisibilityRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; userId: string; data: SetUserVisibilityRequest }) => {
    const response = await UserVisibilityV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateVisibility_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId_v3],
    mutationFn,
    ...options
  })
}
