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
import { ConfigCreate } from '../generated-definitions/ConfigCreate.js'
import { ConfigInfo } from '../generated-definitions/ConfigInfo.js'
import { ConfigUpdate } from '../generated-definitions/ConfigUpdate.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'

export function ConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Create a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  async function createConfig(data: ConfigCreate): Promise<ConfigInfo> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteConfig_ByConfigKey(configKey: string): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteConfig_ByConfigKey(configKey)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getConfig_ByConfigKey(configKey: string): Promise<ConfigInfo> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig_ByConfigKey(configKey)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchConfig_ByConfigKey(configKey: string, data: ConfigUpdate): Promise<ConfigInfo> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchConfig_ByConfigKey(configKey, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a publisher config.&lt;br&gt;It will return a publisher namespace config of the given namespace and key.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPublisherConfig_ByConfigKey(configKey: string): Promise<ConfigInfo> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPublisherConfig_ByConfigKey(configKey)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createConfig,
    deleteConfig_ByConfigKey,
    getConfig_ByConfigKey,
    patchConfig_ByConfigKey,
    getPublisherConfig_ByConfigKey
  }
}
