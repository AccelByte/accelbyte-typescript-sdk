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
import { PluginConfigAdmin$ } from './endpoints/PluginConfigAdmin$.js'
import { PluginRequest } from '../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../generated-definitions/PluginResponse.js'

export function PluginConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * ## Description This endpoints will delete grpc plugins configuration
   */
  async function deletePlugin(): Promise<unknown> {
    const $ = new PluginConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deletePlugin()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will get grpc plugins configuration
   */
  async function getPlugins(): Promise<PluginResponse> {
    const $ = new PluginConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPlugins()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will update grpc plugins configuration
   */
  async function patchPlugin(data: PluginRequest): Promise<PluginResponse> {
    const $ = new PluginConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchPlugin(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new grpc plugins configuration per namespace
   */
  async function createPlugin(data: PluginRequest): Promise<PluginResponse> {
    const $ = new PluginConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createPlugin(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deletePlugin,
    getPlugins,
    patchPlugin,
    createPlugin
  }
}
