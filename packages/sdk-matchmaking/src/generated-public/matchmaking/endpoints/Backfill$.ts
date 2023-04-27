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
import { BackFillAcceptRequest } from '../definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../definitions/BackfillProposalResponse.js'

export class Backfill$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [CREATE] Required Scope: social Create backfill ticket
   */
  createBackfill(data: BackFillCreateRequest): Promise<IResponse<BackfillCreateResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BackfillCreateResponse, 'BackfillCreateResponse')
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [GET] Required Scope: social Get backfill proposal
   */
  getBackfillProposal(queryParams: { sessionID: string | null }): Promise<IResponseWithSync<BackfillProposalResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/proposal'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BackfillProposalResponse, 'BackfillProposalResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [GET] Required Scope: social Get backfill ticket by ID
   */
  getBackfill_ByBackfillId(backfillID: string): Promise<IResponseWithSync<BackfillGetResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BackfillGetResponse, 'BackfillGetResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [DELETE] Required Scope: social Delete backfill ticket
   */
  deleteBackfill_ByBackfillId(backfillID: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [UPDATE] Required Scope: social Accept backfill proposal
   */
  updateProposalAccept_ByBackfillId(data: BackFillAcceptRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/accept'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [UPDATE] Required Scope: social Reject backfill proposal
   */
  updateProposalReject_ByBackfillId(data: BackFillRejectRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/reject'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
