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
import { FileUpload$ } from './endpoints/FileUpload$.js'
import { FileUploadUrlInfo } from './definitions/FileUploadUrlInfo.js'

export function FileUploadApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;There are 2 kinds of storage limitation per user : maximum file count and maximum file size.&lt;br/&gt;The threshold of those limitations is different between upload category that is used.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:FILEUPLOAD&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file count per user&lt;/i&gt;: 10 files&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file size per user&lt;/i&gt;: 104857600 bytes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<FileUploadUrlInfo> {
    const $ = new FileUpload$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFile_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;NAMESPACE:{namespace}:FILEUPLOAD&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFile_ByFolder(folder: string, queryParams: { fileType: string | null }): Promise<FileUploadUrlInfo> {
    const $ = new FileUpload$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFile_ByFolder(folder, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createFile_ByUserId,
    createFile_ByFolder
  }
}
