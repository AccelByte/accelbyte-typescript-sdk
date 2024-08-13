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
import { z } from 'zod'
import { ADtoObjectForResettingUserStatItems } from '../../generated-definitions/ADtoObjectForResettingUserStatItems.js'
import { ADtoObjectForUserStatItemValueArray } from '../../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemByStatCodes } from '../../generated-definitions/BulkUserStatItemByStatCodes.js'
import { BulkUserStatItemInc } from '../../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../../generated-definitions/StatItemUpdate.js'
import { StatItemValuePagingSlicedResult } from '../../generated-definitions/StatItemValuePagingSlicedResult.js'
import { StatResetInfo } from '../../generated-definitions/StatResetInfo.js'
import { UserStatItemInfoArray } from '../../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../../generated-definitions/UserStatItemPagingSlicedResult.js'

export class UserStatisticAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem
   */
  getStatitemsBulk(queryParams: { statCode: string | null; userIds: string | null }): Promise<IResponse<UserStatItemInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statitems/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserStatItemInfoArray, 'UserStatItemInfoArray')
  }

  /**
   * Bulk update multiple user&#39;s statitems value.&lt;br&gt;
   */
  patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueBulk_ByNS(data: BulkUserStatItemUpdate[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * List user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitems_ByUserId(
    userId: string,
    queryParams?: {
      isPublic?: boolean | null
      limit?: number
      offset?: number
      sortBy?: string | null
      statCodes?: string | null
      tags?: string | null
    }
  ): Promise<IResponse<UserStatItemPagingSlicedResult>> {
    const params = { limit: 20, sortBy: 'updatedAt:asc', ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserStatItemPagingSlicedResult,
      'UserStatItemPagingSlicedResult'
    )
  }

  /**
   * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statitems/value/reset/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Get users&#39; stat item values for a given namespace and statCode. Other info: + *Returns*: list of users&#39; stat item values
   */
  getStatitems_ByStatCode(
    statCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<IResponse<StatItemValuePagingSlicedResult>> {
    const params = { limit: 20, sortBy: 'value:desc', ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StatItemValuePagingSlicedResult,
      'StatItemValuePagingSlicedResult'
    )
  }

  /**
   * Bulk create user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;
   */
  createStatitemBulk_ByUserId(userId: string, data: BulkStatItemCreate[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/statitems/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Returns*: list of user&#39;s stat item values
   */
  getStatitemsValueBulkGetOrDefault(queryParams: {
    statCode: string | null
    userIds: string[]
  }): Promise<IResponse<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statitems/value/bulk/getOrDefault'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ADtoObjectForUserStatItemValueArray,
      'ADtoObjectForUserStatItemValueArray'
    )
  }

  /**
   * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Returns*: list of user&#39;s stat item values
   */
  getStatitemsValueBulkGetOrDefault_ByNS(queryParams: {
    statCode: string | null
    userIds: string[]
    additionalKey?: string | null
  }): Promise<IResponse<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/statitems/value/bulk/getOrDefault'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ADtoObjectForUserStatItemValueArray,
      'ADtoObjectForUserStatItemValueArray'
    )
  }

  /**
   * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Admin list all statItems of user&lt;br&gt;NOTE: &lt;b&gt;Legacy endpoint&lt;/b&gt;, please use POST /v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk/getOrDefault&lt;ul&gt;&lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitemsValueBulk_ByUserId(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<IResponse<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ADtoObjectForUserStatItemValueArray,
      'ADtoObjectForUserStatItemValueArray'
    )
  }

  /**
   * Bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueBulk_ByUserId_ByNS(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueResetBulk_ByUserId(userId: string, data: BulkStatItemReset[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/statitems/value/reset/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * This endpoint is for testing purpose. Use this endpoint for cleaning up after testing.&lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Create statItem for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Bulk reset user&#39;s statitem values for given namespace and user. Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueResetBulk_ByUserId_ByNS(
    userId: string,
    data: ADtoObjectForResettingUserStatItems[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/reset/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }

  /**
   * Delete user&#39;s stat items for given namespace, statCode, and user Id. If query param *additionalKey* is provided, it will delete user stat items of specific key (i.e. characterName). Otherwise, it will delete all stat items related to the user Id. &lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  deleteStatitem_ByUserId_ByStatCode_ByNS(
    userId: string,
    statCode: string,
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<IResponse<StatItemIncResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }

  /**
   * Update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem
   */
  updateStatitemValue_ByUserId_ByStatCode(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<StatItemIncResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }

  /**
   * Bulk get user&#39;s statitems value for given namespace and user by multiple stat codes. Will return default value if player doesn&#39;t have the stat. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ) + *Max stat codes*: 20 + *Returns*: list of user&#39;s stat item values
   */
  createStatitemValueBulkGetOrDefault_ByUserId(
    userId: string,
    data: BulkUserStatItemByStatCodes,
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk/getOrDefault'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ADtoObjectForUserStatItemValueArray,
      'ADtoObjectForUserStatItemValueArray'
    )
  }

  /**
   * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: updated user&#39;s statItem
   */
  updateStatitemValueReset_ByUserId_ByStatCode(
    userId: string,
    statCode: string,
    data: StatResetInfo,
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<StatItemIncResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value/reset'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }
}
