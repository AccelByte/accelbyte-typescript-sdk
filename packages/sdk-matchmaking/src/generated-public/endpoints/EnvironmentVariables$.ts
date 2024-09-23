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
import { ListEnvironmentVariablesResponse } from '../../generated-definitions/ListEnvironmentVariablesResponse.js'

export class EnvironmentVariables$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List environment variables.
   */
  getEnvironmentVariables(): Promise<Response<ListEnvironmentVariablesResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/environment-variables'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListEnvironmentVariablesResponse,
      'ListEnvironmentVariablesResponse'
    )
  }
}
