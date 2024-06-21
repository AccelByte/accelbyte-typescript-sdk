/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ConfigExportArray } from '../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../generated-definitions/ConfigResponse.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'

export function ConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get chat config of all namespaces.
   */
  async function getConfig(): Promise<ConfigList> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get chat config of a namespace.
   */
  async function getConfig_ByNamespace(): Promise<ConfigResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update chat config of a namespace.
   */
  async function updateConfig_ByNamespace(data: ConfigResponse): Promise<ConfigResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateConfig_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Export chat configuration to a json file. The file can then be imported from the /import endpoint.
   */
  async function getConfigExport(): Promise<ConfigExportArray> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint.
   */
  async function createConfigImport(data: { file?: File }): Promise<ImportConfigResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfig,
    getConfig_ByNamespace,
    updateConfig_ByNamespace,
    getConfigExport,
    createConfigImport
  }
}
