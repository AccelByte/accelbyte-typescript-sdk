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
import { AddDownloadCountResponse } from '../generated-definitions/AddDownloadCountResponse.js'
import { PublicDownloadCountLegacy$ } from './endpoints/PublicDownloadCountLegacy$.js'

export function PublicDownloadCountLegacyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint can be used to count how many the ugc downloaded
   */
  async function createDownloadcount_ByContentId(contentId: string): Promise<AddDownloadCountResponse> {
    const $ = new PublicDownloadCountLegacy$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createDownloadcount_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createDownloadcount_ByContentId
  }
}
