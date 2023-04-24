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
import { LateDiffRequest } from '../definitions/LateDiffRequest'
import { PingResponse } from '../definitions/PingResponse'

export class DiffCalculation$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.</p><p>Every request is registered into the queue first, and will be processed by the available Differ.</p><p>The <b>priority</b> flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.</p><br/><p>Required permission <code>ADMIN:NAMESPACE:{namespace}:DIFFCACHE [CREATE]</code> and scope <code>publishing</code></p>
   */
  createDiff(data: LateDiffRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/differ/namespaces/{namespace}/diff'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  getPing(): Promise<IResponseWithSync<PingResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/differ/namespaces/{namespace}/ping'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PingResponse, 'PingResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.</p><p>The Diffs calculation will be parallelized between the available Differ instances.</p><p>The <b>priority</b> flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.</p><br/><p>Required permission <code>ADMIN:NAMESPACE:{namespace}:DIFFCACHE [CREATE]</code> and scope <code>publishing</code></p>
   */
  createDiff_ByNS(data: LateDiffRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/differ/v2/namespaces/{namespace}/diff'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
