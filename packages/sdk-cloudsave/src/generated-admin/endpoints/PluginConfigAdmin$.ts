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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:PLUGINS [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will delete grpc plugins configuration
   */
  deletePlugin(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:PLUGINS [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will get grpc plugins configuration
   */
  getPlugins(): Promise<IResponseWithSync<PluginResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PluginResponse, 'PluginResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:PLUGINS [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will update grpc plugins configuration
   */
  patchPlugin(data: PluginRequest): Promise<IResponse<PluginResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, PluginResponse, 'PluginResponse')
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:PLUGINS [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new grpc plugins configuration per namespace
   */
  createPlugin(data: PluginRequest): Promise<IResponse<PluginResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PluginResponse, 'PluginResponse')
  }
}
