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
import { AmsRegionsResponse } from '../../generated-definitions/AmsRegionsResponse.js'
import { AvailableInstanceTypesResponse } from '../../generated-definitions/AvailableInstanceTypesResponse.js'

export class AmsInfoAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
   */
  getRegions(): Promise<Response<AmsRegionsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/regions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AmsRegionsResponse, 'AmsRegionsResponse')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
   */
  getSupportedInstances(): Promise<Response<AvailableInstanceTypesResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/supported-instances'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AvailableInstanceTypesResponse,
      'AvailableInstanceTypesResponse'
    )
  }
}
