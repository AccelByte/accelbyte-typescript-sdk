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
import { AppEntitlementInfo } from '../definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../definitions/AppEntitlementPagingSlicedResult.js'
import { EntitlementDecrement } from '../definitions/EntitlementDecrement.js'
import { EntitlementDecrementResult } from '../definitions/EntitlementDecrementResult.js'
import { EntitlementInfo } from '../definitions/EntitlementInfo.js'
import { EntitlementOwnershipArray } from '../definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../definitions/EntitlementPagingSlicedResult.js'
import { EntitlementSoldRequest } from '../definitions/EntitlementSoldRequest.js'
import { EntitlementSoldResult } from '../definitions/EntitlementSoldResult.js'
import { Ownership } from '../definitions/Ownership.js'
import { OwnershipToken } from '../definitions/OwnershipToken.js'
import { TimedOwnership } from '../definitions/TimedOwnership.js'

export class Entitlement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query user entitlements for a specific user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement list</li></ul>
   */
  getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
      appType?: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'
      entitlementName?: string | null
      itemId?: string[]
      features?: string[]
      offset?: number
      limit?: number
    }
  ): Promise<IResponseWithSync<EntitlementPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementPagingSlicedResult, 'EntitlementPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user app entitlement by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<IResponseWithSync<AppEntitlementInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AppEntitlementInfo, 'AppEntitlementInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Exists any my active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getUsersMeEntitlementsOwnershipAny(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/any'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership, 'Ownership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Gets an entitlement ownership token of specified itemIds, skus and appIds<p>The decoded ownership token header like below:<p><pre><code>{ "kid": "9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4", "typ": "JWT", "alg": "RS256" } </code></pre>That you can get the jwks by api <baseUrl>/platform/jwks, if the configured private key is same as IAM, <p>you can also get jwks from IAM endpoint. <p>The decoded ownership token payload like below:<p><pre><code>{ "namespace": "accelbyte", "entitlements": [ { "itemId": "4c1296291f604c199f7bb7f0ee02e5f8", "appType": null, "appId": null, "namespace": "accelbyte", "itemNamespace": "accelbyte", "sku": "prime-plus" }, { "itemId": "e8f4974cf45c4e1f8d4f0c6990c518bd", "appType": "GAME", "appId": "omeganebula", "namespace": "accelbyte", "itemNamespace": "accelbyte", "sku": "APPG005ON" } ], "sub": "66459eb6a4e44e6fb0040bd20c1079a5", "exp": 1619624360, "iat": 1619624060 } </code></pre><b>if there's no active entitlement for the specific params, the entitlements section will be omitted</b>.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getUsersMeEntitlementsOwnershipToken(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<OwnershipToken>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownershipToken'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, OwnershipToken, 'OwnershipToken')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query app entitlements by appType.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: app entitlement pagination</li></ul>
   */
  getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'; offset?: number; limit?: number }
  ): Promise<IResponseWithSync<AppEntitlementPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppType'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AppEntitlementPagingSlicedResult, 'AppEntitlementPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my entitlement ownership by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace entitlement ownership by sku</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game namespace entitlement ownership by sku</b></li></ul></li></ul>
   */
  getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
  }): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my app entitlement ownership by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace app entitlement ownership</b></li></ul></li></ul>
   */
  getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership, 'Ownership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get my entitlement ownership by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace entitlement ownership by sku</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game namespace entitlement ownership by sku</b></li></ul></li></ul>
   */
  getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
  }): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byItemId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  ): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/any'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership, 'Ownership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement</li></ul>
   */
  getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user app entitlement ownership by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership, 'Ownership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by itemIds.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
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

    const res = () => Validate.responseType(() => resultPromise, EntitlementOwnershipArray, 'EntitlementOwnershipArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: entitlement</li></ul>
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

    return Validate.responseType(() => resultPromise, EntitlementSoldResult, 'EntitlementSoldResult')
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: consumed entitlement</li></ul>
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

    return Validate.responseType(() => resultPromise, EntitlementDecrementResult, 'EntitlementDecrementResult')
  }
}
