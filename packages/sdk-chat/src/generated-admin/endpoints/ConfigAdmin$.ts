/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ConfigExportArray } from '../../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { Configuration } from '../../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export class ConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get chat config of all namespaces.
   */
  getConfig(): Promise<Response<ConfigList>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigList, 'ConfigList')
  }
  /**
   *  Get Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log internalAccessLogEnabled is for enabling access log for internal endpoint logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
   */
  getConfigLog(): Promise<Response<Configuration>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config/log'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Configuration, 'Configuration')
  }
  /**
   *  Update Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log internalAccessLogEnabled is for enabling access log for internal endpoint logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
   */
  patchConfigLog(data: Configuration): Promise<Response<Configuration>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config/log'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Configuration, 'Configuration')
  }
  /**
   * Get chat config of a namespace.
   */
  getConfig_ByNamespace(): Promise<Response<ConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigResponse, 'ConfigResponse')
  }
  /**
   * Update chat config of a namespace.
   */
  updateConfig_ByNamespace(data: ConfigResponse): Promise<Response<ConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigResponse, 'ConfigResponse')
  }
  /**
   *  Export chat configuration to a json file. The file can then be imported from the /import endpoint.
   */
  getConfigExport(): Promise<Response<ConfigExportArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigExportArray, 'ConfigExportArray')
  }
  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint.
   */
  updateConfigImport(data: { file?: File }): Promise<Response<ImportConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/config/namespaces/{namespace}/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
  }
}
