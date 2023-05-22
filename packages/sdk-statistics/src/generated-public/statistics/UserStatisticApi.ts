/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ADtoObjectForUserStatItemValueArray } from './definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from './definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from './definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from './definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from './definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from './definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemInc } from './definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from './definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from './definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from './definitions/StatItemInc.js'
import { StatItemIncResult } from './definitions/StatItemIncResult.js'
import { StatItemUpdate } from './definitions/StatItemUpdate.js'
import { UserStatItemInfoArray } from './definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from './definitions/UserStatItemPagingSlicedResult.js'
import { UserStatistic$ } from './endpoints/UserStatistic$.js'

export function UserStatisticApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Public bulk fetch multiple user's statitem value for a given namespace and statCode. Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:STATITEM", action=2 (READ) + *Returns*: list of user's statItem
   */
  async function getStatitemsBulk(queryParams: { statCode: string | null; userIds: string | null }): Promise<UserStatItemInfoArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatitemsBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems by pagination.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat items</li></ul>
   */
  async function getUsersMeStatitems(queryParams?: {
    statCodes?: string[]
    tags?: string[]
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<UserStatItemPagingSlicedResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeStatitems(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update multiple user's statitems value.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STATITEM", action=4 (UPDATE)</li><li><i>Returns</i>: bulk updated result</li></ul>
   */
  async function updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update multiple user's statitems value.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STATITEM", action=4 (UPDATE)</li><li><i>Returns</i>: bulk updated result</li></ul>
   */
  async function patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update multiple user's statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it's larger than the existing value + *MIN*: update user statitem with the specified value if it's lower than the existing value Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:STATITEM", action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueBulk_ByNS(data: BulkUserStatItemUpdate[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueBulk_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems by pagination.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat items</li></ul>
   */
  async function getStatitems_ByUserId(
    userId: string,
    queryParams?: { statCodes?: string | null; tags?: string | null; offset?: number; limit?: number; sortBy?: string | null }
  ): Promise<UserStatItemPagingSlicedResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatitems_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk reset multiple user's statitems value. User's statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:STATITEM", action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueResetBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk create statItems.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=1 (CREATE)</li><li><i>Returns</i>: bulk created result</li></ul>
   */
  async function createStatitemBulk_ByUserId(userId: string, data: BulkStatItemCreate[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createStatitemBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems of user.<br>NOTE: <li>If stat code does not exist, will ignore this stat code.</li><li>If stat item does not exist, will return default value</li></ul>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat items</li></ul>
   */
  async function getUsersMeStatitemsValueBulk(queryParams?: {
    statCodes?: string[]
    tags?: string[]
    additionalKey?: string | null
  }): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeStatitemsValueBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems of user.<br>NOTE: <li>If stat code does not exist, will ignore this stat code.</li><li>If stat item does not exist, will return default value</li></ul>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat items</li></ul>
   */
  async function getStatitemsValueBulk_ByUserId(
    userId: string,
    queryParams?: { statCodes?: string[]; tags?: string[]; additionalKey?: string | null }
  ): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatitemsValueBulk_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update user's statitems value.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE)</li><li><i>Returns</i>: bulk updated result</li></ul>
   */
  async function updateStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update user's statitems value.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE)</li><li><i>Returns</i>: bulk updated result</li>
   */
  async function patchStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public list all statItems of user.<br>NOTE: <li>If stat code does not exist, will ignore this stat code.</li><li>If stat item does not exist, will return default value</li></ul>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat items</li></ul>
   */
  async function getStatitemsValueBulk_ByUserId_ByNS(
    userId: string,
    queryParams?: { statCodes?: string[]; tags?: string[]; additionalKey?: string | null }
  ): Promise<ADtoObjectForUserStatItemValueArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatitemsValueBulk_ByUserId_ByNS(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk update user's statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it's larger than the existing value + *MIN*: update user statitem with the specified value if it's lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user's statitems, such as character's statitems. If provided, user's statitems will be saved with key: *userId_additionalKey* Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueBulk_ByUserId_ByNS(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueBulk_ByUserId_ByNS(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public bulk reset user's statitems value for given namespace and user. Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE) + *Returns*: bulk updated result
   */
  async function updateStatitemValueResetBulk_ByUserId(userId: string, data: BulkStatItemReset[]): Promise<BulkStatOperationResultArray> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueResetBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create user's statItem.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=1 (CREATE)</li><li><i>Returns</i>: created user's statItem</li></ul>
   */
  async function createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<unknown> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user's statItems given stat code.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=8 (DELETE)</li><li><i>Returns</i>: no content</li></li>
   */
  async function deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<unknown> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public update user's statitem value.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE)</li><li><i>Returns</i>: updated user's statItem</li></ul>
   */
  async function updateStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode(userId, statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public update user's statitem value.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE)</li><li><i>Returns</i>: updated user's statItem</li></ul>
   */
  async function patchStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchStatitemValue_ByUserId_ByStatCode(userId, statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public update user's statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it's larger than the existing value + *MIN*: update user statitem with the specified value if it's lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user's statitems, such as character's statitems. If provided, user's statitems will be saved with key: *userId_additionalKey* Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE) + *Returns*: updated user's statItem
   */
  async function updateStatitemValue_ByUserId_ByStatCode_ByNS(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode_ByNS(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reset user's statitem value for a given namespace and user. User's statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Required permission*: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=4 (UPDATE) + *Returns*: updated user's statItem
   */
  async function updateStatitemValueReset_ByUserId_ByStatCode(userId: string, statCode: string): Promise<StatItemIncResult> {
    const $ = new UserStatistic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateStatitemValueReset_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatitemsBulk,
    getUsersMeStatitems,
    updateStatitemValueBulk,
    patchStatitemValueBulk,
    updateStatitemValueBulk_ByNS,
    getStatitems_ByUserId,
    updateStatitemValueResetBulk,
    createStatitemBulk_ByUserId,
    getUsersMeStatitemsValueBulk,
    getStatitemsValueBulk_ByUserId,
    updateStatitemValueBulk_ByUserId,
    patchStatitemValueBulk_ByUserId,
    getStatitemsValueBulk_ByUserId_ByNS,
    updateStatitemValueBulk_ByUserId_ByNS,
    updateStatitemValueResetBulk_ByUserId,
    createStatitem_ByUserId_ByStatCode,
    deleteStatitem_ByUserId_ByStatCode,
    updateStatitemValue_ByUserId_ByStatCode,
    patchStatitemValue_ByUserId_ByStatCode,
    updateStatitemValue_ByUserId_ByStatCode_ByNS,
    updateStatitemValueReset_ByUserId_ByStatCode
  }
}
