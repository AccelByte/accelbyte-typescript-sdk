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
import { Configuration } from '../generated-definitions/Configuration.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'

export function ConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get Log Configuration.&lt;br&gt;
   */
  async function getConfigLog(): Promise<Configuration> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigLog()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update Log Configuration.&lt;br&gt;
   */
  async function patchConfigLog(data: Configuration): Promise<Configuration> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchConfigLog(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigLog,
    patchConfigLog
  }
}
