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
import { AppleIapConfigInfo } from '../generated-definitions/AppleIapConfigInfo.js'
import { AppleIapConfigRequest } from '../generated-definitions/AppleIapConfigRequest.js'
import { EpicGamesIapConfigInfo } from '../generated-definitions/EpicGamesIapConfigInfo.js'
import { EpicGamesIapConfigRequest } from '../generated-definitions/EpicGamesIapConfigRequest.js'
import { GoogleIapConfigInfo } from '../generated-definitions/GoogleIapConfigInfo.js'
import { GoogleIapConfigRequest } from '../generated-definitions/GoogleIapConfigRequest.js'
import { IapAdmin$ } from './endpoints/IapAdmin$.js'
import { IapConsumeHistoryPagingSlicedResult } from '../generated-definitions/IapConsumeHistoryPagingSlicedResult.js'
import { IapItemConfigInfo } from '../generated-definitions/IapItemConfigInfo.js'
import { IapItemConfigUpdate } from '../generated-definitions/IapItemConfigUpdate.js'
import { IapOrderPagingSlicedResult } from '../generated-definitions/IapOrderPagingSlicedResult.js'
import { MockIapReceipt } from '../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../generated-definitions/PlaystationIapConfigRequest.js'
import { SteamIapConfig } from '../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../generated-definitions/SteamIapConfigRequest.js'
import { TestResult } from '../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../generated-definitions/XblIapConfigRequest.js'

export function IapAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Delete xbl iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigXbl(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigXbl()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get xbox iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: xbox iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigXbl(): Promise<XblIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigXbl()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update xbl iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigXbl(data: XblIapConfigRequest): Promise<XblIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigXbl(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * delete a iap item config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigItem(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigItem()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get iap item config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigItem(): Promise<IapItemConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigItem()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update iap item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated iap item config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigItem(data: IapItemConfigUpdate): Promise<IapItemConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigItem(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete apple iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigApple(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigApple()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get apple iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigApple(): Promise<AppleIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigApple()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update apple iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigApple(data: AppleIapConfigRequest): Promise<AppleIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigApple(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete steam iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigSteam(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigSteam()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get steam iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigSteam(): Promise<SteamIapConfig> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigSteam()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update steam iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigSteam(data: SteamIapConfigRequest): Promise<SteamIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigSteam(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete google iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigGoogle(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigGoogle()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get google iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigGoogle(): Promise<GoogleIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigGoogle()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update google iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigGoogle(data: GoogleIapConfigRequest): Promise<GoogleIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigGoogle(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete oculus iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigOculu(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigOculu()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get oculus iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigOculus(): Promise<OculusIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigOculus()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update oculus iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigOculu(data: OculusIapConfigRequest): Promise<OculusIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigOculu(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete twitch iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigTwitch(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigTwitch()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get twitch iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: twitch iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigTwitch(): Promise<TwitchIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigTwitch()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update twitch iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated twitch iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigTwitch(data: TwitchIapConfigRequest): Promise<TwitchIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigTwitch(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:IAP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIap_ByUserId(
    userId: string,
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      productId?: string | null
      startTime?: string | null
      status?: 'FAILED' | 'FULFILLED' | 'VERIFIED'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  ): Promise<IapOrderPagingSlicedResult> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIap_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload xbl business partner cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigXblCert(data: { file?: File; password?: string | null }): Promise<XblIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigXblCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete epic games iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigEpicgame(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigEpicgame()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get epic games iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: epic games iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigEpicgames(): Promise<EpicGamesIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigEpicgames()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update epic games iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated epic games iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigEpicgame(data: EpicGamesIapConfigRequest): Promise<EpicGamesIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigEpicgame(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload google play p12 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigGoogleCert(data: { file?: File }): Promise<GoogleIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigGoogleCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete playstation iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteIapConfigPlaystation(): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteIapConfigPlaystation()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get playstation iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: playstation iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigPlaystation(): Promise<PlayStationIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigPlaystation()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated playstation iap config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigPlaystation(data: PlaystationIapConfigRequest): Promise<PlayStationIapConfigInfo> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigPlaystation(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query all user IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:IAP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of iap orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapAll_ByUserId(userId: string): Promise<IapOrderPagingSlicedResult> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapAll_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConfigPlaystationValidate(): Promise<TestResult> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConfigPlaystationValidate()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:IAP:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapConfigPlaystationValidate(data: PlaystationIapConfigRequest): Promise<TestResult> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapConfigPlaystationValidate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Mock fulfill iap item without validate receipt.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:IAP&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapMockReceipt_ByUserId(userId: string, data: MockIapReceipt): Promise<unknown> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateIapMockReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query IAP consume history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:IAP&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap consume history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIapConsumeHistory_ByUserId(
    userId: string,
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      status?: 'FAIL' | 'PENDING' | 'SUCCESS'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  ): Promise<IapConsumeHistoryPagingSlicedResult> {
    const $ = new IapAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getIapConsumeHistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteIapConfigXbl,
    getIapConfigXbl,
    updateIapConfigXbl,
    deleteIapConfigItem,
    getIapConfigItem,
    updateIapConfigItem,
    deleteIapConfigApple,
    getIapConfigApple,
    updateIapConfigApple,
    deleteIapConfigSteam,
    getIapConfigSteam,
    updateIapConfigSteam,
    deleteIapConfigGoogle,
    getIapConfigGoogle,
    updateIapConfigGoogle,
    deleteIapConfigOculu,
    getIapConfigOculus,
    updateIapConfigOculu,
    deleteIapConfigTwitch,
    getIapConfigTwitch,
    updateIapConfigTwitch,
    getIap_ByUserId,
    updateIapConfigXblCert,
    deleteIapConfigEpicgame,
    getIapConfigEpicgames,
    updateIapConfigEpicgame,
    updateIapConfigGoogleCert,
    deleteIapConfigPlaystation,
    getIapConfigPlaystation,
    updateIapConfigPlaystation,
    getIapAll_ByUserId,
    getIapConfigPlaystationValidate,
    updateIapConfigPlaystationValidate,
    updateIapMockReceipt_ByUserId,
    getIapConsumeHistory_ByUserId
  }
}
