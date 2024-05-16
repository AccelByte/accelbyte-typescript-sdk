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
import { PublicConfigResponse } from '../../generated-definitions/PublicConfigResponse.js'

export class Config$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Get chat config of a namespace.
   */
  getConfig_ByNamespace(): Promise<IResponse<PublicConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/public/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, PublicConfigResponse, 'PublicConfigResponse')
  }
}
