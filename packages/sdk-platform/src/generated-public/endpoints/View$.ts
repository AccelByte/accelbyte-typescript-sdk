/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ViewInfoArray } from '../../generated-definitions/ViewInfoArray.js'

export class View$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store views)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store views)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: all views&lt;/li&gt;&lt;/ul&gt;
   */
  getViews_ByUserId(userId: string, queryParams?: { language?: string | null; storeId?: string | null }): Promise<Response<ViewInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/views'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ViewInfoArray, 'ViewInfoArray')
  }
}
