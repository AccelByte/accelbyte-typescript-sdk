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
import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'
import { InternalConfigResponseV3 } from '../../generated-definitions/InternalConfigResponseV3.js'

export class Config$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  getConfigPublic_v3(): Promise<Response<InternalConfigResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/config/public'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InternalConfigResponseV3,
      'InternalConfigResponseV3'
    )
  }
  /**
   * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. Note: this endpoint does not need any authorization. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled * verificationCodeType If the key is verificationCodeType, then possible value format will be &#39;{collection}:{N}&#39;; example: &#39;ABCDEFGHI:6&#39;, &#39;ABCDEFGHI1234:8&#39;,&#39;01234567894:7&#39;
   */
  getConfig_ByConfigKey_v3(configKey: string): Promise<Response<ConfigValueResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/config/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigValueResponseV3, 'ConfigValueResponseV3')
  }
}
