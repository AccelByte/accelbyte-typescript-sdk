/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { AppEntitlementInfo } from '../../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { EntitlementDecrement } from '../../generated-definitions/EntitlementDecrement.js'
import { EntitlementDecrementResult } from '../../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementInfo } from '../../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementSoldRequest } from '../../generated-definitions/EntitlementSoldRequest.js'
import { EntitlementSoldResult } from '../../generated-definitions/EntitlementSoldResult.js'
import { EntitlementSplitRequest } from '../../generated-definitions/EntitlementSplitRequest.js'
import { EntitlementSplitResult } from '../../generated-definitions/EntitlementSplitResult.js'
import { EntitlementTransferRequest } from '../../generated-definitions/EntitlementTransferRequest.js'
import { EntitlementTransferResult } from '../../generated-definitions/EntitlementTransferResult.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { OwnershipToken } from '../../generated-definitions/OwnershipToken.js'
import { TimedOwnership } from '../../generated-definitions/TimedOwnership.js'
import { UserEntitlementHistoryPagingSlicedResultArray } from '../../generated-definitions/UserEntitlementHistoryPagingSlicedResultArray.js'

export class Entitlement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Query user entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      itemId?: string[]
      limit?: number
      offset?: number
    }
  ): Promise<IResponseWithSync<EntitlementPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementPagingSlicedResult, 'EntitlementPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlements by ids..&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByIds_ByUserId(
    userId: string,
    queryParams?: { availablePlatformOnly?: boolean | null; ids?: string[] }
  ): Promise<IResponseWithSync<EntitlementInfoArray>> {
    const params = { availablePlatformOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfoArray, 'EntitlementInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * Get user entitlement by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user app entitlement by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<IResponseWithSync<AppEntitlementInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AppEntitlementInfo, 'AppEntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement history&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user entitlement history list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsHistory_ByUserId(
    userId: string,
    queryParams?: {
      endDate?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      limit?: number
      offset?: number
      startDate?: string | null
    }
  ): Promise<IResponseWithSync<UserEntitlementHistoryPagingSlicedResultArray>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(
            () => resultPromise,
            UserEntitlementHistoryPagingSlicedResultArray,
            'UserEntitlementHistoryPagingSlicedResultArray'
          )
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Exists any my active entitlement of specified itemIds, skus and appIds&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipAny(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/any'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * Get user entitlement by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Gets an entitlement ownership token of specified itemIds, skus and appIds&lt;p&gt;The decoded ownership token header like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;kid&#34;: &#34;9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4&#34;, &#34;typ&#34;: &#34;JWT&#34;, &#34;alg&#34;: &#34;RS256&#34; } &lt;/code&gt;&lt;/pre&gt;That you can get the jwks by api &lt;baseUrl&gt;/platform/jwks, if the configured private key is same as IAM, &lt;p&gt;you can also get jwks from IAM endpoint. &lt;p&gt;The decoded ownership token payload like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;entitlements&#34;: [ { &#34;itemId&#34;: &#34;4c1296291f604c199f7bb7f0ee02e5f8&#34;, &#34;appType&#34;: null, &#34;appId&#34;: null, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;prime-plus&#34; }, { &#34;itemId&#34;: &#34;e8f4974cf45c4e1f8d4f0c6990c518bd&#34;, &#34;appType&#34;: &#34;GAME&#34;, &#34;appId&#34;: &#34;omeganebula&#34;, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;APPG005ON&#34; } ], &#34;sub&#34;: &#34;66459eb6a4e44e6fb0040bd20c1079a5&#34;, &#34;exp&#34;: 1619624360, &#34;iat&#34;: 1619624060 } &lt;/code&gt;&lt;/pre&gt;&lt;b&gt;if there&#39;s no active entitlement for the specific params, the entitlements section will be omitted&lt;/b&gt;.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipToken(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<OwnershipToken>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownershipToken'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, OwnershipToken, 'OwnershipToken')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; limit?: number; offset?: number }
  ): Promise<IResponseWithSync<AppEntitlementPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppType'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AppEntitlementPagingSlicedResult, 'AppEntitlementPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace app entitlement ownership&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byItemId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] }
  ): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/any'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by itemIds.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<IResponseWithSync<EntitlementOwnershipArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementOwnershipArray, 'EntitlementOwnershipArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSoldRequest
  ): Promise<IResponse<EntitlementSoldResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/sell'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementSoldResult, 'EntitlementSoldResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Split a specified use count of entitlement and create a new entitlement with splitting use count.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateSplit_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSplitRequest
  ): Promise<IResponse<EntitlementSplitResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/split'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementSplitResult, 'EntitlementSplitResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Transfer a specified use count from entitlement A to B..Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateTransfer_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementTransferRequest
  ): Promise<IResponse<EntitlementTransferResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/transfer'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementTransferResult, 'EntitlementTransferResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementDecrement
  ): Promise<IResponse<EntitlementDecrementResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/decrement'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementDecrementResult, 'EntitlementDecrementResult')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
