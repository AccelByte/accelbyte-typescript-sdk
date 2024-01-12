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
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { PublicStagingContent$ } from './endpoints/PublicStagingContent$.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../generated-definitions/UpdateStagingContentRequest.js'

export function PublicStagingContentApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  async function getStagingContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<PaginatedListStagingContentResponse> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStagingContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteStagingContent_ByUserId_ByContentId(userId: string, contentId: string): Promise<unknown> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteStagingContent_ByUserId_ByContentId(userId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  async function getStagingContent_ByUserId_ByContentId(userId: string, contentId: string): Promise<StagingContentResponse> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStagingContent_ByUserId_ByContentId(userId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  async function updateStagingContent_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateStagingContentRequest
  ): Promise<StagingContentResponse> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStagingContent_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStagingContents_ByUserId,
    deleteStagingContent_ByUserId_ByContentId,
    getStagingContent_ByUserId_ByContentId,
    updateStagingContent_ByUserId_ByContentId
  }
}
