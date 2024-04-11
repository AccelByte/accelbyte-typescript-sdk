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
import { FullViewInfo } from '../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../generated-definitions/ListViewInfoArray.js'
import { ViewAdmin$ } from './endpoints/ViewAdmin$.js'
import { ViewCreate } from '../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../generated-definitions/ViewUpdate.js'

export function ViewAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to list all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of views&lt;/li&gt;&lt;/ul&gt;
   */
  async function getViews(queryParams?: { storeId?: string | null }): Promise<ListViewInfoArray> {
    const $ = new ViewAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getViews(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a view&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function createView(data: ViewCreate, queryParams: { storeId: string | null }): Promise<FullViewInfo> {
    const $ = new ViewAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createView(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete a view.It will also delete all the related sections&lt;/b&gt;&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteView_ByViewId(viewId: string, queryParams: { storeId: string | null }): Promise<unknown> {
    const $ = new ViewAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteView_ByViewId(viewId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: view data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getView_ByViewId(viewId: string, queryParams?: { storeId?: string | null }): Promise<FullViewInfo> {
    const $ = new ViewAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getView_ByViewId(viewId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STORE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated view data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function updateView_ByViewId(viewId: string, data: ViewUpdate, queryParams: { storeId: string | null }): Promise<FullViewInfo> {
    const $ = new ViewAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateView_ByViewId(viewId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getViews,
    createView,
    deleteView_ByViewId,
    getView_ByViewId,
    updateView_ByViewId
  }
}
