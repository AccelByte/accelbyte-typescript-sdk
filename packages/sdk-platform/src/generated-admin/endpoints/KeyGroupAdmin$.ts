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
import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { KeyGroupCreate } from '../../generated-definitions/KeyGroupCreate.js'
import { KeyGroupDynamicInfo } from '../../generated-definitions/KeyGroupDynamicInfo.js'
import { KeyGroupInfo } from '../../generated-definitions/KeyGroupInfo.js'
import { KeyGroupPagingSlicedResult } from '../../generated-definitions/KeyGroupPagingSlicedResult.js'
import { KeyGroupUpdate } from '../../generated-definitions/KeyGroupUpdate.js'
import { KeyPagingSliceResult } from '../../generated-definitions/KeyPagingSliceResult.js'

export class KeyGroupAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query key groups, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of key group&lt;/li&gt;&lt;/ul&gt;
   */
  getKeygroups(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<Response<KeyGroupPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      KeyGroupPagingSlicedResult,
      'KeyGroupPagingSlicedResult'
    )
  }
  /**
   * Create key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created key group&lt;/li&gt;&lt;/ul&gt;
   */
  createKeygroup(data: KeyGroupCreate): Promise<Response<KeyGroupInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, KeyGroupInfo, 'KeyGroupInfo')
  }
  /**
   * @deprecated
   * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  getKeygroupsByBoothName(queryParams: { boothName: string | null }): Promise<Response<KeyGroupInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/byBoothName'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, KeyGroupInfo, 'KeyGroupInfo')
  }
  /**
   * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  getKeygroup_ByKeyGroupId(keyGroupId: string): Promise<Response<KeyGroupInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, KeyGroupInfo, 'KeyGroupInfo')
  }
  /**
   * Update key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated key group&lt;/li&gt;&lt;/ul&gt;
   */
  updateKeygroup_ByKeyGroupId(keyGroupId: string, data: KeyGroupUpdate): Promise<Response<KeyGroupInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, KeyGroupInfo, 'KeyGroupInfo')
  }
  /**
   * This API is used to list keys of a key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: keys&lt;/li&gt;&lt;/ul&gt;
   */
  getKeys_ByKeyGroupId(
    keyGroupId: string,
    queryParams?: { limit?: number; offset?: number; status?: 'ACQUIRED' | 'ACTIVE' }
  ): Promise<Response<KeyPagingSliceResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}/keys'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, KeyPagingSliceResult, 'KeyPagingSliceResult')
  }
  /**
   * This API is used to upload keys with csv format to a key group.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  createKey_ByKeyGroupId(keyGroupId: string, data: { file?: File }): Promise<Response<BulkOperationResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}/keys'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BulkOperationResult, 'BulkOperationResult')
  }
  /**
   * Get key group dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  getDynamic_ByKeyGroupId(keyGroupId: string): Promise<Response<KeyGroupDynamicInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/keygroups/{keyGroupId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{keyGroupId}', keyGroupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, KeyGroupDynamicInfo, 'KeyGroupDynamicInfo')
  }
}
