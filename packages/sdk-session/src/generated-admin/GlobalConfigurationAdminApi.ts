/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GlobalConfigurationAdmin$ } from './endpoints/GlobalConfigurationAdmin$.js'
import { GlobalConfigurationResponse } from '../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../generated-definitions/PutGlobalConfigurationRequest.js'

export function GlobalConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Delete of global configuration data.
   */
  async function deleteGlobalConfiguration(): Promise<unknown> {
    const $ = new GlobalConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGlobalConfiguration()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Record of global configuration data.
   */
  async function getGlobalConfigurations(): Promise<GlobalConfigurationResponse> {
    const $ = new GlobalConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGlobalConfigurations()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upsert global configuration data.
   */
  async function updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<GlobalConfigurationResponse> {
    const $ = new GlobalConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGlobalConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteGlobalConfiguration,
    getGlobalConfigurations,
    updateGlobalConfiguration
  }
}
