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
import { ListEnvironmentVariablesResponse } from '../generated-definitions/ListEnvironmentVariablesResponse.js'
import { EnvironmentVariables$ } from './endpoints/EnvironmentVariables$.js'

export function EnvironmentVariablesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List environment variables.
   */
  async function getEnvironmentVariables(): Promise<ListEnvironmentVariablesResponse> {
    const $ = new EnvironmentVariables$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEnvironmentVariables()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEnvironmentVariables
  }
}
