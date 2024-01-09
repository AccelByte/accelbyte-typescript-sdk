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
import { ContentLikeRequest } from './definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from './definitions/ContentLikeResponse.js'
import { PaginatedContentLikersResponse } from './definitions/PaginatedContentLikersResponse.js'
import { PublicLikeV2$ } from './endpoints/PublicLikeV2$.js'

export function PublicLikeV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint will only display the list of users who performed like from v2 endpoint.
   */
  async function getLike_ByContentId(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContentLikersResponse> {
    const $ = new PublicLikeV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLike_ByContentId(contentId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user token
   */
  async function updateLike_ByContentId(contentId: string, data: ContentLikeRequest): Promise<ContentLikeResponse> {
    const $ = new PublicLikeV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateLike_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLike_ByContentId,
    updateLike_ByContentId
  }
}
