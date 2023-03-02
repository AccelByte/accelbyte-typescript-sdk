/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AppleIapReceipt } from './definitions/AppleIapReceipt'
import { EpicGamesReconcileRequest } from './definitions/EpicGamesReconcileRequest'
import { EpicGamesReconcileResultArray } from './definitions/EpicGamesReconcileResultArray'
import { GoogleIapReceipt } from './definitions/GoogleIapReceipt'
import { GoogleReceiptResolveResult } from './definitions/GoogleReceiptResolveResult'
import { PlayStationMultiServiceLabelsReconcileRequest } from './definitions/PlayStationMultiServiceLabelsReconcileRequest'
import { PlayStationReconcileRequest } from './definitions/PlayStationReconcileRequest'
import { PlayStationReconcileResultArray } from './definitions/PlayStationReconcileResultArray'
import { SteamSyncRequest } from './definitions/SteamSyncRequest'
import { TwitchSyncRequest } from './definitions/TwitchSyncRequest'
import { XblReconcileRequest } from './definitions/XblReconcileRequest'
import { XblReconcileResultArray } from './definitions/XblReconcileResultArray'

export class Iap$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Sync steam inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putNsUsersByUseridIapSteamSync(userId: string, data: SteamSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/steam/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Verify apple iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putNsUsersByUseridIapAppleReceipt(userId: string, data: AppleIapReceipt): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/apple/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Synchronize with entitlements in PSN Store with multiple service labels.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  putNsUsersByUseridIapPsnSyncMultiServiceLabels<T = PlayStationReconcileResultArray>(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayStationReconcileResultArray)
  }

  /**
   * Synchronize with entitlements in PSN Store.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  putNsUsersByUseridIapPsnSync<T = PlayStationReconcileResultArray>(
    userId: string,
    data: PlayStationReconcileRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayStationReconcileResultArray)
  }

  /**
   * Sync twitch drops entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putNsUsersByUseridIapTwitchSync(userId: string, data: TwitchSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/twitch/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Verify google iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putNsUsersByUseridIapGoogleReceipt<T = GoogleReceiptResolveResult>(userId: string, data: GoogleIapReceipt): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/google/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GoogleReceiptResolveResult)
  }

  /**
   * Sync Xbox inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putNsUsersByUseridIapXblSync<T = XblReconcileResultArray>(userId: string, data: XblReconcileRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/xbl/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, XblReconcileResultArray)
  }

  /**
   * Sync epic games inventory's items.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putNsUsersByUseridIapEpicgamesSync<T = EpicGamesReconcileResultArray>(
    userId: string,
    data: EpicGamesReconcileRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/epicgames/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, EpicGamesReconcileResultArray)
  }
}
