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

  async function createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<FileUploadUrlInfo> {
    const $ = new FileUpload$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFile_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
