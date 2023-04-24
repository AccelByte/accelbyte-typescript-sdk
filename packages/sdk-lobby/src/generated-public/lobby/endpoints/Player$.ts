/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { GetAllPlayerBlockedByUsersResponse } from '../definitions/GetAllPlayerBlockedByUsersResponse'
import { GetAllPlayerBlockedUsersResponse } from '../definitions/GetAllPlayerBlockedUsersResponse'

export class Player$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required valid user authorization <br/> <br>load blocked players in a namespace based on user id <br/> Action Code: 50101
   */
  getPlayerUsersMeBlocked(): Promise<IResponseWithSync<GetAllPlayerBlockedUsersResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/blocked'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetAllPlayerBlockedUsersResponse, 'GetAllPlayerBlockedUsersResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user authorization <br/> <br>load get players who blocked this player in a namespace based on user id <br/> Action Code: 50101
   */
  getPlayerUsersMeBlockedBy(): Promise<IResponseWithSync<GetAllPlayerBlockedByUsersResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/player/namespaces/{namespace}/users/me/blocked-by'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetAllPlayerBlockedByUsersResponse, 'GetAllPlayerBlockedByUsersResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
