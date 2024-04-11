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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AddDownloadCountResponse } from '../generated-definitions/AddDownloadCountResponse.js'
import { PaginatedContentDownloaderResponse } from '../generated-definitions/PaginatedContentDownloaderResponse.js'
import { PublicDownloadCountV2$ } from './endpoints/PublicDownloadCountV2$.js'

export function PublicDownloadCountV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This endpoint will only display the list of users who performed add download count from v2 endpoint.
   */
  async function getDownloader_ByContentId(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; userId?: string | null }
  ): Promise<PaginatedContentDownloaderResponse> {
    const $ = new PublicDownloadCountV2$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getDownloader_ByContentId(contentId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint can be used to count how many the ugc downloaded
   */
  async function createDownloadcount_ByContentId(contentId: string): Promise<AddDownloadCountResponse> {
    const $ = new PublicDownloadCountV2$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createDownloadcount_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDownloader_ByContentId,
    createDownloadcount_ByContentId
  }
}
