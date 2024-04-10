/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'

export class ConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled
   */
  getConfig_ByConfigKey(configKey: string): Promise<IResponseWithSync<ConfigValueResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/config/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigValueResponseV3, 'ConfigValueResponseV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
