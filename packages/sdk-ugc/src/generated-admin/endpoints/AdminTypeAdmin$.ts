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
import { CreateTypeRequest } from '../../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export class AdminTypeAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [READ]
   */
  getTypes(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<PaginatedGetTypeResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedGetTypeResponse, 'PaginatedGetTypeResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [CREATE] creates a new type and subtype
   */
  createType(data: CreateTypeRequest): Promise<IResponse<CreateTypeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateTypeResponse, 'CreateTypeResponse')
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [DELETE]
   */
  deleteType_ByTypeId(typeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types/{typeId}'.replace('{namespace}', this.namespace).replace('{typeId}', typeId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [UPDATE] updates a type and subtype
   */
  updateType_ByTypeId(typeId: string, data: CreateTypeRequest): Promise<IResponse<CreateTypeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/types/{typeId}'.replace('{namespace}', this.namespace).replace('{typeId}', typeId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateTypeResponse, 'CreateTypeResponse')
  }
}
