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
import { AppleIapReceipt } from './definitions/AppleIapReceipt'
import { EpicGamesReconcileRequest } from './definitions/EpicGamesReconcileRequest'
import { EpicGamesReconcileResultArray } from './definitions/EpicGamesReconcileResultArray'
import { GoogleIapReceipt } from './definitions/GoogleIapReceipt'
import { GoogleReceiptResolveResult } from './definitions/GoogleReceiptResolveResult'
import { Iap$ } from './endpoints/Iap$'
import { IapItemMappingInfo } from './definitions/IapItemMappingInfo'
import { PlayStationMultiServiceLabelsReconcileRequest } from './definitions/PlayStationMultiServiceLabelsReconcileRequest'
import { PlayStationReconcileRequest } from './definitions/PlayStationReconcileRequest'
import { PlayStationReconcileResultArray } from './definitions/PlayStationReconcileResultArray'
import { SteamSyncRequest } from './definitions/SteamSyncRequest'
import { TwitchSyncRequest } from './definitions/TwitchSyncRequest'
import { TwitchSyncResultArray } from './definitions/TwitchSyncResultArray'
import { XblReconcileRequest } from './definitions/XblReconcileRequest'
import { XblReconcileResultArray } from './definitions/XblReconcileResultArray'

export function IapApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getIapItemMapping(queryParams?: {
    platform?: 'APPLE' | 'GOOGLE' | 'PLAYSTATION' | 'STEAM' | 'XBOX' | 'STADIA' | 'EPICGAMES' | 'TWITCH'
  }): Promise<IapItemMappingInfo> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getIapItemMapping(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateUserMeIapTwitchSync(data: TwitchSyncRequest): Promise<TwitchSyncResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUserMeIapTwitchSync(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapPsnSync_ByUserId(userId: string, data: PlayStationReconcileRequest): Promise<PlayStationReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapXblSync_ByUserId(userId: string, data: XblReconcileRequest): Promise<XblReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapSteamSync_ByUserId(userId: string, data: SteamSyncRequest): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapTwitchSync_ByUserId(userId: string, data: TwitchSyncRequest): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapTwitchSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapAppleReceipt_ByUserId(userId: string, data: AppleIapReceipt): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapAppleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapEpicgameSync_ByUserId(userId: string, data: EpicGamesReconcileRequest): Promise<EpicGamesReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function updateIapGoogleReceipt_ByUserId(userId: string, data: GoogleIapReceipt): Promise<GoogleReceiptResolveResult> {
    const $ = new Iap$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateIapGoogleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
