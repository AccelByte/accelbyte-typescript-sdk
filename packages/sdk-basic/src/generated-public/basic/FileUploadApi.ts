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
import { FileUpload$ } from './endpoints/FileUpload$'
import { FileUploadUrlInfo } from './definitions/FileUploadUrlInfo'

export function FileUploadApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Generate an upload URL for user content. It's valid for 10 minutes.<br/>There are 2 kinds of storage limitation per user : maximum file count and maximum file size.<br/>The threshold of those limitations is different between upload category that is used.<br/>Other detail info: <ul><li><i>Required permission</i>: resource = <b>"NAMESPACE:{namespace}:USER:{userId}:FILEUPLOAD"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11102</li><li><i>Default maximum file count per user</i>: 10 files</li><li><i>Default maximum file size per user</i>: 104857600 bytes</li><li><i>Returns</i>: URL data</li></ul>
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
   * Generate an upload URL. It's valid for 10 minutes.<br/>Other detail info: <ul><li><i>Required permission</i>: resource = <b>"NAMESPACE:{namespace}:FILEUPLOAD"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11101</li><li><i>Returns</i>: URL data</li></ul>
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
