/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ContentLikeRequest } from './definitions/ContentLikeRequest'
import { ContentLikeResponse } from './definitions/ContentLikeResponse'
import { PaginatedContentDownloadResponse } from './definitions/PaginatedContentDownloadResponse'
import { PublicLikeLegacy$ } from './endpoints/PublicLikeLegacy$'

export function PublicLikeLegacyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Requires valid user token. For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  async function getContentsLiked(queryParams?: {
    tags?: string[]
    name?: string | null
    type?: string | null
    subtype?: string | null
    isofficial?: boolean | null
    limit?: number
    offset?: number
    sortby?: string | null
    orderby?: string | null
  }): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicLikeLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContentsLiked(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user token
   */
  async function updateLike_ByContentId(contentId: string, data: ContentLikeRequest): Promise<ContentLikeResponse> {
    const $ = new PublicLikeLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateLike_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getContentsLiked,
    updateLike_ByContentId
  }
}
