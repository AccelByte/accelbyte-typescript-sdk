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
import { DlcConfigRewardShortInfo } from '../generated-definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../generated-definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../generated-definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../generated-definitions/PlayStationDlcSyncRequest.js'
import { SimpleUserDlcRewardContentsResponse } from '../generated-definitions/SimpleUserDlcRewardContentsResponse.js'
import { SteamDlcSyncRequest } from '../generated-definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../generated-definitions/XblDlcSyncRequest.js'
import { Dlc$ } from './endpoints/Dlc$.js'

export function DlcApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get user dlc reward contents. If includeAllNamespaces is false, will only return the dlc synced from the current namespace&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeDlcContent(queryParams: {
    type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
    includeAllNamespaces?: boolean | null
  }): Promise<SimpleUserDlcRewardContentsResponse> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeDlcContent(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get dlc reward simple map, only return the sku of durable item reward.
   */
  async function getDlcRewardsDurableMap(queryParams: {
    dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
  }): Promise<DlcConfigRewardShortInfo> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlcRewardsDurableMap(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with dlc entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcPsnSync_ByUserId(userId: string, data: PlayStationDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync Xbox inventory&#39;s dlc items
   */
  async function updateDlcXblSync_ByUserId(userId: string, data: XblDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync steam dlc
   */
  async function updateDlcSteamSync_ByUserId(userId: string, data: SteamDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync oculus dlc
   */
  async function updateDlcOculuSync_ByUserId(userId: string): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcOculuSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync epic games dlc items
   */
  async function updateDlcEpicgameSync_ByUserId(userId: string, data: EpicGamesDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeDlcContent,
    getDlcRewardsDurableMap,
    updateDlcPsnSync_ByUserId,
    updateDlcXblSync_ByUserId,
    updateDlcSteamSync_ByUserId,
    updateDlcOculuSync_ByUserId,
    updateDlcEpicgameSync_ByUserId,
    updateDlcPsnSyncMultiServiceLabel_ByUserId
  }
}
