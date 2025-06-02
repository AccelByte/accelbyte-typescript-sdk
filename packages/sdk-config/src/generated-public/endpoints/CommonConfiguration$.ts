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
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigInfoArray } from '../../generated-definitions/ConfigInfoArray.js'

export class CommonConfiguration$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all public configs in the namespace
   */
  getConfigs(): Promise<Response<ConfigInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/public/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfoArray, 'ConfigInfoArray')
  }
  /**
   * Get public config by namespace and key
   */
  getConfig_ByConfigKey(configKey: string): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/public/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
}
