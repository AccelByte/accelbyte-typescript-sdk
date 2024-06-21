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
import { ConfigResponse } from '../generated-definitions/ConfigResponse.js'
import { ReportingLimit } from '../generated-definitions/ReportingLimit.js'
import { AdminConfigurationsAdmin$ } from './endpoints/AdminConfigurationsAdmin$.js'

export function AdminConfigurationsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * TimeInterval is in nanoseconds. When there&#39;s no configuration set, the response is the default value (configurable through envar).
   */
  async function getConfigurations(queryParams?: { category?: 'all' | 'extension' }): Promise<ConfigResponse> {
    const $ = new AdminConfigurationsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * The behaviour of this endpoint is upsert based on the namespace. So, you can use this for both creating &amp; updating the configuration. TimeInterval is in nanoseconds.
   */
  async function createConfiguration(data: ReportingLimit): Promise<ConfigResponse> {
    const $ = new AdminConfigurationsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigurations,
    createConfiguration
  }
}
