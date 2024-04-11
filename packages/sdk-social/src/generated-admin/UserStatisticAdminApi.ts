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
import { ADtoObjectForResettingUserStatItems } from '../generated-definitions/ADtoObjectForResettingUserStatItems.js'
import { ADtoObjectForUserStatItemValueArray } from '../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemInc } from '../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../generated-definitions/StatItemUpdate.js'
import { StatItemValuePagingSlicedResult } from '../generated-definitions/StatItemValuePagingSlicedResult.js'
import { StatResetInfo } from '../generated-definitions/StatResetInfo.js'
import { UserStatItemInfoArray } from '../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../generated-definitions/UserStatItemPagingSlicedResult.js'
import { UserStatisticAdmin$ } from './endpoints/UserStatisticAdmin$.js'

export function UserStatisticAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=2 (READ) + *Returns*: list of user&#39;s statItem
   */
  async function getStatitemsBulk(queryParams: { statCode: string | null; userIds: string | null }): Promise<UserStatItemInfoArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStatitemsBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueBulk_ByNS(data: BulkUserStatItemUpdate[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueBulk_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatitems_ByUserId(
    userId: string,
    queryParams?: {
      isPublic?: boolean | null
      limit?: number
      offset?: number
      sortBy?: string | null
      statCodes?: string | null
      tags?: string | null
    }
  ): Promise<UserStatItemPagingSlicedResult> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStatitems_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueResetBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get users&#39; stat item values for a given namespace and statCode. Other info: + *Required permission*: resource=ADMIN:NAMESPACE:{namespace}:STATITEM, action=2 (READ) + *Returns*: list of users&#39; stat item values
   */
  async function getStatitems_ByStatCode(
    statCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<StatItemValuePagingSlicedResult> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStatitems_ByStatCode(statCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk create user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;
   */
  async function createStatitemBulk_ByUserId(userId: string, data: BulkStatItemCreate[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createStatitemBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Required permission*: resource=ADMIN:NAMESPACE:{namespace}:STATITEM, action=2 (READ) + *Returns*: list of user&#39;s stat item values
   */
  async function getStatitemsValueBulkGetOrDefault(queryParams: {
    statCode: string | null
    userIds: string[]
  }): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStatitemsValueBulkGetOrDefault(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Required permission*: resource=ADMIN:NAMESPACE:{namespace}:STATITEM, action=2 (READ) + *Returns*: list of user&#39;s stat item values
   */
  async function getStatitemsValueBulkGetOrDefault_ByNS(queryParams: {
    statCode: string | null
    userIds: string[]
    additionalKey?: string | null
  }): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStatitemsValueBulkGetOrDefault_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin list all statItems of user&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;+ *Required permission*: resource=ADMIN:NAMESPACE:{namespace}:STATITEM, action=2 (READ) &lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatitemsValueBulk_ByUserId(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStatitemsValueBulk_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueBulk_ByUserId_ByNS(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueBulk_ByUserId_ByNS(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk_ByUserId(userId: string, data: BulkStatItemReset[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueResetBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is for testing purpose. Use this endpoint for cleaning up after testing.&lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  async function deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<unknown> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create statItem for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<unknown> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk reset user&#39;s statitem values for given namespace and user. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk_ByUserId_ByNS(
    userId: string,
    data: ADtoObjectForResettingUserStatItems[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueResetBulk_ByUserId_ByNS(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user&#39;s stat items for given namespace, statCode, and user Id. If query param *additionalKey* is provided, it will delete user stat items of specific key (i.e. characterName). Otherwise, it will delete all stat items related to the user Id. &lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  async function deleteStatitem_ByUserId_ByStatCode_ByNS(
    userId: string,
    statCode: string,
    queryParams?: { additionalKey?: string | null }
  ): Promise<unknown> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode_ByNS(userId, statCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<StatItemIncResult> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchStatitemValue_ByUserId_ByStatCode(userId, statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: updated user&#39;s statItem
   */
  async function updateStatitemValue_ByUserId_ByStatCode(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<StatItemIncResult> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: updated user&#39;s statItem
   */
  async function updateStatitemValueReset_ByUserId_ByStatCode(
    userId: string,
    statCode: string,
    data: StatResetInfo,
    queryParams?: { additionalKey?: string | null }
  ): Promise<StatItemIncResult> {
    const $ = new UserStatisticAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatitemValueReset_ByUserId_ByStatCode(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatitemsBulk,
    patchStatitemValueBulk,
    updateStatitemValueBulk,
    updateStatitemValueBulk_ByNS,
    getStatitems_ByUserId,
    updateStatitemValueResetBulk,
    getStatitems_ByStatCode,
    createStatitemBulk_ByUserId,
    getStatitemsValueBulkGetOrDefault,
    getStatitemsValueBulkGetOrDefault_ByNS,
    patchStatitemValueBulk_ByUserId,
    updateStatitemValueBulk_ByUserId,
    getStatitemsValueBulk_ByUserId,
    updateStatitemValueBulk_ByUserId_ByNS,
    updateStatitemValueResetBulk_ByUserId,
    deleteStatitem_ByUserId_ByStatCode,
    createStatitem_ByUserId_ByStatCode,
    updateStatitemValueResetBulk_ByUserId_ByNS,
    deleteStatitem_ByUserId_ByStatCode_ByNS,
    patchStatitemValue_ByUserId_ByStatCode,
    updateStatitemValue_ByUserId_ByStatCode,
    updateStatitemValueReset_ByUserId_ByStatCode
  }
}
