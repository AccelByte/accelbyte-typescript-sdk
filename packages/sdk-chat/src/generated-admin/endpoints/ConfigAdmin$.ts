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
import { ConfigExportArray } from '../../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export class ConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Get chat config of all namespaces.
   */
  getConfig(): Promise<IResponse<ConfigList>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ConfigList, 'ConfigList')
  }

  /**
   * Get chat config of a namespace.
   */
  getConfig_ByNamespace(): Promise<IResponse<ConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ConfigResponse, 'ConfigResponse')
  }

  /**
   * Update chat config of a namespace.
   */
  updateConfig_ByNamespace(data: ConfigResponse): Promise<IResponse<ConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ConfigResponse, 'ConfigResponse')
  }

  /**
   *  Export chat configuration to a json file. The file can then be imported from the /import endpoint.
   */
  getConfigExport(): Promise<IResponse<ConfigExportArray>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ConfigExportArray, 'ConfigExportArray')
  }

  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint.
   */
  createConfigImport(data: { file?: File }): Promise<IResponse<ImportConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
  }
}
