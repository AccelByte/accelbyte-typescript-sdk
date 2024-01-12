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
import { PartyQueryResponse } from '../../generated-definitions/PartyQueryResponse.js'

export class PartyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query parties.
   */
  getParties(queryParams?: {
    joinability?: string | null
    key?: string | null
    leaderID?: string | null
    limit?: number
    memberID?: string | null
    memberStatus?: string | null
    offset?: number
    order?: string | null
    orderBy?: string | null
    partyID?: string | null
    value?: string | null
  }): Promise<IResponseWithSync<PartyQueryResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PartyQueryResponse, 'PartyQueryResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
