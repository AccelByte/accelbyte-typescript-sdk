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
import { PartyData } from '../../generated-definitions/PartyData.js'

export class PartyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get party data in a namespace.
   */
  getPartyParty_ByPartyId(partyId: string): Promise<IResponseWithSync<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PartyData, 'PartyData')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get party data in a namespace.
   */
  getParty_ByUserId(userId: string): Promise<IResponseWithSync<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/party/namespaces/{namespace}/users/{userId}/party'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PartyData, 'PartyData')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
