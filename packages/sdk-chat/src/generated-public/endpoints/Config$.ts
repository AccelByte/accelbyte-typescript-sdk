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
import { PublicConfigResponse } from '../../generated-definitions/PublicConfigResponse.js'

export class Config$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get chat config of a namespace.
   */
  getConfig_ByNamespace(): Promise<Response<PublicConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/public/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PublicConfigResponse, 'PublicConfigResponse')
  }
}
