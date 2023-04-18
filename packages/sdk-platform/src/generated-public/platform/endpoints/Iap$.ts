/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AppleIapReceipt } from '../definitions/AppleIapReceipt'
import { EpicGamesReconcileRequest } from '../definitions/EpicGamesReconcileRequest'
import { EpicGamesReconcileResultArray } from '../definitions/EpicGamesReconcileResultArray'
import { GoogleIapReceipt } from '../definitions/GoogleIapReceipt'
import { GoogleReceiptResolveResult } from '../definitions/GoogleReceiptResolveResult'
import { IapItemMappingInfo } from '../definitions/IapItemMappingInfo'
import { PlayStationMultiServiceLabelsReconcileRequest } from '../definitions/PlayStationMultiServiceLabelsReconcileRequest'
import { PlayStationReconcileRequest } from '../definitions/PlayStationReconcileRequest'
import { PlayStationReconcileResultArray } from '../definitions/PlayStationReconcileResultArray'
import { SteamSyncRequest } from '../definitions/SteamSyncRequest'
import { TwitchSyncRequest } from '../definitions/TwitchSyncRequest'
import { TwitchSyncResultArray } from '../definitions/TwitchSyncResultArray'
import { XblReconcileRequest } from '../definitions/XblReconcileRequest'
import { XblReconcileResultArray } from '../definitions/XblReconcileResultArray'

export class Iap$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get iap item mapping.<br>Other detail info: <ul></ul>
   */
  getIapItemMapping(queryParams?: {
    platform?: 'APPLE' | 'GOOGLE' | 'PLAYSTATION' | 'STEAM' | 'XBOX' | 'STADIA' | 'EPICGAMES' | 'TWITCH'
  }): Promise<IResponseWithSync<IapItemMappingInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/iap/item/mapping'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, IapItemMappingInfo, 'IapItemMappingInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Sync my game twitch drops entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:IAP, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateUserMeIapTwitchSync(data: TwitchSyncRequest): Promise<IResponse<TwitchSyncResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/iap/twitch/sync'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, TwitchSyncResultArray, 'TwitchSyncResultArray')
  }

  /**
   * Synchronize with entitlements in PSN Store.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  updateIapPsnSync_ByUserId(userId: string, data: PlayStationReconcileRequest): Promise<IResponse<PlayStationReconcileResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayStationReconcileResultArray, 'PlayStationReconcileResultArray')
  }

  /**
   * Sync Xbox inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateIapXblSync_ByUserId(userId: string, data: XblReconcileRequest): Promise<IResponse<XblReconcileResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/xbl/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, XblReconcileResultArray, 'XblReconcileResultArray')
  }

  /**
   * Sync steam inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateIapSteamSync_ByUserId(userId: string, data: SteamSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/steam/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sync twitch drops entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateIapTwitchSync_ByUserId(userId: string, data: TwitchSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/twitch/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Verify apple iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateIapAppleReceipt_ByUserId(userId: string, data: AppleIapReceipt): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/apple/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sync epic games inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateIapEpicgameSync_ByUserId(userId: string, data: EpicGamesReconcileRequest): Promise<IResponse<EpicGamesReconcileResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/epicgames/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, EpicGamesReconcileResultArray, 'EpicGamesReconcileResultArray')
  }

  /**
   * Verify google iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  updateIapGoogleReceipt_ByUserId(userId: string, data: GoogleIapReceipt): Promise<IResponse<GoogleReceiptResolveResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/google/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GoogleReceiptResolveResult, 'GoogleReceiptResolveResult')
  }

  /**
   * Synchronize with entitlements in PSN Store with multiple service labels.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  updateIapPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<IResponse<PlayStationReconcileResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayStationReconcileResultArray, 'PlayStationReconcileResultArray')
  }
}
