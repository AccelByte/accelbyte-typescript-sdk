/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { UserVisibilityV3AdminApi } from '../UserVisibilityV3AdminApi.js'

import { GetHiddenUserResponse } from '../../generated-definitions/GetHiddenUserResponse.js'
import { GetUserVisibilityResponse } from '../../generated-definitions/GetUserVisibilityResponse.js'
import { SetUserVisibilityRequest } from '../../generated-definitions/SetUserVisibilityRequest.js'

export enum Key_UserVisibilityV3Admin {
  Visibility_ByUserId = 'UserVisibilityV3Admin.Visibility_ByUserId',
  UsersHidden_ByLeaderboardCode = 'UserVisibilityV3Admin.UsersHidden_ByLeaderboardCode',
  Visibility_ByLeaderboardCode_ByUserId = 'UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId'
}

export const useAdmUpdateVisibility_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GetUserVisibilityResponse, AxiosError<ApiError>, ApiArgs & { userId: string; data: SetUserVisibilityRequest }>,
    'mutationKey'
  >,
  callback?: (data: GetUserVisibilityResponse) => void
): UseMutationResult<GetUserVisibilityResponse, AxiosError<ApiError>, ApiArgs & { userId: string; data: SetUserVisibilityRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: SetUserVisibilityRequest }) => {
    const data = await UserVisibilityV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateVisibility_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserVisibilityV3Admin.Visibility_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUsersHidden_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetHiddenUserResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetHiddenUserResponse) => void
): UseQueryResult<GetHiddenUserResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersHidden_ByLeaderboardCode>[1]) => async () => {
    const data = await UserVisibilityV3AdminApi(sdk, { namespace: input.namespace }).getUsersHidden_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetHiddenUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserVisibilityV3Admin.UsersHidden_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmVisibility_ByLeaderboardCode_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; userId: string },
  options?: Omit<UseQueryOptions<GetUserVisibilityResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserVisibilityResponse) => void
): UseQueryResult<GetUserVisibilityResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmVisibility_ByLeaderboardCode_ByUserId>[1]) => async () => {
    const data = await UserVisibilityV3AdminApi(sdk, { namespace: input.namespace }).getVisibility_ByLeaderboardCode_ByUserId(
      input.leaderboardCode,
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetUserVisibilityResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateVisibility_ByLeaderboardCode_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GetUserVisibilityResponse,
      AxiosError<ApiError>,
      ApiArgs & { leaderboardCode: string; userId: string; data: SetUserVisibilityRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GetUserVisibilityResponse) => void
): UseMutationResult<
  GetUserVisibilityResponse,
  AxiosError<ApiError>,
  ApiArgs & { leaderboardCode: string; userId: string; data: SetUserVisibilityRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string; userId: string; data: SetUserVisibilityRequest }) => {
    const data = await UserVisibilityV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateVisibility_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserVisibilityV3Admin.Visibility_ByLeaderboardCode_ByUserId],
    mutationFn,
    ...options
  })
}
