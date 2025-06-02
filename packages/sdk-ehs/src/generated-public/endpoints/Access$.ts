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
import { GetUploadTokenV1Response } from '../../generated-definitions/GetUploadTokenV1Response.js'

export class Access$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: `ADMIN:NAMESPACE:{namespace}:EXTEND:REPOCREDENTIALS` (READ) Get docker login credentials for storing container images on a specified repository
   */
  getToken_ByApp(app: string): Promise<Response<GetUploadTokenV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/ehs/v1/namespaces/{namespace}/apps/{app}/token'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUploadTokenV1Response,
      'GetUploadTokenV1Response'
    )
  }
}
