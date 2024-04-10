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
import { ContentLikeRequest } from '../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentLikersResponse } from '../generated-definitions/PaginatedContentLikersResponse.js'
import { PublicLikeV2$ } from './endpoints/PublicLikeV2$.js'

export function PublicLikeV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint will only display the list of users who performed like from v2 endpoint.
   */
  async function getLike_ByContentId(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContentLikersResponse> {
    const $ = new PublicLikeV2$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getLike_ByContentId(contentId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will update like/unlike state from a content
   */
  async function updateLike_ByContentId(contentId: string, data: ContentLikeRequest): Promise<ContentLikeResponse> {
    const $ = new PublicLikeV2$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateLike_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLike_ByContentId,
    updateLike_ByContentId
  }
}
