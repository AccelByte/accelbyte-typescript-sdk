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
import { EnvironmentVariableListResponse } from '../../generated-definitions/EnvironmentVariableListResponse.js'

export class EnvironmentVariableAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * List of environment variables.
   */
  getEnvironmentVariables(): Promise<IResponse<EnvironmentVariableListResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/environment-variables'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EnvironmentVariableListResponse, 'EnvironmentVariableListResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
