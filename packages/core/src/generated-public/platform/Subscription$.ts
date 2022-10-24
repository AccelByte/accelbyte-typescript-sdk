/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BillingHistoryPagingSlicedResult } from './definitions/BillingHistoryPagingSlicedResult'
/* eslint-disable camelcase */
import { CancelRequest } from './definitions/CancelRequest'
import { Subscribable } from './definitions/Subscribable'
import { SubscribeRequest } from './definitions/SubscribeRequest'
import { SubscriptionInfo } from './definitions/SubscriptionInfo'
import { SubscriptionPagingSlicedResult } from './definitions/SubscriptionPagingSlicedResult'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Subscription$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchUsersByUseridSubscriptionsBySubscriptionid<T = SubscriptionInfo>(
    userId: string,
    subscriptionId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions/' + subscriptionId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, SubscriptionInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridSubscriptionsBySubscriptionidHistory<T = BillingHistoryPagingSlicedResult>(
    userId: string,
    subscriptionId: string,
    queryParams?: { excludeFree?: boolean | null; offset?: number; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions/' + subscriptionId + '/history'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BillingHistoryPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridSubscriptionsSubscribableByItemId<T = Subscribable>(
    userId: string,
    queryParams?: { itemId: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions/subscribable/byItemId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, Subscribable)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridSubscriptions<T = SubscriptionPagingSlicedResult>(
    userId: string,
    queryParams?: {
      itemId?: string | null
      sku?: string | null
      status?: string | null
      chargeStatus?: string | null
      subscribedBy?: string | null
      offset?: number
      limit?: number
    }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, SubscriptionPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postUsersByUseridSubscriptions(userId: string, data: SubscribeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridSubscriptionsBySubscriptionidCancel<T = SubscriptionInfo>(
    userId: string,
    subscriptionId: string,
    data: CancelRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions/' + subscriptionId + '/cancel'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, SubscriptionInfo)
  }

  putUsersByUseridSubscriptionsBySubscriptionidBillingAccount<T = SubscriptionInfo>(
    userId: string,
    subscriptionId: string
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url =
      '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/subscriptions/' + subscriptionId + '/billingAccount'
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, SubscriptionInfo)
  }
}
