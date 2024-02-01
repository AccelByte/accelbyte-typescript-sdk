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
import { BuildInfoPii } from '../generated-definitions/BuildInfoPii.js'
import { GdprAdmin$ } from './endpoints/GdprAdmin$.js'

export function GdprAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to remove all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteGdprRemove(queryParams: { userId: string | null }): Promise<BuildInfoPii> {
    const $ = new GdprAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteGdprRemove(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGdprRetrieve(queryParams: { userId: string | null }): Promise<BuildInfoPii> {
    const $ = new GdprAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getGdprRetrieve(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteGdprRemove,
    getGdprRetrieve
  }
}
