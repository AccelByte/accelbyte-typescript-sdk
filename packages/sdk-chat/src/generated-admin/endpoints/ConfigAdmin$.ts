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
import { ConfigExportArray } from '../../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export class ConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get chat config of all namespaces.
   */
  getConfig(): Promise<IResponseWithSync<ConfigList>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ConfigList, 'ConfigList')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get chat config of a namespace.
   */
  getConfig_ByNamespace(): Promise<IResponseWithSync<ConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ConfigResponse, 'ConfigResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update chat config of a namespace.
   */
  updateConfig_ByNamespace(data: ConfigResponse): Promise<IResponse<ConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, ConfigResponse, 'ConfigResponse')
  }

  /**
   *  Export chat configuration to a json file. The file can then be imported from the /import endpoint.
   */
  getConfigExport(): Promise<IResponseWithSync<ConfigExportArray>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ConfigExportArray, 'ConfigExportArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint.
   */
  createConfigImport(data: { file?: File }): Promise<IResponse<ImportConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
  }
}
