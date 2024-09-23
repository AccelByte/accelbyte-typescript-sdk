/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { NamespaceContext } from '../../generated-definitions/NamespaceContext.js'
import { NamespaceCreate } from '../../generated-definitions/NamespaceCreate.js'
import { NamespaceInfo } from '../../generated-definitions/NamespaceInfo.js'
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceStatusUpdate } from '../../generated-definitions/NamespaceStatusUpdate.js'
import { NamespaceUpdate } from '../../generated-definitions/NamespaceUpdate.js'

export class NamespaceAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<Response<NamespaceInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
  }
  /**
   * Create a namespace.&lt;br&gt;By default the namespace is enabled.&lt;br&gt;In multi tenant mode, parentNamespace will be automatically filled with requester namespace if the requester is using studio or publisher token, and it will be filled with studio namespace if the requester uses game token. An oauth client will also be created and the id will be returned. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11301&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created namespace&lt;/li&gt;&lt;/ul&gt;
   */
  createNamespace(data: NamespaceCreate): Promise<Response<NamespaceInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfo, 'NamespaceInfo')
  }
  /**
   * Delete a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11307&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: deleted namespace&lt;/li&gt;&lt;/ul&gt;
   */
  deleteNamespace_ByNamespace(): Promise<Response<NamespaceInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfo, 'NamespaceInfo')
  }
  /**
   * Get a namespace.&lt;br&gt;In multi tenant mode, parentNamespace will be returned.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11304&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespace_ByNamespace(queryParams?: { activeOnly?: boolean | null }): Promise<Response<NamespaceInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfo, 'NamespaceInfo')
  }
  /**
   * Get game namespaces.&lt;br&gt;In multi tenant mode, a given super admin namespace will return all game namespaces of studio namespaces&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11308&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getGame(queryParams?: { activeOnly?: boolean | null }): Promise<Response<NamespaceInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/game'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
  }
  /**
   * Update namespace basic info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11302&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
   */
  patchBasic(data: NamespaceUpdate): Promise<Response<NamespaceInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfo, 'NamespaceInfo')
  }
  /**
   * Get child namespaces.&lt;br&gt;If input namespace is publisher namespace, then it will return its all studio namespace.&lt;br&gt;If input namespace is studio namespace, then it will return its all game namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getChild(queryParams?: { activeOnly?: boolean | null }): Promise<Response<NamespaceInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/child'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
  }
  /**
   * Change a namespace status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Action code&lt;i&gt;&lt;/i&gt;: 11306&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatus(data: NamespaceStatusUpdate): Promise<Response<NamespaceInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceInfo, 'NamespaceInfo')
  }
  /**
   * Get context of namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: context of namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getContext(): Promise<Response<NamespaceContext>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/context'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NamespaceContext, 'NamespaceContext')
  }
  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getPublisher(): Promise<Response<NamespacePublisherInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/publisher'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NamespacePublisherInfo,
      'NamespacePublisherInfo'
    )
  }
}
