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
import { Caching$ } from './endpoints/Caching$'
import { RetrieveDiffCacheResponse } from './definitions/RetrieveDiffCacheResponse'

export function CachingApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to retrieve detailed diff cache.<br/>The response will contains list of diff cache files along with its download url.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function getDestCacheDiff_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<RetrieveDiffCacheResponse> {
    const $ = new Caching$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDestCacheDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDestCacheDiff_BySourceBuildId_ByDestinationBuildId
  }
}
