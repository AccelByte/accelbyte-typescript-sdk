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
import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'

export class ConfigAdmin$ {
  private axiosInstance: AxiosInstance
  private namespace: string
  private useSchemaValidation: boolean

  constructor(axiosInstance: AxiosInstance, namespace: string, useSchemaValidation = true) {
    this.axiosInstance = axiosInstance
    this.namespace = namespace
    this.useSchemaValidation = useSchemaValidation
  }

  /**
   * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled
   */
  getConfig_ByConfigKey_v3(configKey: string): Promise<Response<ConfigValueResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/iam/v3/admin/namespaces/{namespace}/config/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigValueResponseV3, 'ConfigValueResponseV3')
  }
}
