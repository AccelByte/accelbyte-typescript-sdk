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
import { CreateConfigRequest } from '../../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../../generated-definitions/UpdateConfigResponse.js'

export class ThirdPartyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:THIRDPARTY:CONFIG [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete third party config in a namespace.
   */
  deleteThirdpartyConfigSteam(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get third party config for specified namespace.
   */
  getThirdpartyConfigSteam(): Promise<IResponseWithSync<GetConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetConfigResponse, 'GetConfigResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create third party config in a namespace.
   */
  createThirdpartyConfigSteam(data: CreateConfigRequest): Promise<IResponse<CreateConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateConfigResponse, 'CreateConfigResponse')
  }

  /**
   * Update third party config in a namespace.
   */
  updateThirdpartyConfigSteam(data: UpdateConfigRequest): Promise<IResponse<UpdateConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UpdateConfigResponse, 'UpdateConfigResponse')
  }
}
