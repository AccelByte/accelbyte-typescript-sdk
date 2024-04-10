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
import { z } from 'zod'
import { BlockPlayerRequest } from '../../generated-definitions/BlockPlayerRequest.js'
import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { UnblockPlayerRequest } from '../../generated-definitions/UnblockPlayerRequest.js'

export class Player$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;add blocked players in a namespace based on user id &lt;br/&gt;
   */
  createPlayerUserMeBlock(data: BlockPlayerRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/block'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

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
   * Required valid user authorization &lt;br/&gt; unblock player in a namespace based on user id &lt;br/&gt;
   */
  createPlayerUserMeUnblock(data: UnblockPlayerRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/unblock'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
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
