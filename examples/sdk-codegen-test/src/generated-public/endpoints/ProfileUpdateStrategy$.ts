/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { Response } from '@accelbyte/sdk'
import { Validate } from '@accelbyte/sdk'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { GetProfileUpdateStrategyConfigResponse } from '../../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'

export class ProfileUpdateStrategy$ {
  private axiosInstance: AxiosInstance
  private namespace: string
  private useSchemaValidation: boolean

  constructor(axiosInstance: AxiosInstance, namespace: string, useSchemaValidation = true) {
    this.axiosInstance = axiosInstance
    this.namespace = namespace
    this.useSchemaValidation = useSchemaValidation
  }

  /**
   * This API is for public user to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
   */
  getProfileUpdateStrategies_v3(queryParams?: {
    field?: 'country' | 'display_name' | 'dob' | 'username'
  }): Promise<Response<GetProfileUpdateStrategyConfigResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/iam/v3/public/namespaces/{namespace}/profileUpdateStrategies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetProfileUpdateStrategyConfigResponse,
      'GetProfileUpdateStrategyConfigResponse'
    )
  }
}
