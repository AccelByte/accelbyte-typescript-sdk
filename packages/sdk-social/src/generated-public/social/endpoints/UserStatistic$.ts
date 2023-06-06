/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ADtoObjectForUserStatItemValueArray } from '../definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemInc } from '../definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../definitions/StatItemInc.js'
import { StatItemIncResult } from '../definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../definitions/StatItemUpdate.js'
import { UserStatItemInfoArray } from '../definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../definitions/UserStatItemPagingSlicedResult.js'

export class UserStatistic$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Public bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=2 (READ) + *Returns*: list of user&#39;s statItem
   */
  getStatitemsBulk(queryParams: { statCode: string | null; userIds: string | null }): Promise<IResponseWithSync<UserStatItemInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatItemInfoArray, 'UserStatItemInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeStatitems(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    statCodes?: string[]
    tags?: string[]
  }): Promise<IResponseWithSync<UserStatItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statitems'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatItemPagingSlicedResult, 'UserStatItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  updateStatitemValueBulk_ByNS(data: BulkUserStatItemUpdate[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitems_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null; tags?: string | null }
  ): Promise<IResponseWithSync<UserStatItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatItemPagingSlicedResult, 'UserStatItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statitems/value/reset/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Bulk create statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;&lt;/ul&gt;
   */
  createStatitemBulk_ByUserId(userId: string, data: BulkStatItemCreate[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeStatitemsValueBulk(queryParams?: {
    additionalKey?: string | null
    statCodes?: string[]
    tags?: string[]
  }): Promise<IResponseWithSync<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statitems/value/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ADtoObjectForUserStatItemValueArray, 'ADtoObjectForUserStatItemValueArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitemsValueBulk_ByUserId(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<IResponseWithSync<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ADtoObjectForUserStatItemValueArray, 'ADtoObjectForUserStatItemValueArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;
   */
  patchStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValueBulk_ByUserId(userId: string, data: BulkStatItemInc[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatitemsValueBulk_ByUserId_ByNS(
    userId: string,
    queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] }
  ): Promise<IResponseWithSync<ADtoObjectForUserStatItemValueArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ADtoObjectForUserStatItemValueArray, 'ADtoObjectForUserStatItemValueArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  updateStatitemValueBulk_ByUserId_ByNS(
    userId: string,
    data: BulkStatItemUpdate[],
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/users/{userId}/statitems/value/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Public bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: bulk updated result
   */
  updateStatitemValueResetBulk_ByUserId(userId: string, data: BulkStatItemReset[]): Promise<IResponse<BulkStatOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statitems/value/reset/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatOperationResultArray, 'BulkStatOperationResultArray')
  }

  /**
   * Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
   */
  deleteStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Create user&#39;s statItem.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  createStatitem_ByUserId_ByStatCode(userId: string, statCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  patchStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<IResponse<StatItemIncResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }

  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatitemValue_ByUserId_ByStatCode(userId: string, statCode: string, data: StatItemInc): Promise<IResponse<StatItemIncResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }

  /**
   * Public update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: updated user&#39;s statItem
   */
  updateStatitemValue_ByUserId_ByStatCode_ByNS(
    userId: string,
    statCode: string,
    data: StatItemUpdate,
    queryParams?: { additionalKey?: string | null }
  ): Promise<IResponse<StatItemIncResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v2/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }

  /**
   * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Required permission*: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=4 (UPDATE) + *Returns*: updated user&#39;s statItem
   */
  updateStatitemValueReset_ByUserId_ByStatCode(userId: string, statCode: string): Promise<IResponse<StatItemIncResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/stats/{statCode}/statitems/value/reset'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, StatItemIncResult, 'StatItemIncResult')
  }
}
