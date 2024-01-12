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
import { ClaimableUserSeasonInfo } from '../generated-definitions/ClaimableUserSeasonInfo.js'
import { LocalizedSeasonInfo } from '../generated-definitions/LocalizedSeasonInfo.js'
import { Season$ } from './endpoints/Season$.js'

export function SeasonApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get current published season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: localized season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasonsCurrent(queryParams?: { language?: string | null }): Promise<LocalizedSeasonInfo> {
    const $ = new Season$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSeasonsCurrent(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get current user season data, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSeasonsCurrentData_ByUserId(userId: string): Promise<ClaimableUserSeasonInfo> {
    const $ = new Season$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSeasonsCurrentData_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getData_ByUserId_BySeasonId(userId: string, seasonId: string): Promise<ClaimableUserSeasonInfo> {
    const $ = new Season$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getData_ByUserId_BySeasonId(userId, seasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSeasonsCurrent,
    getSeasonsCurrentData_ByUserId,
    getData_ByUserId_BySeasonId
  }
}
