/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { PublicThirdPartyPlatformInfoArray } from './definitions/PublicThirdPartyPlatformInfoArray'

export class ThirdPartyCredential$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This is the Public API to Get All Active 3rd Platform Credential.
   */
  fetchV3NsPlatformsClientsActive<T = PublicThirdPartyPlatformInfoArray>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/clients/active'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicThirdPartyPlatformInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This is the Public API to Get All Active OIDC Platform Credential By Client ID
   */
  fetchV3NsPlatformsClientsOidc<T = PublicThirdPartyPlatformInfoArray>(queryParams: {
    clientId: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/clients/oidc'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicThirdPartyPlatformInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
