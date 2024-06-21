/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { FullViewInfo } from '../../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../../generated-definitions/ViewUpdate.js'

export class ViewAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * This API is used to list all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of views&lt;/li&gt;&lt;/ul&gt;
   */
  getViews(queryParams?: { storeId?: string | null }): Promise<IResponse<ListViewInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListViewInfoArray, 'ListViewInfoArray')
  }

  /**
   * This API is used to create a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a view&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  createView(data: ViewCreate, queryParams: { storeId: string | null }): Promise<IResponse<FullViewInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullViewInfo, 'FullViewInfo')
  }

  /**
   * This API is used to delete a view.It will also delete all the related sections
   */
  deleteView_ByViewId(viewId: string, queryParams: { storeId: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views/{viewId}'.replace('{namespace}', this.namespace).replace('{viewId}', viewId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: view data&lt;/li&gt;&lt;/ul&gt;
   */
  getView_ByViewId(viewId: string, queryParams?: { storeId?: string | null }): Promise<IResponse<FullViewInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views/{viewId}'.replace('{namespace}', this.namespace).replace('{viewId}', viewId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullViewInfo, 'FullViewInfo')
  }

  /**
   * This API is used to update a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated view data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  updateView_ByViewId(viewId: string, data: ViewUpdate, queryParams: { storeId: string | null }): Promise<IResponse<FullViewInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/views/{viewId}'.replace('{namespace}', this.namespace).replace('{viewId}', viewId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullViewInfo, 'FullViewInfo')
  }
}
