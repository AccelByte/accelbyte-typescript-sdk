/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { KeyGroupCreate } from '../../generated-definitions/KeyGroupCreate.js'
import { KeyGroupDynamicInfo } from '../../generated-definitions/KeyGroupDynamicInfo.js'
import { KeyGroupInfo } from '../../generated-definitions/KeyGroupInfo.js'
import { KeyGroupPagingSlicedResult } from '../../generated-definitions/KeyGroupPagingSlicedResult.js'
import { KeyGroupUpdate } from '../../generated-definitions/KeyGroupUpdate.js'
import { KeyPagingSliceResult } from '../../generated-definitions/KeyPagingSliceResult.js'

export class KeyGroupAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query key groups, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of key group&lt;/li&gt;&lt;/ul&gt;
   */
  getKeygroups(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<IResponseWithSync<KeyGroupPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, KeyGroupPagingSlicedResult, 'KeyGroupPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created key group&lt;/li&gt;&lt;/ul&gt;
   */
  createKeygroup(data: KeyGroupCreate): Promise<IResponse<KeyGroupInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, KeyGroupInfo, 'KeyGroupInfo')
  }

  /**
   * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  getKeygroup_ByKeyGroupId(keyGroupId: string): Promise<IResponseWithSync<KeyGroupInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, KeyGroupInfo, 'KeyGroupInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated key group&lt;/li&gt;&lt;/ul&gt;
   */
  updateKeygroup_ByKeyGroupId(keyGroupId: string, data: KeyGroupUpdate): Promise<IResponse<KeyGroupInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, KeyGroupInfo, 'KeyGroupInfo')
  }

  /**
   * This API is used to list keys of a key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: keys&lt;/li&gt;&lt;/ul&gt;
   */
  getKeys_ByKeyGroupId(
    keyGroupId: string,
    queryParams?: { limit?: number; offset?: number; status?: 'ACQUIRED' | 'ACTIVE' }
  ): Promise<IResponseWithSync<KeyPagingSliceResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}/keys'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, KeyPagingSliceResult, 'KeyPagingSliceResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to upload keys with csv format to a key group.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  createKey_ByKeyGroupId(keyGroupId: string, data: { file?: File }): Promise<IResponse<BulkOperationResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}/keys'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkOperationResult, 'BulkOperationResult')
  }

  /**
   * Get key group dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:KEYGROUP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  getDynamic_ByKeyGroupId(keyGroupId: string): Promise<IResponseWithSync<KeyGroupDynamicInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, KeyGroupDynamicInfo, 'KeyGroupDynamicInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
