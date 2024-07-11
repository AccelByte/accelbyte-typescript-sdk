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
import { CleanerConfigObject } from '../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../generated-definitions/PingResultResponse.js'
import { UtilityAdmin$ } from './endpoints/UtilityAdmin$.js'

export function UtilityAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to manually checks the readiness of differ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ping result&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPingDiffer(): Promise<PingResultResponse> {
    const $ = new UtilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPingDiffer()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get the BuildInfo configurations.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getConfigurations(): Promise<ConfigurationInfo> {
    const $ = new UtilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigurations()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update the BuildInfo configurations.&lt;br/&gt;This API support update configuration based on given data. Single request can update single field or multi fields.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchConfiguration(data: ConfigurationUpdate): Promise<ConfigurationInfo> {
    const $ = new UtilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to validate clientId and redirectUri from SDK Config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getValidateSdkConfig(queryParams: { clientId: string | null; redirectUri: string | null }): Promise<ClientPayload> {
    const $ = new UtilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getValidateSdkConfig(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retrieve grace period of buildinfo cleaner.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Buildinfo Grace Period Time&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCleanerConfigurations(): Promise<CleanerConfigObject> {
    const $ = new UtilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCleanerConfigurations()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPingDiffer,
    getConfigurations,
    patchConfiguration,
    getValidateSdkConfig,
    getCleanerConfigurations
  }
}
