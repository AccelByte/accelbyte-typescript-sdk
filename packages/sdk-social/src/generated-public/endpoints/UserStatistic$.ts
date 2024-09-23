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
import { z } from 'zod'
import { ADtoObjectForUserStatItemValueArray } from '../../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemInc } from '../../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../../generated-definitions/StatItemUpdate.js'
import { UserStatItemInfoArray } from '../../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../../generated-definitions/UserStatItemPagingSlicedResult.js'

export class UserStatistic$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Public bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem
   */
  getStatitemsBulk(queryParams: { statCode: string | null; userIds: string | null }): Promise<Response<UserStatItemInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserStatItemInfoArray, 'UserStatItemInfoArray')
  }
  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeStatitems(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    statCodes?: string[]
    tags?: string[]
  }): Promise<Response<UserStatItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statitems'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserStatItemPagingSlicedResult,
      'UserStatItemPagingSlicedResult'
    )
  }
  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }
  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }
  /**
   * Public bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueBulk_v2(data: BulkUserStatItemUpdate[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }
  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitems_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null; tags?: string | null }
  ): Promise<Response<UserStatItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems'
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
  updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/value/reset/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatOperationResultArray,
      'BulkStatOperationResultArray'
    )
  }
  /**
   * Bulk create statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;&lt;/ul&gt;
   */
  createStatitemBulk_ByUserId(userId: string, data: BulkStatItemCreate[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/bulk'
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
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeStatitemsValueBulk(queryParams?: {
    additionalKey?: string | null
    statCodes?: string[]
    tags?: string[]
  }): Promise<Response<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ADtoObjectForUserStatItemValueArray,
      'ADtoObjectForUserStatItemValueArray'
    )
  }
  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitemsValueBulk_ByUserId(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<Response<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
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
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;
   */
  patchStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
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
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
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
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitemsValueBulk_ByUserId_v2(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<Response<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
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
   * Public bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueBulk_ByUserId_v2(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<Response<BulkStatOperationResultArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
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
   * Public bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result
   */
  updateStatitemValueResetBulk_ByUserId(userId: string, data: BulkStatItemReset[]): Promise<Response<BulkStatOperationResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/reset/bulk'
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
   * Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Create user&#39;s statItem.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<Response<StatItemIncResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }
  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<Response<StatItemIncResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }
  /**
   * Public update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem
   */
  updateStatitemValue_ByUserId_ByStatCode_v2(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<Response<StatItemIncResult>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }
  /**
   * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: updated user&#39;s statItem
   */
  updateStatitemValueReset_ByUserId_ByStatCode(userId: string, statCode: string): Promise<Response<StatItemIncResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value/reset'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }
}
