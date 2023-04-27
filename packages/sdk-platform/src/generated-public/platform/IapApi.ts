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
import { AppleIapReceipt } from './definitions/AppleIapReceipt.js'
import { EpicGamesReconcileRequest } from './definitions/EpicGamesReconcileRequest.js'
import { EpicGamesReconcileResultArray } from './definitions/EpicGamesReconcileResultArray.js'
import { GoogleIapReceipt } from './definitions/GoogleIapReceipt.js'
import { GoogleReceiptResolveResult } from './definitions/GoogleReceiptResolveResult.js'
import { Iap$ } from './endpoints/Iap$.js'
import { IapItemMappingInfo } from './definitions/IapItemMappingInfo.js'
import { PlayStationMultiServiceLabelsReconcileRequest } from './definitions/PlayStationMultiServiceLabelsReconcileRequest.js'
import { PlayStationReconcileRequest } from './definitions/PlayStationReconcileRequest.js'
import { PlayStationReconcileResultArray } from './definitions/PlayStationReconcileResultArray.js'
import { SteamSyncRequest } from './definitions/SteamSyncRequest.js'
import { TwitchSyncRequest } from './definitions/TwitchSyncRequest.js'
import { TwitchSyncResultArray } from './definitions/TwitchSyncResultArray.js'
import { XblReconcileRequest } from './definitions/XblReconcileRequest.js'
import { XblReconcileResultArray } from './definitions/XblReconcileResultArray.js'

export function IapApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get iap item mapping.<br>Other detail info: <ul></ul>
   */
  async function getIapItemMapping(queryParams?: {
    platform?: 'APPLE' | 'GOOGLE' | 'PLAYSTATION' | 'STEAM' | 'XBOX' | 'STADIA' | 'EPICGAMES' | 'TWITCH'
  }): Promise<IapItemMappingInfo> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getIapItemMapping(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync my game twitch drops entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:IAP, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateUserMeIapTwitchSync(data: TwitchSyncRequest): Promise<TwitchSyncResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeIapTwitchSync(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with entitlements in PSN Store.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  async function updateIapPsnSync_ByUserId(userId: string, data: PlayStationReconcileRequest): Promise<PlayStationReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync Xbox inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateIapXblSync_ByUserId(userId: string, data: XblReconcileRequest): Promise<XblReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync steam inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateIapSteamSync_ByUserId(userId: string, data: SteamSyncRequest): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync twitch drops entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateIapTwitchSync_ByUserId(userId: string, data: TwitchSyncRequest): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapTwitchSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify apple iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateIapAppleReceipt_ByUserId(userId: string, data: AppleIapReceipt): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapAppleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync epic games inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateIapEpicgameSync_ByUserId(userId: string, data: EpicGamesReconcileRequest): Promise<EpicGamesReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify google iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  async function updateIapGoogleReceipt_ByUserId(userId: string, data: GoogleIapReceipt): Promise<GoogleReceiptResolveResult> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapGoogleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with entitlements in PSN Store with multiple service labels.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  async function updateIapPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<PlayStationReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getIapItemMapping,
    updateUserMeIapTwitchSync,
    updateIapPsnSync_ByUserId,
    updateIapXblSync_ByUserId,
    updateIapSteamSync_ByUserId,
    updateIapTwitchSync_ByUserId,
    updateIapAppleReceipt_ByUserId,
    updateIapEpicgameSync_ByUserId,
    updateIapGoogleReceipt_ByUserId,
    updateIapPsnSyncMultiServiceLabel_ByUserId
  }
}
