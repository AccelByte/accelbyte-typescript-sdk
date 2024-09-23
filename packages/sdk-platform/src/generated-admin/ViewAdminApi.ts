/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { FullViewInfo } from '../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../generated-definitions/ViewUpdate.js'
import { ViewAdmin$ } from './endpoints/ViewAdmin$.js'

export function ViewAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getViews(queryParams?: { storeId?: string | null }): Promise<AxiosResponse<ListViewInfoArray>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getViews(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createView(data: ViewCreate, queryParams: { storeId: string | null }): Promise<AxiosResponse<FullViewInfo>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createView(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteView_ByViewId(viewId: string, queryParams: { storeId: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteView_ByViewId(viewId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getView_ByViewId(viewId: string, queryParams?: { storeId?: string | null }): Promise<AxiosResponse<FullViewInfo>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getView_ByViewId(viewId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateView_ByViewId(
    viewId: string,
    data: ViewUpdate,
    queryParams: { storeId: string | null }
  ): Promise<AxiosResponse<FullViewInfo>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateView_ByViewId(viewId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to list all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of views&lt;/li&gt;&lt;/ul&gt;
     */
    getViews,
    /**
     * This API is used to create a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a view&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    createView,
    /**
     * This API is used to delete a view.It will also delete all the related sections
     */
    deleteView_ByViewId,
    /**
     * This API is used to get a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: view data&lt;/li&gt;&lt;/ul&gt;
     */
    getView_ByViewId,
    /**
     * This API is used to update a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated view data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    updateView_ByViewId
  }
}
