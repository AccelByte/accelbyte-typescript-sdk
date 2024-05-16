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
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceSimpleInfo } from '../../generated-definitions/NamespaceSimpleInfo.js'

export class Namespace$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<IResponse<NamespaceInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
  }

  /**
   * Get a namespace info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace info&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespace_ByNamespace(): Promise<IResponse<NamespaceSimpleInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, NamespaceSimpleInfo, 'NamespaceSimpleInfo')
  }

  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getPublisher(): Promise<IResponse<NamespacePublisherInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/publisher'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, NamespacePublisherInfo, 'NamespacePublisherInfo')
  }
}
