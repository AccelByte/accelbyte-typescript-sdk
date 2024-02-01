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
import { Config$ } from './endpoints/Config$.js'
import { ConfigValueResponseV3 } from '../generated-definitions/ConfigValueResponseV3.js'

export function ConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint return the value of config key. Note: this endpoint does not need any authorization. **Supported config key:** * uniqueDisplayNameEnabled
   */
  async function getConfig_ByConfigKey(configKey: string): Promise<ConfigValueResponseV3> {
    const $ = new Config$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getConfig_ByConfigKey(configKey)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfig_ByConfigKey
  }
}
