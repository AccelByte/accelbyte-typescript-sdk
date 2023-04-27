/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Dlc$ } from './endpoints/Dlc$.js'
import { EpicGamesDlcSyncRequest } from './definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from './definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from './definitions/PlayStationDlcSyncRequest.js'
import { SteamDlcSyncRequest } from './definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from './definitions/XblDlcSyncRequest.js'

export function DlcApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Synchronize with dlc entitlements in PSN Store.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  async function updateDlcPsnSync_ByUserId(userId: string, data: PlayStationDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDlcPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync Xbox inventory's dlc items.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateDlcXblSync_ByUserId(userId: string, data: XblDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDlcXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync steam dlc.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateDlcSteamSync_ByUserId(userId: string, data: SteamDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDlcSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync epic games dlc items.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateDlcEpicgameSync_ByUserId(userId: string, data: EpicGamesDlcSyncRequest): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDlcEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  async function updateDlcPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<unknown> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDlcPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateDlcPsnSync_ByUserId,
    updateDlcXblSync_ByUserId,
    updateDlcSteamSync_ByUserId,
    updateDlcEpicgameSync_ByUserId,
    updateDlcPsnSyncMultiServiceLabel_ByUserId
  }
}
