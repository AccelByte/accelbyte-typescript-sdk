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
import { PartyData } from '../definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../definitions/PartyPutCustomAttributesRequest.js'
import { PartyPutLimitSizeRequest } from '../definitions/PartyPutLimitSizeRequest.js'

export class Party$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required valid user authorization <br/> <br>load personal party data in a namespace based on Party ID <br/> Action Code: 50101
   */
  getPartyParty_ByPartyId(partyId: string): Promise<IResponseWithSync<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}'
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
   * Required valid user authorization <br/> <br>Set party limit, only party leader can call this endpoint.
   */
  updateLimitParty_ByPartyId(partyId: string, data: PartyPutLimitSizeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/limit'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required valid user authorization <br/> <br>update party attributes in a namespace.
   */
  updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<IResponse<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PartyData, 'PartyData')
  }
}
