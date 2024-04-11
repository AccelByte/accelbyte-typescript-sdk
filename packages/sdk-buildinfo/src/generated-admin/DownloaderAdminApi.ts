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
import { BlockDownloadUrls } from '../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../generated-definitions/BlockDownloadUrlsRequest.js'
import { DownloaderAdmin$ } from './endpoints/DownloaderAdmin$.js'

export function DownloaderAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Block Download URLs&lt;/li&gt;&lt;/ul&gt;
   */
  async function createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<BlockDownloadUrls> {
    const $ = new DownloaderAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createBlockUrl_ByBuildId(buildId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createBlockUrl_ByBuildId
  }
}
