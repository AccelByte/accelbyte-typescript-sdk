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
import { GetProfileUpdateStrategyConfigResponse } from '../../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'
import { SimpleProfileUpdateStrategyConfigs } from '../../generated-definitions/SimpleProfileUpdateStrategyConfigs.js'
import { UpdateProfileUpdateStrategyConfigRequest } from '../../generated-definitions/UpdateProfileUpdateStrategyConfigRequest.js'

export class ProfileUpdateStrategyAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is for admin to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
   */
  getProfileUpdateStrategies_v3(queryParams?: {
    field?: 'country' | 'display_name' | 'dob' | 'username'
  }): Promise<Response<GetProfileUpdateStrategyConfigResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/profileUpdateStrategies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetProfileUpdateStrategyConfigResponse,
      'GetProfileUpdateStrategyConfigResponse'
    )
  }
  /**
   * This API includes upsert behavior. Note: 1. field &#39;config&#39;&#39; in request body will only work when type is limited
   */
  updateProfileUpdateStrategy_v3(
    data: UpdateProfileUpdateStrategyConfigRequest,
    queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
  ): Promise<Response<SimpleProfileUpdateStrategyConfigs>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/profileUpdateStrategies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SimpleProfileUpdateStrategyConfigs,
      'SimpleProfileUpdateStrategyConfigs'
    )
  }
}
