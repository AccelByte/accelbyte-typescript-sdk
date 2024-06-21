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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FriendsAdminApi } from '../FriendsAdminApi.js'

import { FriendshipConnectionResponse } from '../../generated-definitions/FriendshipConnectionResponse.js'
import { GetFriendsResponse } from '../../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'

export enum Key_FriendsAdmin {
  FriendUser_ByUserId = 'FriendsAdmin.FriendUser_ByUserId',
  IncomingFriend_ByUserId = 'FriendsAdmin.IncomingFriend_ByUserId',
  OutgoingFriend_ByUserId = 'FriendsAdmin.OutgoingFriend_ByUserId',
  OfFriends_ByUserId = 'FriendsAdmin.OfFriends_ByUserId'
}

export const useAdmFriendUser_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { friendId?: string | null; friendIds?: string[]; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetFriendsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetFriendsResponse) => void
): UseQueryResult<GetFriendsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmFriendUser_ByUserId>[1]) => async () => {
    const data = await FriendsAdminApi(sdk, { namespace: input.namespace }).getFriendUser_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetFriendsResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.FriendUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmIncomingFriend_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { friendId?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<LoadIncomingFriendsWithTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: LoadIncomingFriendsWithTimeResponse) => void
): UseQueryResult<LoadIncomingFriendsWithTimeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIncomingFriend_ByUserId>[1]) => async () => {
    const data = await FriendsAdminApi(sdk, { namespace: input.namespace }).getIncomingFriend_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<LoadIncomingFriendsWithTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.IncomingFriend_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmOutgoingFriend_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<LoadOutgoingFriendsWithTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: LoadOutgoingFriendsWithTimeResponse) => void
): UseQueryResult<LoadOutgoingFriendsWithTimeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOutgoingFriend_ByUserId>[1]) => async () => {
    const data = await FriendsAdminApi(sdk, { namespace: input.namespace }).getOutgoingFriend_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<LoadOutgoingFriendsWithTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.OutgoingFriend_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmOfFriends_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: { friendId?: string | null; limit?: number; nopaging?: boolean | null; offset?: number }
  },
  options?: Omit<UseQueryOptions<FriendshipConnectionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FriendshipConnectionResponse) => void
): UseQueryResult<FriendshipConnectionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOfFriends_ByUserId>[1]) => async () => {
    const data = await FriendsAdminApi(sdk, { namespace: input.namespace }).getOfFriends_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FriendshipConnectionResponse, AxiosError<ApiError>>({
    queryKey: [Key_FriendsAdmin.OfFriends_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
