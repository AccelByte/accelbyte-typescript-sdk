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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AppleIapConfigVersionInfo } from '../generated-definitions/AppleIapConfigVersionInfo.js'
import { AppleIapReceipt } from '../generated-definitions/AppleIapReceipt.js'
import { AppleIapRequest } from '../generated-definitions/AppleIapRequest.js'
import { EpicGamesReconcileRequest } from '../generated-definitions/EpicGamesReconcileRequest.js'
import { EpicGamesReconcileResultArray } from '../generated-definitions/EpicGamesReconcileResultArray.js'
import { GoogleIapReceipt } from '../generated-definitions/GoogleIapReceipt.js'
import { GoogleReceiptResolveResult } from '../generated-definitions/GoogleReceiptResolveResult.js'
import { IapItemMappingInfo } from '../generated-definitions/IapItemMappingInfo.js'
import { OculusReconcileResultArray } from '../generated-definitions/OculusReconcileResultArray.js'
import { PlayStationMultiServiceLabelsReconcileRequest } from '../generated-definitions/PlayStationMultiServiceLabelsReconcileRequest.js'
import { PlayStationReconcileRequest } from '../generated-definitions/PlayStationReconcileRequest.js'
import { PlayStationReconcileResultArray } from '../generated-definitions/PlayStationReconcileResultArray.js'
import { SteamSyncRequest } from '../generated-definitions/SteamSyncRequest.js'
import { TwitchSyncRequest } from '../generated-definitions/TwitchSyncRequest.js'
import { TwitchSyncResultArray } from '../generated-definitions/TwitchSyncResultArray.js'
import { XblReconcileRequest } from '../generated-definitions/XblReconcileRequest.js'
import { XblReconcileResultArray } from '../generated-definitions/XblReconcileResultArray.js'
import { Iap$ } from './endpoints/Iap$.js'

export function IapApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getIapItemMapping(queryParams?: {
    platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
  }): Promise<AxiosResponse<IapItemMappingInfo>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapItemMapping(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapAppleConfigVersion(): Promise<AxiosResponse<AppleIapConfigVersionInfo>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapAppleConfigVersion()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMeIapTwitchSync(data: TwitchSyncRequest): Promise<AxiosResponse<TwitchSyncResultArray>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMeIapTwitchSync(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapPsnSync_ByUserId(
    userId: string,
    data: PlayStationReconcileRequest
  ): Promise<AxiosResponse<PlayStationReconcileResultArray>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapXblSync_ByUserId(userId: string, data: XblReconcileRequest): Promise<AxiosResponse<XblReconcileResultArray>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapSteamSync_ByUserId(userId: string, data: SteamSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapOculuSync_ByUserId(userId: string): Promise<AxiosResponse<OculusReconcileResultArray>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapOculuSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapTwitchSync_ByUserId(userId: string, data: TwitchSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapTwitchSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapAppleReceipt_ByUserId(userId: string, data: AppleIapReceipt): Promise<AxiosResponse<unknown>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapAppleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapEpicgameSync_ByUserId(
    userId: string,
    data: EpicGamesReconcileRequest
  ): Promise<AxiosResponse<EpicGamesReconcileResultArray>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapGoogleReceipt_ByUserId(
    userId: string,
    data: GoogleIapReceipt
  ): Promise<AxiosResponse<GoogleReceiptResolveResult>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapGoogleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapAppleReceipt_ByUserId_v2(userId: string, data: AppleIapRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapAppleReceipt_ByUserId_v2(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<AxiosResponse<PlayStationReconcileResultArray>> {
    const $ = new Iap$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get iap item mapping.
     */
    getIapItemMapping,
    /**
     * Get apple config version.
     */
    getIapAppleConfigVersion,
    /**
     * Sync my game twitch drops entitlements.
     */
    updateUserMeIapTwitchSync,
    /**
     * Synchronize with entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapPsnSync_ByUserId,
    /**
     * Sync Xbox inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapXblSync_ByUserId,
    /**
     * Sync steam inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapSteamSync_ByUserId,
    /**
     * Sync Oculus entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapOculuSync_ByUserId,
    /**
     * Sync twitch drops entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapTwitchSync_ByUserId,
    /**
     * Verify apple iap receipt and fulfill item. don&#39;t support subscriptionOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapAppleReceipt_ByUserId,
    /**
     * Sync epic games inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapEpicgameSync_ByUserId,
    /**
     * Verify google iap receipt and fulfill item.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapGoogleReceipt_ByUserId,
    /**
     * Verify apple iap transaction and fulfill item, support subscriptionOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapAppleReceipt_ByUserId_v2,
    /**
     * Synchronize with entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapPsnSyncMultiServiceLabel_ByUserId
  }
}
