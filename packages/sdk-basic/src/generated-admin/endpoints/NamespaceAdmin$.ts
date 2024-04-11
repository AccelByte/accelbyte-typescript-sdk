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
import { NamespaceContext } from '../../generated-definitions/NamespaceContext.js'
import { NamespaceCreate } from '../../generated-definitions/NamespaceCreate.js'
import { NamespaceInfo } from '../../generated-definitions/NamespaceInfo.js'
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceStatusUpdate } from '../../generated-definitions/NamespaceStatusUpdate.js'
import { NamespaceUpdate } from '../../generated-definitions/NamespaceUpdate.js'

export class NamespaceAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<IResponse<NamespaceInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create a namespace.&lt;br&gt;By default the namespace is enabled.&lt;br&gt;In multi tenant mode, parentNamespace will be automatically filled with requester namespace if the requester is using studio or publisher token, and it will be filled with studio namespace if the requester uses game token. An oauth client will also be created and the id will be returned. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11301&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created namespace&lt;/li&gt;&lt;/ul&gt;
   */
  createNamespace(data: NamespaceCreate): Promise<IResponse<NamespaceInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfo, 'NamespaceInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11307&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: deleted namespace&lt;/li&gt;&lt;/ul&gt;
   */
  deleteNamespace_ByNamespace(): Promise<IResponse<NamespaceInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfo, 'NamespaceInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a namespace.&lt;br&gt;In multi tenant mode, parentNamespace will be returned.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11304&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespace_ByNamespace(queryParams?: { activeOnly?: boolean | null }): Promise<IResponse<NamespaceInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfo, 'NamespaceInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get game namespaces.&lt;br&gt;In multi tenant mode, a given super admin namespace will return all game namespaces of studio namespaces&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11308&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getGame(queryParams?: { activeOnly?: boolean | null }): Promise<IResponse<NamespaceInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/game'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update namespace basic info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11302&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
   */
  patchBasic(data: NamespaceUpdate): Promise<IResponse<NamespaceInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfo, 'NamespaceInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get child namespaces.&lt;br&gt;If input namespace is publisher namespace, then it will return its all studio namespace.&lt;br&gt;If input namespace is studio namespace, then it will return its all game namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getChild(queryParams?: { activeOnly?: boolean | null }): Promise<IResponse<NamespaceInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/child'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Change a namespace status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;Action code&lt;i&gt;&lt;/i&gt;: 11306&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatus(data: NamespaceStatusUpdate): Promise<IResponse<NamespaceInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceInfo, 'NamespaceInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get context of namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: context of namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getContext(): Promise<IResponse<NamespaceContext>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/context'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceContext, 'NamespaceContext')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getPublisher(): Promise<IResponse<NamespacePublisherInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/publisher'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespacePublisherInfo, 'NamespacePublisherInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
