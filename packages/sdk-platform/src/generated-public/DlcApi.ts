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
import { DlcConfigRewardShortInfo } from '../generated-definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../generated-definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../generated-definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../generated-definitions/PlayStationDlcSyncRequest.js'
import { SimpleUserDlcRewardContentsResponse } from '../generated-definitions/SimpleUserDlcRewardContentsResponse.js'
import { SteamDlcSyncRequest } from '../generated-definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../generated-definitions/XblDlcSyncRequest.js'
import { Dlc$ } from './endpoints/Dlc$.js'

export function DlcApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsersMeDlcContent(queryParams: {
    type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
    includeAllNamespaces?: boolean | null
  }): Promise<AxiosResponse<SimpleUserDlcRewardContentsResponse>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeDlcContent(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDlcRewardsDurableMap(queryParams: {
    dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
  }): Promise<AxiosResponse<DlcConfigRewardShortInfo>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcRewardsDurableMap(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcPsnSync_ByUserId(userId: string, data: PlayStationDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcXblSync_ByUserId(userId: string, data: XblDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcSteamSync_ByUserId(userId: string, data: SteamDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcOculuSync_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcOculuSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcEpicgameSync_ByUserId(userId: string, data: EpicGamesDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get user dlc reward contents. If includeAllNamespaces is false, will only return the dlc synced from the current namespace&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeDlcContent,
    /**
     * Get dlc reward simple map, only return the sku of durable item reward.
     */
    getDlcRewardsDurableMap,
    /**
     * Synchronize with dlc entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
     */
    updateDlcPsnSync_ByUserId,
    /**
     * Sync Xbox inventory&#39;s dlc items
     */
    updateDlcXblSync_ByUserId,
    /**
     * Sync steam dlc
     */
    updateDlcSteamSync_ByUserId,
    /**
     * Sync oculus dlc
     */
    updateDlcOculuSync_ByUserId,
    /**
     * Sync epic games dlc items
     */
    updateDlcEpicgameSync_ByUserId,
    /**
     * Synchronize with dlc entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
     */
    updateDlcPsnSyncMultiServiceLabel_ByUserId
  }
}
