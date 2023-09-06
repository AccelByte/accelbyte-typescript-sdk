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
import { AddDownloadCountResponse } from './definitions/AddDownloadCountResponse.js'
import { PaginatedContentDownloaderResponse } from './definitions/PaginatedContentDownloaderResponse.js'
import { PublicDownloadCountV2$ } from './endpoints/PublicDownloadCountV2$.js'

export function PublicDownloadCountV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint will only display the list of users who performed add download count from v2 endpoint.
   */
  async function getDownloader_ByContentId(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; userId?: string | null }
  ): Promise<PaginatedContentDownloaderResponse> {
    const $ = new PublicDownloadCountV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDownloader_ByContentId(contentId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user token
   */
  async function createDownloadcount_ByContentId(contentId: string): Promise<AddDownloadCountResponse> {
    const $ = new PublicDownloadCountV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDownloadcount_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDownloader_ByContentId,
    createDownloadcount_ByContentId
  }
}
