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
import { EnvironmentVariables$ } from './endpoints/EnvironmentVariables$.js'
import { ListEnvironmentVariablesResponse } from '../generated-definitions/ListEnvironmentVariablesResponse.js'

export function EnvironmentVariablesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List environment variables.
   */
  async function getEnvironmentVariables(): Promise<ListEnvironmentVariablesResponse> {
    const $ = new EnvironmentVariables$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEnvironmentVariables()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEnvironmentVariables
  }
}
