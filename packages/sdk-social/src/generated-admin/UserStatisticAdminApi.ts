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
import { ADtoObjectForResettingUserStatItems } from '../generated-definitions/ADtoObjectForResettingUserStatItems.js'
import { ADtoObjectForUserStatItemValueArray } from '../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemByStatCodes } from '../generated-definitions/BulkUserStatItemByStatCodes.js'
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

export function UserStatisticAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getStatitemsBulk(queryParams: {
    statCode: string | null
    userIds: string | null
  }): Promise<AxiosResponse<UserStatItemInfoArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueBulk_v2(data: BulkUserStatItemUpdate[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

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
  ): Promise<AxiosResponse<UserStatItemPagingSlicedResult>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitems_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatitems_ByStatCode(
    statCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<AxiosResponse<StatItemValuePagingSlicedResult>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitems_ByStatCode(statCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatitemBulk_ByUserId(
    userId: string,
    data: BulkStatItemCreate[]
  ): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatitemBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatitemsValueBulkGetOrDefault(queryParams: {
    statCode: string | null
    userIds: string[]
  }): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulkGetOrDefault(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatitemsValueBulkGetOrDefault_v2(queryParams: {
    statCode: string | null
    userIds: string[]
    additionalKey?: string | null
  }): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulkGetOrDefault_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchStatitemValueBulk_ByUserId(
    userId: string,
    data: BulkStatItemInc[]
  ): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueBulk_ByUserId(
    userId: string,
    data: BulkStatItemInc[]
  ): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatitemsValueBulk_ByUserId_v2(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulk_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueBulk_ByUserId_v2(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByUserId_v2(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueResetBulk_ByUserId(
    userId: string,
    data: BulkStatItemReset[]
  ): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatitem_ByUserId_ByStatCode(userId, statCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueResetBulk_ByUserId_v2(
    userId: string,
    data: ADtoObjectForResettingUserStatItems[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk_ByUserId_v2(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStatitem_ByUserId_ByStatCode_v2(
    userId: string,
    statCode: string,
    queryParams?: { additionalKey?: string | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode_v2(userId, statCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchStatitemValue_ByUserId_ByStatCode(
    userId: string,
    statCode: string,
    data: StatItemInc
  ): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatitemValue_ByUserId_ByStatCode(userId, statCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValue_ByUserId_ByStatCode_v2(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode_v2(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatitemValueBulkGetOrDefault_ByUserId_v2(
    userId: string,
    data: BulkUserStatItemByStatCodes,
    queryParams?: { additionalKey?: string | null }
  ): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatitemValueBulkGetOrDefault_ByUserId_v2(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatitemValueReset_ByUserId_ByStatCode(
    userId: string,
    statCode: string,
    data: StatResetInfo,
    queryParams?: { additionalKey?: string | null }
  ): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatisticAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueReset_ByUserId_ByStatCode(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem
     */
    getStatitemsBulk,
    /**
     * Bulk update multiple user&#39;s statitems value.&lt;br&gt;
     */
    patchStatitemValueBulk,
    /**
     * Bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
     */
    updateStatitemValueBulk,
    /**
     * Bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result
     */
    updateStatitemValueBulk_v2,
    /**
     * List user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
     */
    getStatitems_ByUserId,
    /**
     * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: bulk updated result
     */
    updateStatitemValueResetBulk,
    /**
     * Get users&#39; stat item values for a given namespace and statCode. Other info: + *Returns*: list of users&#39; stat item values
     */
    getStatitems_ByStatCode,
    /**
     * Bulk create user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;
     */
    createStatitemBulk_ByUserId,
    /**
     * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Returns*: list of user&#39;s stat item values
     */
    getStatitemsValueBulkGetOrDefault,
    /**
     * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Returns*: list of user&#39;s stat item values
     */
    getStatitemsValueBulkGetOrDefault_v2,
    /**
     * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
     */
    patchStatitemValueBulk_ByUserId,
    /**
     * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
     */
    updateStatitemValueBulk_ByUserId,
    /**
     * Admin list all statItems of user&lt;br&gt;NOTE: &lt;b&gt;Legacy endpoint&lt;/b&gt;, please use POST /v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk/getOrDefault&lt;ul&gt;&lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
     */
    getStatitemsValueBulk_ByUserId_v2,
    /**
     * Bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result
     */
    updateStatitemValueBulk_ByUserId_v2,
    /**
     * Bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result
     */
    updateStatitemValueResetBulk_ByUserId,
    /**
     * This endpoint is for testing purpose. Use this endpoint for cleaning up after testing.&lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
     */
    deleteStatitem_ByUserId_ByStatCode,
    /**
     * Create statItem for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
     */
    createStatitem_ByUserId_ByStatCode,
    /**
     * Bulk reset user&#39;s statitem values for given namespace and user. Other detail info: + *Returns*: bulk updated result
     */
    updateStatitemValueResetBulk_ByUserId_v2,
    /**
     * Delete user&#39;s stat items for given namespace, statCode, and user Id. If query param *additionalKey* is provided, it will delete user stat items of specific key (i.e. characterName). Otherwise, it will delete all stat items related to the user Id. &lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
     */
    deleteStatitem_ByUserId_ByStatCode_v2,
    /**
     * Update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
     */
    patchStatitemValue_ByUserId_ByStatCode,
    /**
     * Update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem
     */
    updateStatitemValue_ByUserId_ByStatCode_v2,
    /**
     * Bulk get user&#39;s statitems value for given namespace and user by multiple stat codes. Will return default value if player doesn&#39;t have the stat. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ) + *Max stat codes*: 20 + *Returns*: list of user&#39;s stat item values
     */
    createStatitemValueBulkGetOrDefault_ByUserId_v2,
    /**
     * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: updated user&#39;s statItem
     */
    updateStatitemValueReset_ByUserId_ByStatCode
  }
}
