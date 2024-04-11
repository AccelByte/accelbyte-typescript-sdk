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
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'
import { ConfigList } from '../generated-definitions/ConfigList.js'
import { ConfigReq } from '../generated-definitions/ConfigReq.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'

export function ConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get lobby config of all namespaces.&lt;br&gt;default MaxDSWaitTime is 120 (second)
   */
  async function getConfig(): Promise<ConfigList> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get lobby config of a namespace.&lt;br&gt;default MaxDSWaitTime is 120 (second)
   */
  async function getConfig_ByNamespace(): Promise<ConfigReq> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update lobby config of a namespace.&lt;br&gt;MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
   */
  async function updateConfig_ByNamespace(data: ConfigReq): Promise<ConfigReq> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateConfig_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Export lobby configuration to a json file. The file can then be imported from the /import endpoint. JSON Schema of the exported file: { &#34;required&#34;: [ &#34;namespace&#34;, &#34;entitlementItemID&#34;, &#34;chatRateLimitDuration&#34;, &#34;unregisterDelay&#34;, &#34;generalRateLimitDuration&#34;, &#34;autoKickOnDisconnectDelay&#34;, &#34;chatRateLimitBurst&#34;, &#34;generalRateLimitBurst&#34;, &#34;maxPartyMember&#34;, &#34;autoKickOnDisconnect&#34;, &#34;profanityFilter&#34;, &#34;enableChat&#34;, &#34;entitlementCheck&#34;, &#34;cancelTicketOnDisconnect&#34;, &#34;concurrentUsersLimit&#34;, &#34;readyConsentTimeout&#34;, &#34;disableInvitationOnJoinParty&#34;, &#34;allowJoinPartyDuringMatchmaking&#34;, &#34;allowInviteNonConnectedUser&#34;, &#34;keepPresenceActivityOnDisconnect&#34;, &#34;maxDSWaitTime&#34;, &#34;maxFriendsLimit&#34; ], &#34;properties&#34;: { &#34;allowInviteNonConnectedUser&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;allowJoinPartyDuringMatchmaking&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnectDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;cancelTicketOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;chatRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;chatRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;concurrentUsersLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;disableInvitationOnJoinParty&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;enableChat&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementCheck&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementItemID&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;generalRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;generalRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;keepPresenceActivityOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;maxDSWaitTime&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;maxFriendsLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;maxPartyMember&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;namespace&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;profanityFilter&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;readyConsentTimeout&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;unregisterDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; } } }
   */
  async function getConfigExport(): Promise<unknown> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getConfigExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint. MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
   */
  async function createConfigImport(data: { file?: File }): Promise<ImportConfigResponse> {
    const $ = new ConfigAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createConfigImport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfig,
    getConfig_ByNamespace,
    updateConfig_ByNamespace,
    getConfigExport,
    createConfigImport
  }
}
