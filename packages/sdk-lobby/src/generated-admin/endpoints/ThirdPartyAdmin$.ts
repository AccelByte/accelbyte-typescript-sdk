/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateConfigRequest } from '../../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../../generated-definitions/UpdateConfigResponse.js'

export class ThirdPartyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:THIRDPARTY:CONFIG [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete third party config in a namespace.
   */
  deleteThirdpartyConfigSteam(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get third party config for specified namespace.
   */
  getThirdpartyConfigSteam(): Promise<IResponse<GetConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetConfigResponse, 'GetConfigResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create third party config in a namespace.
   */
  createThirdpartyConfigSteam(data: CreateConfigRequest): Promise<IResponse<CreateConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateConfigResponse, 'CreateConfigResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update third party config in a namespace.
   */
  updateThirdpartyConfigSteam(data: UpdateConfigRequest): Promise<IResponse<UpdateConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateConfigResponse, 'UpdateConfigResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
