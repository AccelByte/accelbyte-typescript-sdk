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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BulkOperationResult } from '../generated-definitions/BulkOperationResult.js'
import { KeyGroupCreate } from '../generated-definitions/KeyGroupCreate.js'
import { KeyGroupDynamicInfo } from '../generated-definitions/KeyGroupDynamicInfo.js'
import { KeyGroupInfo } from '../generated-definitions/KeyGroupInfo.js'
import { KeyGroupPagingSlicedResult } from '../generated-definitions/KeyGroupPagingSlicedResult.js'
import { KeyGroupUpdate } from '../generated-definitions/KeyGroupUpdate.js'
import { KeyPagingSliceResult } from '../generated-definitions/KeyPagingSliceResult.js'
import { KeyGroupAdmin$ } from './endpoints/KeyGroupAdmin$.js'

export function KeyGroupAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Query key groups, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of key group&lt;/li&gt;&lt;/ul&gt;
   */
  async function getKeygroups(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<KeyGroupPagingSlicedResult> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getKeygroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created key group&lt;/li&gt;&lt;/ul&gt;
   */
  async function createKeygroup(data: KeyGroupCreate): Promise<KeyGroupInfo> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createKeygroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getKeygroupsByBoothName_DEPRECATED(queryParams: { boothName: string | null }): Promise<KeyGroupInfo> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getKeygroupsByBoothName_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getKeygroup_ByKeyGroupId(keyGroupId: string): Promise<KeyGroupInfo> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getKeygroup_ByKeyGroupId(keyGroupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated key group&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateKeygroup_ByKeyGroupId(keyGroupId: string, data: KeyGroupUpdate): Promise<KeyGroupInfo> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateKeygroup_ByKeyGroupId(keyGroupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to list keys of a key group.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: keys&lt;/li&gt;&lt;/ul&gt;
   */
  async function getKeys_ByKeyGroupId(
    keyGroupId: string,
    queryParams?: { limit?: number; offset?: number; status?: 'ACQUIRED' | 'ACTIVE' }
  ): Promise<KeyPagingSliceResult> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getKeys_ByKeyGroupId(keyGroupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to upload keys with csv format to a key group.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createKey_ByKeyGroupId(keyGroupId: string, data: { file?: File }): Promise<BulkOperationResult> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createKey_ByKeyGroupId(keyGroupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get key group dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: key group info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDynamic_ByKeyGroupId(keyGroupId: string): Promise<KeyGroupDynamicInfo> {
    const $ = new KeyGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDynamic_ByKeyGroupId(keyGroupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getKeygroups,
    createKeygroup,
    getKeygroupsByBoothName_DEPRECATED,
    getKeygroup_ByKeyGroupId,
    updateKeygroup_ByKeyGroupId,
    getKeys_ByKeyGroupId,
    createKey_ByKeyGroupId,
    getDynamic_ByKeyGroupId
  }
}
