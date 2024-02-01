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
import { PluginRequest } from '../../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../../generated-definitions/PluginResponse.js'

export class PluginConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * ## Description This endpoints will delete grpc plugins configuration
   */
  deletePlugin(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will get grpc plugins configuration
   */
  getPlugins(): Promise<IResponseWithSync<PluginResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PluginResponse, 'PluginResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ## Description This endpoints will update grpc plugins configuration
   */
  patchPlugin(data: PluginRequest): Promise<IResponse<PluginResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PluginResponse, 'PluginResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new grpc plugins configuration per namespace
   */
  createPlugin(data: PluginRequest): Promise<IResponse<PluginResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PluginResponse, 'PluginResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
