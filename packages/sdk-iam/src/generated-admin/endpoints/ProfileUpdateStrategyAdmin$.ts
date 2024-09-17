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
import { GetProfileUpdateStrategyConfigResponse } from '../../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'
import { SimpleProfileUpdateStrategyConfigs } from '../../generated-definitions/SimpleProfileUpdateStrategyConfigs.js'
import { UpdateProfileUpdateStrategyConfigRequest } from '../../generated-definitions/UpdateProfileUpdateStrategyConfigRequest.js'

export class ProfileUpdateStrategyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * This API is for admin to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
   */
  getProfileUpdateStrategies(queryParams?: {
    field?: 'country' | 'display_name' | 'dob' | 'username'
  }): Promise<IResponse<GetProfileUpdateStrategyConfigResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
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
  updateProfileUpdateStrategy(
    data: UpdateProfileUpdateStrategyConfigRequest,
    queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
  ): Promise<IResponse<SimpleProfileUpdateStrategyConfigs>> {
    const params = { ...queryParams } as SDKRequestConfig
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
