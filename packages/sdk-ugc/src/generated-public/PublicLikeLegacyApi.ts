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
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PublicLikeLegacy$ } from './endpoints/PublicLikeLegacy$.js'

export function PublicLikeLegacyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded**
   */
  async function getContentsLiked(queryParams?: {
    isofficial?: boolean | null
    limit?: number
    name?: string | null
    offset?: number
    orderby?: string | null
    sortby?: string | null
    subtype?: string | null
    tags?: string[]
    type?: string | null
  }): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicLikeLegacy$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getContentsLiked(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will update like/unlike state from a content
   */
  async function updateLike_ByContentId(contentId: string, data: ContentLikeRequest): Promise<ContentLikeResponse> {
    const $ = new PublicLikeLegacy$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateLike_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getContentsLiked,
    updateLike_ByContentId
  }
}
