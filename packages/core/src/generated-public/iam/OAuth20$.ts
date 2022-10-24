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
import { JwkSet } from './definitions/JwkSet'
import { RevocationList } from './definitions/RevocationList'
/* eslint-disable camelcase */
import { TokenIntrospectResponse } from './definitions/TokenIntrospectResponse'
import { TokenResponse } from './definitions/TokenResponse'
import { TokenResponseV3 } from './definitions/TokenResponseV3'
import { TokenThirdPartyResponse } from './definitions/TokenThirdPartyResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class OAuth20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchIamV3OauthAuthorize(queryParams?: {
    response_type: string | null
    client_id: string | null
    redirect_uri?: string | null
    state?: string | null
    scope?: string | null
    code_challenge?: string | null
    code_challenge_method?: string | null
    target_auth_page?: string | null
    createHeadless?: boolean | null
  }): Promise<IResponseWithSync<unknown>> {
    const params = {
      response_type: 'code',
      scope: 'commerce account social publishing analytics',
      code_challenge_method: 'plain',
      createHeadless: true,
      ...queryParams
    } as SDKRequestConfig
    const url = '/iam/v3/oauth/authorize'
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

  postIamV3OauthIntrospect<T = TokenIntrospectResponse>(data: { token: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/introspect'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenIntrospectResponse)
  }

  fetchIamV3OauthJwks<T = JwkSet>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/jwks'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, JwkSet)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postIamV3OauthMfaFactorChange(data: { mfaToken: string | null; factor: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/mfa/factor/change'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postIamV3OauthMfaVerify<T = TokenResponseV3>(data: {
    mfaToken: string | null
    factor: string | null
    code: string | null
    rememberDevice: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/mfa/verify'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponseV3)
  }

  fetchV3OauthUsersByUseridPlatformsByPlatformidPlatformToken<T = TokenThirdPartyResponse>(
    userId: string,
    platformId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/namespaces/' + this.namespace + '/users/' + userId + '/platforms/' + platformId + '/platformToken'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, TokenThirdPartyResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3OauthPlatformsByPlatformidAuthorize(
    platformId: string,
    queryParams?: { request_id: string | null; client_id?: string | null; redirect_uri?: string | null }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/oauth/platforms/' + platformId + '/authorize'
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

  postV3OauthPlatformsByPlatformidToken<T = TokenResponse>(
    platformId: string,
    data: {
      platform_token?: string | null
      client_id?: string | null
      device_id?: string | null
      createHeadless?: boolean | null
      macAddress?: string | null
    }
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/platforms/' + platformId + '/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponse)
  }

  fetchIamV3OauthRevocationlist<T = RevocationList>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/revocationlist'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RevocationList)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postIamV3OauthRevoke(data: { token: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/revoke'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postIamV3OauthToken<T = TokenResponseV3>(data: {
    grant_type: string | null
    username?: string | null
    password?: string | null
    code?: string | null
    code_verifier?: string | null
    client_id?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponseV3)
  }

  postIamV3OauthVerify<T = TokenResponseV3>(data: { token: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/verify'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, TokenResponseV3)
  }
}
