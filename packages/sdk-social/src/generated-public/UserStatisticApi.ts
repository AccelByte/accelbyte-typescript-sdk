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
import { UserStatItemInfoArray } from '../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../generated-definitions/UserStatItemPagingSlicedResult.js'
import { UserStatistic$ } from './endpoints/UserStatistic$.js'

export function UserStatisticApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Public bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem
   */
  async function getStatitemsBulk(queryParams: { statCode: string | null; userIds: string | null }): Promise<UserStatItemInfoArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatitemsBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeStatitems(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    statCodes?: string[]
    tags?: string[]
  }): Promise<UserStatItemPagingSlicedResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeStatitems(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result
   */
  async function updateStatitemValueBulk_ByNS(data: BulkUserStatItemUpdate[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatitems_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null; tags?: string | null }
  ): Promise<UserStatItemPagingSlicedResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatitems_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk create statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatitemBulk_ByUserId(userId: string, data: BulkStatItemCreate[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStatitemBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeStatitemsValueBulk(queryParams?: {
    additionalKey?: string | null
    statCodes?: string[]
    tags?: string[]
  }): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeStatitemsValueBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatitemsValueBulk_ByUserId(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulk_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;
   */
  async function patchStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatitemsValueBulk_ByUserId_ByNS(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulk_ByUserId_ByNS(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result
   */
  async function updateStatitemValueBulk_ByUserId_ByNS(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByUserId_ByNS(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk_ByUserId(userId: string, data: BulkStatItemReset[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  async function deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<unknown> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create user&#39;s statItem.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<unknown> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchStatitemValue_ByUserId_ByStatCode(userId, statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode(userId, statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem
   */
  async function updateStatitemValue_ByUserId_ByStatCode_ByNS(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode_ByNS(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: updated user&#39;s statItem
   */
  async function updateStatitemValueReset_ByUserId_ByStatCode(userId: string, statCode: string): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueReset_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatitemsBulk,
    getUsersMeStatitems,
    patchStatitemValueBulk,
    updateStatitemValueBulk,
    updateStatitemValueBulk_ByNS,
    getStatitems_ByUserId,
    updateStatitemValueResetBulk,
    createStatitemBulk_ByUserId,
    getUsersMeStatitemsValueBulk,
    getStatitemsValueBulk_ByUserId,
    patchStatitemValueBulk_ByUserId,
    updateStatitemValueBulk_ByUserId,
    getStatitemsValueBulk_ByUserId_ByNS,
    updateStatitemValueBulk_ByUserId_ByNS,
    updateStatitemValueResetBulk_ByUserId,
    deleteStatitem_ByUserId_ByStatCode,
    createStatitem_ByUserId_ByStatCode,
    patchStatitemValue_ByUserId_ByStatCode,
    updateStatitemValue_ByUserId_ByStatCode,
    updateStatitemValue_ByUserId_ByStatCode_ByNS,
    updateStatitemValueReset_ByUserId_ByStatCode
  }
}
