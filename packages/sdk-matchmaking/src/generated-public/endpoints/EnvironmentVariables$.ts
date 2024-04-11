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
import { ListEnvironmentVariablesResponse } from '../../generated-definitions/ListEnvironmentVariablesResponse.js'

export class EnvironmentVariables$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * List environment variables.
   */
  getEnvironmentVariables(): Promise<IResponse<ListEnvironmentVariablesResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/environment-variables'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListEnvironmentVariablesResponse, 'ListEnvironmentVariablesResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
