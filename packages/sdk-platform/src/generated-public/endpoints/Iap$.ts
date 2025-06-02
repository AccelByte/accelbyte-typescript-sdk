/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AppleIapConfigVersionInfo } from '../../generated-definitions/AppleIapConfigVersionInfo.js'
import { AppleIapReceipt } from '../../generated-definitions/AppleIapReceipt.js'
import { AppleIapRequest } from '../../generated-definitions/AppleIapRequest.js'
import { EpicGamesReconcileRequest } from '../../generated-definitions/EpicGamesReconcileRequest.js'
import { EpicGamesReconcileResultArray } from '../../generated-definitions/EpicGamesReconcileResultArray.js'
import { GoogleIapReceipt } from '../../generated-definitions/GoogleIapReceipt.js'
import { GoogleReceiptResolveResult } from '../../generated-definitions/GoogleReceiptResolveResult.js'
import { IapItemMappingInfo } from '../../generated-definitions/IapItemMappingInfo.js'
import { IapOrderShortInfo } from '../../generated-definitions/IapOrderShortInfo.js'
import { OculusReconcileResultArray } from '../../generated-definitions/OculusReconcileResultArray.js'
import { PlayStationMultiServiceLabelsReconcileRequest } from '../../generated-definitions/PlayStationMultiServiceLabelsReconcileRequest.js'
import { PlayStationReconcileRequest } from '../../generated-definitions/PlayStationReconcileRequest.js'
import { PlayStationReconcileResultArray } from '../../generated-definitions/PlayStationReconcileResultArray.js'
import { SteamSyncByTransactionRequest } from '../../generated-definitions/SteamSyncByTransactionRequest.js'
import { SteamSyncRequest } from '../../generated-definitions/SteamSyncRequest.js'
import { TwitchSyncRequest } from '../../generated-definitions/TwitchSyncRequest.js'
import { TwitchSyncResultArray } from '../../generated-definitions/TwitchSyncResultArray.js'
import { XblReconcileRequest } from '../../generated-definitions/XblReconcileRequest.js'
import { XblReconcileResultArray } from '../../generated-definitions/XblReconcileResultArray.js'

export class Iap$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get iap item mapping.
   */
  getIapItemMapping(queryParams?: {
    platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
  }): Promise<Response<IapItemMappingInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/iap/item/mapping'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapItemMappingInfo, 'IapItemMappingInfo')
  }
  /**
   * Get apple config version.
   */
  getIapAppleConfigVersion(): Promise<Response<AppleIapConfigVersionInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/iap/apple/config/version'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AppleIapConfigVersionInfo,
      'AppleIapConfigVersionInfo'
    )
  }
  /**
   * Sync my game twitch drops entitlements.
   */
  updateUserMeIapTwitchSync(data: TwitchSyncRequest): Promise<Response<TwitchSyncResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/iap/twitch/sync'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TwitchSyncResultArray, 'TwitchSyncResultArray')
  }
  /**
   * Synchronize with entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapPsnSync_ByUserId(userId: string, data: PlayStationReconcileRequest): Promise<Response<PlayStationReconcileResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayStationReconcileResultArray,
      'PlayStationReconcileResultArray'
    )
  }
  /**
   * Sync Xbox inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapXblSync_ByUserId(userId: string, data: XblReconcileRequest): Promise<Response<XblReconcileResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/xbl/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XblReconcileResultArray,
      'XblReconcileResultArray'
    )
  }
  /**
   * Sync steam inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapSteamSync_ByUserId(userId: string, data: SteamSyncRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/steam/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync Oculus entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapOculuSync_ByUserId(userId: string): Promise<Response<OculusReconcileResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/oculus/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      OculusReconcileResultArray,
      'OculusReconcileResultArray'
    )
  }
  /**
   * Sync twitch drops entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapTwitchSync_ByUserId(userId: string, data: TwitchSyncRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/twitch/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Verify apple iap receipt and fulfill item. don&#39;t support subscriptionOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapAppleReceipt_ByUserId(userId: string, data: AppleIapReceipt): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/apple/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync epic games inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapEpicgameSync_ByUserId(userId: string, data: EpicGamesReconcileRequest): Promise<Response<EpicGamesReconcileResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/epicgames/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EpicGamesReconcileResultArray,
      'EpicGamesReconcileResultArray'
    )
  }
  /**
   * Verify google iap receipt and fulfill item.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapGoogleReceipt_ByUserId(userId: string, data: GoogleIapReceipt): Promise<Response<GoogleReceiptResolveResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/google/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GoogleReceiptResolveResult,
      'GoogleReceiptResolveResult'
    )
  }
  /**
   * Verify apple iap transaction and fulfill item, support subscriptionOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapAppleReceipt_ByUserId_v2(userId: string, data: AppleIapRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/v2/public/namespaces/{namespace}/users/{userId}/iap/apple/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync steam in app purchase by transaction.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapSteamSyncByTransaction_ByUserId(userId: string, data: SteamSyncByTransactionRequest): Promise<Response<IapOrderShortInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/steam/syncByTransaction'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapOrderShortInfo, 'IapOrderShortInfo')
  }
  /**
   * Synchronize with entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<Response<PlayStationReconcileResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayStationReconcileResultArray,
      'PlayStationReconcileResultArray'
    )
  }

  updateIapSteamSyncAbnormalTransaction_ByUserId(userId: string): Promise<Response<IapOrderShortInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/iap/steam/syncAbnormalTransaction'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapOrderShortInfo, 'IapOrderShortInfo')
  }
}
