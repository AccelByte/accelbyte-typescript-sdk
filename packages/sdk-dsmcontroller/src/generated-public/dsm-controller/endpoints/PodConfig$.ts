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
import { CreatePodConfigRequest } from '../definitions/CreatePodConfigRequest.js'
import { ListPodConfigResponse } from '../definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../definitions/PodConfigRecord.js'

export class PodConfig$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
   */
  getConfigsPods(queryParams: { count: number; offset: number }): Promise<IResponseWithSync<ListPodConfigResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/pods'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListPodConfigResponse, 'ListPodConfigResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
   */
  deleteConfigPod_ByName(name: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/pods/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
   */
  createConfigPod_ByName(name: string, data: CreatePodConfigRequest): Promise<IResponse<PodConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/configs/pods/{name}'.replace('{namespace}', this.namespace).replace('{name}', name)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PodConfigRecord, 'PodConfigRecord')
  }
}
