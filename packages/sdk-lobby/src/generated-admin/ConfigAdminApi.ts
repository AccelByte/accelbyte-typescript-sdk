/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ConfigList } from '../generated-definitions/ConfigList.js'
import { ConfigReq } from '../generated-definitions/ConfigReq.js'
import { Configuration } from '../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'

export function ConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getConfig(): Promise<AxiosResponse<ConfigList>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigLog(): Promise<AxiosResponse<Configuration>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigLog()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfigLog(data: Configuration): Promise<AxiosResponse<Configuration>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfigLog(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfig_ByNamespace(): Promise<AxiosResponse<ConfigReq>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfig_ByNamespace(data: ConfigReq): Promise<AxiosResponse<ConfigReq>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfig_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigExport(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfigImport(data: { file?: File }): Promise<AxiosResponse<ImportConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get lobby config of all namespaces.&lt;br&gt;default MaxDSWaitTime is 120 (second)
     */
    getConfig,
    /**
     *  Get Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
     */
    getConfigLog,
    /**
     *  Update Log Configuration logLevel use for logging in service, the value can use is trace|debug|info|warning|error|fatal|panic socketLogEnabled is use for enable socket log logLevelDB use for logging in DB, the value can use is trace|debug|info|warning|error|fatal|panic slowQueryThreshold use for logging slow threshold in time measure is nano second
     */
    patchConfigLog,
    /**
     * Get lobby config of a namespace.&lt;br&gt;default MaxDSWaitTime is 120 (second)
     */
    getConfig_ByNamespace,
    /**
     * Update lobby config of a namespace.&lt;br&gt;MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
     */
    updateConfig_ByNamespace,
    /**
     *  Export lobby configuration to a json file. The file can then be imported from the /import endpoint. JSON Schema of the exported file: { &#34;required&#34;: [ &#34;namespace&#34;, &#34;entitlementItemID&#34;, &#34;chatRateLimitDuration&#34;, &#34;unregisterDelay&#34;, &#34;generalRateLimitDuration&#34;, &#34;autoKickOnDisconnectDelay&#34;, &#34;chatRateLimitBurst&#34;, &#34;generalRateLimitBurst&#34;, &#34;maxPartyMember&#34;, &#34;autoKickOnDisconnect&#34;, &#34;profanityFilter&#34;, &#34;enableChat&#34;, &#34;entitlementCheck&#34;, &#34;cancelTicketOnDisconnect&#34;, &#34;concurrentUsersLimit&#34;, &#34;readyConsentTimeout&#34;, &#34;disableInvitationOnJoinParty&#34;, &#34;allowJoinPartyDuringMatchmaking&#34;, &#34;allowInviteNonConnectedUser&#34;, &#34;keepPresenceActivityOnDisconnect&#34;, &#34;maxDSWaitTime&#34;, &#34;maxFriendsLimit&#34;, &#34;requestMetadataMaxSize&#34; ], &#34;properties&#34;: { &#34;allowInviteNonConnectedUser&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;allowJoinPartyDuringMatchmaking&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnectDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;cancelTicketOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;chatRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;chatRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;concurrentUsersLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;disableInvitationOnJoinParty&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;enableChat&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementCheck&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementItemID&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;generalRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;generalRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;keepPresenceActivityOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;maxDSWaitTime&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;maxFriendsLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;maxPartyMember&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;namespace&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;profanityFilter&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;readyConsentTimeout&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;requestMetadataMaxSize&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;unregisterDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; } } }
     */
    getConfigExport,
    /**
     *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint. MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
     */
    updateConfigImport
  }
}
