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
import { Store$ } from './endpoints/Store$.js'
import { StoreInfoArray } from './definitions/StoreInfoArray.js'

export function StoreApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to list all stores in a namespace.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store)</li><li><i>Returns</i>: the list of stores</li></ul>
   */
  async function getStores(): Promise<StoreInfoArray> {
    const $ = new Store$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStores()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStores
  }
}
