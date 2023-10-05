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
import { Misc$ } from './endpoints/Misc$.js'
import { RetrieveTimeResponse } from './definitions/RetrieveTimeResponse.js'

export function MiscApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get server time
   */
  async function getMiscTime(): Promise<RetrieveTimeResponse> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscTime()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscLanguages(): Promise<unknown> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscLanguages()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscTimezones(): Promise<unknown> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscTimezones()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMiscTime,
    getMiscLanguages,
    getMiscTimezones
  }
}
