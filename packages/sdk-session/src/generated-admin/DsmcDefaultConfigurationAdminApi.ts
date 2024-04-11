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
import { DefaultDsmcConfig } from '../generated-definitions/DefaultDsmcConfig.js'
import { DsmcDefaultConfigurationAdmin$ } from './endpoints/DsmcDefaultConfigurationAdmin$.js'

export function DsmcDefaultConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get dsmc default configuration.
   */
  async function getDsconfigsDefault(): Promise<DefaultDsmcConfig> {
    const $ = new DsmcDefaultConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getDsconfigsDefault()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDsconfigsDefault
  }
}
