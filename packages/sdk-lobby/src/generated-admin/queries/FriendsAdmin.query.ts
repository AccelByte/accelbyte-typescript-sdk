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
import { FriendsAdminApi } from '../FriendsAdminApi.js'

import { FriendshipConnectionResponse } from '../../generated-definitions/FriendshipConnectionResponse.js'
import { GetFriendsResponse } from '../../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'

export enum Key_FriendsAdmin {
  FriendUser_ByUserId = 'Lobby.FriendsAdmin.FriendUser_ByUserId',
  IncomingFriend_ByUserId = 'Lobby.FriendsAdmin.IncomingFriend_ByUserId',
  OutgoingFriend_ByUserId = 'Lobby.FriendsAdmin.OutgoingFriend_ByUserId',
  OfFriends_ByUserId = 'Lobby.FriendsAdmin.OfFriends_ByUserId'
}

/**
 * Get list of friends in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FriendsAdmin.FriendUser_ByUserId, input]
 * }
 * ```
 */
export const useFriendsAdminApi_GetFriendUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { friendId?: string | null; friendIds?: string[]; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<GetFriendsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetFriendsResponse>) => void
): UseQueryResult<GetFriendsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsAdminApi_GetFriendUser_ByUserId>[1]) => async () => {
    const response = await FriendsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendUser_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetFriendsResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.FriendUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get list of incoming friend requests.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FriendsAdmin.IncomingFriend_ByUserId, input]
 * }
 * ```
 */
export const useFriendsAdminApi_GetIncomingFriend_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { friendId?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<LoadIncomingFriendsWithTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoadIncomingFriendsWithTimeResponse>) => void
): UseQueryResult<LoadIncomingFriendsWithTimeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsAdminApi_GetIncomingFriend_ByUserId>[1]) => async () => {
    const response = await FriendsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getIncomingFriend_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<LoadIncomingFriendsWithTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.IncomingFriend_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get list of outgoing friend requests in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FriendsAdmin.OutgoingFriend_ByUserId, input]
 * }
 * ```
 */
export const useFriendsAdminApi_GetOutgoingFriend_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<LoadOutgoingFriendsWithTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoadOutgoingFriendsWithTimeResponse>) => void
): UseQueryResult<LoadOutgoingFriendsWithTimeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsAdminApi_GetOutgoingFriend_ByUserId>[1]) => async () => {
    const response = await FriendsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getOutgoingFriend_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<LoadOutgoingFriendsWithTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.OutgoingFriend_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Load list friends and friends of friends in a namespace. Response subjectId will be different with requested userId if the user is not directly friend
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FriendsAdmin.OfFriends_ByUserId, input]
 * }
 * ```
 */
export const useFriendsAdminApi_GetOfFriends_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { friendId?: string | null; limit?: number; nopaging?: boolean | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<FriendshipConnectionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FriendshipConnectionResponse>) => void
): UseQueryResult<FriendshipConnectionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsAdminApi_GetOfFriends_ByUserId>[1]) => async () => {
    const response = await FriendsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getOfFriends_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FriendshipConnectionResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.OfFriends_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
