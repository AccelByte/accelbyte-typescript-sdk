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
import { AccountResponse } from '../../generated-definitions/AccountResponse.js'

export class Account$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: NAMESPACE:{namespace}:AMS:ACCOUNT [READ]
   */
  getAccount(): Promise<Response<AccountResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/namespaces/{namespace}/account'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AccountResponse, 'AccountResponse')
  }
}
