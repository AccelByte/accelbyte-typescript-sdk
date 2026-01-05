/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateConfigRequest } from '../../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../../generated-definitions/UpdateConfigResponse.js'

export class ThirdPartyAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:THIRDPARTY:CONFIG [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete third party config in a namespace.
   */
  deleteThirdpartyConfigSteam(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Get third party config for specified namespace.
   */
  getThirdpartyConfigSteam(): Promise<Response<GetConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetConfigResponse, 'GetConfigResponse')
  }
  /**
   * @deprecated
   * Create third party config in a namespace.
   */
  createThirdpartyConfigSteam(data: CreateConfigRequest): Promise<Response<CreateConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateConfigResponse, 'CreateConfigResponse')
  }
  /**
   * @deprecated
   * Update third party config in a namespace.
   */
  updateThirdpartyConfigSteam(data: UpdateConfigRequest): Promise<Response<UpdateConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/thirdparty/namespaces/{namespace}/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateConfigResponse, 'UpdateConfigResponse')
  }
}
