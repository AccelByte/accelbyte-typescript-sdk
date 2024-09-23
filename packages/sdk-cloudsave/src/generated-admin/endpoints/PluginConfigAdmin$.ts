/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PluginRequest } from '../../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../../generated-definitions/PluginResponse.js'

export class PluginConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * ## Description This endpoints will delete grpc plugins configuration
   */
  deletePlugin(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ## Description This endpoints will get grpc plugins configuration
   */
  getPlugins(): Promise<Response<PluginResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PluginResponse, 'PluginResponse')
  }
  /**
   * ## Description This endpoints will update grpc plugins configuration
   */
  patchPlugin(data: PluginRequest): Promise<Response<PluginResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PluginResponse, 'PluginResponse')
  }
  /**
   * ## Description This endpoints will create new grpc plugins configuration per namespace
   */
  createPlugin(data: PluginRequest): Promise<Response<PluginResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/plugins'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PluginResponse, 'PluginResponse')
  }
}
