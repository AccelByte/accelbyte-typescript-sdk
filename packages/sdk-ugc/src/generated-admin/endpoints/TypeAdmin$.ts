/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateTypeRequest } from '../../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export class TypeAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get available types paginated
   */
  getTypes(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedGetTypeResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGetTypeResponse,
      'PaginatedGetTypeResponse'
    )
  }
  /**
   * Creates a new type and subtype
   */
  createType(data: CreateTypeRequest): Promise<Response<CreateTypeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTypeResponse, 'CreateTypeResponse')
  }
  /**
   * Delete existing type
   */
  deleteType_ByTypeId(typeId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types/{typeId}'.replace('{namespace}', this.namespace).replace('{typeId}', typeId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Updates a type and subtype
   */
  updateType_ByTypeId(typeId: string, data: CreateTypeRequest): Promise<Response<CreateTypeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types/{typeId}'.replace('{namespace}', this.namespace).replace('{typeId}', typeId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTypeResponse, 'CreateTypeResponse')
  }
}
