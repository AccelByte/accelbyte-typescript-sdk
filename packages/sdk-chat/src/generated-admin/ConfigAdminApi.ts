/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ConfigExportArray } from '../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../generated-definitions/ConfigResponse.js'
import { Configuration } from '../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'

export function ConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getConfig(): Promise<AxiosResponse<ConfigList>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigLog(): Promise<AxiosResponse<Configuration>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigLog()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfigLog(data: Configuration): Promise<AxiosResponse<Configuration>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfigLog(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfig_ByNamespace(): Promise<AxiosResponse<ConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfig_ByNamespace(data: ConfigResponse): Promise<AxiosResponse<ConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfig_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigExport(): Promise<AxiosResponse<ConfigExportArray>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfigImport(data: { file?: File }): Promise<AxiosResponse<ImportConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get chat config of all namespaces.
     */
    getConfig,
    /**
     *  Get Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log internalAccessLogEnabled is for enabling access log for internal endpoint logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
     */
    getConfigLog,
    /**
     *  Update Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log internalAccessLogEnabled is for enabling access log for internal endpoint logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
     */
    patchConfigLog,
    /**
     * Get chat config of a namespace.
     */
    getConfig_ByNamespace,
    /**
     * Update chat config of a namespace.
     */
    updateConfig_ByNamespace,
    /**
     *  Export chat configuration to a json file. The file can then be imported from the /import endpoint.
     */
    getConfigExport,
    /**
     *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint.
     */
    updateConfigImport
  }
}
