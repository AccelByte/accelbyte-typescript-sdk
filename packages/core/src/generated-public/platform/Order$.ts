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
/* eslint-disable camelcase */
import { OrderCreate } from './definitions/OrderCreate'
import { OrderHistoryInfoArray } from './definitions/OrderHistoryInfoArray'
import { OrderInfo } from './definitions/OrderInfo'
import { OrderPagingSlicedResult } from './definitions/OrderPagingSlicedResult'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Order$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchUsersByUseridOrders<T = OrderPagingSlicedResult>(
    userId: string,
    queryParams?: { itemId?: string | null; status?: string | null; offset?: number; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/orders'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, OrderPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postUsersByUseridOrders<T = OrderInfo>(userId: string, data: OrderCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/orders'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, OrderInfo)
  }

  fetchUsersByUseridOrdersByOrderno<T = OrderInfo>(userId: string, orderNo: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/orders/' + orderNo + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, OrderInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchUsersByUseridOrdersByOrdernoReceiptPdf(userId: string, orderNo: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/orders/' + orderNo + '/receipt.pdf'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  putUsersByUseridOrdersByOrdernoCancel<T = OrderInfo>(userId: string, orderNo: string): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/orders/' + orderNo + '/cancel'
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, OrderInfo)
  }

  fetchUsersByUseridOrdersByOrdernoHistory<T = OrderHistoryInfoArray>(userId: string, orderNo: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/orders/' + orderNo + '/history'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, OrderHistoryInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
