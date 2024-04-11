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
import { Dlc$ } from './endpoints/Dlc$.js'
import { DlcConfigRewardShortInfo } from '../generated-definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../generated-definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../generated-definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../generated-definitions/PlayStationDlcSyncRequest.js'
import { SteamDlcSyncRequest } from '../generated-definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../generated-definitions/XblDlcSyncRequest.js'

export function DlcApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get dlc reward simple map, only return the sku of durable item reward&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: Authorized user&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDlcRewardsDurableMap(queryParams: {
    dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
  }): Promise<DlcConfigRewardShortInfo> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getDlcRewardsDurableMap(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with dlc entitlements in PSN Store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcPsnSync_ByUserId(userId: string, data: PlayStationDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDlcPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync Xbox inventory&#39;s dlc items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcXblSync_ByUserId(userId: string, data: XblDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDlcXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync steam dlc.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcSteamSync_ByUserId(userId: string, data: SteamDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDlcSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync oculus dlc.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcOculuSync_ByUserId(userId: string): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDlcOculuSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync epic games dlc items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcEpicgameSync_ByUserId(userId: string, data: EpicGamesDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDlcEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDlcPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDlcRewardsDurableMap,
    updateDlcPsnSync_ByUserId,
    updateDlcXblSync_ByUserId,
    updateDlcSteamSync_ByUserId,
    updateDlcOculuSync_ByUserId,
    updateDlcEpicgameSync_ByUserId,
    updateDlcPsnSyncMultiServiceLabel_ByUserId
  }
}
