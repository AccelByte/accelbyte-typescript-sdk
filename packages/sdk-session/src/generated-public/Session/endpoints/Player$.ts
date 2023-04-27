/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PlayerAttributesRequestBody } from '../definitions/PlayerAttributesRequestBody.js'
import { PlayerAttributesResponseBody } from '../definitions/PlayerAttributesResponseBody.js'

export class Player$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get player attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player's 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - currentPlatform : latest user game platform.
   */
  getUsersMeAttributes(): Promise<IResponseWithSync<PlayerAttributesResponseBody>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlayerAttributesResponseBody, 'PlayerAttributesResponseBody')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API behaves to upsert player's attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player's 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - currentPlatform : latest user game platform.
   */
  createUserMeAttribute(data: PlayerAttributesRequestBody): Promise<IResponse<PlayerAttributesResponseBody>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerAttributesResponseBody, 'PlayerAttributesResponseBody')
  }

  /**
   * Reset player attributes.
   */
  deleteUserMeAttribute(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/attributes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
