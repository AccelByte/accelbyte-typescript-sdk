/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { FriendshipConnectionResponse } from '../generated-definitions/FriendshipConnectionResponse.js'
import { GetFriendsResponse } from '../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'
import { FriendsAdmin$ } from './endpoints/FriendsAdmin$.js'

export function FriendsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getFriendUser_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; friendIds?: string[]; limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetFriendsResponse>> {
    const $ = new FriendsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIncomingFriend_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<LoadIncomingFriendsWithTimeResponse>> {
    const $ = new FriendsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIncomingFriend_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getOutgoingFriend_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<LoadOutgoingFriendsWithTimeResponse>> {
    const $ = new FriendsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOutgoingFriend_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getOfFriends_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; nopaging?: boolean | null; offset?: number }
  ): Promise<AxiosResponse<FriendshipConnectionResponse>> {
    const $ = new FriendsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOfFriends_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get list of friends in a namespace.
     */
    getFriendUser_ByUserId,
    /**
     * Get list of incoming friend requests.
     */
    getIncomingFriend_ByUserId,
    /**
     * Get list of outgoing friend requests in a namespace.
     */
    getOutgoingFriend_ByUserId,
    /**
     * Load list friends and friends of friends in a namespace. Response subjectId will be different with requested userId if the user is not directly friend
     */
    getOfFriends_ByUserId
  }
}
