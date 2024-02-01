/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'

export class Player$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load blocked players in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  getPlayerUsersMeBlocked(): Promise<IResponseWithSync<GetAllPlayerBlockedUsersResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/blocked'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetAllPlayerBlockedUsersResponse, 'GetAllPlayerBlockedUsersResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load get players who blocked this player in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  getPlayerUsersMeBlockedBy(): Promise<IResponseWithSync<GetAllPlayerBlockedByUsersResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/blocked-by'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetAllPlayerBlockedByUsersResponse, 'GetAllPlayerBlockedByUsersResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
