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
import { EventResponseV2 } from './definitions/EventResponseV2.js'
import { EventV2$ } from './endpoints/EventV2$.js'

export function EventV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  async function getEvent_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEvent_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Available Type: &lt;/p&gt; &lt;ul&gt; &lt;li&gt;email&lt;/li&gt; &lt;li&gt;password&lt;/li&gt; &lt;li&gt;displayname&lt;/li&gt; &lt;li&gt;dateofbirth&lt;/li&gt; &lt;li&gt;country&lt;/li&gt; &lt;li&gt;language&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Requires a valid user access token&lt;/p&gt;
   */
  async function getEdithistory_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null; type?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEdithistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEvent_ByUserId,
    getEdithistory_ByUserId
  }
}
