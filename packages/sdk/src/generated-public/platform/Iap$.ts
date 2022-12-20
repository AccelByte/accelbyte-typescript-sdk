/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
import { StadiaSyncRequest } from './definitions/StadiaSyncRequest'
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
  putUsersByUseridIapSteamSync(userId: string, data: SteamSyncRequest): Promise<IResponse<unknown>> {
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
  putUsersByUseridIapAppleReceipt(userId: string, data: AppleIapReceipt): Promise<IResponse<unknown>> {
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
  putUsersByUseridIapPsnSyncMultiServiceLabels(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Synchronize with entitlements in PSN Store.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  putUsersByUseridIapPsnSync(userId: string, data: PlayStationReconcileRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Sync twitch drops entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putUsersByUseridIapTwitchSync(userId: string, data: TwitchSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/twitch/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Sync stadia entitlements.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putUsersByUseridIapStadiaSync(userId: string, data: StadiaSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/stadia/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Verify google iap receipt and fulfill item.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:IAP", action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putUsersByUseridIapGoogleReceipt<T = GoogleReceiptResolveResult>(userId: string, data: GoogleIapReceipt): Promise<IResponse<T>> {
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
  putUsersByUseridIapXblSync<T = XblReconcileResultArray>(userId: string, data: XblReconcileRequest): Promise<IResponse<T>> {
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
  putUsersByUseridIapEpicgamesSync<T = EpicGamesReconcileResultArray>(
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
