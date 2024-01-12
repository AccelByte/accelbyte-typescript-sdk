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
import { BulkCalculateDiffCacheRequest } from '../generated-definitions/BulkCalculateDiffCacheRequest.js'
import { CachingAdmin$ } from './endpoints/CachingAdmin$.js'
import { CalculateDiffCacheRequest } from '../generated-definitions/CalculateDiffCacheRequest.js'
import { CommitDiffCacheRequest } from '../generated-definitions/CommitDiffCacheRequest.js'
import { CreateDiffCacheRequest } from '../generated-definitions/CreateDiffCacheRequest.js'

export function CachingAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to save detailed diff cache. Only used by differ. Not to be used directly.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createDiffCache(data: CreateDiffCacheRequest): Promise<unknown> {
    const $ = new CachingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDiffCache(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to mark that the diff caching is complete and diff summary file uploaded to s3. Only used by differ. Not to be used directly.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDiffCache(data: CommitDiffCacheRequest): Promise<unknown> {
    const $ = new CachingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDiffCache(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to dispatch diff caching request.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createDiffCalculate(data: CalculateDiffCacheRequest): Promise<unknown> {
    const $ = new CachingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDiffCalculate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to bulk dispatch diff caching requests to differ instance.&lt;br/&gt;The processing order will follow the order of the array.&lt;br/&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Request is skipped if the source and destination versions is same&lt;/li&gt;&lt;li&gt;Request is skipped if the source version is not found&lt;/li&gt;&lt;li&gt;Request is skipped if the destination version is not found&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createDiffCalculateBulk(data: BulkCalculateDiffCacheRequest): Promise<unknown> {
    const $ = new CachingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDiffCalculateBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createDiffCache,
    updateDiffCache,
    createDiffCalculate,
    createDiffCalculateBulk
  }
}
