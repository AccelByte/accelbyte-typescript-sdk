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
import { CountryLocationResponse } from './definitions/CountryLocationResponse'
import { GameTokenCodeResponse } from './definitions/GameTokenCodeResponse'
/* eslint-disable camelcase */
import { TokenResponseV3 } from './definitions/TokenResponseV3'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class OAuth20Extension$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postIamV3Authenticate(data: {
    user_name: string | null
    password: string | null
    request_id: string | null
    redirect_uri?: string | null
    client_id?: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/authenticate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postIamV3AuthenticateWithLink<T = TokenResponseV3>(data: {
    username: string | null
    password: string | null
    linkingToken: string | null
    client_id: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/authenticateWithLink'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponseV3)
  }

  postIamV3HeadlessToken<T = TokenResponseV3>(data: { linkingToken: string | null; extend_exp?: boolean | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/headless/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponseV3)
  }

  fetchIamV3LocationCountry<T = CountryLocationResponse>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/location/country'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CountryLocationResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postIamV3Logout(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/logout'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3NamespaceByNamespaceTokenRequest<T = GameTokenCodeResponse>(data: { client_id: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/namespace/' + this.namespace + '/token/request'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, GameTokenCodeResponse)
  }

  fetchV3PlatformsByPlatformidAuthenticate(
    platformId: string,
    queryParams?: {
      state: string | null
      ns?: string | null
      mode?: string | null
      op_endpoint?: string | null
      claimed_id?: string | null
      identity?: string | null
      return_to?: string | null
      response_nonce?: string | null
      assoc_handle?: string | null
      signed?: string | null
      sig?: string | null
      code?: string | null
      error?: string | null
    }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/platforms/' + platformId + '/authenticate'
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

  postIamV3TokenExchange<T = TokenResponseV3>(data: { code: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/token/exchange'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponseV3)
  }
}
