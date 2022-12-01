/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { AppEntitlementInfo } from './definitions/AppEntitlementInfo'
import { AppEntitlementPagingSlicedResult } from './definitions/AppEntitlementPagingSlicedResult'
/* eslint-disable camelcase */
import { EntitlementDecrement } from './definitions/EntitlementDecrement'
import { EntitlementDecrementResult } from './definitions/EntitlementDecrementResult'
import { EntitlementInfo } from './definitions/EntitlementInfo'
import { EntitlementOwnershipArray } from './definitions/EntitlementOwnershipArray'
import { EntitlementPagingSlicedResult } from './definitions/EntitlementPagingSlicedResult'
import { Ownership } from './definitions/Ownership'
import { OwnershipToken } from './definitions/OwnershipToken'
import { TimedOwnership } from './definitions/TimedOwnership'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Entitlement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get my app entitlement ownership by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace app entitlement ownership</b></li></ul></li></ul>
   */
  fetchUsersMeEntitlementsOwnershipByAppId<T = Ownership>(queryParams?: { appId: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Exists any my active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersMeEntitlementsOwnershipAny<T = Ownership>(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/any'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get my entitlement ownership by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace entitlement ownership by sku</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game namespace entitlement ownership by sku</b></li></ul></li></ul>
   */
  fetchUsersMeEntitlementsOwnershipBySku<T = TimedOwnership>(queryParams?: {
    sku: string | null
    entitlementClazz?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get my entitlement ownership by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace entitlement ownership by sku</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game namespace entitlement ownership by sku</b></li></ul></li></ul>
   */
  fetchUsersMeEntitlementsOwnershipByItemId<T = TimedOwnership>(queryParams?: {
    itemId: string | null
    entitlementClazz?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byItemId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Gets an entitlement ownership token of specified itemIds, skus and appIds<p>The decoded ownership token header like below:<p><pre><code>{
   *   "kid": "9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4",
   *   "typ": "JWT",
   *   "alg": "RS256"
   * }
   * </code></pre>That you can get the jwks by api <baseUrl>/platform/jwks, if the configured private key is same as IAM, <p>you can also get jwks from IAM endpoint. <p>The decoded ownership token payload like below:<p><pre><code>{
   *  "namespace": "accelbyte",
   *  "entitlements": [
   *   {
   *     "itemId": "4c1296291f604c199f7bb7f0ee02e5f8",
   *     "appType": null,
   *     "appId": null,
   *     "namespace": "accelbyte",
   *     "itemNamespace": "accelbyte",
   *     "sku": "prime-plus"
   *   },
   *   {
   *     "itemId": "e8f4974cf45c4e1f8d4f0c6990c518bd",
   *     "appType": "GAME",
   *     "appId": "omeganebula",
   *     "namespace": "accelbyte",
   *     "itemNamespace": "accelbyte",
   *     "sku": "APPG005ON"
   *   }
   *  ],
   * "sub": "66459eb6a4e44e6fb0040bd20c1079a5",
   * "exp": 1619624360,
   * "iat": 1619624060
   * }
   * </code></pre><b>if there's no active entitlement for the specific params, the entitlements section will be omitted</b>.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersMeEntitlementsOwnershipToken<T = OwnershipToken>(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownershipToken'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, OwnershipToken)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsOwnershipAny<T = Ownership>(
    userId: string,
    queryParams?: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/any'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user entitlement ownership by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsOwnershipByItemId<T = TimedOwnership>(
    userId: string,
    queryParams?: { itemId: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user app entitlement by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsByAppId<T = AppEntitlementInfo>(
    userId: string,
    queryParams?: { appId: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AppEntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user entitlement ownership by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsOwnershipBySku<T = TimedOwnership>(
    userId: string,
    queryParams?: { sku: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user entitlement ownership by itemIds.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsOwnershipByItemIds<T = EntitlementOwnershipArray>(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementOwnershipArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Query user entitlements for a specific user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement list</li></ul>
   */
  fetchUsersByUseridEntitlements<T = EntitlementPagingSlicedResult>(
    userId: string,
    queryParams?: {
      entitlementClazz?: string | null
      appType?: string | null
      entitlementName?: string | null
      itemId?: string[]
      features?: string[]
      offset?: number
      limit?: number
    }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user entitlement by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsByItemId<T = EntitlementInfo>(
    userId: string,
    queryParams?: { itemId: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user entitlement.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement</li></ul>
   */
  fetchUsersByUseridEntitlementsByEntitlementid<T = EntitlementInfo>(userId: string, entitlementId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user app entitlement ownership by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsOwnershipByAppId<T = Ownership>(
    userId: string,
    queryParams?: { appId: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get user entitlement by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  fetchUsersByUseridEntitlementsBySku<T = EntitlementInfo>(
    userId: string,
    queryParams?: { sku: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Query app entitlements by appType.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: app entitlement pagination</li></ul>
   */
  fetchUsersByUseridEntitlementsByAppType<T = AppEntitlementPagingSlicedResult>(
    userId: string,
    queryParams?: { appType: string | null; offset?: number; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppType'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AppEntitlementPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: consumed entitlement</li></ul>
   */
  putUsersByUseridEntitlementsByEntitlementidDecrement<T = EntitlementDecrementResult>(
    userId: string,
    entitlementId: string,
    data: EntitlementDecrement
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/decrement'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, EntitlementDecrementResult)
  }
}
