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
import { DevelopmentServerConfigurationCreateRequest } from '../../generated-definitions/DevelopmentServerConfigurationCreateRequest.js'
import { DevelopmentServerConfigurationCreateResponse } from '../../generated-definitions/DevelopmentServerConfigurationCreateResponse.js'
import { DevelopmentServerConfigurationGetResponse } from '../../generated-definitions/DevelopmentServerConfigurationGetResponse.js'
import { DevelopmentServerConfigurationListResponse } from '../../generated-definitions/DevelopmentServerConfigurationListResponse.js'
import { DevelopmentServerConfigurationUpdateRequest } from '../../generated-definitions/DevelopmentServerConfigurationUpdateRequest.js'

export class DevelopmentAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getDevelopmentServerConfigurations(queryParams?: {
    count?: number
    offset?: number
  }): Promise<Response<DevelopmentServerConfigurationListResponse>> {
    const params = { count: 100, ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/development/server-configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DevelopmentServerConfigurationListResponse,
      'DevelopmentServerConfigurationListResponse'
    )
  }
  /**
   * Configuration name can be up to 128 characters and must conform to ^[.a-zA-Z0-9_-]+$ Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [CREATE]
   */
  createDevelopmentServerConfiguration(
    data: DevelopmentServerConfigurationCreateRequest
  ): Promise<Response<DevelopmentServerConfigurationCreateResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/development/server-configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DevelopmentServerConfigurationCreateResponse,
      'DevelopmentServerConfigurationCreateResponse'
    )
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [DELETE]
   */
  deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId(developmentServerConfigID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/development/server-configurations/{developmentServerConfigID}'
      .replace('{namespace}', this.namespace)
      .replace('{developmentServerConfigID}', developmentServerConfigID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getDevelopmentServerConfiguration_ByDevelopmentServerConfigId(
    developmentServerConfigID: string
  ): Promise<Response<DevelopmentServerConfigurationGetResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/development/server-configurations/{developmentServerConfigID}'
      .replace('{namespace}', this.namespace)
      .replace('{developmentServerConfigID}', developmentServerConfigID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DevelopmentServerConfigurationGetResponse,
      'DevelopmentServerConfigurationGetResponse'
    )
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [UPDATE]
   */
  patchDevelopmentServerConfiguration_ByDevelopmentServerConfigId(
    developmentServerConfigID: string,
    data: DevelopmentServerConfigurationUpdateRequest
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/development/server-configurations/{developmentServerConfigID}'
      .replace('{namespace}', this.namespace)
      .replace('{developmentServerConfigID}', developmentServerConfigID)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
