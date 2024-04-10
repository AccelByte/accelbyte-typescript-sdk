/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { NamespaceConfig } from '../../generated-definitions/NamespaceConfig.js'
import { NamespaceConfigList } from '../../generated-definitions/NamespaceConfigList.js'
import { PatchNamespaceConfigRequest } from '../../generated-definitions/PatchNamespaceConfigRequest.js'

export class Config$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get matchmaking config of all namespaces. Will only return namespace configs than have been updated.
   */
  getConfig(): Promise<IResponseWithSync<NamespaceConfigList>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/config'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, NamespaceConfigList, 'NamespaceConfigList')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get matchmaking config of a namespaces.
   */
  getConfig_ByNamespace(): Promise<IResponseWithSync<NamespaceConfig>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, NamespaceConfig, 'NamespaceConfig')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Patch update matchmaking config of a namespaces. Partially update matchmaking config, will only update value that defined on the request.
   */
  patchConfig_ByNamespace(data: PatchNamespaceConfigRequest): Promise<IResponse<NamespaceConfig>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceConfig, 'NamespaceConfig')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
