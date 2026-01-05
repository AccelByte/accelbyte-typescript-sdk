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
import { PublicFollowApi } from '../PublicFollowApi.js'

import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedCreatorOverviewResponse } from '../../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { UserFollowRequest } from '../../generated-definitions/UserFollowRequest.js'
import { UserFollowResponse } from '../../generated-definitions/UserFollowResponse.js'

export enum Key_PublicFollow {
  UsersFollowed = 'Ugc.PublicFollow.UsersFollowed',
  ContentsFollowed = 'Ugc.PublicFollow.ContentsFollowed',
  Follow_ByUserId = 'Ugc.PublicFollow.Follow_ByUserId',
  Followers_ByUserId = 'Ugc.PublicFollow.Followers_ByUserId',
  Following_ByUserId = 'Ugc.PublicFollow.Following_ByUserId'
}

/**
 * Requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicFollow.UsersFollowed, input]
 * }
 * ```
 */
export const usePublicFollowApi_GetUsersFollowed = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedCreatorOverviewResponse>) => void
): UseQueryResult<PaginatedCreatorOverviewResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicFollowApi_GetUsersFollowed>[1]) => async () => {
    const response = await PublicFollowApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersFollowed(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicFollow.UsersFollowed, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicFollow.ContentsFollowed, input]
 * }
 * ```
 */
export const usePublicFollowApi_GetContentsFollowed = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicFollowApi_GetContentsFollowed>[1]) => async () => {
    const response = await PublicFollowApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContentsFollowed(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicFollow.ContentsFollowed, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicFollow.Follow_ByUserId, input]
 * }
 * ```
 */
export const usePublicFollowApi_UpdateFollow_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserFollowResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserFollowRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserFollowResponse) => void
): UseMutationResult<UserFollowResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserFollowRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserFollowRequest }) => {
    const response = await PublicFollowApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateFollow_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicFollow.Follow_ByUserId],
    mutationFn,
    ...options
  })
}

export const usePublicFollowApi_GetFollowers_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedCreatorOverviewResponse>) => void
): UseQueryResult<PaginatedCreatorOverviewResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicFollowApi_GetFollowers_ByUserId>[1]) => async () => {
    const response = await PublicFollowApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFollowers_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicFollow.Followers_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const usePublicFollowApi_GetFollowing_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedCreatorOverviewResponse>) => void
): UseQueryResult<PaginatedCreatorOverviewResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicFollowApi_GetFollowing_ByUserId>[1]) => async () => {
    const response = await PublicFollowApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFollowing_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicFollow.Following_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
