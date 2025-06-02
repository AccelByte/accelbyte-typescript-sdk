/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { BulkOperationResult } from '../generated-definitions/BulkOperationResult.js'
import { KeyGroupCreate } from '../generated-definitions/KeyGroupCreate.js'
import { KeyGroupDynamicInfo } from '../generated-definitions/KeyGroupDynamicInfo.js'
import { KeyGroupInfo } from '../generated-definitions/KeyGroupInfo.js'
import { KeyGroupPagingSlicedResult } from '../generated-definitions/KeyGroupPagingSlicedResult.js'
import { KeyGroupUpdate } from '../generated-definitions/KeyGroupUpdate.js'
import { KeyPagingSliceResult } from '../generated-definitions/KeyPagingSliceResult.js'
import { KeyGroupAdmin$ } from './endpoints/KeyGroupAdmin$.js'

export function KeyGroupAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getKeygroups(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<AxiosResponse<KeyGroupPagingSlicedResult>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getKeygroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createKeygroup(data: KeyGroupCreate): Promise<AxiosResponse<KeyGroupInfo>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createKeygroup(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getKeygroupsByBoothName(queryParams: { boothName: string | null }): Promise<AxiosResponse<KeyGroupInfo>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getKeygroupsByBoothName(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getKeygroup_ByKeyGroupId(keyGroupId: string): Promise<AxiosResponse<KeyGroupInfo>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getKeygroup_ByKeyGroupId(keyGroupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateKeygroup_ByKeyGroupId(keyGroupId: string, data: KeyGroupUpdate): Promise<AxiosResponse<KeyGroupInfo>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateKeygroup_ByKeyGroupId(keyGroupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getKeys_ByKeyGroupId(
    keyGroupId: string,
    queryParams?: { limit?: number; offset?: number; status?: 'ACQUIRED' | 'ACTIVE' }
  ): Promise<AxiosResponse<KeyPagingSliceResult>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getKeys_ByKeyGroupId(keyGroupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createKey_ByKeyGroupId(keyGroupId: string, data: { file?: File }): Promise<AxiosResponse<BulkOperationResult>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createKey_ByKeyGroupId(keyGroupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDynamic_ByKeyGroupId(keyGroupId: string): Promise<AxiosResponse<KeyGroupDynamicInfo>> {
    const $ = new KeyGroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDynamic_ByKeyGroupId(keyGroupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query key groups, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of key group&lt;/li&gt;&lt;/ul&gt;
     */
    getKeygroups,
    /**
     * Create key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created key group&lt;/li&gt;&lt;/ul&gt;
     */
    createKeygroup,
    /**
     * @deprecated
     * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
     */
    getKeygroupsByBoothName,
    /**
     * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
     */
    getKeygroup_ByKeyGroupId,
    /**
     * Update key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated key group&lt;/li&gt;&lt;/ul&gt;
     */
    updateKeygroup_ByKeyGroupId,
    /**
     * This API is used to list keys of a key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: keys&lt;/li&gt;&lt;/ul&gt;
     */
    getKeys_ByKeyGroupId,
    /**
     * This API is used to upload keys with csv format to a key group.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
     */
    createKey_ByKeyGroupId,
    /**
     * Get key group dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
     */
    getDynamic_ByKeyGroupId
  }
}
