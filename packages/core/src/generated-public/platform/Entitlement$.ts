/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { AppEntitlementInfo } from './definitions/AppEntitlementInfo'
import { AppEntitlementPagingSlicedResult } from './definitions/AppEntitlementPagingSlicedResult'
/* eslint-disable camelcase */
import { EntitlementDecrement } from './definitions/EntitlementDecrement'
import { EntitlementInfo } from './definitions/EntitlementInfo'
import { EntitlementOwnershipArray } from './definitions/EntitlementOwnershipArray'
import { EntitlementPagingSlicedResult } from './definitions/EntitlementPagingSlicedResult'
import { Ownership } from './definitions/Ownership'
import { OwnershipToken } from './definitions/OwnershipToken'
import { TimedOwnership } from './definitions/TimedOwnership'
import { TrackedEntitlementInfo } from './definitions/TrackedEntitlementInfo'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Entitlement$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchUsersMeEntitlementsOwnershipByAppId<T = Ownership>(queryParams?: { appId: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/me/entitlements/ownership/byAppId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersMeEntitlementsOwnershipAny<T = Ownership>(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/me/entitlements/ownership/any'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersMeEntitlementsOwnershipBySku<T = TimedOwnership>(queryParams?: {
    sku: string | null
    entitlementClazz?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/me/entitlements/ownership/bySku'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersMeEntitlementsOwnershipByItemId<T = TimedOwnership>(queryParams?: {
    itemId: string | null
    entitlementClazz?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/me/entitlements/ownership/byItemId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersMeEntitlementsOwnershipToken<T = OwnershipToken>(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/me/entitlements/ownershipToken'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, OwnershipToken)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsOwnershipAny<T = Ownership>(
    userId: string,
    queryParams?: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/ownership/any'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsOwnershipByItemId<T = TimedOwnership>(
    userId: string,
    queryParams?: { itemId: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/ownership/byItemId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsByAppId<T = AppEntitlementInfo>(
    userId: string,
    queryParams?: { appId: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/byAppId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, AppEntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsOwnershipBySku<T = TimedOwnership>(
    userId: string,
    queryParams?: { sku: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/ownership/bySku'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, TimedOwnership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsOwnershipByItemIds<T = EntitlementOwnershipArray>(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/ownership/byItemIds'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EntitlementOwnershipArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

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
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EntitlementPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsByItemId<T = EntitlementInfo>(
    userId: string,
    queryParams?: { itemId: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/byItemId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsByEntitlementid<T = EntitlementInfo>(userId: string, entitlementId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/' + entitlementId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsOwnershipByAppId<T = Ownership>(
    userId: string,
    queryParams?: { appId: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/ownership/byAppId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, Ownership)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsBySku<T = EntitlementInfo>(
    userId: string,
    queryParams?: { sku: string | null; entitlementClazz?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/bySku'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EntitlementInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridEntitlementsByAppType<T = AppEntitlementPagingSlicedResult>(
    userId: string,
    queryParams?: { appType: string | null; offset?: number; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/byAppType'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, AppEntitlementPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  putUsersByUseridEntitlementsByEntitlementidDecrement<T = TrackedEntitlementInfo>(
    userId: string,
    entitlementId: string,
    data: EntitlementDecrement
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/entitlements/' + entitlementId + '/decrement'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, TrackedEntitlementInfo)
  }
}
