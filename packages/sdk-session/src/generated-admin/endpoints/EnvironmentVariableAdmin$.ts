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
import { EnvironmentVariableListResponse } from '../../generated-definitions/EnvironmentVariableListResponse.js'

export class EnvironmentVariableAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List of environment variables.
   */
  getEnvironmentVariables(): Promise<Response<EnvironmentVariableListResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/environment-variables'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EnvironmentVariableListResponse,
      'EnvironmentVariableListResponse'
    )
  }
}
