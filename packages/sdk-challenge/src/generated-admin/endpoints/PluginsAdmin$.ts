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
import { PluginAssignmentRequest } from '../../generated-definitions/PluginAssignmentRequest.js'
import { PluginAssignmentResponse } from '../../generated-definitions/PluginAssignmentResponse.js'

export class PluginsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [DELETE]
   */
  deletePluginAssignment(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/plugins/assignment'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [READ]
   */
  getPluginsAssignment(): Promise<Response<PluginAssignmentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/plugins/assignment'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PluginAssignmentResponse,
      'PluginAssignmentResponse'
    )
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [CREATE]
   */
  createPluginAssignment(data: PluginAssignmentRequest): Promise<Response<PluginAssignmentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/plugins/assignment'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PluginAssignmentResponse,
      'PluginAssignmentResponse'
    )
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [UPDATE]
   */
  updatePluginAssignment(data: PluginAssignmentRequest): Promise<Response<PluginAssignmentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/plugins/assignment'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PluginAssignmentResponse,
      'PluginAssignmentResponse'
    )
  }
}
