/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedCreatorOverviewResponse } from '../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { PublicFollow$ } from './endpoints/PublicFollow$.js'
import { UserFollowRequest } from '../generated-definitions/UserFollowRequest.js'
import { UserFollowResponse } from '../generated-definitions/UserFollowResponse.js'

export function PublicFollowApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Requires valid user token
   */
  async function getUsersFollowed(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedCreatorOverviewResponse> {
    const $ = new PublicFollow$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersFollowed(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user token
   */
  async function getContentsFollowed(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicFollow$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContentsFollowed(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user token
   */
  async function updateFollow_ByUserId(userId: string, data: UserFollowRequest): Promise<UserFollowResponse> {
    const $ = new PublicFollow$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateFollow_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFollowers_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedCreatorOverviewResponse> {
    const $ = new PublicFollow$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFollowers_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getFollowing_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedCreatorOverviewResponse> {
    const $ = new PublicFollow$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getFollowing_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersFollowed,
    getContentsFollowed,
    updateFollow_ByUserId,
    getFollowers_ByUserId,
    getFollowing_ByUserId
  }
}
