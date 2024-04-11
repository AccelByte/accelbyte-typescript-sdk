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
import { CreateTypeRequest } from '../../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export class AdminTypeAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get available types paginated
   */
  getTypes(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<PaginatedGetTypeResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedGetTypeResponse, 'PaginatedGetTypeResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Creates a new type and subtype
   */
  createType(data: CreateTypeRequest): Promise<IResponse<CreateTypeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateTypeResponse, 'CreateTypeResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete existing type
   */
  deleteType_ByTypeId(typeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types/{typeId}'.replace('{namespace}', this.namespace).replace('{typeId}', typeId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Updates a type and subtype
   */
  updateType_ByTypeId(typeId: string, data: CreateTypeRequest): Promise<IResponse<CreateTypeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types/{typeId}'.replace('{namespace}', this.namespace).replace('{typeId}', typeId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateTypeResponse, 'CreateTypeResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
