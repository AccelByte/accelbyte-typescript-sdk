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
import { FileUploadUrlInfo } from '../generated-definitions/FileUploadUrlInfo.js'
import { FileUploadAdmin$ } from './endpoints/FileUploadAdmin$.js'

export function FileUploadAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file count per user&lt;/i&gt;: 10 files&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file size per user&lt;/i&gt;: 104857600 bytes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<FileUploadUrlInfo> {
    const $ = new FileUploadAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFile_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFile_ByFolder(folder: string, queryParams: { fileType: string | null }): Promise<FileUploadUrlInfo> {
    const $ = new FileUploadAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFile_ByFolder(folder, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createFile_ByUserId,
    createFile_ByFolder
  }
}
